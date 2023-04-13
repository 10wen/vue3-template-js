import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  }),
  getters: {},
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    login(data) {
      const {token,userInfo} = data
      this.setToken(token)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }
})
