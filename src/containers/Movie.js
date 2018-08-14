import React from 'react';

const movie = (props) => {
   return (
      <div className="" style={ {backgroundImage: props.image } }>
         <h4>{ props.title }</h4>
         <span>{ props.rating }</span>
      </div>
   );
}

export default movie;