import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './navbar';
import ConfirmationLink from './utils/confirmationLink';
import Home from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ConfirmationMail from './pages/confirmationMailPage';
import RegisterLogin from './pages/registerLoginPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/ui/signup" exact component={RegisterPage} />
          <Route path="/ui/signup/confirmation/mail/send" exact component={ConfirmationMail} />
          <Route path="/ui/signup/confirmation/login" exact component={RegisterLogin} />
          <Route path="/ui/signup/confirmation/:token" exact component={ConfirmationLink} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/home" exact component={Home} />
          <Redirect from="/" to="/home" />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
