<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <head>
    <title>ChattyEvent {{ t('datasecurity.rightOnDeletion.title') }}</title>
  </head>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">ChattyEvent {{ t('datasecurity.rightOnDeletion.title') }}</h1>
    <div class="mt-6">
      <h3 class="font-bold text-xl">{{ t('datasecurity.rightOnDeletion.data.general') }}</h3>
      <p class="mt-2">{{ t('datasecurity.rightOnDeletion.data.generalText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">{{ t('datasecurity.rightOnDeletion.data.instructions') }}</h3>
      <ul class="list-decimal list-inside mt-2">
        <li>{{ $t('datasecurity.rightOnDeletion.data.instructionsList.0') }}</li>
        <li>{{ $t('datasecurity.rightOnDeletion.data.instructionsList.1') }}</li>
        <li>{{ $t('datasecurity.rightOnDeletion.data.instructionsList.2') }}</li>
        <li>{{ $t('datasecurity.rightOnDeletion.data.instructionsList.3') }}</li>
      </ul>
    </div>
  </div>
</template>