import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import pencil from '../packages'

const app = createApp(App)
app.use(pencil)
app.use(router)
app.mount('#app')

