import { 
  // constants
  LOGGING_IN,
  LOGGED_IN,
  ERROR_LOGGING_IN,
  // actions
  sendError,
  setLogged,
  setLogging,
  login
} from './loginActions'

import {
  // constants
  MAKE_FRENS,
  MAKING_FRENS,
  THEY_HATE_ME,
  MADE_FRENS,
  // actions
  makeFrens
} from './friendsActions'

export {
  // login
    // constants
    LOGGING_IN,
    LOGGED_IN,
    ERROR_LOGGING_IN,
    // actions
    setLogged,
    sendError,
    setLogging,
    login,
  // friends
    // constants
    MAKE_FRENS,
    MAKING_FRENS,
    THEY_HATE_ME,
    MADE_FRENS,
    // actions
    makeFrens
}