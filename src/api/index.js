import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://lianghj.top:8888/api/private/v1',
  timeout: 5000
})

export default instance
