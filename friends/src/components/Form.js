import React from 'react'

function Form(props) {

  return (
    <div className="form__cont">
      <form>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Form