import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import Movie from './Movie';

class MovieView extends Component {
   state = {
      movies: null,
      currentMovie: null,
      isCurrentVisible: false
   }

   componentDidMount() {
      url = 'www.tmdb.com/movies';
      axios.post(url)
      .then( (response) => {
         this.setState({
            movies: response.movies
         });
      }).catch(e => {
         console.log(e);
      });
   }

   selectMovieHandler = (movieId) => {
      this.props.history.push('/movie?id=' + movieId);
   }

   render () {
      return (
         <section className="movie-list-wrapper">
            <Movie current={ this.state.currentMovie } show={ this.state.isCurrentVisible } />
            <MovieList list={ this.state.movies } clicked={ } />
         </section>
      );
      
   }
}

export default MovieView;