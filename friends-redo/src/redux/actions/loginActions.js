import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = (credentials) => dispatch => {
  dispatch({ type: LOGGING_IN })
  axiosWithAuth().post('/login', credentials)
    .then( res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}