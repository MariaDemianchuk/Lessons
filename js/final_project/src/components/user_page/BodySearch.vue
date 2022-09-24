<template>
  <div class="container__search">
    <b-field label="Title">
      <b-input
        placeholder="Enter movie title..."
        type="search"
        loading="true"
        v-model="title"
      >
      </b-input>
    </b-field>
    <b-field label="Year">
      <b-input
        placeholder="Enter release year..."
        type="search"
        loading="true"
        v-model="year"
      >
      </b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      year: "",
    };
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
}
</style>
