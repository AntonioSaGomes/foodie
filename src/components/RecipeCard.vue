<template lang="">
  <div class="card">
    <div
      class="recipe-img clickable"
      @click="openRecipe"
      :style="{ backgroundImage: 'url(' + recipe.image + ')' }"
    ></div>
    <div class="details">
      <h2 class="title truncate">{{ recipe.title }}</h2>
      <div class="detail-row">
        <span class="time">Time: {{ recipe.readyInMinutes }} minutes</span>
        <span class="servings">Servings: {{ recipe.servings }}</span>
      </div>
    </div>
    <img
      src="/favorite-2.svg"
      class="icon clickable expand favorite"
      @click.stop="addToFavorites"
    />
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
  methods: {
    openRecipe() {
      window.open(this.recipe.sourceUrl, "_blank");
    },
    addToFavorites() {},
  },
};
</script>
<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  padding: 0rem;
  width: 25%;
}

.recipe-img {
  height: 70%;
  width: 100%;
  background-size: cover;
}

.card .details {
  flex-basis: 30%;
  max-height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
}

.card .details .time {
  color: #666;
  margin-bottom: 5px;
}

.card .details .servings {
  color: #666;
  margin-bottom: 5px;
}

.card .details .title {
  width: calc(100% - 1rem);
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.favorite {
  position: absolute;
  z-index: 10;
  right: 1rem;
  top: 1rem;
}

.detail-row {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
