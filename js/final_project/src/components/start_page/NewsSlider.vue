<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    :loop="false"
    :pagination="{ clickable: true }"
    :navigation="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="art in news"
      :key="art.articleId"
      :art="art"
      style="max-width: 30rem"
      class="mb-2"
      v-show="art.imageUrl"
    >
      <b-card>
        <b-card-img :src="art.imageUrl"></b-card-img>
        <b-card-text>{{ art.title.substring(0, 300) + "..." }}</b-card-text>
        <b-button :href="art.url" variant="primary">Читати</b-button>
      </b-card>
      <!-- <news-slide></news-slide> -->
    </swiper-slide>
  </swiper>
</template>

<script>
// import NewsSlide from "./NewsSlide.vue";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "NewsSlider",
  components: {
    // NewsSlide,
    Swiper,
    SwiperSlide,
  },
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
