<template>
  <div>
    <HeaderStart />
    <BodyStart />
  </div>
</template>

<script>
import HeaderStart from "./HeaderStart.vue";
import BodyStart from "./BodyStart.vue";

export default {
  name: "StartPage",
  components: {
    HeaderStart,
    BodyStart,
  },
};
</script>
