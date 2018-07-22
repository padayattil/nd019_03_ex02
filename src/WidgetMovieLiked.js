import React, { Component } from 'react';
import ListUser from './ListUser';

class WidgetMovieLiked extends Component {
  render() {
    const likedUsers = this.props.profiles.filter(profile => profile.favoriteMovieID === this.props.movie.id);
    if(likedUsers)
      return (
        <h2>{this.props.movie.name}</h2>
        <p>Liked By:</p>
        <ListUser users={likedUsers} />
      );
    return (
        <h2>{this.props.movie.name}</h2>
        <p>No likes for this movie.</p>
      );
    
  }
}

export default WidgetMovieLike;