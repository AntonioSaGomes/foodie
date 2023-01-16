<template lang="">
  <div class="cook-prep">
    <h3 class="section-title">Cooking preparation</h3>
    <TextArea width="100%" />
  </div>
</template>
<script>
import TextArea from "./TextArea.vue";

export default {
  components: { TextArea },
};
</script>
<style>
.cook-prep {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
</style>
