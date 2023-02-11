<script lang="ts">

export default {
  data() {
    return {
      count: 0,
      is_loading: false,
    }
  },
  async mounted() {
    this.is_loading = true
    const response = await fetch('initialState.txt')
    const data = await response.json() as { counter: number }
    this.count = data.counter
    this.is_loading = false
  }
}
</script>

<template>
  <h1>Without store advanced</h1>

  <div class="card">
    <h3 data-testid="count-result">
      <span v-if="is_loading">Loading...</span>
      <span v-else>count is {{ count }}</span>
    </h3>
    <button type="button" @click="count++">Increase by 1</button>
    <button type="button" @click="count--" :disabled="count <= 0">Decrease by 1</button>
  </div>
</template>
