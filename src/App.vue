<template>
  <div id="app">
    <main>
      <div class="upper-block">
        <chosen-users-items> </chosen-users-items>
        <chosen-clothes></chosen-clothes>
      </div>
      <div class="lower-block">
        <users-items></users-items>
        <clothes></clothes>
      </div>
    </main>
  </div>
</template>

<script>
import Clothes from './components/Clothes.vue'
import UsersItems from './components/UsersItems.vue'
import ChosenUsersItems from './components/ChosenUsersItems.vue'
import ChosenClothes from './components/ChosenClothes.vue'

export default {
  name: 'App',
  components: {
    Clothes,
    UsersItems,
    ChosenUsersItems,
    ChosenClothes
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .upper-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 20px;
  }

  .lower-block {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
