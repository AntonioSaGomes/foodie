<template>
  <div :style="{ width }">
    <textarea v-model="message" class="textarea-style"></textarea>
    {{ width }}
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
.textarea-style {
  min-height: 100px;
  width: calc(100% - 2rem);
  background-color: white;
  border: 1px solid #df362d;
  box-shadow: 2px 2px 3px #b7ac44;
  padding: 1rem;
  resize: none;
}
</style>
