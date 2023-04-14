import $axios from './index'
import api from './api.config'
import { useUserStore } from '../stores/userStore'

const setFormData = (data) => {
  const formData = new FormData()
  for (let key in data) {
    if (data[key] !== null && data[key] !== undefined) {
      console.log(key, data[key]);
      formData.append(key, data[key])
    }
  }
  return formData
}

export const getEvent = (url, data) => {
  return new Promise(async (resolve, reject) => {
    const result = await $axios.get(url, {
      params: data
    })
    if (result.data.code === 0) {
      resolve(result.data.data)
    } else {
      reject(result.data.msg)
    }
  })
}

export const postEvent = (url, data) => {
  return new Promise(async (resolve, reject) => {
    const result = await $axios.post(url, data)
    if (result.code === 0) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

// home

// admin
export const AdminService = {}

// user
export const UserService = {
  login: async (data) => {
    const userStore = useUserStore()
    const result = await postEvent(api.userLogin,data)
    userStore.login(result.data)
    return result
  },
  getUserInfo: async () => {},
  updateUserInfo: async () => {}
}

// dynamic
export const DynamicService = {}

// circle
export const CircleService = {}

// resource
export const ResourceService = {}

// activity
export const ActivityService = {}

// complaints
export const ComplaintsService = {}

// comment
export const CommentService = {}


// file
export const FileService = {
  delete: async (data) => {
    return await postEvent(api.deleteFile,data)
  },
}