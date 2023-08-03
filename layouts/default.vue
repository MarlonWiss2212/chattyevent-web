<template>
  <div class="flex flex-col px-4 md:px-10">
    <div class="sticky top-0 dark:bg-black bg-white dark:text-white z-10">
      <nav class="flex flex-col md:flex-row md:py-10 py-4 md:gap-10 gap-4 items-center">
        <NuxtLink to="/" class="flex flex-row items-center">
          <img class="w-12 rounded-md" src="/icon.png" />
          <h2 class="text-4xl font-bold pl-4 pr-10">ChattyEvent</h2>          
        </NuxtLink>
        <div class="flex flex-row gap-10 overflow-x-auto md:w-0 md:flex-grow">
          <NuxtLink to="/datasecurity" class="font-semibold">Datensicherheit</NuxtLink>
          <NuxtLink to="/blog" class="font-semibold">Blog</NuxtLink>
          <NuxtLink to="/faq" class="font-semibold">FAQ</NuxtLink>
        </div>
        <NuxtLink to="https://play.google.com/store/apps/details?id=com.chattyevent.chattyevent">
          <img class="w-40 lg:w-52" alt="Play Store App Link" src="/google-play-badge.png" />
        </NuxtLink>
      </nav>
      <div class="h-px bg-slate-800 dark:bg-slate-500"></div>
    </div>
    <div class="md:pt-10 pt-4">
      <slot />
    </div>
  </div>
</template>