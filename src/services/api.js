import axios from 'axios';

//const instance = axios.create({
//  baseURL: process.env.REACT_APP_API_BASE_URL
//});

const instance = axios.create({
  baseURL: 'http://localhost:4000'
});

export default instance;
