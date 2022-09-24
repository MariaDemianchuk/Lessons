<template>
  <div>
    <FilmSlider />
    <NewsSlider />
  </div>
</template>

<script>
import NewsSlider from "./NewsSlider.vue";
import FilmSlider from "./FilmsSlider.vue";

export default {
  name: "BodyStart",
  components: {
    NewsSlider,
    FilmSlider,
  },
};
</script>

<style scoped></style>
