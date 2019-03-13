import http from '../http';
import api from './api';

export const getRuns = async () => {
  try {
    const response = await http.get(`${api.root}/runs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get: getRuns,
}
