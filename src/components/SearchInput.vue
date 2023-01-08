<template>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      v-model="searchTerm"
      @keyup.enter="search"
      @input="searchAutoComplete"
      @keydown.up="selectPreviousResult"
      @keydown.down="selectNextResult"
      @focus="focus = true"
      @blur="focus = false"
      :placeholder="placeholder"
    />
    <div class="icon-wrapper">
      <img class="icon clickable" src="/search_icon.svg" @click="search" />
    </div>
    <div v-if="showResults && focus" class="search-results">
      <div
        v-for="(result, index) in searchResults"
        :key="result.id"
        class="search-result"
        :class="{ selected: index === selectedResultIndex }"
        @mouseover="setSelectedResult(index)"
        @mousedown="selectResult(result)"
      >
        {{ result.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Search...",
    },
    searchResults: {
      type: Array,
      default: [],
    },
  },
  emits: ["search", "autoSearch", "searchResult"],
  data() {
    return {
      searchTerm: "",
      selectedResultIndex: 0,
      focus: false,
    };
  },
  computed: {
    showResults() {
      return this.searchTerm.length > 0 && this.searchResults.length > 0;
    },
  },
  methods: {
    search() {
      this.$emit("search", this.searchTerm);
    },
    searchAutoComplete() {
      this.$emit("autoSearch", this.searchTerm);
    },
    selectResult(result) {
      this.$emit("searchResult", result.id);
    },
    setSelectedResult(index) {
      this.selectedResultIndex = index;
    },
    selectPreviousResult() {
      if (this.selectedResultIndex > 0) {
        this.selectedResultIndex--;
      }
    },
    selectNextResult() {
      if (this.selectedResultIndex < this.searchResults.length - 1) {
        this.selectedResultIndex++;
      }
    },
  },
};
</script>

<style scoped>
.icon {
  background-color: white;
  height: 100%;
}
.search-input {
  flex-basis: 75%;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0.5em;
  font-size: 1em;
  outline: none;
}
.search-results {
  position: absolute;
  top: 100%;
  z-index: 1;
  border: 1px solid #ccc;
  border-top: none;
  width: 100%;
}
.search-result {
  cursor: pointer;
  padding: 0.5em;
}
.search-result.selected,
.search-result:hover {
  background-color: #eee;
}

.search-container {
  position: relative;
  width: 20%;
  display: flex;
  align-items: center;
}
.icon-wrapper {
  background-color: white;
  height: calc(100% - 1rem);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
