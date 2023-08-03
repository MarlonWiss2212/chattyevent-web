<template>
  <head>
    <title>ChattyEvent</title>
  </head>
  <div class="">
    <div class="flex flex-col">
      <h1 class="text-4xl md:text-5xl font-semibold">Plane ganz einfach deine Events, Partys und schreibe mit deinen Freunden mit ChattyEvent!</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <index-groupchat-container />
        <index-event-container />
        <index-follower-container />
      </div>
    </div>
  </div>
</template>