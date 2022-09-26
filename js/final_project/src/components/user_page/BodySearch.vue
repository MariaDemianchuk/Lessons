<template>
  <div class="container__search">
    <b-field>
      <b-input placeholder="Enter movie title..." type="search" v-model="title">
      </b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    this.$store.dispatch("getSearchPerPage", "1");
    console.log("search mounted");
  },
  watch: {
    title(title) {
      this.$store.dispatch("getSearch", title);
    },
  },
};
</script>

<style scoped>
.container__search {
  margin: 0 auto;
  max-width: 90%;
  padding: 20px;
}
.form-control:focus {
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  border-color: rgba(0, 0, 0, 0.378);
}
.form-control {
  border-color: rgb(207 207 207);
  box-shadow: 0px 2px 6px -1px rgb(90 90 90);
  margin: 10px;
}
.button {
  border-color: rgb(207 207 207);
  box-shadow: 0px 2px 6px -1px rgb(90 90 90);
  background-color: white;
  padding: 10px 50px;
}
.button:hover {
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  border-color: rgba(0, 0, 0, 0.378);
}
.button:focus {
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
}
.btn-secondary {
  --bs-btn-hover-bg: white;
  --bs-btn-hover-border-color: white;
}
.field {
  margin: 10px 150px;
}
.label:not(:last-child) {
  margin-bottom: 0;
}
</style>
