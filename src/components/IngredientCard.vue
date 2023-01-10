<template lang="">
  <div class="card">
    <img class="clickable" :src="ingredient.image" />
    <div class="details">
      <h2 class="title">{{ ingredient.name }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.card .details .time {
  font-size: 18px;
  color: #666;
  margin-bottom: 5px;
}

.card .details .servings {
  font-size: 18px;
  color: #666;
  margin-bottom: 5px;
}

.card .details .title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
