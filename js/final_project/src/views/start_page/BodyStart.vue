<template>
  <div>
    <div class="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        indicators
        background="white"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide text="Менше часу на пошук, більше - на заробіток">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="500"
              src="../../assets/start_page/truck1.png"
              alt="image"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          text="Працюй зі списком своїх партнерів та шукай нових"
        >
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="500"
              src="../../assets/start_page/truck3.png"
              alt="image"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide text="Розміщуй заявку на дошці оголошень">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="500"
              src="../../assets/start_page/truck2.png"
              alt="image"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide text="Реєструйся та отримуй пропозиції вже сьогодні">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="500"
              src="../../assets/start_page/truck4.png"
              alt="image"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="block2">
      <div class="top">
        <div class="block">
          <div>
            <img
              class="icons"
              src="../../assets/start_page/forwarder.png"
              alt="forwarder"
            />
          </div>
          <div>
            <h2>Для перевізників</h2>
            <ul>
              <li>отримуй запити на перевезення</li>
              <li>повідомляй замовникам про вільну машину</li>
              <li>розміщуй пропозицію на дошці оголошень</li>
            </ul>
          </div>
        </div>
        <div class="block">
          <div>
            <img
              class="icons"
              src="../../assets/start_page/farm.png"
              alt="farm"
            />
          </div>
          <div>
            <h3>Для фермерів, трейдерів, агрохолдингів</h3>
            <ul>
              <li>вільні поблизу машини</li>
              <li>
                розміщуй пропозицію перевезення вантажу на дошці оголошень
              </li>
              <li>пошук машин та перевізників без публікації</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="top">
        <div class="block">
          <div>
            <img
              class="icons"
              src="../../assets/start_page/expeditor.png"
              alt="expeditor"
            />
          </div>
          <div>
            <h2>Для експедиторів</h2>
            <ul>
              <li>знайди машини в потрібному регіоні</li>
              <li>опитай своїх партнерів про готовність виконати замовлення</li>
              <li>розмісти заявку на дошці оголошень</li>
            </ul>
          </div>
        </div>
        <div class="block">
          <div>
            <img
              class="icons"
              src="../../assets/start_page/dispatcher.png"
              alt="dispatcher"
            />
          </div>
          <div>
            <h2>Для диспетчерів</h2>
            <ul>
              <li>отримуй повідомлення про знайдені машини</li>
              <li>створюй готові шаблони замовлень для пересилання</li>
              <li>працюй зі списком своїх партнерів</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <NewsBlock />
    </div>
  </div>
</template>

<script>
import NewsBlock from "./NewsBlock.vue";
export default {
  name: "BodyStart",
  components: {
    NewsBlock,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");
.carousel {
  margin-top: 20px;
}
p {
  color: white;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 35px;
}
.icons {
  width: 90px;
  margin-right: 50px;
}
.block {
  display: flex;
  justify-content: space-between;
  width: 40%;
}
.block2 {
  margin: 0 auto;
  max-width: 90%;
  margin-top: 100px;
}
.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
