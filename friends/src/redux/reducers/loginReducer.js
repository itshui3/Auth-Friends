import {
  LOGGING_IN,
  LOGGED_IN,
  ERROR_LOGGING_IN,
  LOG_OUT
} from '../actions'

const initialState = {
  isLogging: false,
  isError: false,
  isLogged: false
}

export const loginReducer = (state = initialState, { type, payload }) => {

  switch(type) {
    case LOGGING_IN:
      return {
        ...state,
        isLogging: true,
        isError: false
      }

    case LOG_OUT:
      return {
        ...state,
        isLogged: false
      }

    case LOGGED_IN:
      return {
        ...state,
        isLogging: false,
        isLogged: true,
        isError: false
      }
    
    case ERROR_LOGGING_IN:
      return {
        ...state,
        isLogging: false,
        isLogged: false,
        isError: payload
      }  

    default:
      return state
  }
}