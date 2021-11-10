import React, { Component } from 'react'
import ShowUsers from './ShowUsers'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  showMe(name) {
    return (
      <div>
        <h3>I am going to learn ReactJS</h3>
        <h3>By, {name}</h3>
      </div>
    )
  }

  render() {
    const name = 'Krishnan'
    const isActive = true
    const activeUser = 'John'
    const users = [
      {
        name: 'kannan',
        age: 20
      },
      {
        name: 'Sai suresh',
        age: 20
      },
      {
        name: 'sundar',
        age: 30
      }
    ]
    return (
      <div>
        <h1>Hello {name}</h1>
        {this.showMe('Jayaram')}
        {isActive && <h3>I am an active user, {activeUser}</h3>}
        <ShowUsers
          userslist={users}
          str='String fkjkjds'
          num={5}
          isActive={false}
        />
      </div>
    )
  }
}

export default App
