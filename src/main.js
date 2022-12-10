import { createApp } from 'vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import App from './App.vue'

AOS.init()

createApp(App).mount('#app')