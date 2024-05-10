<template>
  <VHeader />
  <div>
    <v-form @formSubmit="changeAvatar(profileData)">
      <v-input  type="file" @change="onFileChange" placeholder="avatar"/>
      <v-button text="Сохранить" />
    </v-form>
    <v-form class="mt-10" @formSubmit="changePass">
      <v-input v-model="passwordData.new_password" type="password" placeholder="new password"/>
      <v-button text="Сохранить" />
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VHeader from "../components/vHeader.vue";
import VInput from "../components/vInput.vue";
import VForm from "../components/vForm.vue";
import VButton from "../components/vButton.vue";

export default {
  components: {
    VHeader,
    VInput,
    VForm,
    VButton
  },
  data() {
    return {
      profileData: {
        avatar: "",
      },
      passwordData:{
        new_password: "",
      }
    };
  },
  methods: {
    ...mapActions(["changeAvatar", "changePassword"]),
    changePass() {
      this.changePassword(this.passwordData);
    },
    onFileChange(event) {
      this.profileData.avatar = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
