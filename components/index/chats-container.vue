<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <index-container :title="t('index.container.chats.title')">
    <NuxtImg alt="ChattyEvent Chats Image" src="/chat.png" class="w-52"/>
    <p>
      {{ t('index.container.chats.message') }}
      <br><br>
      {{ t('index.container.chats.message2') }}
    </p>
  </index-container>
</template>