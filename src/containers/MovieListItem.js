import React from 'react';

const movieListItem = (props) => {
   return (
      <div className="col-md-4 col-sm-6 col-xs-12" onClick={ props.clicked }>
         <img src={ props.image } alt={ props.title + ' Poster' } />
         <h4>{ props.title }</h4>
         <span>{ props.rating }</span>
      </div>
   );
}

export default movieListItem;