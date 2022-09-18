<template>
  <div id="app">
    <router-view>
      <StartPage />
    </router-view>
  </div>
</template>

<script>
import StartPage from "./views/start_page/StartPage.vue";
export default {
  components: {
    StartPage,
  },
};
</script>

<style lang="scss"></style>
