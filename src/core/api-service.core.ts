import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./axios.core";

const ApiService = {
  fetchData:
    <T>(param: AxiosRequestConfig): (() => Promise<T>) =>
    () =>
      axiosInstance(param).then((response: AxiosResponse<T>) => response.data),
};

export default ApiService;
