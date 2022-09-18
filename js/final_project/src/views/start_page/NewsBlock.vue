<template>
  <div>{{ news }}</div>
</template>

<script>
export default {
  name: "NewsBlock",
  computed: {
    news() {
      return this.$store.getters.getNews;
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
};
</script>

<style></style>
