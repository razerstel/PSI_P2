import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

// Importa Bootstrap correctamente (ANTES de crear la aplicación)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')