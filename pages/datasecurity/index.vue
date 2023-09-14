<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <head>
    <title>ChattyEvent {{ t('appBar.datasecurity') }}</title>
  </head>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-xl font-bold">
    <DatasecurityContainer to="/datasecurity/eu-dataprotection" :title="t('datasecurity.privacyPolicy.title')" />
    <DatasecurityContainer to="/datasecurity/terms-of-use" :title="t('datasecurity.termsOfUse.title')" />
    <DatasecurityContainer to="/datasecurity/imprint" :title="t('datasecurity.imprint.title')" />
    <DatasecurityContainer to="/datasecurity/right-on-deletion" :title="t('datasecurity.rightOnDeletion.title')" />
  </div>
</template>