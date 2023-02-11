import { defineStore } from 'pinia'

const AdvancedCounterStoreFactory = (fetchInitialState: () => Promise<{ counter: number }>) => {

  return defineStore({
    id: 'counter_advanced',
    state: () => ({
      count: 0,
      is_loading: false,
    }),
    actions: {

      async load() {
        this.is_loading = true
        const { counter } = await fetchInitialState()
        this.count = counter
        this.is_loading = false
      },

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
}

export default AdvancedCounterStoreFactory
