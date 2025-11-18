import axios, { AxiosError } from 'axios';
import type { User, ApiError } from '../types';
import { ERROR_MESSAGES } from '../utils/constants';

//TODO: Move API_BASE_URL to env file.
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      message: error.message || ERROR_MESSAGES.GENERIC_ERROR,
      code: error.code,
    };

    if (error.response) {
      apiError.message = `Server Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      apiError.message = ERROR_MESSAGES.NETWORK_ERROR;
    }

    return Promise.reject(apiError);
  }
);

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>('/users');
    return response.data;
  } catch (error) {
    throw error as ApiError;
  }
};


export default api;
