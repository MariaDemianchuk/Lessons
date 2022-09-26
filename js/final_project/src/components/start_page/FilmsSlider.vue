<template>
  <div class="cont">
    <h2>UNCOMING SOON...</h2>
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="ind in 10"
        :key="ind"
        class="bottom__block"
        @mouseover="Show()"
        @mouseleave="Close()"
      >
        <img :src="imgLinkId(ind)" alt="image" />
        <div v-show="isHover">
          <div class="bottom_block_title bottom_block_text">
            <p class="bottom_block_title">
              {{ upcoming[ind].original_title }}
            </p>
            <p class="bottom_block_overwiew">{{ upcoming[ind].overview }}</p>
            <p>ORIGINAL LANGUAGE: {{ showLang(ind) }}</p>
            <p>RELEASE DATE: {{ upcoming[ind].release_date }}</p>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
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
      isHover: false,
      num: 0,
      settings: {
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        focusOnSelect: true,
      },
    };
  },
  beforeMount() {
    this.$store.dispatch("getUpcoming");
  },
  computed: {
    upcoming() {
      return this.$store.getters.getUpcoming;
    },
  },
  methods: {
    imgLinkId(index) {
      let link =
        "https://image.tmdb.org/t/p/original" +
        this.upcoming[index].backdrop_path;
      return link;
    },
    Show() {
      this.isHover = true;
    },
    Close() {
      this.isHover = false;
    },
    showLang(index) {
      switch (this.upcoming[index].original_language) {
        case "en":
          return "English";
        case "ja":
          return "Japanese";
        default:
          this.lang = "English";
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap");
.cont {
  max-width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
}
h2 {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 30px;
  padding: 10px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.bottom__block {
  width: 100%;
  padding: 3px;
  position: relative;
}
.bottom__block img {
  width: 100%;
}
.bottom_block_title {
  position: absolute;
  font-family: "Rubik Dirt", cursive;
  font-size: 30px;
  top: 5%;
  left: 3%;
  right: 3%;
  color: white;
  text-align: center;
}
.bottom_block_text {
  font-size: 17px;
  bottom: 10%;
  font-family: "Comfortaa", cursive;
  padding: 100px 30px 40px 30px;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.568);
  z-index: 10;
}
.bottom_block_overwiew {
  max-width: 70%;
  margin: 0 auto;
  padding: 20px;
}
.slick-dots {
  position: absolute;
  transform: rotate(90deg);
  right: -190px;
  bottom: 40%;
  list-style: none;
  text-align: center;
  margin: 0px 3px;
  padding: 1% 1% 1% 1.5%;
  border-left: 3px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 500px;
  border: none;
}
.slick-dots li button:before {
  font-size: 10px;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  color: transparent;
  background-color: white;
  opacity: 0.6;
  width: 12px;
  height: 12px;
}
.slick-dots li.slick-active button:before {
  opacity: 1;
  color: transparent;
  background-color: white;
  box-shadow: 0px 0px 19px 3px rgb(102 0 0);
}
@media screen and (max-width: 1100px) {
  .bottom_block_text {
    padding: 100px 10px 40px 10px;
  }
  .bottom_block_overwiew {
    max-width: 90%;
  }
}
@media screen and (max-width: 970px) {
  .bottom_block_title {
    font-size: 25px;
  }
  .bottom_block_text {
    font-size: 14px;
    padding: 70px 10px 20px 10px;
  }
}
@media screen and (max-width: 660px) {
  .bottom_block_title {
    font-size: 20px;
  }
  .bottom_block_text {
    font-size: 11px;
    padding: 50px 10px 10px 10px;
  }
  .slick-dots li button:before {
    font-size: 8px;
    width: 9px;
    height: 9px;
  }
}
@media screen and (max-width: 580px) {
  .bottom_block_title {
    font-size: 15px;
  }
  .bottom_block_text {
    font-size: 9px;
    padding: 40px 5px 5px 5px;
    overflow: hidden;
  }
  .slick-dots li button:before {
    font-size: 6px;
    width: 7px;
    height: 7px;
  }
}
@media screen and (max-width: 540px) {
  .slick-dots li button:before {
    display: none;
  }
  .bottom_block_overwiew {
    max-width: 100%;
    padding: 10px;
  }
}
</style>
