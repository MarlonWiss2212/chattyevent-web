<script setup lang="ts">

</script>

<template>
  <head>
    <title>ChattyEvent FAQ</title>
  </head>
  <div>
    <h2 class="text-3xl font-semibold">Häufig gestellte Fragen</h2>
    <div class="flex flex-col mt-10 gap-3">
      <faq-container question="Werden Events automatisch gelöscht?" answer="Nein Events werden nicht automatisch gelöscht. Sie müssen manuell gelöscht werden oder aktiviere die Funktion automatisches Löschen des Events bevor du ein neues Event erstellst. Dann werden Events 24h nach Ende oder 48h nach beginn gelöscht" />
      <faq-container question="Kann man Nachrichten im nachhinein Löschen?" answer="Nein, sobald Nachrichten versendet wurden können sie grundsätzlich nicht mehr gelöscht werden. Eine Ausnahme ist, wenn sie ihren gesamten Account löschen, dabei werden alle je geschriebenen Nachrichten gelöscht. Wir arbeiten an einem Feature, sodass man Einzelchats zu anderen Usern löschen kann, dieses wird allerdings frühestens im Q4 veröffentlicht werden" />
      <faq-container question="Warum werden Nachrichten automatisch gelöscht" answer="Nachrichten werden nach 365 Tagen automatisch gelöscht um Ressourcen zu sparen" />
    </div>
  </div>
</template>