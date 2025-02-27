import { type AxiosRequestConfig } from "axios";
import axiosInstance from "./axios.core";

type ResolveType<T> = T extends Promise<infer R> ? R : never;

const ApiService = {
  fetchData<T>(param: AxiosRequestConfig): Promise<ResolveType<T>> {
    return new Promise((resolve, reject) => {
      axiosInstance(param)
        .then((response) => {
          resolve(response?.data as ResolveType<T>);
        })
        .catch((errors: any) => {
          let error =
            errors?.response?.data?.error ||
            errors?.message ||
            "Terjadi kesalahan";

          if (typeof error === "object") {
            error =
              error?.[Object.keys(error)?.[0]]?.[0] || "Terjadi kesalahan";
          }
          reject(error);
        });
    });
  },
};

export default ApiService;
