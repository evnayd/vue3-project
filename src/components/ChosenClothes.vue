<template>
  <div class="box">
    <h1 class="box__title">Chosen clothes:</h1>
    <div v-if="selectedClothes.name" class="item chosen-item">
      <h2>{{ selectedClothes.name }}</h2>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const selectedClothes = computed(() => store.state.selectedClothes)

    return {
      selectedClothes
    }
  }
}
</script>

<style scoped>
.chosen-item {
  margin: 0 auto;
}
</style>
