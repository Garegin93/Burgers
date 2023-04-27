<template>
    <div class="container">
        <TheHeader/>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
    name: 'App',
    components: {TheHeader}
}

</script>

<style lang="scss">
@import "./styles/mixins";
@import "./styles/vars";

*, *::after, *::before {
  box-sizing: border-box;
}

h1, h2, h3, p {
  margin: 0;
}

body {
  font-family: "Nunito-Regular", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  min-width: 320px;
  margin: 0;
  background: #f9f9f9;
}

.container {
  width: 100%;
  padding: 0;
  margin: 0 auto;
  //max-width: min(100%, 1440px);
}

#app {
  @font-face {
    font-family: "Nunito-Regular";
    font-weight: 400;
    font-style: normal;
    src: url("assets/fonts/Nunito-Regular.woff2") format("woff2"),
    url("assets/fonts/Nunito-Regular.woff") format("woff");
  }
}
</style>
