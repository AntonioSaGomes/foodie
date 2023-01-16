<template lang="">
  <div class="home-page p-4">
    <div class="home-header py-4">
      <span className="text-3xl font-bold underline">Welcome to Foodie</span>
    </div>
    <div class="home-container-wrapper mt-3">
      <div class="hello-container grid grid-cols-2 md:grid-cols-1 gap-4">
        <div class="card clickable" @click="navigate('restaurants')">
          <h1 class="card-title">Eat out</h1>
          <div class="card-details">
            <img class="card-image" src="eat-out.jpeg" alt="" />
            <p class="card-description">
              Looking for a great restaurant to enjoy with friends and family?
              Our restaurant search and selection feature makes it easy to find
              the perfect spot. Simply enter your location, desired cuisine, and
              price range to see a list of matching options. Browse through
              restaurant profiles, check out reviews and ratings, then make a
              reservation or order takeout or delivery. Happy dining!
            </p>
          </div>
        </div>

        <div class="card clickable" @click="navigate('recipes')">
          <h1 class="card-title">Cook your meal</h1>
          <div class="card-details">
            <img class="card-image" src="/cooking.jpeg" alt="" />
            <p class="card-description">
              Looking for inspiration in the kitchen? Our recipe search feature
              has got you covered. Find your next meal by searching for recipes
              by ingredient, cuisine, or dietary restriction. Follow
              step-by-step instructions to prepare delicious, home-cooked meals
              for you and your loved ones. Impress your friends and family with
              your cooking skills. Happy cooking!
            </p>
          </div>
        </div>
        <div class="card clickable" @click="navigate('ingredients')">
          <h1 class="card-title">Create a recipe</h1>
          <div class="card-details">
            <img class="card-image" src="/create-recipe.jpeg" />
            <p class="card-description">
              Get creative in the kitchen with our recipe creation feature.
              Search for ingredients, add them to your list, and create your own
              unique recipes. Create step-by-step instructions and save or share
              your recipe with friends and family. You can become the next
              master chef by creating your signature dishes and impress
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigate(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style>
.card {
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card-title {
  font-size: 2rem;
}

.card-details {
  display: flex;
  gap: 2rem;
}

.card-image {
  width: 350px;
  height: 250px;
}

.card-description {
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
}
</style>
