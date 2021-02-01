import React, { useEffect, useState, } from 'react'

import s from './DateTime.module.css'

const DateTimeBlock = () => {
  const [date, setDate] = useState(new Date())
  const [day, setDay] = useState('')
  const [weekday, setWeekday] = useState('')

  const tick = () => {
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    setDate(new Date())
    setDay(`${new Date().getDate()} ${monthNames[new Date().getMonth()]}`)
    setWeekday(dayNames[new Date().getDay()])
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return () => {clearInterval(timerID)}
  }, [])

  return (
    <>
      <div className={s.date_time}>
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

// import React from 'react'
//
// import s from './DateTime.module.css'
//
// class DateTimeBlock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date(),
//       day: '',
//       weekday: '',
//     }
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000,
//     )
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//
//   tick() {
//     const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
//     const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
//     this.setState({
//       date: new Date(),
//       day: `${new Date().getDate()} ${monthNames[new Date().getMonth()]}`,
//       weekday: dayNames[new Date().getDay()],
//     })
//   }
//
//   render() {
//     const {
//       date,
//       day,
//       weekday,
//     } = this.state
//     return (
//       <>
//         <div className={s.date_time}>
//           <div className={s.date_time__time}>
//             {date.toLocaleTimeString()}
//           </div>
//           <div className={s.date_time__date}>
//             {day}
//           </div>
//           <div className={s.date_time__weekday}>
//             {weekday}
//           </div>
//         </div>
//       </>
//     )
//   }
// }
//
// export default DateTimeBlock
