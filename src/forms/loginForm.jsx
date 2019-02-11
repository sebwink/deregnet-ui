import Joi from 'joi-browser';

import Form from './common/form';
import { getAccessToken } from '../backend/auth';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
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
  }

  config = {
    buttonLabel: 'Login',
  }

  schema = {
    username: Joi.string().min(4).max(30).required().label('Username'),
    password: Joi.string().min(8).max(18).required().label('Password'),
  };

  async submit() {
    const { username, password } = this.state.data;
    const accessToken = await getAccessToken(username, password);
    if (accessToken) {
      window.localStorage.setItem('accessToken', accessToken);
      window.location = '/';
    } else {
      const errors = {...this.state.errors};
      const message = 'Invalid username or password provided.';
      errors.username = message;
      errors.password = message;
      this.setState({ errors });
    }
  }

}

export default LoginForm;
