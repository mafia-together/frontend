import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://mafia-together.com/api',
    withCredentials: true,
    timeout: 5000,
})

export interface HttpClient extends AxiosInstance {
    get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
    post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    patch<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
}

export const http: HttpClient = axiosInstance
axiosInstance.interceptors.response.use((response) => response.data)

axiosInstance.interceptors.request.use((req) => {
    const auth = localStorage.getItem('auth')
    if (auth) {
        req.headers.Authorization = `Basic ${auth}`
    }
    return req
})
