import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'

export const reducer = combineReducers({ friends: friendsReducer })