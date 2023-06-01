<template>
  <fancy-app>
    <swiper :slides-per-view="1">
      <swiper-slide>
        <h2 class="main-cards__title">Бурегры</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="burger in BURGERS"
            :key="burger.id"
            :product_data="burger"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${burger.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Закуски</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="snake in SNAKES"
            :key="snake.id"
            :product_data="snake"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${snake.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Хот-доги</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="hotDog in HOT_DOGS"
            :key="hotDog.id"
            :product_data="hotDog"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${hotDog.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Комбо</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="combo in COMBOS"
            :key="combo.id"
            :product_data="combo"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${combo.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Шаурма</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="burrito in BURRITOS"
            :key="burrito.id"
            :product_data="burrito"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${burrito.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Пицца</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="pizza in PIZZAS"
            :key="pizza.id"
            :product_data="pizza"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${pizza.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Вок</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="wok in WOKS"
            :key="wok.id"
            :product_data="wok"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${wok.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Десерты</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="dessert in DESSERTS"
            :key="dessert.id"
            :product_data="dessert"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${dessert.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h2 class="main-cards__title">Соусы</h2>
        <div class="main-cards-box">
          <main-card-item
            v-for="sauce in SAUCES"
            :key="sauce.id"
            :product_data="sauce"
            @addToCart="addToCart"
            data-fancybox
            :data-src="`#${sauce.id}`"
          >
          </main-card-item>
        </div>
      </swiper-slide>
    </swiper>
  </fancy-app>
  <main-card-popup
    v-for="popupBurger in BURGERS"
    :key="`#${popupBurger.id}`"
    :popup="popupBurger"
    @addToCart="addToCart"
    @increment="popupBurger.quantity++"
    @decrement="
      popupBurger.quantity > 1
        ? popupBurger.quantity--
        : (popupBurger.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupSnake in SNAKES"
    :key="`#${popupSnake.id}`"
    :popup="popupSnake"
    @addToCart="addToCart"
    @increment="popupSnake.quantity++"
    @decrement="
      popupSnake.quantity > 1
        ? popupSnake.quantity--
        : (popupSnake.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupHotDogs in HOT_DOGS"
    :key="`#${popupHotDogs.id}`"
    :popup="popupHotDogs"
    @addToCart="addToCart"
    @increment="popupHotDogs.quantity++"
    @decrement="
      popupHotDogs.quantity > 1
        ? popupHotDogs.quantity--
        : (popupHotDogs.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupCombo in COMBOS"
    :key="`#${popupCombo.id}`"
    :popup="popupCombo"
    @addToCart="addToCart"
    @increment="popupCombo.quantity++"
    @decrement="
      popupCombo.quantity > 1
        ? popupCombo.quantity--
        : (popupCombo.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupBurrito in BURRITOS"
    :key="`#${popupBurrito.id}`"
    :popup="popupBurrito"
    @addToCart="addToCart"
    @increment="popupCombo.quantity++"
    @decrement="
      popupBurrito.quantity > 1
        ? popupBurrito.quantity--
        : (popupBurrito.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupPizza in PIZZAS"
    :key="`#${popupPizza.id}`"
    :popup="popupPizza"
    @addToCart="addToCart"
    @increment="popupPizza.quantity++"
    @decrement="
      popupPizza.quantity > 1
        ? popupPizza.quantity--
        : (popupPizza.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupWok in WOKS"
    :key="`#${popupWok.id}`"
    :popup="popupWok"
    @addToCart="addToCart"
    @increment="popupWok.quantity++"
    @decrement="
      popupWok.quantity > 1 ? popupWok.quantity-- : (popupWok.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupDessert in DESSERTS"
    :key="`#${popupDessert.id}`"
    :popup="popupDessert"
    @addToCart="addToCart"
    @increment="popupDessert.quantity++"
    @decrement="
      popupDessert.quantity > 1
        ? popupDessert.quantity--
        : (popupDessert.quantity = 1)
    "
  >
  </main-card-popup>
  <main-card-popup
    v-for="popupSauce in SAUCES"
    :key="`#${popupSauce.id}`"
    :popup="popupSauce"
    @addToCart="addToCart"
    @increment="popupSauce.quantity++"
    @decrement="
      popupSauce.quantity > 1
        ? popupSauce.quantity--
        : (popupSauce.quantity = 1)
    "
  >
  </main-card-popup>
</template>
<script>
import MainCardItem from "./MainCardItems/MainCardItem.vue";
import MainCardPopup from "./Popup/MainCardPopup.vue";
import { mapGetters, mapActions } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import FancyApp from "./FancyApp.vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default {
  components: {
    MainCardItem,
    MainCardPopup,
    Swiper,
    SwiperSlide,
    FancyApp,
  },
  computed: {
    ...mapGetters([
      "BURGERS",
      "SNAKES",
      "HOT_DOGS",
      "COMBOS",
      "BURRITOS",
      "PIZZAS",
      "WOKS",
      "DESSERTS",
      "SAUCES",
      "MENU",
    ]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars.scss";
@import "../styles/mixins";

.main-cards {
  width: 100%;
  overflow: hidden;

  &__title {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 16px;
  }
}

@include respond-to(1024px) {
  .main-cards {
    &__title {
      font-size: 40px;
      line-height: 48px;
      margin: 0 0 24px;
    }
  }
}

.main-cards-box {
  @include flex(null, null, null);
  gap: 10px;
  flex-wrap: wrap;
}

@include respond-to(768px) {
  .main-cards-box {
    gap: 20px;
  }
}

@include respond-to(1024px) {
  .main-cards-box {
    gap: 30px;
  }
}
</style>
