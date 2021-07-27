import React from 'react';
import axios from 'axios';
import Movie from './Movie'
// VDOM Virtual Document Object Model
// JSX (HTML + JAVASCRIPT ), fav(props) -> 인자로 넘기는것
// props (important)
// state

// mounting, updating, unmounting
// constructor -> render (mounting) 
// render -> componentDidUpdate (updating)
class App extends React.Component {
  state = {
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
}