import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import {
  setLogged,
  setLogging,
  sendError,
  login
} from '../redux/actions'

function Form(props) {

  const history = useHistory()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const { login, isLogged, isLogging } = props

  const handleInput = ev => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value })
  }

  
  const handleSubmit = ev => {
    ev.preventDefault()
    login(credentials)
  }

  useEffect(() => {
    if(isLogged) {
      history.push('/friends')
    }
  }, [isLogged])

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
        {
          isLogging && <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Le_lenny_face.jpg' />
        }
        
      </form>
    </div>
  )
}

const mapStateToProps = ({ login }) => {
  return {

    isLogging: login.isLogging,
    isLogged: login.isLogged

  }

}

export default connect(mapStateToProps, {
  setLogged,
  sendError,
  setLogging,
  login
})(Form)