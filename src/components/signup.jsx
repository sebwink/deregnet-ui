import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';

import Form from './common/form';
import { postSignup, getSignupConfirm, postSignupConfirm } from '../backend/auth.js';
import LoginForm from './login.jsx';

class SignupForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      repeatedPassword: '',
      email: '',
    },
    errors: {},
  };
  
  inputs = {
    username: {
      label: 'Username',
      autoFocus: true,
    },
    password: {
      label: 'Password',
      type: 'password',
    },
    repeatedPassword: {
      label: 'Repeat your password',
      type: 'password',
    },
    email: {
      label: 'Email',
    },
  }

  config = {
    buttonLabel: 'Sign up',
    formClasses: 'centered-form',
  }

  schema = {
    username: Joi.string().min(4).max(30).required().label('Username'),
    password: Joi.string().min(8).max(18).required().label('Password'),
    repeatedPassword: Joi.string().min(8).max(18).required().label('Repeated Password'),
    email: Joi.string().email().required().label('E-Mail'),
  };
  
  crossValidate = [
    [(password, repeatedPassword) => password === repeatedPassword, 'password', 'repeatedPassword'],
  ]

  submit = async () => {
    const response = await postSignup(this.state.data);
    console.log(response);
    if (response.status === 201) {
      this.props.history.push('/ui/signup/confirmation/mail/send');  
    } else if (response.status === 409) {
      const errors = { ...this.state.errors };
      const { message } = response.data;
      if (message === 'Username already in use.') {
        errors.username = message; 
      } else {
        errors.email = message;
      }
      this.setState({ errors });
    } else {
      console.log('Something really bad happened!');
      this.props.history.push('/ui/signup');
    }
  }
}

const ConfirmationMailSend = (props) => {
  return (
    <p>Thank you. You should have received an E-Mail to confirm and activate your account.</p>
  );
};

class ConfirmationLink extends Component {
  state = {
    validToken: undefined, 
  }

  async componentDidMount() {
    const { token } = this.props.match.params;
    const validToken = await getSignupConfirm(token);
    this.setState({ validToken });
  }
    
  render() {
    console.log(this.state.validToken);
    if (this.state.validToken === undefined) {
      return null;
    } else if (!this.state.validToken) {
      return <Redirect to="/ui/signup" /> 
    } 
    const { token } = this.props.match.params;
    console.log(token);
    return <Redirect to={{
      pathname: '/ui/signup/confirmation/login',
      state: { token },
    }} />
  }
}

class ConfirmationLogin extends LoginForm {
  async submit() {
    const { token } = this.props.location.state;
    const { username, password } = this.state.data;
    const confirmed = await postSignupConfirm(username, password, token);
    if (confirmed) {
      console.log('Before');
      super.submit();
      console.log('After');
    } else {
      const errors = {...this.state.errors};
      const message = 'Invalid confirmation token, username or password provided.';
      errors.username = message;
      errors.password = message;
      this.setState({ errors });
    }
  }

  render() {
    const { token } = this.props.location.state;
    if (!token) {
      return <Redirect to="/ui/signup" />;
    }
    return (
      <React.Fragment>
        <p>You successfully confirmed your E-Mail address.</p>
        <p>Log in with your username and password to activate your account.</p>
        {super.render()}
      </React.Fragment>
    );
  }
}

export default { 
  SignupForm,
  ConfirmationMailSend,
  ConfirmationLink,
  ConfirmationLogin,
};
