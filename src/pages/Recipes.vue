<template>
  <div class="recipes-container">
    <SearchInput
      @search="search"
      @autoSearch="getAutoRecipes"
      :searchResults="autoRecipes"
      placeholder="Search recipes..."
    />
    <div class="recipes-main-container">
      <div v-if="!recipes?.length" class="recomendations w-100">
        <h2 class="recomendations-subtitle">Recomendations</h2>
        <div class="cards-container-carrousel w-100">
          <RecipeCard
            v-if="recommendedRecipes?.length"
            v-for="recipe in recommendedRecipes"
            :recipe="recipe"
          />
        </div>
      </div>
      <div v-if="recipes?.length" class="recipes">
        <RecipeCard
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import recipesService from "../services/recipes.service";
import RecipeCard from "../components/RecipeCard.vue";
import SearchInput from "../components/SearchInput.vue";
export default {
  components: { RecipeCard, SearchInput },
  data() {
    return {
      recommendedRecipes: null,
      recipes: null,
      autoRecipes: [],
    };
  },
  created() {
    this.getRecommended();
  },
  methods: {
    async search(searchTerm) {
      const data = await recipesService.getRecipes(searchTerm, 10);
      this.recipes = data.results.map((res) => {
        res.image = res.image;
        return res;
      });
    },

    async getRecommended() {
      const data = await recipesService.getRecommended();
      console.log(data);
      this.recommendedRecipes = data?.recipes;
    },

    async getAutoRecipes(searchTerm) {
      const data = await recipesService.getAutoCompleteRecipes(searchTerm);
      this.autoRecipes = data;
    },
  },
};
</script>

<style scoped>
.recipes-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: calc(100% - 4rem);
  height: calc(100% - 1rem);
}

.recipes-main-container {
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
}
.cards-container-carrousel {
  display: flex;
  max-width: 95%;
  gap: 10px;
  overflow-x: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 250px;
}
.recipes {
  width: 100%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.recomendations-subtitle {
  text-align: left;
}
</style>
