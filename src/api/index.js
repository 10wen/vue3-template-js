import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DOMAIN,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

instance.interceptors.response.use(
  (response) => {
    console.log('interceptors.response', response.statusText)
    const statusText = response.statusText
    if (response.status === 200 || response.status === 201) {
      ElMessage({
        type: 'success',
        message: statusText
      })
      return response.data
    } else {
      ElMessage.error(statusText)
      return Promise.reject(new Error(statusText))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

export default instance