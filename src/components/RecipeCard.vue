<template lang="">
  <div class="card">
    <img class="clickable" :src="recipe.image" @click="openRecipe" />
    <div class="details">
      <span class="time">Time: {{recipe.readyInMinutes}} minutes</span>
      <span class="servings">Servings: {{recipe.servings}}</span>
      <h2 class="title">{{recipe.title}}</h2>
    </div>
  </div>
</template>
<script>
import Recipe from "../model/Recipe.js";

export default {
  props: {
    recipe: {
      type: Recipe,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods:{
    openRecipe(){
      window.open(this.recipe.sourceUrl, '_blank');
    }
  }
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card .details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.card .details .time {
  font-size: 18px;
  color: #666;
  margin-bottom: 5px;
}

.card .details .servings {
  font-size: 18px;
  color: #666;
  margin-bottom: 5px;
}

.card .details .title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
