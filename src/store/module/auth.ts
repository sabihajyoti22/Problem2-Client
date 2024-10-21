import { defineStore } from 'pinia'
import axios from 'axios'

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null
    }
  },
  getters: {
    getProfile: (state) => state.user
  },
  actions: {
    signUp(payload: any) {
      return axios.post('/auth/signup', payload)
    }
  }
})

export { useAuthStore }