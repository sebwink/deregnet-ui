import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import search from './utils/search';
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
     	    Register
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
          <button 
            className="nav-item btn btn-primary"
          >
            Find subgraphs
          </button>
        </NavLink>
        <NavLink
     	    className="nav-item nav-link"
     	    to="/runs" 
     	 	>
          <button 
            className="nav-item btn btn-primary"
          >
            Runs
          </button>
				</NavLink>
        <NavLink
     	    className="nav-item nav-link"
     	    to="/subgraphs" 
     	 	>
          <button 
            className="nav-item btn btn-primary"
          >
            Subgraphs
          </button>
        </NavLink>
        <div className="dropdown">
          <button 
            className="btn btn-primary dropdown-toggle"
            id="resourcesDropdownButton"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Resources
          </button>
          <div className="dropdown-menu"
               aria-labelledby="resourcesDropdownButton"
          >
            <NavLink
     	        className="nav-item nav-link"
     	        to="/graphs" 
     	 	    >
     	        Networks
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to="/scores" 
     	 	    >
     	        Scores
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to="/node_sets" 
     	 	    >
     	        Node sets
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to="/parameter_sets" 
     	 	    >
     	        Parameter sets
            </NavLink>
          </div>
        </div>
        <form className="form-inline pl-5 pr-4 my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary my-2 my-sm-0" onClick={search}>Search</button>
        </form>
        <button
          className="btn btn-warning"
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
