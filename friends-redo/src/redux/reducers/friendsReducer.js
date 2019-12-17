import {
  FETCHING_FRIENDS,
  FETCHED_FRIENDS,
  FAILED_FRIENDS_FETCH
} from '../actions'

const initialState = {
  friends: [],
  isFetching: false,
  error: null
}

export const friendsReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetching: true
      }

    case FETCHED_FRIENDS:
      return {
        ...state,
        friends: payload,
        isFetching: false
      }

    case FAILED_FRIENDS_FETCH:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}