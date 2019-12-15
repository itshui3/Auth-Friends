import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

//Redux
import { connect } from 'react-redux'

function Form(props) {
  const history = useHistory()
  const [credentials, setCredentials] = useState({})

  const handleInput = ev => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value })
  }
  const handleSubmit = ev => {

  }

  useEffect(() => {
    if (props.isLogging) {
      Axios.get('http://localhost:5000/login', credentials)
        .then( res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
          props.setLogged()
        })
        .catch( err => {
          console.log(err)
          props.sendError(err)
        })
    }
  }, [props.isLogging])

  useEffect(() => {
    if(props.isLogged) {
      history.push('/friends')
    }
  }, [props.isLogged])

  return (
    <div className="form__cont">
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="username" 
          onChange={handleInput}
          value={credentials}
        />
        <input 
          placeholder="password" 
          onChange={handleInput}
          value={credentials}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ friends }) => {
  isLogging: friends.isLogging,
  isLogged: friends.isLogged
}

export default connect(mapStateToProps, {
  setLogged,
  sendError
})(Form)