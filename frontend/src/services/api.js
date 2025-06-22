import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL : 'http://localhost:8080/api',
});

export default api;
