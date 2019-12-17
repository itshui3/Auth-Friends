import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { fetchFriends } from '../redux/actions'

function Friends(props) {
  const history = useHistory()

  useEffect(() => {
    // if(!props.loggedIn) {
    //   history.push('/login')
    // } 

    props.fetchFriends()


    
  }, [])

  console.log(props.friends)

  return (
    <div className="friends__cont">
      {
        props.friends &&
          props.friends.map((friend, index) => (
            <div className="friends__card">
              {friend.name}
            </div>
          ))
      }
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