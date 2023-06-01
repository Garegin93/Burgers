<template>
  <div id="delivery" class="popup popup-delivery">
    <div class="popup__container">
      <div class="popup__image">
        <img src="../../assets/img/images/delivery-donut.png" />
      </div>
      <div class="popup__form form">
        <h3 class="form__title">Доставка</h3>
        <form action="#" class="form" method="get">
          <div class="form__personal-data">
            <label>
              <input
                type="text"
                placeholder="Ваше имя (Иван)"
                id="name"
                class="user-name"
                required
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Телефон (+7xxx-xxx-xx-xx)"
                id="phone"
                class="user-phone"
                pattern="^((\+7|7|8)+([0-9]){10})$"
                required
              />
            </label>
          </div>
          <div class="form__delivery-method delivery-method">
            <div class="delivery-method__takeAway">
              <input type="radio" id="takeAway" name="delivery" />
              <label for="takeAway">Самовывоз</label>
            </div>
            <div class="delivery-method__deliveryToCustomers">
              <input
                type="radio"
                id="deliveryToCustomers"
                name="delivery"
                checked
              />
              <label for="deliveryToCustomers">Доставка</label>
            </div>
          </div>
          <div class="form__adress form-adress">
            <label>
              <input
                type="text"
                placeholder="Улица, дом, квартира"
                id="houseNumber"
                class="user-houseNumber"
                name="houseNumber"
                required
              />
            </label>
            <div class="form-adress__floor-intercom">
              <label for="floor">
                <input
                  type="text"
                  placeholder="Этаж"
                  id="floor"
                  class="user-floor"
                  name="floor"
                  pattern="^[0-9]+$"
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Домофон"
                  id="intercom"
                  class="user-intercom"
                  name="intercom"
                  pattern="^[0-9]+$"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Оформить" class="form__submit-btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../styles/vars.scss";
@import "../../styles/mixins.scss";

.popup {
  display: none;
  &__container {
    @include flex(null, center, null);
    flex-grow: 1;
  }
  &__image {
    display: none;
  }
  &__form {
    width: 300px;
  }
}

@include respond-to(768px) {
  .popup {
    &__container {
      max-width: 492px;
      min-height: 296px;
    }
  }
}

@include respond-to(1024px) {
  .popup {
    &__container {
      max-width: 100%;
      min-height: 100%;
    }
    &__image {
      @include flex(center, center, null);
      background-color: $backgroundColor;
      width: 50%;
      height: 100%;
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    }
    &__form {
      width: 50%;
      padding: 24px;
    }
  }
}

@include respond-to(768px) {
  .popup-delivery {
    width: 492px;
    min-height: 492px;
    border-radius: 15px;
  }
}

@include respond-to(1024px) {
  .popup-delivery {
    width: 684px;
    min-height: 432px;
  }
}

@include respond-to(1024px) {
  #delivery {
    padding: 0;
  }
}

.form {
  @include flex(null, null, column);
  &__title {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 18px;
  }
  input[type="text"] {
    font-family: "Nunito-Regular", sans-serif;
    font-size: 10px;
    line-height: 13px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid $buttonBackgroundColor;
    margin: 0;
    width: 100%;
    outline: none;
    &:hover,
    &:focus,
    &:active {
      outline: 1px solid $backgroundColor;
    }
  }
  &__submit-btn {
    font-size: 12px;
    line-height: 12px;
    padding: 9px;
    border: 1px solid $buttonBackgroundColor;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background: $backgroundColor;
    }
    &:focus {
      background: #f86310;
    }
  }
  &__personal-data {
    @include flex(null, null, column);
    margin-bottom: 24px;
    gap: 8px;
  }
  &__delivery-method {
    @include flex(null, null, column);
    margin-bottom: 24px;
    gap: 8px;
  }
  &__adress {
    @include flex(null, null, column);
    margin-bottom: 356px;
    gap: 8px;
  }
  &__submit-btn {
    color: #ffffff;
    background: $orangeTextColor;
  }
}

.delivery-method {
  &__takeAway,
  &__deliveryToCustomers {
    @include flex(null, null, null);
    gap: 8px;
  }
}

@include respond-to(768px) {
  .form {
    &__adress {
      margin-bottom: 108px;
    }
    &__personal-data {
      margin-bottom: 16px;
    }
  }
}

@include respond-to(1024px) {
  .form {
    &__adress {
      margin-bottom: 32px;
    }
    &__title {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 16px;
    }
    input[type="text"] {
      font-size: 12px;
      line-height: 16px;
    }
    input[type="submit"] {
      font-size: 16px;
      line-height: 16px;
    }
    &__delivery-method {
      margin-bottom: 16px;
    }
  }
}

.form-adress {
  &__floor-intercom {
    @include flex(space-between, null, null);
    gap: 8px;
  }
}
.user-floor {
  margin-right: auto;
}
</style>
