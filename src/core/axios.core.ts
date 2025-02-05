import axios, { AxiosInstance } from "axios";
import { AppConfig } from "./app.core";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: AppConfig.apiPrefix,
  timeout: 6000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
