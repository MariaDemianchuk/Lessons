<template>
  <div class="cont">
    <h2>
      <b><i>HOT NEWS</i></b>
    </h2>
    <carousel
      :per-page="4"
      :mouse-drag="false"
      :autoplay="true"
      :autoplayHoverPause="true"
      :autoplayTimeout="3000"
      :loop="true"
      :perPageCustom="[
        [1900, 4],
        [1800, 4],
        [1700, 4],
        [1600, 4],
        [1500, 4],
        [1400, 4],
        [1300, 4],
        [1200, 3],
        [1100, 3],
        [1000, 3],
        [890, 2],
        [700, 2],
        [600, 2],
        [250, 1],
      ]"
    >
      <slide v-for="art in news" :key="art.articleId" :art="art">
        <b-card class="card__slide">
          <b-card-img class="card__img" :src="art.imageUrl"></b-card-img>
          <b-card-text class="card__date">{{
            art.pubDate.substring(0, 10)
          }}</b-card-text>
          <h3>
            <b>{{
              art.title.length > 50
                ? art.title.substring(0, 50) + "..."
                : art.title
            }}</b>
          </h3>
          <b-card-text class="card__text">{{
            art.description.substring(0, 200) + "..."
          }}</b-card-text>
          <b-button>
            <a :href="art.url" target="_blank" rel="noopener noreferrer">
              Read more..
            </a>
          </b-button>
        </b-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "NewsSlider",
  data() {
    return {
      featuresOpen: false,
    };
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
  computed: {
    news() {
      return this.$store.getters.getNews;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
.cont {
  max-width: 90%;
  margin: 0 auto;
}
h2 {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 30px;
  padding: 10px;
}
h3 {
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 18px;
}
.card__text {
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 13px;
  font-style: italic;
}
.card__img {
  height: 210px;
}
a {
  text-decoration: none;
  color: white;
}
.btn-secondary:hover a {
  color: black;
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
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__slide {
  height: 500px;
  margin: 10px;
}
.card__date {
  color: rgb(171, 167, 167);
  position: relative;
  font-style: italic;
}
@media screen and (max-width: 400px) {
  .btn-secondary {
    font-size: 13px;
  }
}
</style>
