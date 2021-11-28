import React from 'react'
import axios from 'axios'

class MakingHTTPCalls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.makeCall = this.makeCall.bind(this)
  }

  async makeCall() {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({
          users: res.data
        })
      })
  }
  render() {
    return (
      <div>
        <h1>Making HTTP Calls</h1>
        <button onClick={this.makeCall}>Make Call</button>
        {this.state.users &&
          this.state.users.map((item) => {
            return (
              <div>
                <h1>User: {item.id}</h1>
                <p>Name: {item.name}</p>
                <p>Phone: {item.phone}</p>
                <p>email: {item.email}</p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default MakingHTTPCalls
