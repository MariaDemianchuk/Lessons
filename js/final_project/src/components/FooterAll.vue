<template>
  <div class="footer">
    <div class="cont">
      <div class="wrapper">
        <img src="../assets/logo.png" alt="logo" />
        <div></div>
      </div>
      <div class="footer_end">
        <p class="footer_end_text">2022 - MOVIE ClUB</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
.footer {
  height: 10%;
  width: 100%;
  background: black;
  box-sizing: border-box;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);

  .wrapper {
    display: flex;
    justify-content: space-between;
  }
  .cont {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_end {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &_end_text {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    color: white;
    font-size: 15px;
    font-style: italic;
    margin: 0;
  }
  img {
    height: 80px;
    width: 80px;
  }
}
</style>
