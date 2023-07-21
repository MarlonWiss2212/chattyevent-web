<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-xl font-bold">
    <div class="w-full p-10">
      <NuxtLink to="/eu-dataprotection"> 
        <div 
          class="w-full transition duration-300 h-52 rounded-lg border-black dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white border-2 flex items-center justify-center"
        >
          Datenschutzerklärung
        </div>
      </NuxtLink>
    </div>
    <div class="w-full p-10">
      <NuxtLink to="/terms-of-use">
        <div 
          class="w-full transition duration-300 h-52 rounded-lg border-black dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white border-2 flex items-center justify-center"
        >
          Nutzungsbedingungen
        </div>
      </NuxtLink>
    </div>
    <div class="w-full p-10">
      <NuxtLink to="/right-on-data-access">
        <div 
          class="w-full transition duration-300 h-52 rounded-lg border-black dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white border-2 flex items-center justify-center"
        >
          Recht auf Auskunft
        </div>
      </NuxtLink>
    </div>
  </div>
</template>