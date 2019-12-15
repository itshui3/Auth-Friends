// make a form inside a modal, and a visible button that sets it to display
import React, { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { makeNewFren } from '../redux/actions'

import './Friends.scss'

function FriendForm(props) {
  const [modal, setModal] = useState(false)
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: ''
  })

  const dispatch = useDispatch()

  const handleInput = ev => {
    setFriend({
      ...friend,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    props.makeNewFren(friend)
  }

  return (
    <>
    <button onClick={() => setModal(!modal)}></button>
      <div 
        className={`friendForm__modalBackground ${
          modal ?
          'display' :
          null
        }`}
        onClick={() => setModal(!modal)}
      >

        <div 
          className={`friendForm__modalMain`} 
          onClick={ev => ev.stopPropagation()}
        >
          <form 
            className="friendForm__form"
            onSubmit={handleSubmit}
            
            >
            <input 
              placeholder="name"
              name="name"
              value={friend.name}
              onChange={handleInput}
              type="text"
            />
            <input 
              placeholder="age"
              name="age"
              value={friend.age}
              onChange={handleInput}
              type="text"
            />
            <input 
              placeholder="email"
              name="email"
              value={friend.email}
              onChange={handleInput}
              type="email"
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}

const mapStateToProps = ({ friends }) => {

  return {
    friendsList: friends.friendships
  }
}

export default connect(mapStateToProps, {
  makeNewFren
})(FriendForm)