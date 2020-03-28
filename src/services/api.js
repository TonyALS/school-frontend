import axios from 'axios';
import { delayAdapterEnhancer } from 'axios-delay';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export default api;
