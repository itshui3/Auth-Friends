

export const LOGGING_IN = 'LOGGING_IN'
export const LOGGED_IN = 'LOGGED_IN'
export const ERROR_LOGGING_IN = 'ERROR_LOGGING_IN'

export const setLogging = () => {
  return {
    type: LOGGING_IN
  }
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