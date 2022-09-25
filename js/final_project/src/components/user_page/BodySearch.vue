<template>
  <div class="container__search">
    <b-form>
      <b-field label="Title" label-for="title">
        <b-input
          placeholder="Enter movie title..."
          type="search"
          loading="true"
          id="title"
          v-model="title"
        >
        </b-input>
      </b-field>
      <b-field label="Year" label-for="year">
        <b-input
          placeholder="Enter release year..."
          type="search"
          loading="true"
          id="year"
          v-model="year"
        >
        </b-input>
      </b-field>
      <b-button variant="outline-dark" size="lg" class="button">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass fa-lg"
      /></b-button>
    </b-form>
    <p>{{ title }}</p>
    <p>{{ year }}</p>
  </div>
</template>

<script>
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);
import { library } from "@fortawesome/fontawesome-svg-core";
export default {};
</script>

<style scoped>
.container__search {
  margin: 0 auto;
  max-width: 90%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
.label:not(:last-child) {
  margin-bottom: 0;
}
</style>
