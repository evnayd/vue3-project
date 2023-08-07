<template>
  <div class="box">
    <h1 class="box__title">Chosen clothes:</h1>
    <div v-if="selectedClothes.name" class="item chosen-item">
      <button @click="deleteItem()" class="item__close">X</button>
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
    const deleteItem = () => {
      store.commit('deleteClothes')
    }
    return {
      selectedClothes,
      deleteItem
    }
  }
}
</script>

<style scoped>
.chosen-item {
  margin: 0 auto;
}
</style>
