import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DOMAIN,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  ElMessage('this is message')
  return config
})

instance.interceptors.response.use((response) => {
  console.log('res', response)
  if (response.data.status === 'success') {
    ElMessage(response.data.message)
    return response.data
  } else {
    ElMessage(response.data?.message)
  }
})

export default instance

// response data
// {
//   status: 'success | error',
//   data: {},
//   message?: ''
// }
