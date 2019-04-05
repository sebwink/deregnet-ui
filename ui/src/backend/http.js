import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.request.use((config) => {
  const _config = {...config};
  try {
    const token = localStorage.getItem('accessToken');
    _config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  } catch (error) { }
  return _config;
});

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      return Promise.reject(error);
    } else if (error.request) {
      toast.error('!');
      console.log(error);
    } else {
      toast.error('!!');
      console.log(error);
    }
  },
);

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};
