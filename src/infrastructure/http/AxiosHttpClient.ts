// lib/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  // Puedes agregar auth headers, interceptores, etc.
});

// Interceptor de respuesta para manejo de errores
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
