<template lang="">
    <div class="search-container">
        <input
          type="text"
          class="search-input"
          v-model="searchTerm"
          @keyup.enter="search"
          placeholder="Search..."
        />
        <img class="icon clickable" src="/search_icon.svg" @click="search" />
      </div>
</template>
<script>
export default {
    emits:['search'],
    data() {
        return {
            searchTerm:'',
        }
    },
    methods: {
        search(){
            this.$emit('search', this.searchTerm)
        }
    },
}
</script>
<style lang="">
    
</style>