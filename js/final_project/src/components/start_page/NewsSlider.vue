<template>
  <swiper
    :slides-per-view="3"
    :space-between="30"
    :loop="false"
    :pagination="{ clickable: true }"
    :navigation="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="new1 in news" :key="new1.articleId">
      <b-card style="max-width: 20rem" class="mb-2">
        <b-card-img :src="new1.imageUrl"></b-card-img>
        <b-card-text>{{ new1.content.substring(0, 300) + "..." }}</b-card-text>
        <b-button :href="new1.url" variant="primary">Читати</b-button>
      </b-card>
    </swiper-slide>
  </swiper>
</template>

<script>
// import NewsBlock from "./NewsBlock.vue";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
SwiperCore.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
export default {
  components: {
    // NewsBlock,
    Swiper,
    SwiperSlide,
  },
  name: "NewsSlider",
  computed: {
    news() {
      return this.$store.getters.getNews;
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style></style>
