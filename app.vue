<script setup lang="ts">
const layout = "default"
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-950 to-black text-white">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>