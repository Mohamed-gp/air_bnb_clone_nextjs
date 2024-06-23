import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.NODE_ENV == "development" ?  'http://localhost:3000' : "https://api.example.com",
});

export default customAxios;