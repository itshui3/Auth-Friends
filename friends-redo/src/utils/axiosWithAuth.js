import Axios from 'axios'

export const axiosWithAuth = () => {

  return Axios.create({
    baseURL: 'http://localhost.com/5000/api',
    authorization: localStorage.getItem('token')
  })
}