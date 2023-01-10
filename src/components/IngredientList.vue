<template>
  <div class="ingredient-list">
    <h3>Ingredient List</h3>
    <SearchInput
      @search="searchIngredients"
      @autoSearch="getAutoIngredients"
      @searchResult="addIngrendient"
      :searchResults="autoIngredients"
      :icon="false"
      placeholder="Ingriedient..."
    />
    <div tag="ul">
      <li v-for="ingredient in ingredients" :key="ingredient.id">
        {{ ingredient.name }}
      </li>
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import ingredientsService from "../services/ingredients.service";
import { INGREDIENTS_IMAGE_PATH } from "../constants";

export default {
  name: "IngredientList",
  data() {
    return {
      ingredients: [],
      autoIngredients: [],
    };
  },
  components: { SearchInput },
  methods: {
    async searchIngredients(searchTerm) {
      const data = await ingredientsService.getIngredients(searchTerm, 10);
      const ingredients = data?.results.map((res) => {
        res.image = INGREDIENTS_IMAGE_PATH + res.image;
        return res;
      });
      console.log(ingredients);
      this.ingredients = ingredients;
      console.log("this.ingredients", this.ingredients);
    },
    async getAutoIngredients(searchTerm) {
      const data = await ingredientsService.getAutoCompleteIngredients(
        searchTerm
      );
      this.autoIngredients = data;
    },
    addIngrendient(ingredient) {
      const addIngrendient = this.autoIngredients.find(
        (ing) => ing.id === ingredient.id
      );
      this.ingredients.push(addIngrendient);
    },
  },
};
</script>

<style>
.ingredient-list {
  max-height: 300px;
}
</style>
