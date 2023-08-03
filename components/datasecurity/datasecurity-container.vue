<script setup lang="ts">
defineProps<{
  to: string,
  title: string
}>()
</script>
<template>
  <NuxtLink :to="to"> 
    <div class="w-full transition duration-300 h-52 rounded-lg border-black dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white border-2 flex items-center justify-center">
      {{ title }}
    </div>
  </NuxtLink>
</template>