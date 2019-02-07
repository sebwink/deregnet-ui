import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import signup from './signup';
import LoginForm from './login';

class App extends Component {
  state = {
    loggedIn: {
      username: undefined,
      password: undefined,
    },
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <Switch>
            <Route path="/ui/signup" exact component={signup.SignupForm} />
            <Route path="/ui/signup/confirmation/mail/send" exact component={signup.ConfirmationMailSend} />
            <Route path="/ui/signup/confirmation/login" exact component={signup.ConfirmationLogin} />
            <Route path="/ui/signup/confirmation/:token" exact component={signup.ConfirmationLink} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/home" exact component={Home} />
            <Redirect from="/" to="/home" />
            <Redirect to="/home" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
