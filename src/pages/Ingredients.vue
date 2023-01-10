<template lang="">
  <div class="ingredients-container">
    <MealPrep />
  </div>
</template>
<script>
import SearchInput from "../components/SearchInput.vue";
import IngredientList from "../components/IngredientList.vue";
import IngredientCard from "../components/IngredientCard.vue";
import draggable from "vuedraggable";
import Header from "../components/Header.vue";
import MealPrep from "../components/MealPrep.vue";

export default {
  components: {
    SearchInput,
    IngredientList,
    IngredientCard,
    MealPrep,
    Header,
    draggable,
  },
  data() {
    return {
      ingredients: [],
      autoIngredients: [],
    };
  },
  methods: {},
};
</script>
<style scoped>
.ingredients-container {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: calc(100% - 4rem);
  height: calc(100% - 1rem);
}
</style>
