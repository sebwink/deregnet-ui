import http from '../http';
import api from './api';

export const getParameterSets = async () => {
  try {
    const response = await http.get(`${api.root}/parameter_sets`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get: getParameterSets,
}
