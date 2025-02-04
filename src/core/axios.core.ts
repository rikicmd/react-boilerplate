import axios, { AxiosInstance } from "axios";
import { AppConfig } from "./app.core";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: AppConfig.apiPrefix,
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Setup your config here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Setup your config here
    return Promise.reject(error);
  }
);

export default axiosInstance;
