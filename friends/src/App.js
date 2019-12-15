import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import './App.css';

import Form from './components/Form'
import Friends from './components/Friends'

function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      {
        token ?
        <Redirect to="/friends" />
        : <Redirect to="/login" />
      }
      <Route path="/login" component={Form} />
      {/* create a protected route to friends */}
      <Route path="/friends" render={props => (
        
          token ?
          <Friends />
          : <Redirect to="/login" />
        
      )} />
    </div>
  );
}

export default App;
