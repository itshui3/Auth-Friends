import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postFriend } from '../redux/actions'

function FriendForm(props) {

  const [input, setInput] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleInput = ev => {
    setInput({ ...input, [ev.target.name]: ev.target.value })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    // pass input as the payload of a post to the 
    // friends endpoint
    props.postFriend(input)
    setInput({
      name: '',
      age: '',
      email: ''
    })
  }

  return (
    <div className="friendForm__cont">
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="name" 
        type="text" 
        name='name' 
        value={input.name} 
        onChange={handleInput} 
        />
        <input 
        placeholder="age" 
        type="text" 
        name='age' 
        value={input.age} 
        onChange={handleInput} 
        />
        <input
        placeholder="email"
        type="email"
        name='email'
        value={input.email}
        onChange={handleInput} 
        />

        <button type='submit'>Make a friend!</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {

  return {}
}

export default connect(mapStateToProps, {
  postFriend
})(FriendForm)