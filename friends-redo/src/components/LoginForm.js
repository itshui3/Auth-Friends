import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { login } from '../redux/actions/'

function LoginForm(props) {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleSubmitLogin = ev => {
    ev.preventDefault()
    props.login(login)

    setLogin({
      username: '',
      password: ''
    })
  }

  // useEffect(() => {
  //   if(props.isLoggedIn) {
  //     props.history.push('/friends')
  //   }


  // }, [props.isLoggedIn])
  console.log(props.isLoggedIn)

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
  return {
    isLoggedIn: state.loginReducer.loggedIn
  }
}

export default connect(mapStateToProps, {
  login
})(LoginForm)