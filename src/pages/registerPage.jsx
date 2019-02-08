import React from 'react';
import Grid from '../utils/grid';
import { SignupForm } from '../components/signup';

import './styles/registerPage.css';

class RegisterPage extends Grid {
  components = [
    null, null, null,
    null, <SignupForm />, null,
    null, null, null,
  ];
}

export default RegisterPage;
