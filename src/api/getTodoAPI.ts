import axios from 'axios';
import { LoggerService } from '../services/LogService/LogService';

// const API = process.env.REACT_APP_API;

export const getTodoAPI = async () => {
  try {
    const { data } = await axios.get(`https://613741aceac1410017c18258.mockapi.io/todo`);
    return data;
  } catch (error) {
    LoggerService.error({ message: 'getTodoAPI error', error });
    return [];
  }
};
