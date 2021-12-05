import React, { useState } from 'react'

function UseStateHook(props) {
  const [favoritName, setFavoriteName] = useState(null)
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])

  function handleFavoriteNameClick() {
    setFavoriteName('MS Dhoni')
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log({
      username,
      email
    })
    const user = {
      username: username,
      email: email
    }
    setUsers([user])
  }

  return (
    <div>
      <h1>Let's use UseState Hook</h1>
      <h2>
        My favorite name, {favoritName ? favoritName : props.favoriteName}
      </h2>
      <button onClick={handleFavoriteNameClick}>Change My Favorite Name</button>
      <h1>Add User</h1>

      <form>
        <h1>Username</h1>
        <input
          type='text'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <h2>Email</h2>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Add User</button>
      </form>

      <h2>User List</h2>
      {users &&
        users?.map((item) => {
          return (
            <div>
              {item.username}
              <br />
              {item.email}
            </div>
          )
        })}
    </div>
  )
}

export default UseStateHook
