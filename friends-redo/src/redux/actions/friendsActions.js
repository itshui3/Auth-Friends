import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS'
export const FAILED_FRIENDS_FETCH = 'FAILED_FRIENDS_FETCH'

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })

  axiosWithAuth().get('/friends')
    .then( res => {
      console.log(res)
      dispatch({ type: FETCHED_FRIENDS, payload: res.data })

    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_FRIENDS_FETCH, payload: err })
    })
}

export const POSTING_FRIEND = 'POSTING_FRIEND'
export const POSTED_FRIEND = 'POSTED_FRIEND'
export const FAILED_POST_FRIEND = 'FAILED_POST_FRIEND'

export const postFriend = (friend) => dispatch => {
  dispatch({ type: POSTING_FRIEND })

  axiosWithAuth().post('/friends', friend)
    .then( res => {
      console.log(res.data)
      dispatch({ type: POSTED_FRIEND, payload: res.data })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_POST_FRIEND, payload: err })
    })
}