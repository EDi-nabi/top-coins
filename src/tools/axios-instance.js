import axios from 'axios';
import config from '../config/top-coin.config';

const axiosInstance = axios.create({
  baseURL: config.url,
  headers: { 'X-CMC_PRO_API_KEY': config.token },
});

export default axiosInstance;
