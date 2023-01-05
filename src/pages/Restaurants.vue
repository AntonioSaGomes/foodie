<template lang="">
    <div>
        <SearchInput @search="searchRestaurants"/>
    </div>
</template>
<script>
import SearchInput from '../components/SearchInput.vue';
import restaurantsService from '../services/restaurants.service';

export default {
    components:{SearchInput},
    data() {
        return {
            restaurants: []
        }
    },
    methods:{
        async searchRestaurants(searchTerm){
            const data = await restaurantsService.getRestaurants(searchTerm, 10)
            console.log(data);
        }
    }
}
</script>
<style lang="">
    
</style>