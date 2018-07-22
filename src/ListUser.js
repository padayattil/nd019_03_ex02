import React, { Component } from 'react';

class ListUser extends Component {
  render() {
    return (
      <ul>
      {
        this.props.users.map(user => (
        	<li>{user.name}</li>
        ))
      }
      </ul>
    );
  }
}

export default ListUser;