<template>
  <head>
    <title>ChattyEvent</title>
  </head>
  <div class="">
    <div class="flex flex-col">
      <h1 class="text-4xl md:text-5xl font-semibold">Plane ganz einfach deine Events, Partys und schreibe mit deinen Freunden mit ChattyEvent!</h1>
      <div class="flex flex-col sm:flex-row items-center my-10">
        <div class="w-full sm:w-0 sm:flex-grow flex justify-center">
          <h2 class="text-lg md:text-2xl lg:text-4xl max-w-5xl font-semibold">ChattyEvent ist die ultimative Lösung für Ihre Party- und Eventplanung! Unsere innovative App dreht sich rund um Gruppeninteraktion und erleichtert Ihnen die Kommunikation mit Ihren Freunden, Familie oder Kollegen. Egal, ob Sie eine epische Party organisieren oder einfach nur engeren Kontakt pflegen möchten – ChattyEvent ist der ideale Begleiter, um all Ihre Kontakte an einem zentralen Ort zu bündeln.</h2>
        </div>
        <img class="w-96" alt="chat list image" src="/chatlist.png" />
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