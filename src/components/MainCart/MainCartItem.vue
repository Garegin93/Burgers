<template>
  <div class="main-cart-item">
    <img
      class="main-cart-item__img"
      :src="require(`../../assets/img/images/${cart_item_data.image}.png`)"
      :alt="cart_item_data.name"
    />
    <div class="main-cart-text">
      <p class="main-cart-text__title">{{ cart_item_data.title }}</p>
      <p class="main-cart-text__weight">{{ cart_item_data.weight }}</p>
      <p class="main-cart-text__price">{{ cart_item_data.price }}₽</p>
    </div>
    <div class="main-cart-counter counter">
      <button class="counter__decrement" @click="decrementItem">-</button>
      <label for="counter-input-15"></label>
      <div class="counter__input">{{ cart_item_data.quantity }}</div>
      <button class="counter__increment" @click="incrementItem">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCartItem",
  props: {
    cart_item_data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    incrementItem() {
      this.$emit("increment");
    },
    decrementItem() {
      this.$emit("decrement");
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/vars";
@import "../../styles/mixins";

.main-cart-item {
  @include flex(null, center, null);
  gap: 6px;
  padding: 12px 0;
  border-bottom: 1px solid #f2f2f3;

  &:first-child {
    border-top: 1px solid #f2f2f3;
  }

  &__img {
    width: 64px;
    height: 52px;
    border-radius: 8px;
  }
}

.main-cart-text {
  align-self: start;

  &__weight {
    color: #b1b1b1;
    margin-bottom: 6px;
  }
}

.main-cart-counter {
  display: flex;
  margin-left: auto;
}

.counter {
  &__decrement {
    background: #f2f2f3;
    border: none;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    padding: 7px 14px 7px 8px;
    cursor: pointer;
  }

  &__input {
    background: #f2f2f3;
    font-size: 12px;
  }

  &__increment {
    background: #f2f2f3;
    border: none;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding: 7px 8px 7px 12px;
    cursor: pointer;
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
</style>
