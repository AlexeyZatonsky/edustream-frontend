import axios from 'axios';

// Создаем экземпляр axios с базовым URL
const api = axios.create({
  baseURL: 'http://localhost:1086',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 