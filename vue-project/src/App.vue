<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="text-2xl text-center mt-2">Test inverview Esteban Córdoba</h1>
  </header>

  <div class="max-w-[1024px] mx-auto bg-gray-200 min-h-screen rounded-xl p-4">
    <RouterView />
  </div>
</template>

