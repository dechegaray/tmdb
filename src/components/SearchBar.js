import React from 'react';

const searchbar = (props) => {
   return (
      <div>
         <label for="search-btn">Search</label>
         <input 
            type="text" 
            id="search-btn" 
            placeholder="Search" 
            value={ props.value }
            onChange={ props.changed } />
      </div>
   );
}

export default searchbar;