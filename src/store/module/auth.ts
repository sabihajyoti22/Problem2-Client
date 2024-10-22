import { defineStore } from 'pinia'
import axios from 'axios'

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {} as user
    }
  },
  getters: {
    getUser: (state) => state.user
  },
  actions: {
    signUp(payload: any) {
      return axios.post('/auth/signup', payload)
    },
    signIn(payload: any) {
      return axios.post('/auth/signin', payload)
    },
    setUser(payload: user) {
      this.user = payload
    },
    activate(payload: any) {
      return axios.post('/auth/activate', { _id: payload })
    }
  }
})

export { useAuthStore }