import http from '../http';
import api from './api';

export const getGraphs = async () => {
  try {
    const response = await http.get(`${api.root}/graphs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get: getGraphs,
}
