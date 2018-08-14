import React from 'react';
import Headline from '../components/Headline';

const movieView = (props) => {

   const actors = [];

   return (
      <div className="" style={ {backgroundImage: props.image } }>
         <Headline title={props.title } description={ props.description } />
         <div className="description-wrapper">
            <h4>{ props.producer }</h4>
            <p>{ props.text }</p>
            <ul>
               { actors }
            </ul>
         </div>
      </div>
   );
}

export default movieView;