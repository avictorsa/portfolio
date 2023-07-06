import { createApp } from 'vue'
// import 'bootstrap/scss/bootstrap-grid.scss'
// import 'bootstrap/scss/_variables.scss'
// import 'bootstrap/scss/_transitions.scss'
// import 'bootstrap/scss/_offcanvas.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'bootstrap'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
