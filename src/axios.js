import axios from 'axios';
import Cookies from "js-cookie";

const instance = axios.create();

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
  return config;
});

export default instance;
