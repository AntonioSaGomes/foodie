<template lang="">
  <div class="main-container">
    <div class="main-container-page">
      <RouterView />
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "./Header.vue";
export default {
  components: { Header, RouterView },
};
</script>

<style scoped>
.main-container {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.main-container-page {
  height: 100%;
  flex-grow: 1;
}
</style>
