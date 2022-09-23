<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("database", {
      database: "getDataBase",
    }),
  },
};
</script>

<style></style>
