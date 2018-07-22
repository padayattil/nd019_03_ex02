import React, { Component } from 'react';

import ListUser from './ListUser';

class WidgetMovieLiked extends Component {
  render() {
    const likedUsers = this.props.profiles.filter(profile => profile.favoriteMovieID == this.props.movie.id).map(profile =>  this.props.users[profile.userID]);
    if(likedUsers.length !== 0)
      return (
        <div>
          <h2>{this.props.movie.name}</h2>
          <p>Liked By:</p>
          <ListUser users={likedUsers} />
        </div>
      );
    return (
      <div>
        <h2>{this.props.movie.name}</h2>
        <p>No likes for this movie.</p>
      </div>
      );
    
  }
}

export default WidgetMovieLiked;