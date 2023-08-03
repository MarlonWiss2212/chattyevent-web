<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>
<template>
  <div class="p-4 dark:bg-slate-900 bg-indigo-200 rounded-lg flex flex-col items-center gap-4 text-center">
    <h3 class="font-bold text-3xl">{{ title }}</h3>
    <div class="flex flex-col sm:flex-row items-center">
      <slot />
    </div>
  </div>
</template>