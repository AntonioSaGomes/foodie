<template>
  <div class="recipes-container">
    <div class="search-container-wrapper">
      <SearchInput
        @search="search"
        @autoSearch="getAutoRecipes"
        :searchResults="autoRecipes"
        placeholder="Search recipes..."
      />
    </div>
    <div class="recipes-main-container-wrapper">
      <div class="recipes-main-container">
        <template v-if="loading">
          <LoadingSpinner />
        </template>
        <template v-else>
          <div
            v-if="!recipes?.length && favoriteRecipes?.length"
            class="recomendations w-100"
          >
            <h2 class="recomendations-subtitle">Favourites</h2>
            <div class="cards-container-carrousel w-100">
              <div class="carrousel-item" v-for="recipe in favoriteRecipes">
                <RecipeCard :recipe="recipe" />
              </div>
            </div>
          </div>
          <div v-if="!recipes?.length" class="recomendations w-100">
            <h2 class="recomendations-subtitle">Recomendations</h2>
            <div class="cards-container-carrousel w-100">
              <div
                class="carrousel-item flex"
                v-for="recipe in recommendedRecipes"
              >
                <RecipeCard
                  v-if="recommendedRecipes?.length"
                  :recipe="recipe"
                />
              </div>
            </div>
          </div>
          <div
            v-if="recipes?.length"
            class="recipes grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"
          >
            <RecipeCard
              v-for="recipe in recipes"
              :key="recipe.id"
              :recipe="recipe"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import recipesService from "../services/recipes.service";
import RecipeCard from "../components/RecipeCard.vue";
import SearchInput from "../components/SearchInput.vue";
import { getFavouriteRecipes } from "../services/firebase.service";
import LoadingSpinner from "../components/LoadingSpinner.vue";
export default {
  components: { RecipeCard, SearchInput, LoadingSpinner },
  data() {
    return {
      recommendedRecipes: null,
      recipes: null,
      autoRecipes: [],
      favoriteRecipes: [],
      loading: false,
    };
  },
  created() {
    this.getRecommended();
    this.getFavouriteRecipes();
  },
  methods: {
    async search(searchTerm) {
      this.loading = true;
      const data = await recipesService.getRecipes(searchTerm, 10);
      this.loading = false;
      const baseUrl = data?.baseUri;
      this.recipes = data.results.map((res) => {
        res.image = baseUrl + res.image;
        return res;
      });
    },
    async getFavouriteRecipes() {
      const querySnapshot = await getFavouriteRecipes(this.$firestore, 10);
      querySnapshot.forEach((doc) => {
        this.favoriteRecipes.push({
          id: doc.id,
          ...doc.data(),
        });
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
  height: calc(100% - 1rem);
}

.recipes {
  width: 100%;
  flex-grow: 1;
  display: grid;
  grid-auto-rows: 250px;
}

.search-container-wrapper {
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
}
.recipes-main-container-wrapper {
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
}

.recipes-main-container {
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(100% - 2rem);
  height: 100%;
}
.carrousel-item {
  height: 100%;
  min-width: 300px;
  width: 300px;
}
.cards-container-carrousel {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 250px;
}

.recomendations-subtitle {
  font-weight: bold;
  text-align: left;
}

@media screen and (max-width: 800px) {
  .carrousel-item {
    min-width: 200px;
    width: 200px;
  }
  .recipes {
    width: 100%;
    flex-grow: 1;
    display: grid;
    grid-auto-rows: 150px;
  }
}
</style>
