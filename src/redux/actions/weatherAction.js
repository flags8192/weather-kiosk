/* -----------------    ACTION TYPES    ------------------ */
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_WEATHERDATA_SUCCESS = 'FETCH_WEATHERDATA_SUCCESS'
export const FETCH_OTHERDATA_SUCCESS = 'FETCH_OTHERDATA_SUCCESS'

/* ------------    ACTION CREATORS      ------------------ */
export const fetchData = () => ({ type: FETCH_DATA })
export const fetchWeatherDataSuccess = (weather) => ({
  type: FETCH_WEATHERDATA_SUCCESS,
  weather,
})
export const fetchOtherDataSuccess = (weather) => ({
  type: FETCH_OTHERDATA_SUCCESS,
  weather,
})

export const actions = {
  fetchData,
  fetchWeatherDataSuccess,
  fetchOtherDataSuccess,
}
