<template>
  <div>
    <div class="container">
      <img src="../../assets/logo.png" alt="logo" />
      <div class="rght_block">
        <b-avatar variant="dark" size="5em"></b-avatar>
        <span class="user_name">{{ userEmail }}</span>
        <button @click="onLogout" class="button">Вийти</button>
      </div>
    </div>
    <div class="bottom-shadow"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", {
      userEmail: "getEmail",
    }),
  },
  methods: {
    ...mapActions("auth", {
      logout: "logout",
    }),
    onLogout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
.container {
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-top: 10px;
}
img {
  height: 100%;
  border-radius: 10px;
}
.user_name {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  font-size: 20px;
  margin: 0px 20px;
}
.button {
  width: 110px;
  color: white;
  background-color: black;
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}

.button:hover {
  color: black;
  background-color: white;
  border: 1px solid black;
}
.rght_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-shadow {
  border-bottom: 1px solid rgb(198, 195, 195);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  height: 10px;
}
</style>
