<template>
  <div>
    <BodySearch />
    <BodySlider />
    <BodySearchResult />
  </div>
</template>

<script>
import BodySlider from "./BodySlider.vue";
import BodySearch from "./BodySearch.vue";
import BodySearchResult from "./BodySearchResult.vue";
export default {
  components: {
    BodySlider,
    BodySearch,
    BodySearchResult,
  },
};
</script>

<style></style>
