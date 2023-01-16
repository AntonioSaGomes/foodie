<template>
  <div class="text-area-wrapper" :style="{ width }">
    <textarea v-model="message" class="textarea-style"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.text-area-wrapper {
  flex-grow: 1;
}

.textarea-style {
  height: 100%;
  min-height: 100px;

  width: calc(100% - 2rem);
  border: 1px solid #df362d;
  box-shadow: 2px 2px 3px #b7ac44;
  padding: 1rem;
  resize: none;
}
</style>
