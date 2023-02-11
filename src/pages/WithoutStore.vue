<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Without store</h1>

  <div class="card">
    <h3 data-testid="count-result">count is {{ count }}</h3>
    <button type="button" @click="count++">Increase by 1</button>
    <button type="button" @click="count--" :disabled="count <= 0">Decrease by 1</button>
  </div>
</template>
