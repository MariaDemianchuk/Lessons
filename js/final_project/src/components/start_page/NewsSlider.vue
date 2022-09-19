<template>
  <div style="max-width: 90%; margin: 0 auto">
    <h2>
      <b>Новини</b>
    </h2>
    <swiper
      :slides-per-view="4"
      :space-between="30"
      :loop="false"
      :navigation="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="swiper_block"
    >
      <swiper-slide
        v-for="art in news"
        :key="art.articleId"
        :art="art"
        style="max-width: 30rem"
        class="mb-2"
        v-show="art.imageUrl"
      >
        <b-card class="slide">
          <b-card-img class="card-img" :src="art.imageUrl"></b-card-img>
          <b-card-text class="art__date">{{
            art.pubDate.substring(0, 10)
          }}</b-card-text>
          <h3>
            <b>{{ art.title }}</b>
          </h3>
          <b-card-text class="card-text">{{
            art.description.substring(0, 200) + "..."
          }}</b-card-text>
          <b-button :href="art.url">Читати</b-button>
        </b-card>
        <!-- <news-slide></news-slide> -->
      </swiper-slide>
    </swiper>
  </div>
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
h2 {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 30px;
}
.swiper_block {
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: black;
  }
  .slide {
    height: 30rem;
    .art__date {
      color: rgb(171, 167, 167);
      position: relative;
      font-style: italic;
    }
    h3 {
      font-family: "Comfortaa", cursive;
      font-weight: 400;
      font-size: 17px;
    }
    .card-text {
      font-family: "Comfortaa", cursive;
      font-weight: 400;
      font-size: 12px;
      font-style: italic;
    }
    .card-img {
      max-height: 150px;
    }
    .btn-secondary {
      --bs-btn-color: #fff;
      --bs-btn-bg: black;
      --bs-btn-border-color: black;
      --bs-btn-hover-color: black;
      --bs-btn-hover-bg: white;
      --bs-btn-hover-border-color: black;
      --bs-btn-focus-shadow-rgb: 130, 138, 145;
      --bs-btn-active-color: #fff;
      --bs-btn-active-bg: #565e64;
      --bs-btn-active-border-color: #51585e;
      --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
      --bs-btn-disabled-color: #fff;
      --bs-btn-disabled-bg: #6c757d;
      --bs-btn-disabled-border-color: #6c757d;
      font-family: "Comfortaa", cursive;
      font-weight: 400;
      font-size: 17px;
    }
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .swiper-pagination-bullet-active {
    background: black;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 75%;
  }
}
</style>
