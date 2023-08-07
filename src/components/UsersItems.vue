<template>
  <div class="items box">
    <h1 class="box__title">Users items:</h1>
    <ul class="box__list">
      <li @click="addItem(item)" class="item" v-for="item in usersStuff" :key="item.id">
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
    const usersStuff = computed(() => store.state.usersStuff)
    const canAddItem = computed(() => store.state.selectedUsersItems.length < 6)
    const isItemUnique = (item) => store.state.selectedUsersItems.some((itm) => itm.id === item.id)

    const addItem = (item) => {
      if (canAddItem.value && !isItemUnique(item)) {
        store.commit('addItem', item)
      }
    }

    return {
      usersStuff,
      addItem,
      canAddItem,
      isItemUnique
    }
  }
}
</script>
