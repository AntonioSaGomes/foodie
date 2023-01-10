<template>
  <div class="portfolio-app">
    <SideBar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import MainContainer from "./components/MainContainer.vue";
export default {
  components: {
    SideBar,
    MainContainer,
  },
  async created() {
    console.log("hello");
    //const recipes = await recipesService.getRecipes('duck',5);
    //console.log(recipes);
  },
};
</script>

<style scoped>
.portfolio-app {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
