<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.png" alt="logo" />
      </div>
      <div class="buttons">
        <button @click="showModalLogIn" class="button">LogIn</button>
        <LogIn v-show="isModalLogInVisible" @close="closeModal" />
        <button @click="showModal" class="button">SignUp</button>
        <SignUp v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
    <div class="bottom-shadow"></div>
  </div>
</template>

<script>
import SignUp from "../auth/SignUp.vue";
import LogIn from "../auth/LogIn.vue";
export default {
  name: "HeaderStart",
  components: {
    SignUp,
    LogIn,
  },
  data() {
    return {
      isModalLogInVisible: false,
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      console.log("showed");
    },
    showModalLogIn() {
      this.isModalLogInVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isModalLogInVisible = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
.header {
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  border: none;
  .logo {
    padding-top: 10px;
  }
  img {
    height: 70px;
    border-radius: 10px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 250px;
    padding-top: 10px;

    .button {
      width: 110px;
      color: white;
      background-color: black;
      font-family: "Montserrat", sans-serif;
      border: none;
      border-radius: 10px;
      height: 100%;
    }

    .button:hover {
      color: black;
      background-color: white;
      border: 1px solid black;
    }
  }
}
.bottom-shadow {
  border-bottom: 1px solid rgb(198, 195, 195);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  height: 10px;
}
@media screen and (max-width: 1150px) {
  .header .buttons .button {
    width: 90px;
    height: 90%;
  }
}
@media screen and (max-width: 700px) {
  .header .buttons .button {
    width: 60px;
    height: 60%;
    font-size: 13px;
  }
}
@media screen and (max-width: 470px) {
  .header .logo {
    margin-right: 30px;
  }
  .header .buttons {
    max-width: 250px;
    width: 50%;
  }
}
@media screen and (max-width: 340px) {
  .header .buttons .button {
    width: 50px;
    height: 50%;
    font-size: 11px;
  }
  .header .logo {
    margin-right: 10px;
  }
  .header img {
    height: 50px;
  }
}
</style>
