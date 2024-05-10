<template>
    <div class="flex flex-col justify-center items-center">
        <h2 class="text-violet-700 text-2xl mt-5 mb-4">Log in</h2>
        <form @submit.prevent="login(loginForm)" class="flex flex-col">
            <input type="email" placeholder="email" v-model="loginForm.email" class="border rounded-md border-violet-700 mb-3 h-[35px] p-1">
            <input type="password" placeholder="password" v-model="loginForm.password" class="border rounded-md border-violet-700 mb-3 h-[35px] p-1">
            <button class="w-[250px] h-[50px] bg-violet-700 text-white rounded-md text-xl">Log in</button>
        </form>
        <div class="mt-2">
            No account? <router-link class='text-violet-700 text-xl' :to="{name:'register_page'}">Register</router-link>
        </div>
        
    </div>
</template>

<script>
import {mapActions} from "vuex";

    export default {
        data(){
            return{
                loginForm:{
                    email: '',
                    password: ''
                }
            }
        },
        methods:{
            ...mapActions(['login'])
        },
        created(){

        }
    }
</script>

<style scoped>

</style>