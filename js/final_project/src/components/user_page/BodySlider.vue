<template>
  <div>
    <div class="container_popular">
      <h2>TOP 20 POPULAR NOW</h2>
      <VueSlickCarousel v-bind="settings">
        <div v-for="ind in 19" :key="ind" class="bottom__block">
          <div>
            <img
              v-if="populars[ind].backdrop_path"
              :src="`https://image.tmdb.org/t/p/original/${populars[ind].backdrop_path}`"
              alt="image"
            />
            <p class="popular_slider_title">{{ populars[ind].title }}</p>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.dispatch("getPopular");
  },
  computed: {
    populars() {
      return this.$store.getters.getPopular;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap");
.container_popular {
  margin: 0 auto;
  max-width: 90%;
  position: relative;
}
.popular_slider_title {
  position: absolute;
  font-family: "Rubik Dirt", cursive;
  font-size: 20px;
  color: white;
  bottom: 5%;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.568);
  left: 3%;
  right: 3%;
  text-align: center;
}
.slick-prev,
.slick-next {
  width: 30px;
  height: 30px;
  padding: 0;
}
.slick-prev:before,
.slick-next:before {
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  color: #81000070;
  border-radius: 50%;
  font-size: 30px;
}
.slick-next {
  right: -35px;
}
.slick-prev {
  left: -35px;
}
</style>
