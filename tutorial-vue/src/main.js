import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//const API_URL = import.meta.env.VITE_DJANGOURL;
const API_URL = import.meta.env.VITE_DJANGOURL;
console.log("Backend URL:", API_URL);

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

