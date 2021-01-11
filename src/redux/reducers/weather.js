/* ------------         REDUCER         ------------------ */
import axios from 'axios'
import now from 'moment'
import { errorHandler } from '../actions/errorsAction'
import {
  FETCH_DATA,
  FETCH_OTHERDATA_SUCCESS,
  FETCH_WEATHERDATA_SUCCESS,
  fetchData,
  fetchOtherDataSuccess,
  fetchWeatherDataSuccess,
} from '../actions/weatherAction'
import {
  LANG, OPENWEATHERMAP_API_KEY, OPENWEATHERMAP_API_URL, UNITS,
} from '../constants/weather'

const weather = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        isOtherLoaded: false,
        isWeatherLoaded: false,
      }
    case FETCH_WEATHERDATA_SUCCESS:
      return {
        ...state,
        ...action.weather,
        isLoading: false,
        isWeatherLoaded: true,
        fetchDataTime: now(),
      }
    case FETCH_OTHERDATA_SUCCESS:
      return {
        ...state,
        ...action.weather,
        isLoading: false,
        isOtherLoaded: true,
        fetchDataTime: now(),
      }
    default:
      return state
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const fetchWeather = (coords) => async (dispatch) => {
  const {
    lat,
    lng,
  } = coords
  dispatch(fetchData())
  await axios
    .get(`${OPENWEATHERMAP_API_URL}lat=${lat}&lon=${lng}&appid=${OPENWEATHERMAP_API_KEY}&units=${UNITS}&lang=${LANG}`)
    .then((res) => dispatch(fetchWeatherDataSuccess(res.data)))
    .catch((err) => dispatch(errorHandler(`fetchWeather: ${err.message}`)))
}

export const fetchOtherTemp = () => async (dispatch) => {
  const home = '/data/temp1'
  const outdoor = '/data/temp2'
  const heating = '/data/temp3'
  const basement = '/data/temp4'

  const requestHomeTemp = axios.get(home)
  const requestOutdoorTemp = axios.get(outdoor)
  const requestHeatingTemp = axios.get(heating)
  const requestBasementTemp = axios.get(basement)
  await axios
    .all([requestHomeTemp, requestOutdoorTemp, requestHeatingTemp, requestBasementTemp])
    .then(axios.spread((...responses) => {
      const otherTemp = {
        home: responses[0].data,
        outdoor: responses[1].data,
        heating: responses[2].data,
        basement: responses[3].data,
      }
      dispatch(fetchOtherDataSuccess({ otherTemp }))
    }))
    .catch((err) => dispatch(errorHandler(`fetchOtherTemp: ${err.message}`)))
}

export default weather
