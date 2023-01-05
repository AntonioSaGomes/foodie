import { createRouter, createWebHistory } from "vue-router";
import Restaurants from '../pages/Restaurants.vue';
import Recipes from '../pages/Recipes.vue';
import Ingredients from '../pages/Ingredients.vue';
import MainContainer from '../components/MainContainer.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainContainer,
            children: [
              {
                path: 'recipes',
                component: Recipes
              },
              {
                path: 'restaurants',
                component: Restaurants
              },
              {
                path: 'ingredients',
                component: Ingredients
              }
            ]
          }
    ]
  });

export default router
