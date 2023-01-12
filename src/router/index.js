import { createRouter, createWebHistory } from "vue-router";
import Restaurants from '../pages/Restaurants.vue';
import Recipes from '../pages/Recipes.vue';
import Ingredients from '../pages/Ingredients.vue';
import MainContainer from '../components/MainContainer.vue';
import Login from '../pages/Login/Login.vue';
import Home from '../pages/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainContainer,
            children: [
              {
                name:'home',
                path: '',
                component: Home,
              },
              {
                name:'recipes',
                path: 'recipes',
                component: Recipes
              },
              {
                name:'restaurants',
                path: 'restaurants',
                component: Restaurants
              },
              {
                name:'ingredients',
                path: 'ingredients',
                component: Ingredients
              },
              {
                name:'login',
                path: 'login',
                component: Login
              }
            ]
          }
    ]
  });

export default router
