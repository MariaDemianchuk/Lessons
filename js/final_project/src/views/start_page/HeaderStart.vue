<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.png" alt="logo" />
      </div>
      <div class="buttons">
        <button>Вхід</button>
        <button>Реєстрація</button>
      </div>
    </div>
    <div class="bottom-shadow"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderStart",
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

    button {
      width: 110px;
      color: white;
      background-color: black;
      font-family: "Montserrat", sans-serif;
      border: none;
      border-radius: 10px;
    }

    button:hover {
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
</style>
