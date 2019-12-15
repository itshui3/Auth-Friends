import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

//Redux
import { connect } from 'react-redux'
import {
  setLogged,
  setLogging,
  sendError
} from '../redux/actions'

function Form(props) {

  const history = useHistory()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleInput = ev => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value })
  }

  const { isLogging, setLogged, sendError } = props
  const handleSubmit = ev => {
    ev.preventDefault()
    isLogging()
    login()
  }
  const login = () => {
    Axios.post('http://localhost:5000/api/login', credentials)
    .then( res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      setLogged()
    })
    .catch( err => {
      console.log(err)
      sendError(err)
    })
  }


  // useEffect(() => {
  //   if(props.isLogged) {
  //     // history.push('/friends')
  //   }
  // }, [props.isLogged])

  return (
    <div className="form__cont">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="username" 
          name="username"
          onChange={handleInput}
          value={credentials.username}
        />
        <input 
          type="password"
          placeholder="password" 
          name="password"
          onChange={handleInput}
          value={credentials.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ friends }) => {
  return {
    friends: friends,
    isLogging: friends.isLogging,
    isLogged: friends.isLogged

  }

}

export default connect(mapStateToProps, {
  setLogged,
  sendError,
  setLogging
})(Form)