import React, { Component } from 'react'

class ShowUsers extends Component {
  render() {
    return (
      <div>
        <h1>Show users component</h1>
        {this.props.userslist.map((item) => {
          return (
            <div>
              <h2>Name : {item.name}</h2>
              <h2>Age: {item.age}</h2>
            </div>
          )
        })}
        {this.props.str}
        <h2>{this.props.num}</h2>
      </div>
    )
  }
}

export default ShowUsers
