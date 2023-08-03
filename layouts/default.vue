<template>
  <div class="flex flex-col px-4 md:px-10 h-screen">
    <nav class="z-10 flex flex-col md:flex-row md:py-10 py-4 md:gap-20 lg:gap-40 gap-x-0 gap-y-4 items-center">
      <NuxtLink to="/" class="flex flex-row items-center">
        <img class="w-12 rounded-md" src="/icon.png" />
        <h2 class="text-4xl font-bold pl-4 pr-10">ChattyEvent</h2>          
      </NuxtLink>
      <div class="flex flex-row gap-10 overflow-x-auto md:w-0 md:flex-grow">
        <NuxtLink to="/datasecurity" class="font-semibold">Datensicherheit</NuxtLink>
        <NuxtLink to="/blog" class="font-semibold">Blog</NuxtLink>
        <NuxtLink to="/faq" class="font-semibold">FAQ</NuxtLink>
      </div>
    </nav>
    <div class="md:pt-10 pt-4 flex-grow overflow-y-auto no-scrollbar">
      <slot />
    </div>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>