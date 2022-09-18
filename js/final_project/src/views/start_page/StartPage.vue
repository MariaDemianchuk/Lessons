<template>
  <div>
    <HeaderStart />
    <BodyStart />
  </div>
</template>

<script>
import HeaderStart from "../../components/start_page/HeaderStart.vue";
import BodyStart from "../../components/start_page/BodyStart.vue";

export default {
  name: "StartPage",
  components: {
    HeaderStart,
    BodyStart,
  },
};
</script>
