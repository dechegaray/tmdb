import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
   state = {
      movies: null
   }

   render () {
      const list = [];

      return (
         <section>
            { list }
         </section>
      );
      
   }
}

export default MovieList;