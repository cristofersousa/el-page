
import axios from 'axios';

const api = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
