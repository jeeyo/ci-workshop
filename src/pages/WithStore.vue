<script lang="ts">
import useCounterStore from '../stores/CounterStore'

export default {
  setup() {
    const store = useCounterStore()
    return { store }
  },
}
</script>

<template>
  <h1>With store</h1>

  <div class="card">
    <h3 data-testid="count-result">count is {{ store.count }}</h3>
    <h1>I Bua Na Ngoo Test</h1>
    <button type="button" @click="store.increaseBy(2)">Increase by 2</button>
    <button type="button" @click="store.decreaseBy(2)" :disabled="store.count <= 1">Decrease by 2</button>
  </div>
</template>
