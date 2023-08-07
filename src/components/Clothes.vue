<template>
  <div class="box">
    <h1 class="box__title">Clothes:</h1>
    <ul class="box__list">
      <li @click="addItem(item)" v-for="item in clothes" :key="item.id" class="item">
        <h2>{{ item.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const clothes = computed(() => store.state.clothes)
    const addItem = (item) => {
      if (!store.state.selectedClothes.name) {
        store.commit('selectClothes', item)
      }
    }

    return {
      clothes,
      addItem
    }
  }
}
</script>
