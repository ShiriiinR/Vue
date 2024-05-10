<script>
import Login from "./pages/Login.vue";
import Main from "./pages/Main.vue";
import Register from "./pages/Register.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Main,
    Register,
    Login,
  },
  methods: {
    ...mapActions(["loadCurrentUser"]),
  },
  created() {
    if (localStorage.getItem("token")?.length > 0) {
      this.loadCurrentUser();
    } else {
      this.$router.push({
        name: "login_page",
      });
    }
  },
};
</script>

<template>
  <div class="max-w-[1400px] mx-auto px-4">
    <router-view />
  </div>
</template>

<style scoped></style>
