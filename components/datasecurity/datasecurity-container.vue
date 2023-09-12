<script setup lang="ts">
const localePath = useLocalePath()
defineProps<{
  to: string,
  title: string
}>()
</script>
<template>
  <NuxtLink :to="localePath(to)"> 
    <div class="w-full transition duration-300 h-52 rounded-lg border-white hover:text-black hover:bg-white border-2 flex items-center justify-center">
      {{ title }}
    </div>
  </NuxtLink>
</template>