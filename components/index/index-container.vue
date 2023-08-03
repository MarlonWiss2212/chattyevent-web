<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>
<template>
  <div class="p-4 filter backdrop-blur-3xl bg-white/5 rounded-xl flex flex-col items-center gap-4 text-center">
    <h3 class="font-bold text-3xl">{{ title }}</h3>
    <div class="flex flex-col sm:flex-row items-center">
      <slot />
    </div>
  </div>
</template>