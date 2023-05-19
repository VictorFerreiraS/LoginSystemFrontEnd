import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/signup',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
});

export default instance;
