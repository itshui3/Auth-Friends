import React, { useEffect } from 'react';
// Routing
import { Route, Switch, useHistory } from 'react-router-dom'
import { PrivateRoute } from './auth/PrivateRoute'
// Redux
import { connect } from 'react-redux'

import LoginForm from './components/LoginForm'
import Friends from './components/Friends'
// Styling
import './App.css';

function App(props) {
  const history = useHistory()

  return (
    <div className="App">
      <h1>Welcome to Auth-Friends</h1>

      <Switch>
        <Route exact path="/" render={props => {
          if(!localStorage.getItem('token')) {
            history.push('/login')
          } else {
            history.push('/friends')
          }
        }}
        />

        <Route path="/login" component={LoginForm} />
        {/* PrivateRoute */}
        <PrivateRoute path="/friends" component={Friends} />
        
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.loggedIn
  }

}

export default connect(mapStateToProps)(App);
