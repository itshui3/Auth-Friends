import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS'
export const FAILED_FRIENDS_FETCH = 'FAILED_FRIENDS_FETCH'

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })

  axiosWithAuth().get('/friends')
    .then( res => {
      console.log(res)
      dispatch({ type: FETCHED_FRIENDS })

    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_FRIENDS_FETCH, payload: err })
    })
}