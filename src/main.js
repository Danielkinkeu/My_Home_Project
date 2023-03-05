import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Parcourir from './views/Parcourir.vue'
import Sign from './views/Sign.vue'
import Log from './views/Log.vue'
import {createRouter, createWebHistory} from 'vue-router'
import './assets/main.css'


const routes = [
    { path: '/', component: Home },
    { path: '/parcourir/', component: Parcourir },
    { path: '/Sign/', component: Sign },
    { path: '/Log/', component: Log },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

app.use(router)

app.mount('#app')