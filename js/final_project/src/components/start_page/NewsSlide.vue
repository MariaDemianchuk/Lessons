<template>
  <b-card style="max-width: 20rem" class="mb-2">
    <b-card-img :src="art.imageUrl"></b-card-img>
    <b-card-text>{{ art.content.substring(0, 300) + "..." }}</b-card-text>
    <b-button :href="art.url" variant="primary">Читати</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    art: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
.block {
  border: 1px solid salmon;
  width: 100px;
  height: 40px;
}
</style>
