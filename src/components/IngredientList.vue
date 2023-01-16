<template>
  <div class="ingredient-list">
    <h3 class="section-title">Ingredient List</h3>
    <div class="ingredient-list-container">
      <SearchInput
        @search="searchIngredients"
        @autoSearch="getAutoIngredients"
        @searchResult="addIngrendient"
        :searchResults="autoIngredients"
        :icon="false"
        placeholder="Ingriedient..."
      />
      <div class="ingredient-item-list" tag="ul">
        <div
          class="ingredient-item"
          v-for="(ingredient, index) in ingredients"
          :key="ingredient.id"
        >
          <p>{{ ingredient.name }}</p>
          <img
            class="remove-icon clickable"
            src="/remove.svg"
            @click="removeIngredient(index)"
          />
        </div>
      </div>
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
      this.ingredients = ingredients;
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
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
  },
};
</script>

<style>
.ingredient-item {
  list-style: none;
  text-transform: capitalize;
  font-weight: bold;
  text-align: left;
  padding-left: 0.5rem;
  position: relative;
  border: 1px solid green;
}
.ingredient-list {
  max-height: 300px;
  width: 100%;
}

.ingredient-item-list {
  flex-grow: 1;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  column-gap: 5ch;
  grid-template-rows: 50px 50px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.ingredient-list-container {
  display: flex;
}
.ingriedient-list-title {
  text-align: left;
  font-size: 1.5rem;
}
.remove-icon {
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 1rem;
  height: 1rem;
}
</style>
