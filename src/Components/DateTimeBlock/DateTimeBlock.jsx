import React from 'react'

import s from './DateTime.module.css'

class DateTimeBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      day: '',
      weekday: '',
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    this.setState({
      date: new Date(),
      day: `${new Date().getDate()} ${monthNames[new Date().getMonth()]}`,
      weekday: dayNames[new Date().getDay()],
    })
  }

  render() {
    const {
      date,
      day,
      weekday,
    } = this.state
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
}

export default DateTimeBlock
