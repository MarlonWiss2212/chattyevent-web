<script setup lang="ts">
const layout = "default"
</script>

<template>
  <div class="min-h-screen dark:bg-black dark:text-white">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>