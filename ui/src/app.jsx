import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import 'react-table/react-table.css';
import './tables/styles/tableHeader.css';
import './tables/styles/tableBody.css';
import './tables/styles/tableNavigation.css';

import Navbar from './navbar';
import AppRouter from './router';
import { getLogin } from './backend/auth';

class App extends Component {
  state = {
    loggedIn: false,
  }

  async componentWillMount() {
    try {
      const loggedIn = await getLogin();
      this.setState({ loggedIn });
    } catch (error) {}
  }
  
  render() {
    const { loggedIn } = this.state;
    return (
      <React.Fragment>
        <Navbar user={loggedIn} />
        <ToastContainer />
        <AppRouter loggedIn={loggedIn} />
      </React.Fragment>
    );
  }
}

export default App;
