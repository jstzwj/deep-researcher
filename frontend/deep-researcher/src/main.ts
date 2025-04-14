import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import './assets/main.css'
import { createPinia } from 'pinia'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(i18n)
app.use(pinia)
// app.use(Antd)
app.use(Toast, { position: 'bottom-center' })

app.mount('#app')
