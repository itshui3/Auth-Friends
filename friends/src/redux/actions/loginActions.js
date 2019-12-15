import Axios from 'axios'

export const LOGGING_IN = 'LOGGING_IN'
export const LOGGED_IN = 'LOGGED_IN'
export const ERROR_LOGGING_IN = 'ERROR_LOGGING_IN'

export const setLogging = () => {
  return {
    type: LOGGING_IN
  }
}

export const login = (credentials) => dispatch => {
  dispatch({ type: LOGGING_IN })
  Axios.post('http://localhost:5000/api/login', credentials)
    .then( res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGGED_IN })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: ERROR_LOGGING_IN, payload: err })
    })
}

export const setLogged = () => {
  return {
    type: LOGGED_IN
  }
}

export const sendError = (errMessage) => {
  return {
    type: ERROR_LOGGING_IN,
    payload: errMessage
  }
}