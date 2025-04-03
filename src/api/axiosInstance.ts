import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com', // reemplazá luego con la real
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // si usás cookies/sesiones
});

// ✅ Interceptores (ejemplo para agregar token en headers)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // manejar errores globales
    console.error('Axios Error:', error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
