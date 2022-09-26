<template>
  <div id="app">
    <router-view>
      <StartPage />
    </router-view>
    <FooterAll />
    <GlobalLoader v-if="loading" />
  </div>
</template>

<script>
import StartPage from "./views/start_page/StartPage.vue";
import FooterAll from "../src/components/FooterAll.vue";
import GlobalLoader from "../src/components/GlobalLoader.vue";
export default {
  components: {
    StartPage,
    FooterAll,
    GlobalLoader,
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
  },
};
</script>

<style lang="scss"></style>
