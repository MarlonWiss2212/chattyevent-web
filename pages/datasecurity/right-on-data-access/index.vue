<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <head>
    <title>ChattyEvent {{ t('datasecurity.rightOnDataAccess.title') }}</title>
  </head>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">{{ t('datasecurity.rightOnDataAccess.title') }}</h1>
    <div class="mt-6">
      <h2 class="font-bold text-xl">1. {{ t('datasecurity.rightOnDataAccess.data.general') }}</h2>
      <p class="mt-2">{{ t('datasecurity.rightOnDataAccess.data.generalText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">2. {{ t('datasecurity.rightOnDataAccess.data.groupchats') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.groupchatsText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>createdBy</li>
          <li>profileImage</li>
          <li>description</li>
          <li>title</li>
          <li>permissions (for every subfield "Admin" or "Everyone")</li>
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
        <p>{{ t('datasecurity.rightOnDataAccess.data.personalGroupchatsText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt (either joinedAt or leftChatAt)</li>
          <li>updatedAt</li>
          <li>userId</li>
          <li>role (either "Admin" or "Member")</li>
          <li>usernameForChat</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">2. {{ t('datasecurity.rightOnDataAccess.data.events') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.eventsText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>createdBy</li>
          <li>coverImage</li>
          <li>title</li>
          <li>description</li>
          <li>status (either "CANCELLED", "TAKES_PLACE" or "UNDECIDED")</li>
          <li>eventDate</li>
          <li>eventEndDate</li>
          <li>groupchatTo (optional connected Gruppenchat)</li>
          <li>eventLocation (saves Address and Coordinates)</li>
          <li>permissions (for ever subfield "Organizer", "Creator Only" or "Everyone")</li>
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
        <p>{{ t('datasecurity.rightOnDataAccess.data.personalEventsText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt (either joinedEventAt or leftEventAt)</li>
          <li>updatedAt</li>
          <li>userId</li>
          <li>status (either "ACCEPTED", "REJECTED", or "INVITED")</li>
          <li>role (either "ORGANIZER" or "MEMBER")</li>
          <li>usernameForChat</li>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">3. {{ t('datasecurity.rightOnDataAccess.data.messages') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.messagesText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>message</li>
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
      <h2 class="font-bold text-xl">4. {{ t('datasecurity.rightOnDataAccess.data.shoppingListItems') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.shoppingListItemsText') }}</p>
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
      <h2 class="font-bold text-xl">5. {{ t('datasecurity.rightOnDataAccess.data.shoppingListItemsBoughtAmounts') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.shoppingListItemsBoughtAmountsText') }}</p>
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
      <h2 class="font-bold text-xl">6. {{ t('datasecurity.rightOnDataAccess.data.userConnections') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.userConnectionsText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>targetUserId</li>
          <li>requesterUserId</li>
          <li>status (either "BLOCKED", "FOLLOWER" or "REQUESTTOFOLLOW")</li>
          <li>followData</li>
          <ul class="list-disc list-inside ml-5">
            <li>followedUserAt</li>
            <li>updatedAt</li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">7. {{ t('datasecurity.rightOnDataAccess.data.requests') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.requestsText') }}</p>
        <ul class="list-disc list-inside mt-2 text-sm">
          <li>_id</li>
          <li>createdAt</li>
          <li>updatedAt</li>
          <li>createdBy</li>
          <li>type (either "INVITATION", or "JOIN_REQUEST")</li>
          <li>invitationData</li>
          <ul class="list-disc list-inside ml-5">
            <li>invitedUserId</li>
            <li>eventUser</li>
            <li>groupchatUser</li>
          </ul>
          <li>joinRequestData</li>
          <ul class="list-disc list-inside ml-5">
            <li>eventTo</li>
            <li>groupchatTo</li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">8. {{ t('datasecurity.rightOnDataAccess.data.users') }}</h2>
      <div class="mt-2">
        <p>{{ t('datasecurity.rightOnDataAccess.data.usersText') }}</p>
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
              <li>permission (either "NONE", "FOLLOWERS_EXCEPT" or "ONLY_SELECTED_FOLLOWERS")</li>
              <li>exceptUserIds</li>
              <li>selectedUserIds</li>
            </ul>
            <li>privateEventAddMe</li>
            <ul class="list-disc list-inside ml-5">
              <li>permission (either "NONE", "FOLLOWERS_EXCEPT" or "ONLY_SELECTED_FOLLOWERS")</li>
              <li>exceptUserIds</li>
              <li>selectedUserIds</li>
            </ul>
            <li>calendarWatchIHaveTime (true or false)</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>