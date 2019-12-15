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