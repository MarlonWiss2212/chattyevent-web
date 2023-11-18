<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <index-container :title="t('index.container.events.title')">
    <NuxtImg alt="ChattyEvent Events Image" src="/events.png" class="w-52" />
    <p>
      {{ t('index.container.events.message') }}
      Die spezielle Party-Planungsfunktion von ChattyEvent ermöglicht es Ihnen, Events rasch und mühelos auf die Beine zu stellen und sämtliche Details spielend zu teilen. Hierbei können Sie die Veranstaltung mit einem Gruppenchat verknüpfen oder auch unabhängig davon planen. Diese innovative Funktion gewährleistet, dass wirklich jeder eingeladen wird und dass sämtliche relevanten Einzelheiten auf einen Blick ersichtlich sind.
    </p>
  </index-container>
</template>