<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <div class="container__result d-flex flex-wrap justify-content-between">
      <div class="card" v-for="search in searches" :key="search.id">
        <div class="card-image">
          <figure>
            <img
              :src="
                search.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${search.backdrop_path}`
                  : `https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701689310.jpg`
              "
              alt="image"
            />
          </figure>
        </div>
        <p class="title">{{ search.original_title }}</p>
        <p class="subtitle">
          rate: <span>{{ search.vote_average }}</span>
        </p>
        <b-button>More...</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 10,
    };
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getSearch", next);
    },
  },
  mounted() {
    this.$store.dispatch("getSearch");
  },
  computed: {
    searches() {
      return this.$store.getters.getSearch;
    },
    rows() {
      return this.$store.getters.getPages;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
.container__result {
  max-width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
.red {
  color: red;
}
.green {
  color: green;
}
.card {
  border: none;
  color: transparent;
  margin: 5px 5px 5px 5px;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
}
.card:hover {
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
}
.card-content {
  padding: 0;
}
.title {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  padding: 5px;
}
.subtitle {
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 15px;
  text-align: start;
  padding: 5px;
  font-style: italic;
  align-self: flex-start;
}
.subtitle:not(:last-child) {
  margin-bottom: 0px;
}
.btn-secondary {
  --bs-btn-color: rgba(0, 0, 0, 0.327);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: rgba(0, 0, 0, 0.727);
  --bs-btn-hover-bg: transparent;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-focus-shadow: 0px 0px 19px -1px rgb(155 15 15);
  --bs-btn-active-color: rgb(0, 0, 0);
  --bs-btn-active-bg: transparent;
  --bs-btn-active-border-color: white;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #6c757d;
  --bs-btn-disabled-border-color: #6c757d;
}
</style>
