<template lang="">
  <div class="restaurants-container">
    <SearchInput @search="searchRestaurants" />
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
</style>
