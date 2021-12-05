import React, { Component } from 'react'
import ShowUsers from './ShowUsers'
import MakingHTTPCalls from './components/MakingHTTPCalls'
import UseStateHook from './components/UseStateHook'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1,
      playerName: 'Virat Kohli'
    }
    this.handleFavoritePlayerClick = this.handleFavoritePlayerClick.bind(this)
    this.incrementMe = this.incrementMe.bind(this)
  }

  showMe(name) {
    return (
      <div>
        <h3>I am going to learn ReactJS</h3>
        <h3>By, {name}</h3>
      </div>
    )
  }
  handleFavoritePlayerClick() {
    this.setState({
      playerName: 'Rahul Dravid'
    })
  }
  incrementMe() {
    this.setState((oldState) => {
      console.log(oldState)
      return {
        counter: oldState.counter + 1
      }
    })
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
        <UseStateHook favoriteName='Kane Williamson' />
        {/* <MakingHTTPCalls />
        <h1>State in ReactJS</h1>
        <h1>Counter value is now, {this.state.counter}</h1>
        <h1>My favorite cricket player is, {this.state.playerName}</h1>{' '}
        <button
          style={{
            fontSize: '1.5rem',
            color: 'white',
            background: 'purple',
            padding: '.5em'
          }}
          onClick={this.handleFavoritePlayerClick}
        >
          Change My Favorite Cricket Player
        </button>
        <br />
        <button
          style={{
            fontSize: '1.5rem',
            color: 'white',
            background: 'purple',
            padding: '.5em'
          }}
          onClick={this.incrementMe}
        >
          Increment Me!
        </button>
        <h1>Hello {name}</h1>
        {this.showMe('Jayaram')}
        {isActive && <h3>I am an active user, {activeUser}</h3>}
        <ShowUsers
          userslist={users}
          str="String fkjkjds"
          num={5}
          isActive={false}
        /> */}
      </div>
    )
  }
}

export default App
