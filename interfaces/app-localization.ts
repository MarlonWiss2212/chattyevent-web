export interface AppLocalization {
  appBar: {
    datasecurity: string;
    faq: string;
  };
  index: {
    title: string;
    description: string;
    container: {
      events: {
        title: string;
        message: string;
      };
      chats: {
        title: string;
        message: string;
        message2: string;
      };
      friends: {
        title: string;
        message: string;
      };
      shoppinglist: {
        title: string;
        message: string;
      };
    };
  };
  datasecurity: {
    privacyPolicy: {
      title: string;
      data: {
        general: string;
        generalText: string;
        responsibleParty: string;
        responsiblePartyTitle: string;
        responsiblePartyInfo: string;
        personalDataCollection: string;
        personalDataCollectionText: string;
        dataRetention: string;
        useOfCookies: string;
        useOfCookiesText: string;
        useOfAnalytics: string;
        useOfAnalyticsText: string;
        userRights: string;
        userRightsText: string;
        changesToPrivacyPolicy: string;
        changesToPrivacyPolicyText: string;
        dataSecurity: string;
        dataSecurityText: string;
        contact: string;
        contactText: string;
        finalProvisions: string;
        finalProvisionsText: string;
      };
    };
    termsOfUse: {
      title: string;
      data: {
        generalText: string;
        consentToTerms: string;
        consentText: string;
        accountsAndProfiles: string;
        accountsAndProfilesText: string;
        intellectualProperty: string;
        intellectualPropertyText: string;
        useOfHashtags: string;
        useOfHashtagsText: string;
        privacyPolicy: string;
        privacyPolicyText: string;
        prohibitedContentAndBehavior: string;
        prohibitedContentAndBehaviorText: string;
        contentMonetization: string;
        contentMonetizationText: string;
        liabilityLimitations: string;
        liabilityLimitationsText: string;
        jurisdiction: string;
        jurisdictionText: string;
        changesToTerms: string;
        changesToTermsText: string;
        termination: string;
        terminationText: string;
        otherProvisions: string;
        otherProvisionsText: string;
        contactText: string;
      };
    };
    imprint: {
      title: string;
      data: {
        imprintDescription: string;
        name: string;
        city: string;
        address: string;
        country: string;
        number: string;
        email: string;
        website: string;
        disclaimer: {
          title: string;
          text: string;
        };
      };
    };
    rightOnDataAccess: {
      title: string;
      data: {
        general: string;
        generalText: string;
        groupchats: string;
        groupchatsText: string;
        personalGroupchatsText: string;
        events: string;
        eventsText: string;
        personalEventsText: string;
        messages: string;
        messagesText: string;
        shoppingListItems: string;
        shoppingListItemsText: string;
        shoppingListItemsBoughtAmounts: string;
        shoppingListItemsBoughtAmountsText: string;
        userConnections: string;
        userConnectionsText: string;
        requests: string;
        requestsText: string;
        users: string;
        usersText: string;
      };
    };
    rightOnDeletion: {
      title: string;
      data: {
        general: string;
        generalText: string;
        instructions: string;
        instructionsList: {
          0: string;
          1: string;
          2: string;
          3: string;
        };
      };
    };
  };
  faq: {
    title: string;
    box1: {
      title: string;
      answer: string;
    };
    box2: {
      title: string;
      answer: string;
    };
    box3: {
      title: string;
      answer: string;
    };
  };
}