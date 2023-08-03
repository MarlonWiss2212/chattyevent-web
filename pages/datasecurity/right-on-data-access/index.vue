<template>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">Recht auf Auskunft ChattyEvent</h1>
    <div class="mt-6">
      <h2 class="font-bold text-xl">1. Allgemeines</h2>
      <p class="mt-2">Auf dieser Seite werden ihnen alle Daten dargestellt die wir sammeln. Die Verarbeitung der Daten ist in der Datenschutzerklärung beschrieben.</p>
      <p class="mt-1">Bilder, Videos und Audio werden über Amzon S3 auf einem AWS Server gespeichert. Alle anderen Daten werden in einer NOSQL Datenbank auch auf einem AWS Server gespeichert</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">2. Gruppenchats</h2>
      <div class="mt-2">
        <p>Die Gruppenchats speichern folgende nicht personenbezogenen Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>createdBy</li>
          <li>profileImage</li>
          <li>description</li>
          <li>title</li>
          <li>permissions (für alle unterfelder gilt "Admin" oder "Everyone")</li>
          <ul class="list-disc list-inside ml-5">
            <li>changeTitle</li>
            <li>changeDescription</li>
            <li>changeProfileImage</li>
            <li>createEventForGroupchat</li>
            <li>addUsers</li>
            <li>changeTitle</li>
          </ul>
        </ul>
      </div>
      <div class="mt-2">
        <p>Es werden folgende personenbezogenen Daten gespeichert:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt (entweder joinedAt oder leftChatAt)</li>
          <li>updatedAt</li>
          <li>userId</li>
          <li>role (Entweder "Admin" oder "Member")</li>
          <li>usernameForChat</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">2. Events</h2>
      <div class="mt-2">
        <p>Die Privaten Events speichern folgende nicht personenbezogenen Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>createdBy</li>
          <li>coverImage</li>
          <li>title</li>
          <li>description</li>
          <li>status (entweder "CANCELLED", "TAKES_PLACE" oder "UNDECIDED")</li>
          <li>eventDate</li>
          <li>eventEndDate</li>
          <li>groupchatTo (optinal verbundener Gruppenchat)</li>
          <li>eventLocation (speichert Addresse und Koordinaten)</li>
          <li>permissions (für alle unterfelder gilt "Organizer", "Creator Only" oder "Everyone")</li>
          <ul class="list-disc list-inside ml-5">
            <li>changeTitle</li>
            <li>changeDescription</li>
            <li>changeCoverImage</li>
            <li>changeAddress</li>
            <li>changeDate</li>
            <li>changeStatus</li>
            <li>addUsers</li>
            <li>addShoppingListItem</li>
            <li>updateShoppingListItem</li>
            <li>deleteShoppingListItem</li>
          </ul>
        </ul>
      </div>
      <div class="mt-2">
        <p>Es werden folgende personenbezogenen Daten gespeichert:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt (entweder joinedEventAt oder leftEventAt)</li>
          <li>updatedAt</li>
          <li>userId</li>
          <li>status (Entweder "ACCEPTED", "REJECTED", oder "INVITED")</li>
          <li>role (Entweder "ORGANIZER" oder "MEMBER")</li>
          <li>usernameForChat</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">3. Nachrichten</h2>
      <div class="mt-2">
        <p>Die Nachrichten speichern folgende Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>message (encrypted)</li>
          <li>voiceMessage</li>
          <li>files</li>
          <li>readBy</li>
          <li>messageToReactTo (swipe on reply)</li>
          <li>currentLocation (if sending the location)</li>
          <li>createdBy</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">4. Einkaufslisten Item</h2>
      <div class="mt-2">
        <p>Die Einkaufslisten Items folgende Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>itemName</li>
          <li>unit</li>
          <li>amount</li>
          <li>userToBuyItem</li>
          <li>privateEventTo</li>
          <li>createdBy</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">5. Einkaufslisten Item Eingekaufte Menge</h2>
      <div class="mt-2">
        <p>Die Einkaufslisten Items speichern mehrere Eingekaufte Mengen diese speichern folgende Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>boughtAmount</li>
          <li>shoppingListItemTo</li>
          <li>createdBy</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">6. User Verbindungen</h2>
      <div class="mt-2">
        <p>Die User Verbindungen Events speichern folgende Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>targetUserId</li>
          <li>requesterUserId</li>
          <li>status (Entweder "BLOCKED", "FOLLOWER" oder "REQUESTTOFOLLOW")</li>
          <li>followData</li>
          <ul class="list-disc list-inside ml-5">
            <li>followedUserAt</li>
            <li>updatedAt</li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">7. User</h2>
      <div class="mt-2">
        <p>Die Nachrichten Events speichern folgende Daten:</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>username</li>
          <li>authId (firebase)</li>
          <li>firstname</li>
          <li>lastname</li>
          <li>profileImage</li>
          <li>birthdate</li>
          <li>permissions</li>
          <ul class="list-disc list-inside ml-5">
            <li>groupchatAddMe</li>
            <ul class="list-disc list-inside ml-5">
              <li>permission (entweder "NONE", "FOLLOWERS_EXCEPT" oder "ONLY_SELECTED_FOLLOWERS")</li>
              <li>exceptUserIds</li>
              <li>selectedUserIds</li>
            </ul>
            <li>privateEventAddMe</li>
            <ul class="list-disc list-inside ml-5">
              <li>permission (entweder "NONE", "FOLLOWERS_EXCEPT" oder "ONLY_SELECTED_FOLLOWERS")</li>
              <li>exceptUserIds</li>
              <li>selectedUserIds</li>
            </ul>
            <li>calendarWatchIHaveTime (true oder false)</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>