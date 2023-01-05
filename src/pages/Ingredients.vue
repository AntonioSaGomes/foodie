<template lang="">
    <div>
        <SearchInput @search="searchIngredients"/>
    </div>
</template>
<script>
import SearchInput from '../components/SearchInput.vue';
import ingredientsService from '../services/ingredients.service';

export default {
    components:{SearchInput, ingredientsService},
    data() {
        return {
            ingredients: []
        }
    },
    methods:{
        async searchIngredients(searchTerm){
            const data = await ingredientsService.getIngredients(searchTerm, 10);
            this.ingredients = data?.results;
        }
    }
}
</script>
<style lang="">
    
</style>