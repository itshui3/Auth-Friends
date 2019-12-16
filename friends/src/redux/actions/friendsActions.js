import Axios from 'axios'

const friendlyAxios = () => {
  const token = localStorage.getItem('token')

  return Axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  })
}

export const MAKE_FRENS = 'MAKE_FRENS'
export const MAKING_FRENS = 'MAKING_FRENS'
export const MADE_FRENS = 'MADE_FRENS'
export const THEY_HATE_ME = 'THEY_HATE_ME'

export const MAKING_NEW_FREN = 'MAKING_NEW_FREN'
export const COULDNT_MAKE_FREN = 'COULDNT_MAKE_FREN'
export const MADE_FREN = 'MADE_FREN'

export const REMOVING_FREN = 'REMOVING_FREN'
export const REMOVED_FREN = 'REMOVED_FREN'

export const makeFrens = () => dispatch => {
  dispatch({ type: MAKING_FRENS })

  friendlyAxios().get('http://localhost:5000/api/friends')
    .then( res => {
      console.log(res.data)
      dispatch({ type: MADE_FRENS, payload: res.data })
      dispatch({ type: THEY_HATE_ME, payload: 'nah' })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: THEY_HATE_ME, payload: 'yeah' })
    })
}

export const makeNewFren = (fren) => dispatch => {
  dispatch({ type: MAKING_NEW_FREN })

  friendlyAxios().post('http://localhost:5000/api/friends', fren)
    .then( res => {
      console.log(res)
      dispatch({ type: MADE_FREN, payload: res.data })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: COULDNT_MAKE_FREN, payload: err })
    })
}

export const removeFren = (id) => dispatch => {
  dispatch({ type: REMOVING_FREN })

  friendlyAxios().delete(`http://localhost:5000/api/friends/${id}`)
    .then( res => {
      console.log(res)
      dispatch({ type: REMOVED_FREN, payload: res.data })
    })
    .catch( err => {
      console.log(err)
    })
}