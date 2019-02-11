import React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const ConfirmationMail = (props) => {
  toast.success('Thank you!');
  toast.success('Check your E-Mail to confirm your account.');
  return <Redirect to="/" />;
};

export default ConfirmationMail;
