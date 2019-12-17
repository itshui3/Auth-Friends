import {
  FETCHING_FRIENDS,
  FETCHED_FRIENDS,
  FAILED_FRIENDS_FETCH,

  POSTING_FRIEND,
  POSTED_FRIEND,
  FAILED_POST_FRIEND
} from '../actions'

const initialState = {
  friends: [],
  isFetching: false,
  error: null,

  isPosting: false,
  postError: null
}

export const friendsReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    // fetch
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
    // post
    case POSTING_FRIEND:
      return {
        ...state,
        isPosting: true
      }
    case POSTED_FRIEND:
      return {
        ...state,
        friends: payload,
        isPosting: false,
        error: null
      }
    case FAILED_POST_FRIEND:
      return {
        ...state,
        isPosting: false,
        error: payload
      }


    default:
      return state
  }
}