<template>
  <footer class="footer">
    <div class="wrapper footer__wrapper">
      <div class="footer-body">
        <a href="#" class="footer-logo">
          <img src="../assets/img/icons/footer-logo.svg" alt="Logo." />
        </a>
        <div class="footer-contacts">
          <div class="footer-order">
            <p class="footer-order__title">Номер для заказа</p>
            <div class="footer-order-number footer-order__footer-order-number">
              <img
                class="footer-order-number__img"
                src="../assets/img/icons/phone-icon.svg"
                alt="Phone."
              />
              <a href="tel:+7(930)833-38-11" class="footer-order-number__phone"
                >+7(930)833-38-11</a
              >
            </div>
          </div>
          <div class="footer-socials">
            <p class="footer-socials__title">Мы в соцсетях</p>
            <div
              class="footer-socials-icons footer-socials__footer-socials-icons"
            >
              <a href="#" class="footer-socials-icons__link">
                <footer-social-image-vk></footer-social-image-vk>
              </a>
              <a href="#" class="footer-socials-icons__link">
                <footer-social-image-telegram></footer-social-image-telegram>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div
          class="footer-copyright-text footer-copyright__footer-copyright-text"
        >
          <p class="footer-copyright__title">© YouMeal, 2022</p>
          <p class="footer-copyright__description">Design: Anastasia Ilina2</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterSocialImageVk from "./FooterSocials/FooterSocialImageVk.vue";
import FooterSocialImageTelegram from "./FooterSocials/FooterSocialImageTelegram.vue";

export default {
  name: "TheFooter",
  components: {
    FooterSocialImageVk,
    FooterSocialImageTelegram,
  },
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/vars";

.footer {
  background: #ffffff;

  &__wrapper {
    padding: 24px 0 26px;
  }
}

@include respond-to(768px) {
  .footer {
    &__wrapper {
      padding: 40px 0 26px;
    }
  }
}

@include respond-to(1024px) {
  .footer {
    &__wrapper {
      padding: 52px 0 39px;
    }
  }
}

.footer-body {
  @include flex(null, null, column);
  gap: 24px;
}

@include respond-to(768px) {
  .footer-body {
    gap: 36px;
  }
}

@include respond-to(1024px) {
  .footer-body {
    flex-direction: row;
    justify-content: space-between;
  }
}

@include respond-to(1440px) {
  .footer-body {
    flex-direction: row;
    justify-content: start;
    gap: 360px;
  }
}

.footer-logo {
}

@include respond-to(1024px) {
  .footer-logo > img {
    width: 304px;
    height: 66px;
  }
}

.footer-contacts {
  @include flex(null, null, column);
  gap: 24px;
  font-size: 18px;
  line-height: 18px;
}

@include respond-to(768px) {
  .footer-contacts {
    flex-direction: row;
    gap: 177px;
  }
}

@include respond-to(1024px) {
  .footer-contacts {
    gap: 50px;
    font-size: 24px;
    line-height: 24px;
  }
}

@include respond-to(1440px) {
  .footer-contacts {
    gap: 126px;
  }
}

.footer-order {
  &__footer-order-number {
    @include flex(null, null, null);
    gap: 4px;
    align-items: center;
    margin-top: 8px;
    font-size: 12px;
    line-height: 16px;
  }
}

@include respond-to(1024px) {
  .footer-order {
    &__footer-order-number {
      margin-top: 24px;
    }
  }
}

.footer-order-number {
  &__phone {
    text-decoration: none;
    color: inherit;
  }
}

@include respond-to(1024px) {
  .footer-order-number {
    &__phone {
      font-size: 16px;
      line-height: 21px;
    }
  }
}

.footer-socials {
  &__footer-socials-icons {
    @include flex(null, null, null);
    gap: 16px;
    margin-top: 8px;
  }
}

@include respond-to(1024px) {
  .footer-socials {
    &__footer-socials-icons {
      margin-top: 22px;
    }
  }
}

.footer-socials-icons {
  &__link {
    text-decoration: none;

    & > svg {
      color: $orangeTextColor;
      transition: 0.4s;

      &:hover {
        color: $backgroundColor;
      }
    }
  }
}

.footer-copyright {
  &__footer-copyright-text {
    @include flex(null, null, column);
    gap: 4px;
    margin-top: 34px;
  }
}

@include respond-to(768px) {
  .footer-copyright {
    &__footer-copyright-text {
      margin-top: 40px;
    }
  }
}

@include respond-to(1024px) {
  .footer-copyright {
    &__footer-copyright-text {
      margin-top: 35px;
    }
  }
}
</style>
