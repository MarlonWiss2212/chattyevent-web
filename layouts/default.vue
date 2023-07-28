<template>
  <div class="flex flex-col px-4 md:px-10">
    <div class="sticky top-0 dark:bg-black dark:text-white">
      <nav class="flex flex-col md:flex-row py-10 gap-10 items-start md:items-center">
        <NuxtLink to="/" class="flex flex-row items-center">
          <img class="w-12 rounded-md" src="~/public/icon.png" />
          <h2 class="text-4xl font-bold pl-4 pr-10">ChattyEvent</h2>          
        </NuxtLink>
        <div class="flex flex-row gap-10 overflow-x-auto w-full md:w-0 flex-grow">
          <NuxtLink to="/datasecurity" class="font-semibold">Datensicherheit</NuxtLink>
          <NuxtLink to="/faq" class="font-semibold">FAQ</NuxtLink>
        </div>
      </nav>
      <div class="h-px bg-slate-800 dark:bg-slate-500"></div>
    </div>
    <div class="pt-10">
      <slot />
    </div>
  </div>
</template>