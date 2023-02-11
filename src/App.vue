<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div style="display: flex; justify-content: space-between;">
    <RouterLink to="/">Without Store</RouterLink>
    <RouterLink to="/with-store">With Store</RouterLink>
    <RouterLink to="/without-store-advanced">Without Store Advanced</RouterLink>
    <RouterLink to="/with-store-advanced">With Store Advanced</RouterLink>
  </div>
  <RouterView />
</template>
