<script setup lang="ts">
const { t } = useI18n()
</script>


<template>
  <head>
    <title>ChattyEvent</title>
    <meta name="keywords" content="ChattyEvent" />
    <meta name="author" content="Marlon Wißkirchen" />
  </head>
  <div class="">
    <div class="flex flex-col">
      <div class="flex flex-col sm:flex-row items-center my-10">
        <div class="w-full sm:w-0 sm:flex-grow flex flex-col justify-center gap-20">
          <h2 class="max-w-4xl text-4xl md:text-5xl font-semibold">{{ t('index.title') }}</h2>
          <h3 class="max-w-4xl font-semibold">{{ t('index.description') }}</h3>
          <NuxtLink target="_blank" to="https://play.google.com/store/apps/details?id=com.chattyevent.chattyevent">
            <NuxtImg class="w-52" alt="ChattyEvent Play Store Link" src="/google-play-badge.png" />
          </NuxtLink>
        </div>
        <NuxtImg class="w-96" alt="ChattyEvent Chat List image" src="/chatlist.png" />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10 my-10">
        <index-event-container />
        <index-chats-container />
        <index-follower-container />
        <index-shoppinglist-container />
      </div>
    </div>
  </div>
</template>