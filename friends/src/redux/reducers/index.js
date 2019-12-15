import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'
import { loginReducer } from './loginReducer'

export const reducer = combineReducers({ friends: friendsReducer, login: loginReducer })