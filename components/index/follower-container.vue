<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <index-container :title="t('index.container.friends.title')">
    <NuxtImg alt="ChattyEvent Discover Page Image" src="/discoverpage.png" class="w-52"/>
    <p>
      {{ t('index.container.friends.message') }}
    </p>
  </index-container>
</template>