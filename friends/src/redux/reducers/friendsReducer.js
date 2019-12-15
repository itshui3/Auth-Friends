import {
  MAKING_FRENS,
  MADE_FRENS,
  THEY_HATE_ME,

  MAKING_NEW_FREN,
  COULDNT_MAKE_FREN,
  MADE_FREN
} from '../actions'

const initialState = {
  // get
  friendships: [],
  isMakingFrens: false,
  doTheyHateMe: 'maybe',
  // post
  isMakingNewFren: false,
  couldntMakeNewFren: 'maybe'
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
      

    case MAKING_NEW_FREN:
      return {
        ...state,
        isMakingNewFren: true
      }
    case MADE_FREN:
      return {
        ...state,
        friendships: payload,
        isMakingNewFren: false
      }
    case COULDNT_MAKE_FREN: 
      return {
        ...state,
        isMakingNewFren: false,
        couldntMakeNewFren: payload
      }


    default:
      return state
  }
}