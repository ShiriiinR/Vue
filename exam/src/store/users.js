import axios from "axios";
import router from "../router";

export default {
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        }
    },
    actions: {
        register(context, params) {
            axios.post('https://test.ai-softdev.com/auth/register', params)
                .then(res => {
                    // console.log(res.data);
                    localStorage.setItem('token', res.data.access_token)
                    router.push({
                        name: 'login_page'
                    })
                })
        },
        login({ commit }, params) {
            axios.post('https://test.ai-softdev.com/auth/login', params)
                .then(res => {
                    commit('setUser', res.data.data)
                    console.log(res.data.data);
                    localStorage.setItem('token', res.data.access_token)
                    router.push({
                        name: 'main_page'
                    })
                })
        },
        loadCurrentUser({commit}){
            axios.get('https://test.ai-softdev.com/auth/current-user', {
                headers:{
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(res =>{
                commit('setUser', res.data)
                console.log(res.data);
            }).catch(e => {
                if(e.response.status === 401){
                    localStorage.removeItem('token')
                    router.push({
                        name: 'login_page'
                    })
                }
            })
        },
        logout(){
            axios.post('https://test.ai-softdev.com/auth/logout', {}, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(res => {
                localStorage.removeItem('token')
                router.push({
                    name: 'login_page'
                })
            })
        },
        changeAvatar({ commit }, data) {
            const fd = new FormData();
            fd.append('avatar', data.avatar);
        
            axios.patch('https://test.ai-softdev.com/auth/user', fd, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                console.log(response.data);
                
            })
        },
        changePassword({commit}, data){
            axios.post('https://test.ai-softdev.com/auth/change-password', data, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                console.log(res.data);
            })
        }
    }
}