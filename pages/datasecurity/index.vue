<script setup lang="ts"></script>
<template>
  <head>
    <title>ChattyEvent Datensicherheit</title>
  </head>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-xl font-bold">
    <DatasecurityContainer to="/datasecurity/eu-dataprotection" title="Datenschutzerklärung" />
    <DatasecurityContainer to="/datasecurity/terms-of-use" title="Nutzungsbedingungen" />
    <DatasecurityContainer to="/datasecurity/imprint" title="Impressum" />
    <DatasecurityContainer to="/datasecurity/right-on-deletion" title="Recht auf Löschung" />
  </div>
</template>