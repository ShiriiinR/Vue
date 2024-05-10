import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Main from '../pages/Main.vue'
import Profile from '../pages/Profile.vue'

const routes = [
    {
        path: '/',
        component: Login,
        name: 'login_page'
    },
    {
        path: '/register',
        component: Register,
        name: 'register_page'
    },
    {
        path: '/main',
        component: Main,
        name: 'main_page',
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile_page'
    },
    
]

export default createRouter({
    routes: routes,
    history: createWebHistory()
})