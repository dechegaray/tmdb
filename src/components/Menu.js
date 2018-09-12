import React from 'react';
import { Link } from 'react-router-dom';
import TMDBLogo from '../assets/img/tmdb-logo.png';

const menu = () => {
   return (
      <header>
         <a className="logo">
            <img src={TMDBLogo} alt="The Movie Database Logo" />
         </a>
         <ul className="navigation">
            <li>
               <Link to="/">Top Rated</Link>
            </li>
            <li>
               <Link to="/genres">Genres</Link>
            </li>
         </ul>
      </header>
   );
}

export default menu;