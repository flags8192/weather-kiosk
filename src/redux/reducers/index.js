import { combineReducers } from 'redux'

import errors from './errors'
import weather from './weather'

const rootReducer = combineReducers({
  errors,
  weather,
})

export default rootReducer
