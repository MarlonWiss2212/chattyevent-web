<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <index-container :title="t('index.container.shoppinglist.title')">
    <NuxtImg alt="ChattyEvent ShoppingList Image" src="/shoppinglist.png" class="w-52"/>
    <p>
      {{ t('index.container.shoppinglist.message') }}
    </p>
  </index-container>
</template>