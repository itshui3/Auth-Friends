import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import './App.css';

import Form from './components/Form'

function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      {/* 
        1 - Login
        2 - Rendered friends

        Strat - check if authToken exists, render a <Redirect /> on that basis
      */}
      {
        token ?
        <Redirect to="/friends" />
        : <Redirect to="/login" />
      }
      <Route path="/login" component={Form} />
      {/* create a protected route to friends */}
    </div>
  );
}

export default App;
