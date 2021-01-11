/* ------------         REDUCER         ------------------ */
import {
  CLEAR_ERROR, SET_ERROR,
} from '../actions/errorsAction'

const error = (state = [], action) => {
  switch (action.type) {
    case SET_ERROR:
      return [...state, action.error]
    case CLEAR_ERROR:
      return []
    default:
      return state
  }
}

export default error
