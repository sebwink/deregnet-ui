import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Navbar from './navbar';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ConfirmationMail from './utils/confirmationMail';
import ConfirmationLink from './utils/confirmationLink';
import RegisterLoginPage from './pages/registerLoginPage';
import ScoresPage from './pages/scoresPage';

class App extends Component {
  state = {}

  componentDidMount() {
    try {
      const user = localStorage.getItem('accessToken');
      console.log(user);
      this.setState({ user });
    } catch (error) {}
  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <ToastContainer />
        <Switch>
          <Route path="/ui/signup" exact component={RegisterPage} />
          <Route path="/ui/signup/confirmation/mail/send" exact component={ConfirmationMail} />
          <Route path="/ui/signup/confirmation/login" exact component={RegisterLoginPage} />
          <Route path="/ui/signup/confirmation/:token" exact component={ConfirmationLink} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/scores" exact component={ScoresPage} />
          <Route path="/home" exact component={HomePage} />
          <Redirect from="/" to="/home" />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
