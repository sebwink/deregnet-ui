import React from 'react';
import Grid from '../utils/grid';
import LoginForm from '../forms/loginForm';

import './styles/loginPage.css';

class LoginPage extends Grid {
  components = [
    null, null, null,
    null, <LoginForm />, null,
    null, null, null, 
  ];
};

export default LoginPage;
