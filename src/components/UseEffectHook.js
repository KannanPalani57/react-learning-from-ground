import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectHook() {
  const [userData, setUserData] = useState([])
  const [showUser, setShowUser] = useState(false)

  useEffect(() => {
    async function makeRequest() {
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          setUserData(res.data)
        })
    }
    makeRequest()
  }, [])

  useEffect(() => {
    async function showDifferentUser() {
      setUserData([
        {
          id: '1',
          email: 'Mathan'
        },
        {
          id: '2',
          email: 'Kaali'
        },
        {
          id: '3',
          email: 'Kannan'
        }
      ])
    }
    showDifferentUser()
  }, [showUser])

  const handleVisibilityOfUsers = () => {
    setShowUser(!showUser)
  }

  return (
    <>
      <h1>Lets learn UseEffect Hook </h1>

      <button onClick={handleVisibilityOfUsers}>Change Good Heart Users</button>

      <div>
        {userData &&
          userData.map((item) => {
            return (
              <div key={item.id}>
                <h3>User - {item.id}</h3>
                <h4>Email address: {item.email}</h4>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default UseEffectHook
