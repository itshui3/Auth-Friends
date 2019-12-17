import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
// Redux
import { connect } from 'react-redux'

import LoginForm from './components/LoginForm'

function App(props) {
  const history = useHistory()

  useEffect(() => {
    if(!props.isLoggedIn) {
      history.push('/login')
    } 
  }, [props.isLoggedIn])
  return (
    <div className="App">
      <h1>Welcome to Auth-Friends</h1>

      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/friends" />
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
