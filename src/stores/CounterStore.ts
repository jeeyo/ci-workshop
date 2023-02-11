import { defineStore } from 'pinia'

const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  actions: {

    increaseBy(amount: number) {
      this.count += amount
    },

    decreaseBy(amount: number) {

      // no negative numbers
      if (this.count === 0) {
        return
      }

      this.count -= amount
    }
  }
})

export default useCounterStore
