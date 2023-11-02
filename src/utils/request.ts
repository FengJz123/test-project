import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 接口响应结构
export interface Response<T> {
  code: number
  data: T
  msg: string
}

declare module 'axios' {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any> (config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Response<T>>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}



// axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://i-hudong.com/www/DHL/public/index.php',
  timeout: 15000,
  headers: {
    "Content-Type": 'application/x-www-form-urlencoded'
  }
})

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么，比如添加 token 头部等
  return config;
}, (error: any) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  // 对响应数据做些什么，比如处理通用响应结构，返回 data 部分
  return response.data
}, (error: any) => {
  // 对响应错误做些什么
  return Promise.reject(error);
});


const fetch = {
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
    return axiosInstance.get<T>(url, {
      params,
      ...config
    })
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Response<T>> {
    return axiosInstance.post<T>(url, data, config)
  }
}

// const fetch = axiosInstance


export default fetch



