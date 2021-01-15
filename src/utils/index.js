import directionDown from '@iconify/icons-wi/direction-down'
import directionDownLeft from '@iconify/icons-wi/direction-down-left'
import directionDownRight from '@iconify/icons-wi/direction-down-right'
import directionLeft from '@iconify/icons-wi/direction-left'
import directionRight from '@iconify/icons-wi/direction-right'
import directionUp from '@iconify/icons-wi/direction-up'
import directionUpLeft from '@iconify/icons-wi/direction-up-left'
import directionUpRight from '@iconify/icons-wi/direction-up-right'

export const tempFormat = (temp) => {
  if (temp > 0) {
    return `+${temp}${'°'.replace(/[\n\r]+/g, '')}`
  }
  if (temp <= 0) {
    return `${temp}°`
  }
}

export const formatPressure = (str, outtype) => {
  const PressureDescriptions = ['повышенное', 'нормальное', 'пониженное']
  const currentPressure = (parseFloat(str) / 1.333).toFixed(0)

  if (outtype === 'full') {
    if (+currentPressure > 760) return `${currentPressure} мм рт. ст. ${PressureDescriptions[0]}`
    if (+currentPressure === 760) return `${currentPressure} мм рт. ст. ${PressureDescriptions[1]}`
    if (+currentPressure < 760) return `${currentPressure} мм рт. ст. ${PressureDescriptions[2]}`
  }
  if (outtype === 'desc') {
    if (+currentPressure > 760) return PressureDescriptions[0]
    if (+currentPressure === 760) return PressureDescriptions[1]
    if (+currentPressure < 760) return PressureDescriptions[2]
  }
  if (outtype === 'brief') {
    return `${currentPressure} мм рт. ст. `
  }
  if (outtype === 'short') {
    return currentPressure
  }
}

export const formatVisibility = (val) => {
  const VisibilityDescriptions = ['очень плохая', 'плохая', 'средняя', 'хорошая', 'очень хорошая', 'исключительная']
  if (val >= 0 && val <= 500) return VisibilityDescriptions[0]
  if (val >= 501 && val <= 2000) return VisibilityDescriptions[1]
  if (val >= 2001 && val <= 10000) return VisibilityDescriptions[2]
  if (val >= 10001 && val <= 20000) return VisibilityDescriptions[3]
  if (val >= 20001 && val <= 50000) return VisibilityDescriptions[4]
  if (val > 50001) return VisibilityDescriptions[5]
}

export const formatHumidity = (str) => {
  const HumidityDescriptions = ['повышенная', 'нормальная', 'пониженная']
  if (str > 65) return HumidityDescriptions[0]
  if (str >= 35 && str <= 65) return HumidityDescriptions[1]
  if (str < 35) return HumidityDescriptions[2]
}

export const formatClouds = (percent) => {
  const CloudsDescriptions = ['малооблачно', 'рассеянные облака', 'разбитые облака', 'пасмурные облака']
  if (percent <= 24) return CloudsDescriptions[0]
  if (percent >= 25 && percent <= 50) return CloudsDescriptions[1]
  if (percent >= 51 && percent <= 84) return CloudsDescriptions[2]
  if (percent >= 85) return CloudsDescriptions[3]
}

export const formatUvi = (index) => {
  const UviDescriptions = ['низкий', 'средний', 'высокий', 'очень высокий', 'экстремальный']
  if (index <= 2) return UviDescriptions[0]
  if (index >= 3 && index <= 5) return UviDescriptions[1]
  if (index >= 6 && index <= 7) return UviDescriptions[2]
  if (index >= 8 && index <= 10) return UviDescriptions[3]
  if (index >= 11) return UviDescriptions[4]
}

export const calcWindDir = (deg) => {
  const directions = [
    directionUp,
    directionUpRight,
    directionRight,
    directionDownRight,
    directionDown,
    directionDownLeft,
    directionLeft,
    directionUpLeft,
    directionUp,
  ]
  return directions[Math.round((deg % 360) / 45)]
}

export const formatWindSpeedDescription = (speed) => {
  let descriptions
  if (speed === 0 && speed <= 0.2) descriptions = ' штиль'
  if (speed >= 0.3 && speed <= 1.5) descriptions = ' тихий ветер'
  if (speed >= 1.6 && speed <= 3.3) descriptions = ' лёгкий бриз'
  if (speed >= 3.4 && speed <= 5.4) descriptions = ' слабый бриз'
  if (speed >= 5.5 && speed <= 7.9) descriptions = ' умеренный бриз'
  if (speed >= 8 && speed <= 10.7) descriptions = ' свежий бриз'
  if (speed >= 10.8 && speed <= 13.8) descriptions = ' сильный бриз'
  if (speed >= 13.9 && speed <= 17.1) descriptions = ' крепкий ветер'
  if (speed >= 17.2 && speed <= 20.7) descriptions = ' буря'
  if (speed >= 20.8 && speed <= 24.4) descriptions = ' шторм'
  if (speed >= 24.5 && speed <= 28.4) descriptions = ' сильный шторм'
  if (speed >= 28.5 && speed <= 32.6) descriptions = ' жестокий шторм'
  if (speed >= 32.7) descriptions = ' ураган'

  return descriptions
}

// timestamp to Пн, 31/12
export const timestampToDate = (ts, checkHollyday: boolean) => {
  const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const date = new Date(ts * 1000)
  const day = (`0${date.getDate()}`).slice(-2)
  const month = (`0${date.getMonth() + 1}`).slice(-2)
  if (checkHollyday) {
    return date.getDay() === 0 || date.getDay() === 6
  } else {
    return `${dayNames[date.getDay()]}, ${day}/${month}`
  }
}

// timestamp to 09:43
export const timestampToTime = (ts) => {
  const date = new Date(ts * 1000)
  return `${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`
}

// date to 31/12/20 15:56
export const dateForCopyrights = (props) => {
  const date = new Date(props)
  const day = (`0${date.getDate()}`).slice(-2)
  const month = (`0${date.getMonth() + 1}`).slice(-2)
  const year = date.getFullYear()
  const time = `${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`
  return `${day}/${month}/${year} ${time}`
}

export const linearScale = (domain, range) => {
  const d0 = domain[0]
  const r0 = range[0]
  const m = (range[1] - r0) / (domain[1] - d0)

  return Object.assign(
    (num) => r0 + (num - d0) * m,
    {
      inverse: () => linearScale(range, domain),
    },
  )
}
