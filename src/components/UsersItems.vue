<template>
  <div class="items box">
    <h1 class="box__title">Users items:</h1>
    <ul class="box__list">
      <li @click="getItem(item)" class="item" v-for="item in usersStuff" :key="item.id">
        <h2>{{ item.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  /*props: ['usersStuff'],
  methods: {
    getItem(item) {
      this.$emit('getChosenItem', item)
    }
  }*/
  setup() {
    const store = useStore()
    const usersStuff = computed(() => store.state.usersStuff)
    console.log('usersStuff', usersStuff)

    return {
      usersStuff
    }
  }
}
</script>
