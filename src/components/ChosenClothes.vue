<template>
  <div class="box">
    <h1 class="box__title">Chosen clothes:</h1>
    <!---<div v-if="chosenClothes.name" class="item chosen-item">
      <h2>{{ chosenClothes.name }}</h2>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ['chosenClothes']
}
</script>

<style scoped>
.chosen-item {
  margin: 0 auto;
}
</style>
