import http from '../http';
import api from './api';

export const getSubgraphs = async () => {
  try {
    const response = await http.get(`${api.root}/subgraphs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get: getSubgraphs,
}
