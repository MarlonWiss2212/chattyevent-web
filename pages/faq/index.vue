<script setup lang="ts">

</script>

<template>
  <head>
    <title>ChattyEvent FAQ</title>
  </head>
  <div>
    <h2 class="text-3xl font-semibold">Häufig gestellte Fragen</h2>
    <div class="flex flex-col mt-10 gap-3">
      <faq-container question="Werden Events automatisch gelöscht?" answer="Nein Events werden nicht automatisch gelöscht. Sie müssen manuell gelöscht werden" />
      <faq-container question="Kann man Nachrichten im nachhinein Löschen?" answer="Nein, sobald Nachrichten versendet wurden können sie grundsätzlich nicht mehr gelöscht werden. Eine Ausnahme ist, wenn sie ihren gesamten Account löschen, dabei werden alle je geschriebenen Nachrichten gelöscht. Wir arbeiten an einem Feature, sodass man Einzelchats zu anderen Usern löschen kann, dieses wird allerdings frühestens im Q4 veröffentlicht werden" />
    </div>
  </div>
</template>