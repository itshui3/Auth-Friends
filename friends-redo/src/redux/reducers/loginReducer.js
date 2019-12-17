import {
  LOGGING_IN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../actions/'

const initialState = {
  loggedIn: false,
  isLoggingIn: false,
  loginError: null
}

export const loginReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: payload
      }
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginError: null,
        isLoggingIn: false,
        loggedIn: true
      }

    default:
      return state
  }
}