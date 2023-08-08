<template>
  <div class="box">
    <h1 class="box__title">Chosen user's items:</h1>
    <ul class="box__list">
      <li v-for="item in selectedUsersItems" :key="item.id" class="item">
        <button @click="deleteItem(item)" class="item__close">X</button>
        <h2>{{ item.name }}</h2>
      </li>
    </ul>
    <div v-if="hasSelectedItems">Selected items quantity: {{ quantity }}</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const selectedUsersItems = computed(() => store.state.selectedUsersItems)
    const quantity = computed(() => store.state.count)
    const hasSelectedItems = computed(() => store.state.selectedUsersItems.length)
    const deleteItem = (item) => {
      store.commit('deleteItem', item)
      store.dispatch('deleteCount')
    }
    return {
      selectedUsersItems,
      deleteItem,
      quantity,
      hasSelectedItems
    }
  }
}
</script>
