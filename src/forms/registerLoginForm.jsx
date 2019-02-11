import React from 'react';

import { postSignupConfirm } from '../backend/auth';
import LoginForm from '../forms/loginForm';

class RegisterLoginForm extends LoginForm {
  async submit() {
    const { token } = this.props.location.state;
    const { username, password } = this.state.data;
    const confirmed = await postSignupConfirm(username, password, token);
    if (confirmed) {
      super.submit();
    } else {
      const errors = {...this.state.errors};
      const message = 'Invalid username or password provided.';
      errors.username = message;
      errors.password = message;
      this.setState({ errors });
    }
  }
}

export default RegisterLoginForm;
