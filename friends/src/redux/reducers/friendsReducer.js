import {
  MAKING_FRENS,
  MADE_FRENS,
  THEY_HATE_ME
} from '../actions'

const initialState = {
  friendships: [],
  isMakingFrens: false,
  doTheyHateMe: 'maybe'
}

export const friendsReducer = (state = initialState, { type, payload }) => {

  switch(type) {
    case MAKING_FRENS:
      return {
        ...state,
        isMakingFrens: true,
        doTheyLikeMe: 'maybe'
      }

    case MADE_FRENS:
      return {
        ...state,
        friendships: payload,
        isMakingFrens: false
      }
    
    case THEY_HATE_ME:
      return {
        ...state,
        isMakingFrens: false,
        doTheyHateMe: payload
      }


    default:
      return state
  }
}