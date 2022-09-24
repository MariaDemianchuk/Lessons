<template>
  <div id="app">
    <router-view>
      <StartPage />
    </router-view>
    <FooterAll />
  </div>
</template>

<script>
import StartPage from "./views/start_page/StartPage.vue";
import FooterAll from "../src/components/FooterAll.vue";
export default {
  components: {
    StartPage,
    FooterAll,
  },
};
</script>

<style lang="scss"></style>
