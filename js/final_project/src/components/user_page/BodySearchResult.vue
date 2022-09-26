<template>
  <div>
    <div v-if="modalShow && videoUrl.length > 0" class="loading-box">
      <div class="btn_close">
        <button
          @click="closeModal"
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal__data">
        <img
          :src="`https://image.tmdb.org/t/p/original/${poster_path}`"
          alt="poster"
        />
        <div class="modal__data_rght">
          <h4>{{ search_title }}</h4>
          <p class="release_date">
            realise date:
            <span
              ><i>{{ release_date }}</i></span
            >
          </p>
          <p class="modal_overview">{{ overview }}</p>
          <div class="modal_link" v-if="videoUrl[0].key !== null">
            <a
              :href="`https://www.youtube.com/embed/${videoUrl[0].key}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              watch trailer <font-awesome-icon icon="fa-solid fa-play"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="modalShow" class="loading-box">
      <div class="btn_close">
        <button
          @click="closeModal"
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal__data">
        <div class="modal__data_rght">
          <h4>DATA NOT FOUND</h4>
        </div>
      </div>
    </div>
    <div class="container__result">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        class="pagin_top"
      ></b-pagination>
      <div
        v-if="searches.length > 0"
        class="middle_cont d-flex flex-wrap justify-content-between"
      >
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
            rate:
            <span v-bind:class="search.vote_average >= 7 ? `green` : `red`">{{
              search.vote_average
            }}</span>
          </p>
          <b-button :id="search.id" @click="showId">More...</b-button>
        </div>
      </div>
      <div v-else class="not_found"><h3>DATA NOT FOUND</h3></div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        class="pagin_bottom"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faPlay);
import { library } from "@fortawesome/fontawesome-svg-core";
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 20,
      modalShow: false,
      searchId: "",
      search_title: "",
      overview: "",
      poster_path: "",
      release_date: "",
    };
  },
  watch: {
    currentPage(next) {
      this.$store.dispatch("getSearchPerPage", next);
    },
  },
  computed: {
    searches() {
      return this.$store.getters.getSearch;
    },
    rows() {
      return this.$store.getters.getTotal;
    },
    videoUrl() {
      return this.$store.getters.getVideoUrl;
    },
  },
  methods: {
    showId(e) {
      let id = parseInt(e.target.id);
      this.$store.commit("SET_VIDEO_ID", id);
      this.$store.dispatch("getVideo");
      this.modalShow = true;
      this.searchId = id;
      console.log(this.serchData);
      const searchIndex = this.searches.findIndex((search) => search.id == id);
      this.search_title = this.searches[searchIndex].original_title;
      this.overview = this.searches[searchIndex].overview;
      this.poster_path = this.searches[searchIndex].poster_path;
      this.release_date = this.searches[searchIndex].release_date;
    },
    closeModal() {
      this.modalShow = false;
      console.log("clicked");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
.not_found {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 40px;
  color: #af2301;
}
.loading-box {
  position: fixed;
  top: 40%;
  width: 60%;
  margin: auto;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.894);
  box-shadow: 0px 0px 9px -2px white;
  z-index: 11;
  text-align: center;
}
.modal__data_rght {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.modal__data_rght h4 {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  padding: 5px;
  color: white;
}
.modal__data_rght .release_date {
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  padding: 5px;
  color: white;
  align-self: flex-start;
}
.modal__data {
  display: flex;
  justify-content: space-between;
}
.modal_overview {
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  color: white;
  display: block;
}
.modal__data img {
  max-width: 250px;
}
.modal_link a {
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  padding: 5px;
  color: white;
  text-decoration: none;
}
.modal_link:hover a {
  color: #787979;
}
.modal_link a:active {
  color: #4e4e4e;
}
.modal_link {
  margin-bottom: 30px;
}
.modal_link:hover {
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
}
.container__result {
  max-width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 20px;
}
.btn-close {
  position: absolute;
  right: 0;
  padding: 10px;
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
  max-width: 20%;
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
.pagination {
  --bs-pagination-color: rgba(0, 0, 0, 0.327);
  --bs-pagination-border-width: 1px;
  --bs-pagination-border-color: transparent;
  --bs-pagination-border-radius: 0.375rem;
  --bs-pagination-hover-box-shadow: 0px 2px 6px -1px rgb(90 90 90);
}
.page-link:hover {
  z-index: 2;
  color: rgba(0, 0, 0, 0.627);
  background-color: transparent;
  border-color: transparent;
  box-shadow: 0px 2px 6px -1px rgb(90 90 90);
  border-radius: 10%;
}
.page-link.active,
.active > .page-link {
  z-index: 3;
  color: rgb(0, 0, 0);
  background-color: transparent;
  border-color: transparent;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  border-radius: 10%;
}
.page-link:focus {
  z-index: 3;
  color: rgb(0, 0, 0);
  background-color: transparent;
  outline: 0;
  border-color: transparent;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
}
.pagin_bottom {
  margin: 50px 150px 20px 150px;
}
.pagin_top {
  margin: 20px 150px 50px 150px;
}
.middle_cont {
  margin: 50px auto;
}
.modal {
  position: absolute;
  z-index: 17;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.544);
}
</style>
