<template>
  <div>
    <HeaderOfPage />
    <BodyUserPage />
    <GlobalLoader v-if="!getLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeaderOfPage from "../../components/user_page/HeaderOfPage.vue";
import BodyUserPage from "../../components/user_page/BodyUserPage.vue";
import GlobalLoader from "../../components/GlobalLoader.vue";
export default {
  components: {
    HeaderOfPage,
    BodyUserPage,
    GlobalLoader,
  },
  methods: {
    ...mapActions("auth", {
      autoLogin: "autoLogin",
    }),
    ...mapGetters("movies", {
      getLoading: "getLoading",
    }),
  },
  mounted() {
    this.autoLogin();
    console.log("mounted", this.autoLogin());
  },
};
</script>
<style></style>
