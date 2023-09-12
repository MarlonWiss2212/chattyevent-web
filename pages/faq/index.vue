<script setup lang="ts">

</script>

<template>
  <head>
    <title>ChattyEvent FAQ</title>
  </head>
  <div>
    <h2 class="text-3xl font-semibold">{{ $t("faq.title") }}</h2>
    <div class="flex flex-col mt-10 gap-3">
      <faq-container :question="$t('faq.box1.title')" :answer="$t('faq.box1.answer')" />
      <faq-container :question="$t('faq.box2.title')" :answer="$t('faq.box2.answer')" />
      <faq-container :question="$t('faq.box3.title')" :answer="$t('faq.box3.answer')" />
    </div>
  </div>
</template>