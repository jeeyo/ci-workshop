<script lang="ts">
import AdvancedCounterStoreFactory from '../stores/CounterStoreAdvanced'

const fetchInitialState = async () => {
  const response = await fetch('initialState.txt')
  const data = await response.json() as { counter: number }
  return data
}

const useCounterStore = AdvancedCounterStoreFactory(fetchInitialState)

export default {
  setup() {
    const store = useCounterStore()
    return { store }
  },
  async mounted() {
    await this.store.load()
  },
}
</script>

<template>
  <h1>With store advanced</h1>

  <div class="card">
    <h3 data-testid="count-result">
      <span v-if="store.is_loading">Loading...</span>
      <span v-else>count is {{ store.count }}</span>
    </h3>
    <button type="button" @click="store.increaseBy(1)">Increase by 1</button>
    <button type="button" @click="store.decreaseBy(1)" :disabled="store.count <= 0">Decrease by 1</button>
  </div>
</template>
