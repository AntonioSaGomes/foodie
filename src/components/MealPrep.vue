<template>
  <div class="meal-prep">
    <h2 class="title">Meal Prep</h2>
    <h4 class="small-description">
      Make your recipe. Add the ingredients to the list. Then add the
      preparation method to cook.
    </h4>
    <div class="meal-prep-main-container-wrapper">
      <div class="meal-prep-main-container">
        <IngredientList />
        <CookingPrep />
      </div>
      <Button @button-click="saveMeal" text="Save" />
    </div>
  </div>
</template>

<script>
import IngredientList from "./IngredientList.vue";
import TextArea from "./TextArea.vue";
import Button from "./material/Button.vue";
import CookingPrep from "./CookingPrep.vue";
export default {
  components: {
    IngredientList,
    CookingPrep,
    TextArea,
    Button,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.meal-prep {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 1rem);
  margin-bottom: 1rem;
}

.meal-prep-main-container-wrapper {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.meal-prep-main-container {
  display: flex;
  flex-grow: 1;
  width: calc(100% - 3rem);
  border-radius: 4px;
  flex-direction: column;
  background-color: whitesmoke;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
}
.title {
  text-align: left;
}
</style>
