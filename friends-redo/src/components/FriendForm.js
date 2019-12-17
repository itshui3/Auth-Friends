import React from 'react'

function FriendForm(props) {

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
        placeholder="location" 
        type="text" 
        name='location' 
        value={input.location} 
        onChange={handleInput} 
        />
      </form>
    </div>
  )
}