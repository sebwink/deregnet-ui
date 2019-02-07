import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light">
      <NavLink 
        className="nav-item nav-link"
        to="/"
      >
        <button 
          className="navbar-brand btn btn-link"
        >
        {"  "}DeRegNet
        </button>
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
     	 	<NavLink
     	    className="nav-item nav-link"
     	    to="/login" 
     	 	>
     	   	Login
				</NavLink>
     	 	<NavLink
     	    className="nav-item nav-link"
          to="/ui/signup" 
     	 	>
     	   	Sign Up
				</NavLink>
			</div>
		</nav>
  );
};

export default Navbar;
