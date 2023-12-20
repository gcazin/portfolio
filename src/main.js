import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from 'vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import App from './App.vue'
import router from './router'
import db from "../firebase/init.js";
import DatabaseService from "./services/database.service.js";

AOS.init()


const app = createApp(App)

app.config.globalProperties.databaseService = DatabaseService;
app.use(router)
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        },
    })
)
app.mount('#app')