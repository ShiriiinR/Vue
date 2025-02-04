import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAwesomePaginate)

app.mount('#app')
