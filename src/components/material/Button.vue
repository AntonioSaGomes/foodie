<template>
  <div
    class="button-container clickable"
    :style="{ 'background-color': backgroundColor ? '' : '' }"
  >
    <button @click="handleClick">
      {{ text }}
    </button>
  </div>
</template>
<script>
export default {
  emits: ["click-button"],
  props: {
    text: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#4caf50",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click-button");
    },
  },
};
</script>

<style scoped>
.button-container {
  color: var(--car-card-btn);
}
</style>
