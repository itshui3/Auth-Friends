//React
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { makeFrens } from '../redux/actions'
// Components
import FriendForm from './FriendForm'

import './Friends.scss'

function Friends(props) {
  const { friendsList, makeFrens } = props

  const history = useHistory()
  useEffect(() => {

    if(history.location.pathname === '/friends') {
      makeFrens()
    }
  }, [history.location.pathname])

  return (
    <div className="friends__cont">
      <FriendForm />

      <div className="friends__jumbotron">
        <h1>Check out some of dese friends</h1>
        <div className="friends__friendsList">
          {friendsList &&
            friendsList.map((friend, index) => (
              <ul key={index}>
                <li>{friend.name}</li>
                <li>{friend.age}</li>
                <li>{friend.email}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ friends }) => {

  return {
    friendsList: friends.friendships
  }
}

export default connect(mapStateToProps, {
  makeFrens
})(Friends)