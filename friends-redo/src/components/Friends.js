import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { fetchFriends } from '../redux/actions'
// Components
import FriendForm from './FriendForm'

// name, age, email
function Friends(props) {
  const history = useHistory()

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      history.push('/login')
    }
    props.fetchFriends()
  }, [])

  return (
    <div className="friends__cont">
      <div className="friends__list">
      {
        props.friends &&
          props.friends.map((friend, index) => (
            <div key={index} className="friends__card">
              <div>{friend.name}</div>
            </div>
          ))


      }
      </div>
      <div className="friends__addFriendForm">
        <FriendForm />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  }
}

export default connect(mapStateToProps, {
  fetchFriends
})(Friends)