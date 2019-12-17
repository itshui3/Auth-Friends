import React, { useState } from 'react'
import { connect } from 'react-redux'

function LoginForm(props) {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleSubmitLogin = ev => {
    ev.preventDefault()
  }

  const handleInput = ev => {
    setLogin({ ...login, [ev.target.name]: ev.target.value })
  }

  return (
    <div className="loginForm__cont">
      <form onSubmit={handleSubmitLogin}>
        <input 
          placeholder='Username'
          name='username'
          type='text'
          onChange={handleInput}
          value={login.username}
        />
        <input 
          placeholder='Password'
          name='password'
          type='password'
          onChange={handleInput}
          value={login.password}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(LoginForm)