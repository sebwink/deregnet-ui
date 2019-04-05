import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import routes from './routes';
import { AUTH_PATH } from './config';
import search from './utils/search';

import './styles/navbar.css';

class Navbar extends Component {

  renderIfNo(user) {
    if (user) {
      return null;
    }
    return (
      <React.Fragment>
        <a 
          href={`https://${window.location.hostname}${AUTH_PATH}/login`}
          className="btn btn-primary m-2"
          role="button"
        >
          Login
        </a>
        <a 
          href={`https://${window.location.hostname}${AUTH_PATH}/register`}
          className="btn btn-primary m-2"
          role="button"
        >
          Register
        </a>
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
     	    to={routes.subgraphsPage} 
     	 	>
          <button 
            className="nav-item btn btn-primary"
          >
            Your subgraphs
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
     	        to={routes.networksPage} 
     	 	    >
     	        Networks
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to={routes.scoresPage} 
     	 	    >
     	        Scores
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to={routes.nodeSetsPage} 
     	 	    >
     	        Node sets
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to={routes.parameterSetsPage} 
     	 	    >
     	        Parameter sets
            </NavLink>
            <NavLink
     	        className="nav-item nav-link"
     	        to={routes.runsPage} 
     	 	    >
     	        Runs
            </NavLink>
          </div>
        </div>
        <form className="form-inline pl-5 pr-4 my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary my-2 my-sm-0" onClick={search}>Search</button>
        </form>
        <a 
          href={`https://${window.location.hostname}${AUTH_PATH}/logout`}
          className="btn btn-warning"
          role="button"
        >
          Log out 
        </a>
      </React.Fragment>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-default navbar-expand-lg navbar-light">
        <NavLink 
          className="nav-item nav-link"
          to={routes.homePage}
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
