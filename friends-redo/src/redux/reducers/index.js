import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { friendsReducer } from './friendsReducer'

export const reducer = combineReducers({ loginReducer: loginReducer, friendsReducer: friendsReducer })