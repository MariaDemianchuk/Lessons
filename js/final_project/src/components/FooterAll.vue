<template>
  <div class="footer__all">
    <div class="cont">
      <div class="wrapper">
        <img src="../assets/logo.png" alt="logo" />
        <div class="footer__social">
          <div>
            <a href="https://www.instagram.com/" target="_blank">
              <div class="footer__social__bg">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/" target="_blank">
              <div class="footer__social__bg">
                <font-awesome-icon icon="fa-brands fa-square-facebook" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/" target="_blank">
              <div class="footer__social__bg">
                <font-awesome-icon icon="fa-brands fa-square-twitter" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/" target="_blank">
              <div class="footer__social__bg">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="footer__all_end">
        <p class="footer__all_end_text">2022 - MOVIE ClUB</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faInstagram,
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faSquareFacebook, faSquareTwitter, faLinkedin);
import { library } from "@fortawesome/fontawesome-svg-core";
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap");
.footer__all {
  height: 10%;
  width: 100%;
  background: black;
  box-sizing: border-box;
  box-shadow: 0px 0px 19px -1px rgb(155 15 15);
  padding: 0;

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
  .footer__social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
  }
  .footer__social a {
    text-decoration: none;
    color: white;
    font-size: 40px;
  }
  .footer__social a:hover {
    color: rgb(108 65 65);
  }
}
</style>
