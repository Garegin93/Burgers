<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  props: {
    options: Object,
  },
  mounted() {
    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {}),
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {}),
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
};
</script>

<style lang="scss">
@import "../styles/vars.scss";
@import "../styles/mixins";

.fancybox__content {
  padding: 32px 10px;
  display: inline-flex !important;
}

@include respond-to(768px) {
  .fancybox__content {
    padding: 24px 24px 36px 24px;
  }
}

.fancybox__content > .f-button.is-close-btn {
  color: #b1b1b1;
  top: 10px;
  right: 10px;
}
</style>
