import {
  FETCHING_FRIENDS,
  FETCHED_FRIENDS,
  FAILED_FRIENDS_FETCH
} from '../actions'

const initialState = {
  friends: []
}

export const friendsReducer = (state = initialState, { type, payload }) => {
  switch(type) {

    default:
      return state
  }
}