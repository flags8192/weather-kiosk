import React from 'react'
import { useSelector } from 'react-redux'
import {
  formatClouds,
  formatHumidity,
  formatPressure,
  formatUvi,
  formatVisibility,
  formatWindSpeedDescription,
  timestampToTime,
} from '../../utils'
import s from './CurrentDescriptionBlock.module.css'
import { Gauge } from './Gauge'

const CurrentDescriptionBlock = () => {
  const { current } = useSelector((state) => state.weather)

  // Calc longitude of the day
  const dtc = current.sunset
  const dtmb = current.sunrise
  let qminutes = Math.floor((dtc - dtmb) / 60)
  const qhours = Math.floor(qminutes / 60)
  qminutes -= qhours * 60

  return (
    <>
      <div className={s.current_description}>
        <div className={s.circles}>
          <div className={s.circles_wrapper}>
            <Gauge
              value={+current.humidity} min="0" max="100" label="Влажность" desc={formatHumidity(current.humidity)}
              units="%"
            />
            <Gauge
              value={+current.clouds} min="0" max="100" label="Облачность" desc={formatClouds(current.clouds)}
              units="%"
            />
            <Gauge value={+current.uvi} min="0" max="11" label="УФ-индекс" desc={formatUvi(current.uvi)} units="" />
            <Gauge
              value={+formatPressure(current.pressure, 'short')} min="720" max="800" label="Давление"
              desc={formatPressure(current.pressure, 'desc')} units="мм рт.ст."
            />
          </div>
        </div>
        <div className={s.circles}>
          <div className={s.circles_wrapper}>
            <Gauge
              value={+current.wind_speed.toFixed(1)} min="0" max="32.7" label="Ветер"
              desc={formatWindSpeedDescription(current.wind_speed.toFixed(1))} units="м/с"
            />

            <div className={s.sunchart_wrapper}>
              <svg viewBox="0 0 200 80">
                <polyline points="10,60 190,60" className={s.chart_sun_baseline} />
                <polyline points="80,55 75,60 80,65" className={s.chart_sun_baseline} />
                <polyline points="128,55 133,60 128,65" className={s.chart_sun_baseline} />
                <path d="M20,59 C 20,31 60,31 60,59" strokeWidth="10" className={s.chart_sun_circle} />
                <path d="M148,59 C 153,43 175,43 180,59" strokeWidth="10" className={s.chart_sun_circle} />
                <path d="M60,30 C 80,0 128,0 148,30" className={s.chart_sun_path} />
                <path d="M60,30 C 80,0 128,0 148,30" className={s.chart_sun_path2} />
                <polyline points="100,2.5 105,7.5 100,12.5" className={s.chart_sun_baseline} />
                <text x="40" y="75" className={s.sunchart_text}>Восход</text>
                <text x="164" y="75" className={s.sunchart_text}>Закат</text>
                <text x="40" y="25" className={s.sunchart_text}>{timestampToTime(current.sunrise)}</text>
                <text x="164" y="25" className={s.sunchart_text}>{timestampToTime(current.sunset)}</text>
                <text x="104" y="55" className={s.sunchart_text}>
                  {qhours}
                  :
                  {qminutes}
                </text>
              </svg>
            </div>

            <Gauge
              value={+(current.visibility / 1000).toFixed(1)} min="0" max="50" label="Видимость"
              desc={formatVisibility(current.visibility)} units="км"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default CurrentDescriptionBlock
