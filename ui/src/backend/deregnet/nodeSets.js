import http from '../http';
import api from './api';

export const getNodeSets = async () => {
  try {
    const response = await http.get(`${api.root}/nodesets`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get: getNodeSets,
}
