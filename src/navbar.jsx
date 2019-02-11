import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logout from './utils/logout';

import './styles/navbar.css';

class Navbar extends Component {

  renderIfNo(user) {
    if (user) {
      return null;
    }
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  renderIf(user) {
    if (!user) {
      return null;
    }
    return (
      <React.Fragment>
        <NavLink
     	    className="nav-item nav-link"
     	    to="/runner" 
     	 	>
     	    Find Subgraphs
				</NavLink>
        <NavLink
     	    className="nav-item nav-link"
     	    to="/runs" 
     	 	>
     	    Runs
				</NavLink>
        <NavLink
     	    className="nav-item nav-link"
     	    to="/subgraphs" 
     	 	>
     	    Subgraphs
				</NavLink>
        <NavLink
     	    className="nav-item nav-link"
     	    to="/resources" 
     	 	>
     	    Resources
				</NavLink>
        <button
          className="btn btn-primary"
          onClick={logout}
     	 	>
     	    Log out
				</button>
      </React.Fragment>
    );
  }

  render() {
    const { user } = this.props;
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
          {this.renderIfNo(user)}
          {this.renderIf(user)}
			  </div>
		  </nav>
    );
  }
};

export default Navbar;
