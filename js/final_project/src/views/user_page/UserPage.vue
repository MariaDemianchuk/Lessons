<template>
  <div>
    <HeaderOfPage />
    <BodyUserPage />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderOfPage from "../../components/user_page/HeaderOfPage.vue";
import BodyUserPage from "../../components/user_page/BodyUserPage.vue";
export default {
  components: {
    HeaderOfPage,
    BodyUserPage,
  },
  methods: {
    ...mapActions("auth", {
      autoLogin: "autoLogin",
    }),
  },
  mounted() {
    this.autoLogin();
    console.log("mounted", this.autoLogin());
  },
};
</script>
<style></style>
