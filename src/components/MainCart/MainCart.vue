<template>
  <div class="main-cart">
    <div class="main-cart-box main-cart__main-cart-box">
      <a class="main-cart-button" @click="openCart">
        <div class="main-cart-button__title">Корзина</div>
        <div class="main-cart-button__counter">{{ CART.length }}</div>
      </a>
      <div class="main-cart--isEmpty" v-if="!CART.length">
        Тут пока пусто :(
      </div>
      <div class="main-cart-box-wrapper card-open">
        <div class="main-cart-list">
          <main-cart-item
            v-for="(item, index) in CART"
            :key="item.id"
            :cart_item_data="item"
            @increment="increment(index)"
            @decrement="decrement(index)"
          ></main-cart-item>
        </div>
        <div class="main-cart-total">
          <p class="main-cart-total__title">Итого</p>
          <p class="main-cart-total__price">{{ cartTotalCost }}₽</p>
        </div>
        <fancy-app>
          <button
            class="main-cart-order-button"
            href="#"
            data-fancybox
            data-src="#delivery"
            :disabled="!CART.length"
          >
            Оформить заказ
          </button>
        </fancy-app>
        <div class="main-cart-delivery">
          <a href="" class="main-cart-delivery__button delivery-button">
            <div class="delivery-button__content">
              <img src="../../assets/img/icons/delivery-icon.svg" alt="" />
              <div>Бесплатная доставка</div>
            </div>
          </a>
          <button class="main-cart-delivery__hide" @click="closeCart">
            Свернуть
          </button>
        </div>
      </div>
    </div>
  </div>
  <main-delivery-popup></main-delivery-popup>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainCartItem from "@/components/MainCart/MainCartItem.vue";
import MainDeliveryPopup from "../Popup/MainDeliveryPopup.vue";
import FancyApp from "../FancyApp.vue";

export default {
  name: "MainCart",
  computed: {
    ...mapGetters(["CART"]),

    cartTotalCost() {
      let result = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => sum + el);
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["INCREMENT_CART_ITEM", "DECREMENT_CART_ITEM"]),
    openCart() {
      return document
        .querySelector(".main-cart-box-wrapper")
        .classList.toggle("cart-open");
    },
    closeCart() {
      return document
        .querySelector(".main-cart-box-wrapper")
        .classList.remove("cart-open");
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  components: {
    MainCartItem,
    MainDeliveryPopup,
    FancyApp,
  },
};
</script>

<style lang="scss">
@import "../../styles/vars";
@import "../../styles/mixins";

.main-cart {
  &__main-cart-box {
    position: relative;
    padding: 16px 10px;
    background: #ffffff;
    border-radius: 12px;
  }
}

@include respond-to(320px) {
  .main-cart {
    &--isEmpty {
      display: none;
    }
  }
}

@include respond-to(768px) {
  .main-cart {
    &__main-cart-box {
      width: 300px;
    }
  }
}

@include respond-to(1024px) {
  .main-cart {
    &__main-cart-box {
      width: 300px;
      margin-top: 72px;
      position: relative;
    }
    &--isEmpty {
      display: block;
      font-size: 16px;
      line-height: 21px;
    }
  }
}

.main-cart-box {
  &__text {
    display: none;
    font-size: 16px;
    line-height: 21px;
  }
}

@include respond-to(1024px) {
  .main-cart-box {
    &__text {
      display: block;
      margin-top: 16px;
    }
  }
}

.main-cart-button {
  @include flex(space-between, center, null);
  width: 100%;
  padding: 0 0 8px;
  font-family: "Nunito-Regular", sans-serif;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &__title {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
  }

  &__counter {
    @include flex(center, center, null);
    font-size: 10px;
    line-height: 14px;
    background: $buttonBackgroundColor;
    width: 32px;
    height: 16px;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.3s;
  }
}

@include respond-to(768px) {
  .main-cart-button {
    justify-content: space-between;
    gap: 27px;
  }
}

@include respond-to(1024px) {
  .main-cart-button {
    &__title {
      font-size: 24px;
      line-height: 24px;
    }
  }
}

.main-cart-box-wrapper {
  position: absolute;
  z-index: 3;
  background: #ffffff;
  width: 300px;
  padding: 0 16px 24px 16px;
  transform: translateX(-500%);
  transition: 0.3s all;
}

.cart-open {
  transform: translateX(-50%);
  left: 50%;
}

.main-cart-total {
  @include flex(space-between, center, null);
  padding: 13px 0 19px;
}

@include respond-to(1024px) {
  .main-cart-total {
    font-size: 16px;
    line-height: 16px;
  }
}

.main-cart-order-button {
  @include flex(center, center, null);
  width: 100%;
  min-height: 30px;
  border: none;
  background: #ff7020;
  color: #ffffff;
  border-radius: 8px;
  font-size: inherit;
  line-height: 12px;
  text-decoration: none;
  margin-bottom: 4px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: $backgroundColor;
  }

  &:focus {
    background: #f86310;
  }
}

@include respond-to(1024px) {
  .main-cart-order-button {
    font-size: 16px;
    line-height: 16px;
  }
}

.main-cart-delivery {
  @include flex(space-between, center, null);
  font-size: 10px;
  line-height: 14px;

  &__button {
    text-decoration: none;
    color: inherit;
  }

  &__hide {
    background: transparent;
    border: none;
    color: #b1b1b1;
    cursor: pointer;
  }
}

.delivery-button {
  &__content {
    @include flex(center, center, null);
    gap: 8px;
  }
}
</style>
