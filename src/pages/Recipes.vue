<template>
  <div class="recipes-container">
    <SearchInput @search="search"/>
    <div class="recipes">
      <RecipeCard
        v-for="recipe in recipes" 
        :key="recipe.id"
        :recipe="recipe"
        />
    </div>
  </div>
</template>

<script>
import recipesService from '../services/recipes.service';
import RecipeCard from '../components/RecipeCard.vue';
import SearchInput from '../components/SearchInput.vue';
export default {
  components: { RecipeCard, SearchInput },
  data() {
    return {
      recipes: null,
    }
  },
  methods: {
    async search(searchTerm) {
      const data = await recipesService.getRecipes(searchTerm, 10);
      const baseUri = data?.baseUri;
      this.recipes = data.results.map(res => {
        res.image = baseUri + res.image;
        return res;
      });
    }
  }
}
</script>

<style>
.recipes-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:2rem;
  width: 100%;
  height: 100%;
}

.recipes{
  width: 100%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.search-container {
  width: 20%;
  display: flex;
  align-items: center;
}

.search-input {
  flex-basis: 75%;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0.5em;
  font-size: 1em;
  outline: none;
}

.icon{
  padding: 0.5em;
  background-color: white;
}
</style>
