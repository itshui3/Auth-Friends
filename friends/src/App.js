import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { logout } from './redux/actions'

import './App.css';

import Form from './components/Form'
import Friends from './components/Friends'

function App(props) {

  const token = localStorage.getItem('token')

  const handleLogout = ev => {
    localStorage.removeItem('token')
    props.logout()
  }

  return (
    <div className="App">

      {
        props.isLoggedIn ?
        <>
          <button onClick={handleLogout}>Logout</button>
          
        </>
        : <Redirect to="/login" />
      }

      {
        token ?
        <Redirect to="/friends" />
        : <Redirect to="/login" />
      }
      <Route path="/login" component={Form} />

      <Route path="/friends" render={props => (
        
          token ?
          <Friends />
          : <Redirect to="/login" />
        
      )} />
    </div>
  );
}

const mapStateToProps = ({ login }) => {

  return {
    isLoggedIn: login.isLogged
  }
}

export default connect(mapStateToProps, {
  logout
})(App);

// make a logout button that conditionally renders when token is valid