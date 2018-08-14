import React from 'react';

const headline = (props) => {
   
   const actors = [];

   return (
      <div className="headline">
        <h1>{ props.title }</h1>
         <h2>{ props.description }</h2> 
      </div>
   );
}

export default headline;