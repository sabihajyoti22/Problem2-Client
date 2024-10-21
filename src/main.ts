import { createApp } from 'vue'
import '../public/assets/styles/style.css'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import pinia from './store'
import errorCheck from './plugins/errorCheck'

const app = createApp(App)

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

// app.config.globalProperties.$axios = axios
app.use(router)
app.use(pinia)
app.use(errorCheck)
app.mount('#app')
