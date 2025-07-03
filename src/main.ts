import './assets/main.css'
import './assets/tailwind-utilities.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueCleave from 'vue-cleave-component'

const app = createApp(App)

app.use(router)
app.use(VueCleave)

app.mount('#app')
