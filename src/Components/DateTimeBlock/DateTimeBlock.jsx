import clsx from "clsx";
import React, { useEffect, useState, } from 'react'
import { capitalizeFirstLetter } from "../../utils";

import s from './DateTime.module.css'

const DateTimeBlock = () => {
  const [date, setDate] = useState(new Date())
  const [day, setDay] = useState('')
  const [weekday, setWeekday] = useState('')

  const tick = () => {
    setDate(new Date())
    setDay(date.toLocaleString('ru', {day: '2-digit', month: 'long'}))
    setWeekday(capitalizeFirstLetter(date.toLocaleString('ru', {weekday: 'long'})))
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return () => {clearInterval(timerID)}
  }, [])

  return (
    <>
      {/*<div className={s.date_time}>*/}
      <div className={clsx(s.date_time, "card")}>
        <div className={s.date_time__time}>
          {date.toLocaleTimeString()}
        </div>
        <div className={s.date_time__date}>
          {day}
        </div>
        <div className={s.date_time__weekday}>
          {weekday}
        </div>
      </div>
    </>
  )
}

export default DateTimeBlock
