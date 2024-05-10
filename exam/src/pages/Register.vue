<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-violet-700 text-2xl mt-5 mb-4">Registration</h2>
    <form class="flex flex-col" @submit.prevent="register(registerForm)">
      <input
        type="email"
        placeholder="email"
        v-model="registerForm.email"
        class="border rounded-md border-violet-700 mb-3 h-[35px] p-1"
      />
      <input
        type="password"
        placeholder="password"
        v-model="registerForm.password"
        class="border rounded-md border-violet-700 mb-3 h-[35px] p-1"
      />
      <button class="w-[250px] h-[50px] bg-violet-700 text-white rounded-md text-xl">
        Registration
      </button>
    </form>
    <div class="mt-2">
      Have account?
      <router-link class="text-violet-700 text-xl" :to="{ name: 'login_page' }"
        >Log in</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      registerForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
  },
};
</script>

<style lang="scss" scoped></style>
