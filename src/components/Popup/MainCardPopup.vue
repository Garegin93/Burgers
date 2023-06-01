<template>
  <div :id="popup.id" class="popup popup-card">
    <div class="popup-body">
      <h3 class="popup-body__title">{{ popup.title }}</h3>
      <div class="popup-content">
        <img
          class="popup-content__img"
          :src="require(`../../assets/img/images/${popup.image}.png`)"
          :alt="popup.name"
        />
        <div class="popup-content-text">
          <p class="popup-content-text__description">{{ popup.description }}</p>
          <p class="popup-content-text__compound">
            <span>Состав:</span>
            <span>{{ popup.bread }}</span>
            <span>{{ popup.meat }}</span>
            <span>{{ popup.onion }}</span>
            <span>{{ popup.salad }}</span>
            <span>{{ popup.sauce }}</span>
            <span>{{ popup.weight }}, ккал {{ popup.kilocalories }}</span>
          </p>
        </div>
      </div>
      <div class="popup-cart">
        <div class="popup-cart-footer">
          <button
            class="popup-cart-footer__button"
            @click="addToCart"
            data-fancybox-close
          >
            Добавить
          </button>
          <div class="popup-cart-footer__counter counter">
            <button class="counter__decrement" @click="decrementItem">-</button>
            <div class="counter__input">
              {{ popup.quantity }}
            </div>
            <button class="counter__increment" @click="incrementItem">+</button>
          </div>
        </div>
        <p class="popup-cart-price">{{ popup.price }}₽</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  props: {
    popup: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.popup);
    },
    incrementItem() {
      this.$emit("increment", this.popup);
    },
    decrementItem() {
      this.$emit("decrement", this.popup);
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/vars.scss";
@import "../../styles/mixins.scss";

.popup {
  display: none;
}

@include respond-to(768px) {
  .popup-card {
    width: 684px;
    height: 432px;
    border-radius: 15px;
  }
}

.popup-body {
  &__title {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 12px;
  }
}

@include respond-to(768px) {
  .popup-body {
    width: 100%;
    &__title {
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 24px;
    }
  }
}

.popup-content {
  @include flex(null, null, column);
  gap: 12px;

  &__img {
    width: 300px;
    height: 232px;
    margin-bottom: 4px;
  }
}

@include respond-to(768px) {
  .popup-content {
    flex-direction: row;
    gap: 16px;

    &__img {
      width: 276px;
      height: 220px;
      margin-bottom: 38px;
    }
  }
}

.popup-content-text {
  @include flex(null, null, column);
  max-width: 300px;
  gap: 10px;

  &__compound {
    @include flex(null, null, column);
    font-size: 10px;
    line-height: 13px;
    gap: 2px;
    margin-bottom: 83px;

    & > span:first-child {
      font-weight: 600;
      margin-bottom: 2px;
    }

    & > span:last-child {
      color: #b1b1b1;
      margin-top: 2px;
      margin-bottom: 0;
    }
  }
}

@include respond-to(768px) {
  .popup-content-text {
    max-width: 344px;

    &__description {
      font-size: 16px;
      line-height: 21px;
    }

    &__compound {
      margin: 0;

      & > span {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}

.popup-cart {
  @include flex(null, null, column);
  gap: 16px;
}

@include respond-to(768px) {
  .popup-cart {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.popup-cart-footer {
  @include flex(space-between, null, null);

  &__button {
    background: $buttonBackgroundColor;
    border: none;
    padding: 9px 81px;
    border-radius: 8px;
    font-family: "Nunito-Regular", sans-serif;
    font-size: 12px;
    line-height: 12px;
    min-width: 218px;
    min-height: 30px;
    cursor: pointer;

    &:hover {
      background: $backgroundColor;
      color: #ffffff;
    }

    &:focus {
      background: $orangeTextColor;
      color: #ffffff;
    }
  }

  &__counter {
    @include flex(null, null, null);
    // width: 74px;
  }
}

@include respond-to(768px) {
  .popup-cart-footer {
    gap: 16px;

    &__button {
      font-size: 16px;
      line-height: 16px;
      min-width: 276px;
    }
  }
}

.counter {
  &__decrement {
    background: #f2f2f3;
    border: none;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    padding: 7px 14px 7px 8px;
  }

  &__input {
    @include flex(center, center, null);
    background: #f2f2f3;
    font-size: 12px;
  }

  &__increment {
    background: #f2f2f3;
    border: none;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding: 7px 8px 7px 12px;
  }
}

@include respond-to(768px) {
  .counter {
    &__input {
      font-size: 16px;
      line-height: 22px;
    }
  }
}

.popup-cart-price {
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: right;
}

@include respond-to(768px) {
  .popup-cart-price {
    font-size: 24px;
    line-height: 31px;
  }
}
</style>
