<template>
    <button class="header-navigation-categories__button">
        <img
                :src="require(`../assets/img/icons/${navigationItems.src}.svg`)"
                width="24"
                height="24"
                :alt=navigationItems.name>
        <span>{{ navigationItems.name }}</span>
    </button>
</template>

<script>
export default {
    name: "HeaderNavigationItem",
    props: {
        navigationItems: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";

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
    transition: .4s;

    &:hover {
      background: $backgroundColor;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #ff7020;
    }
  }
}

@media all and (min-width: 1024px) {
  .header-navigation-categories {
    &__button {
      font-size: 16px;
      line-height: 22px;
      padding: 8px 14px;
    }
  }
}
</style>