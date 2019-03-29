import http from '../http';
import api from './api';

export const getScores = async () => {
  try {
    const response = await http.get(`${api.root}/scores`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get: getScores,
}
