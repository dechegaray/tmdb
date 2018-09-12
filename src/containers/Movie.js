import React from 'react';

const movie = (props) => {

      let moreInfo= null;
      if (props.show) {
            moreInfo = (
                  <div className="movie-description">
                        <p>{ props.current.overview }</p>
                  </div>
            );
      }

      return (
            <div className="movie-wrapper" style={ {backgroundImage: props.current.poster_path } }>
                  <div className="headline">
                        <h1>{ props.current.original_title }</h1>
                        <h2>{ props.current.tagline }</h2> 
                  </div>
                  { moreInfo }
            </div>
      )
}

export default movie;