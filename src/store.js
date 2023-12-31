import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      selectedClothes: {
        name: '',
        id: ''
      },
      selectedUsersItems: [],
      usersStuff: [
        {
          id: 1,
          name: 'Shoes 1'
        },
        {
          id: 2,
          name: 'Shoes 2'
        },
        {
          id: 3,
          name: 'Shoes 3'
        },
        {
          id: 4,
          name: 'Shoes 4'
        },
        {
          id: 5,
          name: 'T-shirt 1'
        },
        {
          id: 6,
          name: 'T-shirt 2'
        },
        {
          id: 7,
          name: 'T-shirt 3'
        },
        {
          id: 8,
          name: 'T-shirt 4'
        }
      ],
      clothes: [
        {
          id: 11,
          name: 'Jacket 1'
        },
        {
          id: 12,
          name: 'Jacket 2'
        },
        {
          id: 13,
          name: 'Jacket 3'
        },
        {
          id: 14,
          name: 'Jacket 4'
        },
        {
          id: 15,
          name: 'Hoodie 1'
        },
        {
          id: 16,
          name: 'Hoodie 2'
        },
        {
          id: 17,
          name: 'Hoodie 3'
        },
        {
          id: 18,
          name: 'Hoodie 4'
        }
      ]
    }
  },
  mutations: {
    addItem(state, item) {
      state.selectedUsersItems.push(item)
    },
    selectClothes(state, item) {
      const { name, id } = item
      state.selectedClothes = { name, id }
    },
    deleteItem(state, item) {
      state.selectedUsersItems = state.selectedUsersItems.filter((itm) => itm.id !== item.id)
    },
    deleteClothes(state) {
      state.selectedClothes = {
        name: '',
        id: ''
      }
    },
    incrementCount(state) {
      state.count++
    },
    dectrementCount(state) {
      state.count--
    }
  },
  actions: {
    addCount(context) {
      setTimeout(() => {
        context.commit('incrementCount')
      }, 1000)
    },
    deleteCount(context) {
      setTimeout(() => {
        context.commit('dectrementCount')
      }, 500)
    }
  }
})

export default store
