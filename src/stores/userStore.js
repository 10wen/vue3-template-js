import { defineStore } from 'pinia'
import { login } from '../api/all'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    warning: {
      warningMsg: '',
      warningFalg: false,
      button: []
    }
  }),
  getters: {},
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    login(data) {
      return new Promise(async (resole, reject) => {
        let result = await login(data)
        if (result.code === 0) {
          this.token = result.data.token
          this.userInfo = result.data.userInfo
          resole(result.data.message)
        } else {
          reject(result.data.message)
        }
      })
    }
  }
})
