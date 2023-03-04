import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Parcourir from './views/Parcourir.vue'
import {createRouter, createWebHistory} from 'vue-router'
import './assets/main.css'


const routes = [
    { path: '/', component: Home },
    { path: '/parcourir/', component: Parcourir },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

app.use(router)

app.mount('#app')