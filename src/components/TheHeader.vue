<template>
  <header class="header">
    <div class="header__info">
      <a href="#" class="header__logo header-logo">
        <img
          class="header-logo__img"
          src="../assets/img/icons/logo.svg"
          alt="Logo."
      /></a>
      <div class="header__content">
        <div class="header__text header-text">
          <h1 class="header-text__title">
            Только самые <span>сочные бургеры!</span>
          </h1>
          <span class="header-text__description"
            >Бесплатная доставка от 599₽</span
          >
        </div>
        <img
          class="header__img"
          src="../assets/img/images/header-burger.png"
          alt="Big Hamburger."
        />
      </div>
    </div>
    <nav class="header__navigation header-navigation">
      <div class="header-navigation__categories header-navigation-categories">
        <button
          class="header-navigation-categories__button"
          v-for="(item, index) in MENU"
          :key="index"
          @click="sliderGoods(index)"
        >
          <img
            :src="require(`../assets/img/icons/${item.src}.svg`)"
            width="24"
            height="24"
            :alt="item.name"
          />
          <span>{{ item.name }}</span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import "swiper/css";

export default {
  name: "TheHeader",
  components: {},
  computed: {
    ...mapGetters(["MENU"]),
  },
  methods: {
    sliderGoods(i) {
      let swiperWrapper, swiperWidth;
      (swiperWrapper = document.querySelector(".swiper-wrapper")),
        (swiperWidth = swiperWrapper.offsetWidth);
      swiperWrapper.style.transform = `translateX(${-i * swiperWidth}px)`;
      swiperWrapper.style.transition = `all .5s`;
    },
  },
  mounted() {
    this.sliderGoods();
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";

.header {
  &__info {
    position: relative;
    min-height: 459px;
    overflow: hidden;

    &::after {
      position: absolute;
      content: "";
      width: 611px;
      height: 611px;
      background: $backgroundColor;
      border-radius: 50%;
      bottom: 0;
      right: calc(50% - 305px);
      z-index: -1;
    }
  }

  &__logo {
    @include flex(center, null, null);
    margin: 24px auto 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 38px;
  }

  &__img {
    display: block;
    width: 176px;
    height: 203px;
    margin: 0 auto;
  }

  &__text {
    text-align: center;
    color: #ffffff;
    max-width: 300px;
  }
}

@include respond-to(576px) {
  .header {
    &__info {
      &::after {
        width: 1575px;
        height: 1575px;
        right: calc(50% - 788px);
      }
    }
  }
}

@include respond-to(768px) {
  .header {
    &__info {
      min-height: 349px;

      &::after {
        width: 2540px;
        height: 2540px;
        right: calc(50% - 1270px);
      }
    }

    &__logo {
      margin-bottom: 42px;
    }

    &__content {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: start;
      gap: 35px;
    }

    &__img {
      margin: 0;
    }

    &__text {
      text-align: left;
      max-width: 300px;
    }
  }
}

@include respond-to(1024px) {
  .header {
    &__info {
      min-height: 466px;

      &::after {
        width: 2880px;
        height: 2880px;
        right: calc(50% - 1420px);
      }
    }

    &__logo {
      margin-bottom: 30px;
    }

    &__content {
      gap: 38px;
    }

    &__img {
      width: 253px;
      height: 290px;
    }

    &__text {
      max-width: 400px;
    }
  }
}

@include respond-to(1440px) {
  .header {
    &__content {
      gap: 58px;
    }
  }
}

.header-text {
  text-align: center;
  color: #ffffff;

  &__title {
    font-size: 30px;
    font-weight: 800;
    line-height: 36px;
    margin: 24px 0 16px;

    & > span {
      color: $orangeTextColor;
    }
  }
}

@include respond-to(768px) {
  .header-text {
    &__title {
      font-size: 36px;
      line-height: 43px;
      margin: 8px 0 26px;
    }
  }
}

@include respond-to(1024px) {
  .header-text {
    &__title {
      font-size: 50px;
      line-height: 60px;
      margin: 20px 0 52px;
    }
  }
}

/*----------nav----------*/

.header-navigation {
  &__categories {
    @include flex(start, null, null);
    overflow-x: scroll;
    gap: 8px;
    padding: 44px 8px 16px 1px;
    margin-left: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@include respond-to(768px) {
  .header-navigation {
    &__categories {
      padding: 30px 0;
      margin-left: 64px;
      gap: 12px;
    }
  }
}

@include respond-to(1024px) {
  .header-navigation {
    &__categories {
      gap: 24px;
      padding: 40px 0 50px;
      margin-left: 32px;
    }
  }
}

@include respond-to(1440px) {
  .header-navigation {
    &__categories {
      justify-content: center;
      margin-left: -50px;
    }
  }
}

.header-navigation-categories {
  &__button {
    @include flex(center, center, row);
    border: none;
    background: transparent;
    padding: 3px 8px;
    gap: 8px;
    font-family: "Nunito-Regular", sans-serif;
    font-size: 12px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.4s;

    &:hover {
      background: $backgroundColor;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #ff7020;
    }
  }
}

@include respond-to(1024px) {
  .header-navigation-categories {
    &__button {
      font-size: 16px;
      line-height: 22px;
      padding: 8px 14px;
    }
  }
}
</style>
