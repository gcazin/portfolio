import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from 'vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import App from './App.vue'
import router from './router'

AOS.init()

const app = createApp(App)

app.use(router)
app.mount('#app')