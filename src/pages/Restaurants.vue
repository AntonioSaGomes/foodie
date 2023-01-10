<template lang="">
  <div class="restaurants-container">
    <SearchInput
      @search="searchRestaurants"
      placeholder="Search restaurants..."
    />
    <div class="restaurants-main-wrapper">
      <h2 class="recomendations-subtitle">Eat Out</h2>
    </div>
  </div>
</template>
<script>
import SearchInput from "../components/SearchInput.vue";
import restaurantsService from "../services/restaurants.service";

export default {
  components: { SearchInput },
  data() {
    return {
      restaurants: [],
      nearRestaurants: [],
    };
  },
  created() {
    this.nearByRestaurants();
  },
  methods: {
    async searchRestaurants(searchTerm) {
      const data = await restaurantsService.getRestaurants(searchTerm, 10);
      console.log(data);
    },
    async nearByRestaurants() {
      const data = await restaurantsService.restaurantsNearBy();
      this.nearByRestaurants = data?.restaurants;
    },
  },
};
</script>
<style scoped>
.restaurants-container {
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

.restaurants-main-wrapper {
  width: 100%;
  height: 100%;
}

.recomendations-subtitle {
  text-align: left;
}
</style>
