<template>
  <div class="main-cards-item">
    <img
      class="main-cards-item__img"
      :src="require(`../../assets/img/images/${product_data.image}.png`)"
      :alt="product_data.name"
    />
    <div class="main-cards-item-body">
      <p class="main-cards-item-body__price">{{ product_data.price }}₽</p>
      <p class="main-cards-item-body__title">{{ product_data.title }}</p>
      <p class="main-cards-item-body__weight">{{ product_data.weight }}</p>
      <button class="main-cards-item-body__button" @click.prevent="addToCart">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCardItem",
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  props: {
    product_data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/vars.scss";
@import "../../styles/mixins.scss";

.main-cards-item {
  @include flex(null, start, column);
  padding: 4px;
  width: 145px;
  height: 243px;
  background: #ffffff;
  border-radius: 18px;

  &__img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
}

@include respond-to(1024px) {
  .main-cards-item {
    padding: 12px;
    width: 300px;
    height: 411px;
    cursor: pointer;

    &__img {
      height: 220px;
    }
  }
}

.main-cards-item-body {
  width: 100%;

  &__price {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    margin: 10px 0 4px;
  }

  &__weight {
    font-weight: 600;
    color: #b1b1b1;
    margin: 16px 0 7px;
  }

  &__button {
    width: 100%;
    height: 30px;
    background: $buttonBackgroundColor;
    border: none;
    padding: 0;
    font-family: "Nunito-Regular", sans-serif;
    line-height: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: $backgroundColor;
      color: #ffffff;
    }

    &:focus {
      background: $orangeTextColor;
      color: #ffffff;
    }
  }
}

@include respond-to(1024px) {
  .main-cards-item-body {
    font-size: 16px;
    line-height: 21px;

    &__price {
      font-size: 24px;
      line-height: 24px;
      margin: 16px 0 8px;
    }

    &__weight {
      margin: 29px 0 8px;
    }

    &__button {
      height: 40px;
      font-size: 16px;
      line-height: 16px;
    }
  }
}
</style>
