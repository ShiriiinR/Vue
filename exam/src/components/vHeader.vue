<template>
  <header class="flex justify-between items-center px-4 py-2 bg-violet-700">
    <div class="flex gap-3 j items-center">
      <img
        class="rounded-full w-[50px] h-[50px] bg-white"
        :src="'https://test.ai-softdev.com/' + getCurrentUser?.avatar"
        alt=""
      />
      <router-link class="text-xl text-white" :to="{ name: 'profile_page' }">
        {{ getCurrentUser?.email }}
      </router-link>
    </div>
    <router-link class="text-xl text-white" :to="{ name: 'main_page' }">
      Main
    </router-link>
    <button @click="logout" class="text-white py-2 px-4 bg-red-600 rounded-2xl text-xl">
      Log out
    </button>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped></style>
