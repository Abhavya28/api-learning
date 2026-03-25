import Cookies from "js-cookie";
import axios ,{ AxiosError, AxiosResponse } from "axios";


const BASE_URL = "http://localhost:3000";


const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
  PATCH: "PATCH",
};

const http = axios.create({
    baseURL: `${BASE_URL}/api`
})


http.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      Cookies.remove("accessToken");
      console.warn("Unauthorized: token removed");
    }
    return Promise.reject(error);
  }
);

const getAxiosClient = () => http;


const get = (url: string, config?: any) => http.get(url, config);
const post = (url: string, data?: any, config?: any) =>
  http.post(url, data, config);
const put = (url: string, data?: any, config?: any) =>
  http.put(url, data, config);
const patch = (url: string, data?: any, config?: any) =>
  http.patch(url, data, config);
const del = (url: string, config?: any) => http.delete(url, config);

const HttpService = {
  HttpMethods,
  getAxiosClient,
  get,
  post,
  put,
  patch,
  delete: del,
};

export default HttpService;
