<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>
<template>
  <div class="p-4 dark:bg-slate-900 bg-slate-500 rounded-lg flex flex-col items-center gap-10">
    <h3 class="font-bold text-2xl">{{ title }}</h3>
    <slot />
  </div>
</template>