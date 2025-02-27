import ApiService from "@/core/api-service.core";

export interface Response<T> {
  data: T;
}

export interface ResponseList<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url?: string; label: string; active: boolean }[];
  next_page_url?: string;
  path: string;
  per_page: number;
  prev_page_url?: string;
  to: number;
  total: number;
}

export interface BaseRepository<T, W> {
  getList(params?: any): Promise<ResponseList<T>>;
  create(data: W): Promise<Response<T>>;
  update(id: string | number, data: W): Promise<Response<T>>;
  delete(id: string | number): Promise<Response<T>>;
  show(id: string | number, params?: any): Promise<Response<T>>;
}

export abstract class AbstractBaseQueries<T = unknown, W = unknown>
  implements BaseRepository<T, W>
{
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getList = async (params?: any): Promise<ResponseList<T>> => {
    return ApiService.fetchData<ResponseList<T>>({
      url: this.url,
      method: "GET",
      params,
    });
  };

  create = async (data: W): Promise<Response<T>> => {
    return ApiService.fetchData<Response<T>>({
      url: this.url,
      method: "POST",
      data,
    });
  };

  update = async (id: string | number, data: W): Promise<Response<T>> => {
    return ApiService.fetchData<Response<T>>({
      url: `${this.url}/${id}`,
      method: "PUT",
      data,
    });
  };

  delete(id: string | number): Promise<Response<T>> {
    return ApiService.fetchData<Response<T>>({
      url: `${this.url}/${id}`,
      method: "DELETE",
    });
  }

  show(id: string | number, params?: any): Promise<Response<T>> {
    return ApiService.fetchData<Response<T>>({
      url: `${this.url}/${id}`,
      method: "GET",
      params,
    });
  }
}
