<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <head>
    <title>ChattyEvent {{ t('datasecurity.privacyPolicy.title') }}</title>
  </head>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">{{ t('datasecurity.privacyPolicy.title') }}</h1>
    <div class="mt-6">
      <h2 class="font-bold text-xl">1. {{ t('datasecurity.privacyPolicy.data.general') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.generalText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">2. {{ t('datasecurity.privacyPolicy.data.responsibleParty') }}</h2>
      <h3 class="mt-2">{{ t('datasecurity.privacyPolicy.data.responsiblePartyTitle') }}</h3>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.responsiblePartyInfo') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">3. {{ t('datasecurity.privacyPolicy.data.personalDataCollection') }}</h2>
      <ul class="mt-2">
        <li>IP-Adress</li>
        <li>Login Data (Email, Passwort)</li>
        <li>Userdata</li>
        <li>Eventdata</li>
        <li>Shoppinglistdata</li>
        <li>Groupchatdata</li>
      </ul>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.personalDataCollectionText') }}</p>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.dataRetention') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">4. {{ t('datasecurity.privacyPolicy.data.useOfCookies') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.useOfCookiesText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">5. {{ t('datasecurity.privacyPolicy.data.useOfAnalytics') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.useOfAnalyticsText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">6. {{ t('datasecurity.privacyPolicy.data.userRights') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.userRightsText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">7. {{ t('datasecurity.privacyPolicy.data.changesToPrivacyPolicy') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.changesToPrivacyPolicyText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">8. {{ t('datasecurity.privacyPolicy.data.dataSecurity') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.dataSecurityText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">9. {{ t('datasecurity.privacyPolicy.data.contact') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.contactText') }}</p>
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">10. {{ t('datasecurity.privacyPolicy.data.finalProvisions') }}</h2>
      <p class="mt-2">{{ t('datasecurity.privacyPolicy.data.finalProvisionsText') }}</p>
    </div>
  </div>
</template>