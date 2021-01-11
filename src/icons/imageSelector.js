import wi01dClearSky from './iconset/fill/openweathermap/01d.svg'
import wi01nClearSky from './iconset/fill/openweathermap/01n.svg'
import wi02dFewClouds from './iconset/fill/openweathermap/02d.svg'
import wi02nFewClouds from './iconset/fill/openweathermap/02n.svg'
import wi03dScatteredClouds from './iconset/fill/openweathermap/03d.svg'
import wi03nScatteredClouds from './iconset/fill/openweathermap/03n.svg'
import wi04dBrokenClouds from './iconset/fill/openweathermap/04d.svg'
import wi04nBrokenClouds from './iconset/fill/openweathermap/04n.svg'
import wi09dShowerRain from './iconset/fill/openweathermap/09d.svg'
import wi09nShowerRain from './iconset/fill/openweathermap/09n.svg'
import wi10dRain from './iconset/fill/openweathermap/10d.svg'
import wi10nRain from './iconset/fill/openweathermap/10n.svg'
import wi11dThunder from './iconset/fill/openweathermap/11d.svg'
import wi11nThunder from './iconset/fill/openweathermap/11n.svg'
import wi13dSnow from './iconset/fill/openweathermap/13d.svg'
import wi13nSnow from './iconset/fill/openweathermap/13n.svg'
import wi50dMist from './iconset/fill/openweathermap/50d.svg'
import wi50nMist from './iconset/fill/openweathermap/50n.svg'

const imageSelector = (name) => {
  switch (name) {
    case '01d':
      return wi01dClearSky
    case '01n':
      return wi01nClearSky
    case '02d':
      return wi02dFewClouds
    case '02n':
      return wi02nFewClouds
    case '03d':
      return wi03dScatteredClouds
    case '03n':
      return wi03nScatteredClouds
    case '04d':
      return wi04dBrokenClouds
    case '04n':
      return wi04nBrokenClouds
    case '09d':
      return wi09dShowerRain
    case '09n':
      return wi09nShowerRain
    case '10d':
      return wi10dRain
    case '10n':
      return wi10nRain
    case '11d':
      return wi11dThunder
    case '11n':
      return wi11nThunder
    case '13d':
      return wi13dSnow
    case '13n':
      return wi13nSnow
    case '50d':
      return wi50dMist
    case '50n':
      return wi50nMist
    default:
      break
  }
}

export default imageSelector
