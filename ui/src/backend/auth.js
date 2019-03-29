const axios = require('axios');

const deregnetRestRoot = process.env.DEREGNET_ROOT || 'https://dereg.net';

export const postSignup = ({ username, password, email }) => (
  new Promise(async (resolve, reject) => {
    const url = `${deregnetRestRoot}/signup`;
    try {
      const response = await axios.post(url, {
        username,
        password,
        email,
        ui: true,
      });
      resolve(response);
    } catch (error) {
      if (error.response) {
        resolve(error.response);
      } else {
        reject(error);
      }
    }
  })
);

export const getSignupConfirm = token => (
  new Promise(async (resolve) => {
    try {
      await axios.get(`${deregnetRestRoot}/signup/confirm?token=${token}`);
      resolve(true);
    } catch (error) {
      resolve(false);
    }
  })
);

export const postSignupConfirm = (username, password, token) => (
  new Promise(async (resolve) => {
    try {
      await axios.post(`${deregnetRestRoot}/signup/confirm?token=${token}`, {
        username,
        password,
      });
      resolve(true);
    } catch (error) {
      console.log(error);
      resolve(false);
    }
  })
);

export const getAccessToken = (username, password) => (
  new Promise(async (resolve) => {
    try {
      const response = await axios.get(`${deregnetRestRoot}/access/token`, {
        auth: {
          username,
          password,
        },
      });
      const { accessToken } = response.data;
      resolve(accessToken);
    } catch (error) {
      resolve(null);
    }
  })
);

export default {
  postSignup,
  getSignupConfirm,
  postSignupConfirm,
  getAccessToken,
};
