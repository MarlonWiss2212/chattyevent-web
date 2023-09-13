<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <head>
    <title>ChattyEvent {{ t('datasecurity.imprint.title') }}</title>
  </head>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">{{ t('datasecurity.imprint.title') }}</h1>
    <div class="mt-6">
      <p>{{ t('datasecurity.imprint.data.imprintDescription') }}</p>
      <p class="mt-8">{{ t('datasecurity.imprint.data.name') }}</p>
      <p class="mt-px">{{ t('datasecurity.imprint.data.city') }}</p>
      <p class="mt-px">{{ t('datasecurity.imprint.data.address') }}</p>
      <p class="mt-px">{{ t('datasecurity.imprint.data.country') }}</p>
      <p class="mt-8">{{ t('datasecurity.imprint.data.number') }}</p>
      <p class="mt-px">{{ t('datasecurity.imprint.data.email') }}</p>
      <p class="mt-2">{{ t('datasecurity.imprint.data.website') }}</p>
      <p class="mt-8 text-2xl">{{ t('datasecurity.imprint.data.disclaimer.title') }}</p>
      <p class="mt-1">{{ t('datasecurity.imprint.data.disclaimer.text') }}</p>
    </div>
  </div>
</template>