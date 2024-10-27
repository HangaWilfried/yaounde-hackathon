<template>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
const url = `
linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
url(${new URL("@/assets/images/login-font.png", import.meta.url).href})
`;
</script>

<style scoped>
.wrapper {
  @apply min-h-screen box-border;
  background-image: v-bind(url);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
