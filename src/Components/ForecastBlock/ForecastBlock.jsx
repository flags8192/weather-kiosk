import dewpointIcon from '@iconify-icons/carbon/dew-point'
import dayIcon from '@iconify-icons/whh/day'
import nightIcon from '@iconify-icons/wi/night-clear'
import barometerIcon from '@iconify/icons-wi/barometer'
import humidityIcon from '@iconify/icons-wi/humidity'
import snowIcon from '@iconify/icons-wi/snow'
import umbrellaIcon from '@iconify/icons-wi/umbrella'
import { Icon } from '@iconify/react'
import React from 'react'
import { useSelector } from 'react-redux'

import Icons from '../../icons'
import {
  calcWindDir, formatPressure, tempFormat, timestampToDate,
} from '../../utils/index'
import Tooltip from '../Tooltip/Tooltip'

const ForecastBlock = () => {
  const { daily } = useSelector((state) => state.weather)

  return (
    <>
      <div className="forecast">
        {daily.slice(0, 1)
          .map(({
            dt,
            weather,
            temp,
            dew_point,
            pressure,
            humidity,
            wind_speed,
            wind_deg,
            rain,
            snow,
          }, index) => (
            <div key={dt} className={`forecast__day forecast__day${index + 1}`}>
              <div
                className={timestampToDate(dt, true) ? `forecast__day${index + 1}__date red` : `forecast__day${index + 1}__date white`}
              >
                Завтра
              </div>
              <div className={`forecast__day${index + 1}__icon`}><Icons name={weather[0].icon} /></div>
              <div className={`forecast__day${index + 1}__temperature`}>
                <div
                  className={temp.day.toFixed(0) <= 0 ? `forecast__day${index + 1}__temperature-day blue` : `forecast__day${index + 1}__temperature-day red`}
                >
                  <Tooltip content="Днём" direction="top">
                    <Icon icon={dayIcon} />
                  </Tooltip>
                  {tempFormat(temp.day.toFixed(0))}
                </div>
                <div
                  className={temp.night.toFixed(0) <= 0 ? `forecast__day${index + 1}__temperature-night blue` : `forecast__day${index + 1}__temperature-night red`}
                >
                  <Tooltip content="Ночью" direction="top">
                    <Icon icon={nightIcon} />
                  </Tooltip>
                  {tempFormat(temp.night.toFixed(0))}
                </div>
              </div>
              <div className={`forecast__day${index + 1}__description`}>{weather[0].description}</div>
              <div className={`forecast__day${index + 1}__dewpoint`}>
                <Tooltip content="Точка росы" direction="top">
                  <Icon icon={dewpointIcon} />
                </Tooltip>
                {' '}
                {/* eslint-disable-next-line camelcase */}
                {dew_point}
              </div>
              <div className={`forecast__day${index + 1}__pressure`}>
                <Tooltip content="Атмосферное давление" direction="top">
                  <Icon icon={barometerIcon} />
                </Tooltip>
                {' '}
                {`${formatPressure(pressure, 'brief')}`}
              </div>
              <div className={`forecast__day${index + 1}__humidity`}>
                <Tooltip content="Относительная влажность" direction="top">
                  <Icon icon={humidityIcon} />
                </Tooltip>
                {`${humidity}%`}
              </div>
              <div className={`forecast__day${index + 1}__wind`}>
                <Tooltip content="Направление и скорость ветра" direction="top">
                  <Icon icon={calcWindDir(wind_deg)} />
                </Tooltip>
                {/* eslint-disable-next-line camelcase */}
                {` ${wind_speed.toFixed(1)} м/с`}
              </div>
              <div className={`forecast__day${index + 1}__rain`}>
                {rain ? <Tooltip content="Дождь" direction="top"><Icon icon={umbrellaIcon} /></Tooltip> : ''}
                {rain ? `${rain.toFixed(1)} мм` : ''}
                {snow ? <Tooltip content="Снег" direction="top"><Icon icon={snowIcon} /></Tooltip> : ''}
                {snow ? `${snow.toFixed(1)} мм` : ''}
              </div>
            </div>
          ))}
        {daily.slice(2, daily.length)
          .map(({
            dt,
            weather,
            temp,
            dew_point,
            pressure,
            humidity,
            wind_speed,
            wind_deg,
            rain,
            snow,
          }, index) => (
            <div key={dt} className={`forecast__day forecast__day${index + 2}`}>
              <div
                className={timestampToDate(dt, true) ? `forecast__day${index + 2}__date red` : `forecast__day${index + 2}__date white`}
              >
                {timestampToDate(dt, false)}
              </div>
              <div className={`forecast__day${index + 2}__icon`}><Icons name={weather[0].icon} /></div>
              <div className={`forecast__day${index + 2}__temperature`}>
                <div
                  className={temp.day.toFixed(0) <= 0 ? `forecast__day${index + 2}__temperature-day blue` : `forecast__day${index + 1}__temperature-day red`}
                >
                  <Tooltip content="Днём" direction="top">
                    <Icon icon={dayIcon} />
                  </Tooltip>
                  {tempFormat(temp.day.toFixed(0))}
                </div>
                <div
                  className={temp.night.toFixed(0) <= 0 ? `forecast__day${index + 2}__temperature-night blue` : `forecast__day${index + 1}__temperature-night red`}
                >
                  <Tooltip content="Ночью" direction="top">
                    <Icon icon={nightIcon} />
                  </Tooltip>
                  {tempFormat(temp.night.toFixed(0))}
                </div>
              </div>
              <div className={`forecast__day${index + 2}__description`}>{weather[0].description}</div>
              <div className={`forecast__day${index + 2}__dewpoint`}>
                <Tooltip content="Точка росы" direction="top">
                  <Icon icon={dewpointIcon} />
                </Tooltip>
                {' '}
                {/* eslint-disable-next-line camelcase */}
                {dew_point}
              </div>
              <div className={`forecast__day${index + 2}__pressure`}>
                <Tooltip content="Атмосферное давление" direction="top">
                  <Icon icon={barometerIcon} />
                </Tooltip>
                {' '}
                {`${formatPressure(pressure, 'brief')}`}
              </div>
              <div className={`forecast__day${index + 2}__humidity`}>
                <Tooltip content="Относительная влажность" direction="top">
                  <Icon icon={humidityIcon} />
                </Tooltip>
                {`${humidity}%`}
              </div>
              <div className={`forecast__day${index + 2}__wind`}>
                <Tooltip content="Направление и скорость ветра" direction="top">
                  <Icon icon={calcWindDir(wind_deg)} />
                </Tooltip>
                {/* eslint-disable-next-line camelcase */}
                {` ${wind_speed.toFixed(1)} м/с`}
              </div>
              <div className={`forecast__day${index + 2}__rain`}>
                {rain ? <Tooltip content="Дождь" direction="top"><Icon icon={umbrellaIcon} /></Tooltip> : ''}
                {rain ? `${rain.toFixed(1)} мм` : ''}
                {snow ? <Tooltip content="Снег" direction="top"><Icon icon={snowIcon} /></Tooltip> : ''}
                {snow ? `${snow.toFixed(1)} мм` : ''}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default ForecastBlock
