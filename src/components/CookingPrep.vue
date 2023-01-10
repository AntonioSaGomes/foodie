<template lang="">
  <div class="cook-prep">
    <h4>Cooking preparation</h4>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  width: 100%;
}
</style>
