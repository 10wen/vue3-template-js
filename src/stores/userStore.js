import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // userinfo: {
    //   username: '',
    //   password: '',
    //   role: 'admin'
    // },
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    warning: {
      warningMsg: '',
      warningFalg: false,
      button: []
    }
  }),
  getters: {
    upperUserName(state) {
      return state.username.toUpperCase()
    },
    getUserByRole(state) {
      return (role) => {
        return state.role === role
      }
    }
  },
  actions: {
    setUserInfo(username) {
      this.username = username
    },
    setRole(role) {
      this.role = role
    }
  }
})
