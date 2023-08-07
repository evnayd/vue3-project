<template>
  <div class="box">
    <h1 class="box__title">Chosen user's items:</h1>
    <ul class="box__list">
      <li v-for="item in selectedUsersItems" :key="item.id" class="item">
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
    const selectedUsersItems = computed(() => store.state.selectedUsersItems)

    return {
      selectedUsersItems
    }
  }
}
</script>
