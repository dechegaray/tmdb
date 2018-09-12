import React from 'react';
import MovieListItem from './MovieListItem';

const movieList = (props) => {
   let list = [];
      
   if (props.list) {
      list = this.props.list.map( (movie) => {
         return (
            <MovieListItem 
               key={ movie.id }
               title={ movie.original_title }
               rating={ movie.vote_average }
               image={ movie.poster_path }
               clicked={ () => props.subscribed(movie.id) }
            />
         );
      });
   } 

   return (
      <section className="movie-list-wrapper">
         <div className="row">
            { list }
         </div>
      </section>
   );
}

export default movieList;