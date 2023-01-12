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
    <div v-if="icon" class="icon-wrapper">
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
        {{ result.title || result.name }}
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
    icon: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["search", "autoSearch", "searchResult"],
  data() {
    return {
      searchTerm: "",
      selectedResultIndex: -1,
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
      this.focus = false;
      this.searchTerm =
        this.selectedResultIndex > -1
          ? this.searchResults[this.selectedResultIndex].title ||
            this.searchResults[this.selectedResultIndex].name
          : this.searchTerm;
      this.$emit("search", this.searchTerm);
    },
    searchAutoComplete() {
      this.$emit("autoSearch", this.searchTerm);
    },
    selectResult(result) {
      this.focus = false;
      this.$emit("searchResult", result.id || result.name);
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
  height: calc(100% - 1rem);
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
}
.search-results {
  position: absolute;
  top: 100%;
  z-index: 1;
  border: 1px solid #ccc;
  background-color: var(--card-color);
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
  color: black;
}

.search-container {
  position: sticky;
  height: 50px;
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
