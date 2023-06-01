<template>
  <main class="main">
    <div class="wrapper">
      <div class="main-content">
        <main-cart></main-cart>
        <div class="main-cards main-content__main-cards">
          <swiper-slider></swiper-slider>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import swiperSlider from "@/components/SwiperSlider.vue";
import MainCart from "@/components/MainCart/MainCart.vue";

export default {
  name: "TheMain",
  components: {
    MainCart,
    swiperSlider,
  },
};
</script>

<style lang="scss">
@import "../styles/vars.scss";
@import "../styles/mixins.scss";

.wrapper {
  width: 300px;
  margin: 0 auto;
}

@include respond-to(768px) {
  .wrapper {
    width: 640px;
  }
}

@include respond-to(1024px) {
  .wrapper {
    width: 960px;
  }
}

@include respond-to(1440px) {
  .wrapper {
    width: 1290px;
  }
}

.main-content {
  &__main-cards {
    padding: 30px 0 80px;
  }
}

@include respond-to(1024px) {
  .main-content {
    display: flex;
    gap: 30px;

    &__main-cards {
      padding: 0 0 100px 0;
    }
  }
}

.main-cards {
  width: 100%;
  overflow: hidden;
}
</style>
