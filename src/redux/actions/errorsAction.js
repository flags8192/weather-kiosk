/* -----------------    ACTION TYPES    ------------------ */
export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

/* ------------    ACTION CREATORS      ------------------ */
export const errorHandler = (error) => ({
  type: SET_ERROR,
  error,
})
export const clearErrors = () => ({ type: CLEAR_ERROR })

export const actions = {
  errorHandler,
  clearErrors,
}
