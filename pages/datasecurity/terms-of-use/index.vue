<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <head>
    <title>ChattyEvent {{ t('datasecurity.termsOfUse.title') }}</title>
  </head>
  <div class="w-full pb-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">ChattyEvent {{ t('datasecurity.termsOfUse.title') }}</h1>
    <p class="mt-6">{{ t('datasecurity.termsOfUse.data.generalText') }}</p>
    <div class="mt-6">
      <h3 class="font-bold text-xl">1. {{ t('datasecurity.termsOfUse.data.consentToTerms') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.consentText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">2. {{ t('datasecurity.termsOfUse.data.accountsAndProfiles') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.accountsAndProfilesText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">3. {{ t('datasecurity.termsOfUse.data.intellectualProperty') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.intellectualPropertyText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">4. {{ t('datasecurity.termsOfUse.data.useOfHashtags') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.useOfHashtagsText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">5. {{ t('datasecurity.termsOfUse.data.privacyPolicy') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.privacyPolicyText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">6. {{ t('datasecurity.termsOfUse.data.prohibitedContentAndBehavior') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.prohibitedContentAndBehaviorText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">7. {{ t('datasecurity.termsOfUse.data.contentMonetization') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.contentMonetizationText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">8. {{ t('datasecurity.termsOfUse.data.liabilityLimitations') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.liabilityLimitationsText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">9. {{ t('datasecurity.termsOfUse.data.jurisdiction') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.jurisdictionText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">10. {{ t('datasecurity.termsOfUse.data.changesToTerms') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.changesToTermsText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">11. {{ t('datasecurity.termsOfUse.data.termination') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.terminationText') }}</p>
    </div>
    <div class="mt-6">
      <h3 class="font-bold text-xl">12. {{ t('datasecurity.termsOfUse.data.otherProvisions') }}</h3>
      <p class="mt-2">{{ t('datasecurity.termsOfUse.data.otherProvisionsText') }}</p>
    </div>
    <p class="mt-20">{{ t('datasecurity.termsOfUse.data.contactText') }}</p>
  </div>
</template>