<script setup lang="ts">
import { Imprint } from '~/interfaces/imprint/imprint';

const imprint: Imprint = await $fetch("https://api.chattyevent.com/imprint")
</script>

<template>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">Impressum ChattyEvent</h1>
    <div class="mt-6">
      <p>{{ imprint.imprintDescription }}</p>
      <p class="mt-8">Name: {{ imprint.name }}</p>
      <p class="mt-px">Stadt: {{ imprint.address.city }} {{ imprint.address.zip }}</p>
      <p class="mt-px">Addresse: {{ imprint.address.street }} {{ imprint.address.housenumber }}</p>
      <p class="mt-px">Land: {{ imprint.address.country }}</p>
      <p class="mt-8">Nummer: {{ imprint.contact.phonenumber }}</p>
      <p class="mt-px">E-Mail: {{ imprint.contact.email }}</p>
      <p v-if="imprint.contact.websiteUrl" class="mt-2">Webseite: {{ imprint.contact.websiteUrl }}</p>
      <p class="mt-8 text-2xl">{{ imprint.disclaimer.title }}</p>
      <p class="mt-1">Webseite: {{ imprint.disclaimer.content }}</p>
    </div>
  </div>
</template>