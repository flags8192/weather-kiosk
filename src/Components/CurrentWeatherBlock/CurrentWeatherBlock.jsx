import PropTypes from 'prop-types'
import * as React from 'react'
import Icon from '../../icons'
import { tempFormat } from '../../utils/index'
import s from './CurrentWeatherBlock.module.css'

const CurrentWeatherBlock = (props) => {
  const currentHour = new Date().getHours()
  let times1OfDay = ''
  let times2OfDay = ''
  const { data } = props

  const temp1ofDay = Math.round(data.hourly[9].temp)
  const temp2ofDay = Math.round(data.hourly[15].temp)

  if (currentHour >= 5 && currentHour <= 12) {
    times1OfDay = 'днём'
    times2OfDay = 'вечером'
  }
  if (currentHour > 12 && currentHour <= 16) {
    times1OfDay = 'вечером'
    times2OfDay = 'ночью'
  }
  if (currentHour > 16 && currentHour <= 23) {
    times1OfDay = 'ночью'
    times2OfDay = 'утром'
  }
  if (currentHour > 23 && currentHour < 5) {
    times1OfDay = 'утром'
    times2OfDay = 'днём'
  }

  return (
    <>
      <div className={s.current_weather}>
        <div className={s.current_weather__icon}>
          <Icon name={data.current.weather[0].icon} />
        </div>
        <div
          className={data.otherTemp.outdoor <= 0 ? `${s.current_weather__temperature} blue` : `${s.current_weather__temperature} red`}
        >
          {`${data.otherTemp.outdoor}°`}
        </div>
        <div className={s.current_weather__description}>
          {data.current.weather[0].description}
        </div>
        <div className={s.current_weather_feels_like__temperature}>
          <div>
            Ощущается как:
            {` ${data.current.feels_like.toFixed(1)}°`}
          </div>
        </div>
        <div className={s.weather_of_the_day}>
          <div className={s.first_half_of_the_day}>
            <div className={s.first_half_of_the_day__name}>
              {times1OfDay}
            </div>
            <div className={s.first_half_of_the_day__icon}>
              <Icon name={data.hourly[9].weather[0].icon} />
            </div>
            <div
              className={temp1ofDay <= 0 ? `${s.first_half_of_the_day__temperature} blue` : `${s.first_half_of_the_day__temperature} red`}
            >
              {tempFormat(temp1ofDay)}
            </div>
            <div className={s.first_half_of_the_day__description}>
              {data.hourly[9].weather[0].description}
            </div>
          </div>
          <div className={s.second_half_of_the_day}>
            <div className={s.second_half_of_the_day__name}>
              {times2OfDay}
            </div>
            <div className={s.second_half_of_the_day__icon}>
              <Icon name={data.hourly[15].weather[0].icon} />
            </div>
            <div
              className={temp2ofDay <= 0 ? `${s.second_half_of_the_day__temperature} blue` : `${s.second_half_of_the_day__temperature} red`}
            >
              {tempFormat(temp2ofDay)}
            </div>
            <div className={s.second_half_of_the_day__description}>
              {data.hourly[15].weather[0].description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const descriptioniconidmainShape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  main: PropTypes.string.isRequired,
})

CurrentWeatherBlock.propTypes = PropTypes.shape({
  weather: PropTypes.shape({
    current: PropTypes.shape({
      clouds: PropTypes.number.isRequired,
      dew_point: PropTypes.number.isRequired,
      dt: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      sunrise: PropTypes.number.isRequired,
      sunset: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      uvi: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      weather: PropTypes.arrayOf(descriptioniconidmainShape.isRequired).isRequired,
      wind_deg: PropTypes.number.isRequired,
      wind_speed: PropTypes.number.isRequired,
    }).isRequired,
    daily: PropTypes.arrayOf(PropTypes.shape({
      clouds: PropTypes.number.isRequired,
      dew_point: PropTypes.number.isRequired,
      dt: PropTypes.number.isRequired,
      feels_like: PropTypes.shape({
        day: PropTypes.number.isRequired,
        eve: PropTypes.number.isRequired,
        morn: PropTypes.number.isRequired,
        night: PropTypes.number.isRequired,
      }).isRequired,
      humidity: PropTypes.number.isRequired,
      pop: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      rain: PropTypes.number.isRequired,
      sunrise: PropTypes.number.isRequired,
      sunset: PropTypes.number.isRequired,
      temp: PropTypes.shape({
        day: PropTypes.number.isRequired,
        eve: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        morn: PropTypes.number.isRequired,
        night: PropTypes.number.isRequired,
      }).isRequired,
      uvi: PropTypes.number.isRequired,
      weather: PropTypes.arrayOf(descriptioniconidmainShape.isRequired).isRequired,
      wind_deg: PropTypes.number.isRequired,
      wind_speed: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    fetchDataTime: PropTypes.number.isRequired,
    hourly: PropTypes.arrayOf(PropTypes.shape({
      clouds: PropTypes.number.isRequired,
      dew_point: PropTypes.number.isRequired,
      dt: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pop: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      weather: PropTypes.arrayOf(descriptioniconidmainShape.isRequired).isRequired,
      wind_deg: PropTypes.number.isRequired,
      wind_speed: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    isLoading: PropTypes.bool.isRequired,
    isOtherLoaded: PropTypes.bool.isRequired,
    isWeatherLoaded: PropTypes.bool.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    minutely: PropTypes.arrayOf(PropTypes.shape({
      dt: PropTypes.number.isRequired,
      precipitation: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    otherTemp: PropTypes.shape({
      basement: PropTypes.number.isRequired,
      heating: PropTypes.number.isRequired,
      home: PropTypes.number.isRequired,
      outdoor: PropTypes.number.isRequired,
    }).isRequired,
    timezone: PropTypes.string.isRequired,
    timezone_offset: PropTypes.number.isRequired,
  }).isRequired,
}).isRequired

export default CurrentWeatherBlock
