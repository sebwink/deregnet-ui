const logout = () => {
  try {
    window.localStorage.removeItem('accessToken');
    window.location = '/';
  } catch (error) {
    console.log(error);
    window.location = '/';
  }
};

export default logout;
