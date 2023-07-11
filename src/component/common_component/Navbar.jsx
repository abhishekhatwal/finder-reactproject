// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { TbSearch } from 'react-icons/tb';
//NavLink tag of router allow u to add active property on it but  Link tag of router does not allow u to add active property on itself
//for applying css to router tags u need to give classname to tag otherwise css property by directly selecting tag/element will not work
const Navbar = () => {
  return (
    <nav className="navbar-1">
      <div>
      <h1>Finder </h1>
      <TbSearch size={32} color="#C13584" />
      </div>
      <ul>
        <li>
          <NavLink className="linkitem"  to="/">Movies</NavLink>
        </li>
        <li>
          <NavLink className="linkitem"  to="/tvshow">Tvshow</NavLink>
        </li>
        <li>
          <NavLink className="linkitem"  to="/anime">Anime</NavLink>
        </li>
        <li>
          <NavLink  className="linkitem" to="/book">Books</NavLink>
        </li>
        <li>
          <NavLink  className="linkitem" to="/gossips">Gossips</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;