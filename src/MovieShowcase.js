import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, index) => <MovieCard
    key ={index}
    title={movie.title}
    IMDBRating={movie.IMDBRating}
    genres={movie.genres}
    poster={movie.poster}
    />)
  };
      // item => <MovieCard title={item.title} rating={item.IMDBRating} genres={item.genres} poster={item.poster}/>
        // <div>item.title</div>,
        // <div>item.IMDBRating</div>,
        // <div>item.genres</div>,
        // <div>item.poster</div>

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
