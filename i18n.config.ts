export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      appBar: {
        datasecurity: "Datasecurity",
        blog: "Blog",
        faq: "FAQ"
      },
      index: {
        title: "Plan your events and parties easily and chat with your friends using ChattyEvent!",
        description: "ChattyEvent is the ultimate solution for your party and event planning! Our innovative app is all about group interaction and makes it easy for you to communicate with your friends, family or colleagues. Whether you're organizing an epic party or just want to keep in closer touch, ChattyEvent is the ideal companion to bring all your contacts together in one central place."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Privacy Policy",
          data: {
            general: "General",
            generalText: "On this page, we provide you with all the data we collect. The processing of the data is described in our privacy policy.",
            responsibleParty: "Responsible Party",
            responsiblePartyTitle: "Responsible Party under the GDPR:",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Personal Data Collection",
            personalDataCollectionText: "These data are only collected and used for the operation of the app. They will not be disclosed to third parties unless required by law or necessary for the fulfillment of the contract.",
            dataRetention: "The data will only be stored for as long as is necessary for the operation of the app. After this time, they will be deleted. You can also find an exact list of all stored data on the Right to Access page.",
            useOfCookies: "Use of Cookies",
            useOfCookiesText: "The app only uses cookies provided by the advertising platform Admob, Firebase, or Google Analytics.",
            useOfAnalytics: "Use of Google Analytics, Admob, Google Maps, and Firebase",
            useOfAnalyticsText: "The app uses Google Analytics, Google Maps, Admob, and Firebase to analyze and optimize the use of the app. For this purpose, data such as IP address, device information, and user behavior are collected and processed. The data is anonymized so that no conclusions can be drawn about individual persons.",
            userRights: "User Rights",
            userRightsText: "In accordance with the GDPR, data subjects have the right to information, correction, deletion, restriction of processing, and data portability of their personal data. They also have the right to object to the processing of their data. If you have any questions or concerns regarding the collection and processing of your personal data, you can contact the responsible party mentioned above.",
            changesToPrivacyPolicy: "Changes to the Privacy Policy",
            changesToPrivacyPolicyText: "We reserve the right to change this privacy policy at any time. The current version of the privacy policy can be viewed on the app platform.",
            dataSecurity: "Data Security",
            dataSecurityText: "We use technical and organizational measures to protect your personal data from loss, destruction, manipulation, and unauthorized access. Our security measures are regularly reviewed and adapted to the current state of the art.",
            contact: "Contact",
            contactText: "If you have any questions or concerns regarding this privacy policy, you can contact us at any time by email at support{'@'}chattyevent.com.",
            finalProvisions: "Final Provisions",
            finalProvisionsText: "This privacy policy is subject to German data protection law and the General Data Protection Regulation (GDPR).\n\nShould individual provisions of this privacy policy be or become invalid, this shall not affect the validity of the remaining provisions. In place of the invalid provisions, an effective regulation shall apply which comes closest to the purpose of the invalid provision.\n\nThis privacy policy was last updated on May 9, 2023."
          }
        },
        termsOfUse: {
          title: "Terms of Use",
          data: {
            //data
          }
        },
        imprint: {
          title: "Imprint",
          data: {
            imprintDescription: "Imprint according to § 5 TMG:",
            name: "Name: Marlon Wißkirchen",
            city: "City: Sinzig 53489",
            address: "Address: Im Rossbüsch 13",
            country: "Country: Germany",
            number: "Number: +4917672996744",
            email: "E-Mail: support{'@'}chattyevent.com",
            website: "Website: chattyevent.com",
            disclaimer: {
              title: "Disclaimer:",
              text:
                "Despite careful content control, we do not assume any liability for the content of external links. The content of the linked pages is the sole responsibility of their operators.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Right on Data Access",
          data: {
            general: "General",
            generalText: "On this page, we provide you with all the data we collect. The processing of the data is described in our privacy policy.",
            groupchats: "Group Chats",
            groupchatsText: "Group chats store the following non-personal data:",
            personalGroupchatsText: "The following personal data is stored:",
            events: "Events",
            eventsText: "Private events store the following non-personal data:",
            personalEventsText: "The following personal data is stored:",
            messages: "Messages",
            messagesText: "Messages store the following data:",
            shoppingListItems: "Shopping List Items",
            shoppingListItemsText: "Shopping list items store the following data:",
            shoppingListItemsBoughtAmounts: "Shopping List Items Bought Amounts",
            shoppingListItemsBoughtAmountsText: "Shopping list items bought amounts store the following data:",
            userConnections: "User Connections",
            userConnectionsText: "User connections events store the following data:",
            requests: "Requests",
            requestsText: "Requests store the following data:",
            users: "Users",
            usersText: "User data stores the following data:",
          }
        },
        rightOnDeletion: {
          title: "Right on Deletion",
          data: {
            general: "General",
            generalText: "On this page, we explain how you can permanently delete all your data.",
            instructions: "Instructions",
            instructionsList: {
              0: "Open the ChattyEvent App",
              1: "Navigate to the Settings page",
              2: 'Go to "Info & Data Privacy" and select "Right to Deletion"',
              3:'Click "Delete Data" and confirm by clicking "Yes"',
            },
          }
        }
      },
      blog: {
        title: "No content so far"
      },
      faq: {
        title: "Frequently asked questions",
        box1: {
          title: "Are events automatically deleted?",
          answer: "No, events are not deleted automatically. They have to be deleted manually or activate the function automatic deletion of the event before you create a new event. Then events will be deleted 24 hours after the end or 48 hours after the start."
        },
        box2: {
          title: "Is it possible to delete messages afterwards?",
          answer: "No, once messages have been sent, they cannot be deleted. An exception is if you delete your entire account, then all messages ever written will be deleted. We are working on a feature so that you can delete individual chats with other users, but this will not be released until Q4 at the earliest."
        },
        box3: {
          title: "Why are messages automatically deleted?",
          answer: "Messages are automatically deleted after 365 days to save resources."
        }
      }
    },
    de: {
      appBar: {
        datasecurity: "Datensicherheit",
        blog: "Blog",
        faq: "FAQ"
      },
      index: {
        title: "Plane deine Events und Partys einfach und chatte mit deinen Freunden mit ChattyEvent!",
        description: "ChattyEvent ist die ultimative Lösung für deine Party- und Eventplanung! Unsere innovative App dreht sich alles um Gruppeninteraktion und macht es dir leicht, mit deinen Freunden, deiner Familie oder deinen Kollegen zu kommunizieren. Egal, ob du eine epische Party organisierst oder einfach in engerem Kontakt bleiben möchtest, ChattyEvent ist der ideale Begleiter, um alle deine Kontakte an einem zentralen Ort zusammenzubringen."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Datenschutzerklärung",
          data: {
            general: "Allgemeines",
            generalText: "Auf dieser Seite geben wir Ihnen einen Überblick über alle von uns gesammelten Daten. Die Verarbeitung der Daten ist in unserer Datenschutzerklärung beschrieben.",
            responsibleParty: "Verantwortliche Stelle",
            responsiblePartyTitle: "Verantwortliche Stelle gemäß DSGVO:",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Erhebung personenbezogener Daten",
            personalDataCollectionText: "Diese Daten werden nur für den Betrieb der App erfasst und genutzt. Sie werden nicht an Dritte weitergegeben, es sei denn, dies ist gesetzlich vorgeschrieben oder für die Vertragserfüllung notwendig.",
            dataRetention: "Die Daten werden nur so lange gespeichert, wie dies für den Betrieb der App erforderlich ist. Nach Ablauf dieser Zeit werden sie gelöscht. Eine genaue Auflistung aller gespeicherten Daten finden Sie auch auf der Seite Recht auf Auskunft.",
            useOfCookies: "Verwendung von Cookies",
            useOfCookiesText: "Die App verwendet nur Cookies, die von der Werbeplattform Admob, Firebase oder Google Analytics bereitgestellt werden.",
            useOfAnalytics: "Verwendung von Google Analytics, Admob, Google Maps und Firebase",
            useOfAnalyticsText: "Die App verwendet Google Analytics, Google Maps, Admob und Firebase, um die Nutzung der App zu analysieren und zu optimieren. Dabei werden Daten wie IP-Adresse, Geräteinformationen und Nutzerverhalten erfasst und verarbeitet. Die Daten werden dabei anonymisiert, sodass keine Rückschlüsse auf einzelne Personen möglich sind.",
            userRights: "Rechte der betroffenen Person",
            userRightsText: "Gemäß der DSGVO haben betroffene Personen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Übertragbarkeit ihrer personenbezogenen Daten. Sie haben zudem das Recht, der Verarbeitung ihrer Daten zu widersprechen. Bei Fragen oder Bedenken zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.",
            changesToPrivacyPolicy: "Änderungen der Datenschutzerklärung",
            changesToPrivacyPolicyText: "Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version der Datenschutzerklärung ist auf der App-Plattform einsehbar.",
            dataSecurity: "Datensicherheit",
            dataSecurityText: "Wir setzen technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor Verlust, Zerstörung, Manipulation und unberechtigtem Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden dabei regelmäßig überprüft und an den aktuellen Stand der Technik angepasst.",
            contact: "Kontaktaufnahme",
            contactText: "Wenn Sie Fragen oder Bedenken bezüglich dieser Datenschutzerklärung haben, können Sie uns jederzeit per E-Mail unter support{'@'}chattyevent.com kontaktieren.",
            finalProvisions: "Schlussbestimmungen",
            finalProvisionsText: "Diese Datenschutzerklärung unterliegt dem deutschen Datenschutzrecht und der Datenschutzgrundverordnung (DSGVO). Sollten einzelne Bestimmungen dieser Datenschutzerklärung unwirksam sein oder werden, berührt dies nicht die Wirksamkeit der übrigen Bestimmungen. An die Stelle der unwirksamen Bestimmungen tritt eine wirksame Regelung, die dem Zweck der unwirksamen Bestimmung am nächsten kommt. Diese Datenschutzerklärung wurde zuletzt am 9.5.2023 aktualisiert."
          }
        },
        termsOfUse: {
          title: "Nutzungsbedingungen",
          data: {
            generalText: "Willkommen bei ChattyEvent. Bitte lesen Sie diese Nutzungsbedingungen sorgfältig durch, da sie Ihre Nutzung der App regeln und wichtige Informationen über Ihre Rechte und Pflichten enthalten.",
            consentToTerms: "Zustimmung zu den Bedingungen",
            consentText: "Durch die Nutzung unserer App erklären Sie sich mit diesen Nutzungsbedingungen und unserer Datenschutzrichtlinie einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, dürfen Sie die App nicht nutzen.",
            accountsAndProfiles: "Konten und Profile",
            accountsAndProfilesText: "Um die App nutzen zu können, müssen Sie möglicherweise ein Konto und ein Profil erstellen. Sie sind dafür verantwortlich, sicherzustellen, dass alle Informationen, die Sie bei der Erstellung Ihres Kontos und Profils bereitstellen, wahrheitsgemäß, genau und vollständig sind. Sie müssen auch sicherstellen, dass Sie mindestens 18 Jahre alt sind. Wir behalten uns das Recht vor, jederzeit und ohne Vorankündigung Konten oder Profile zu sperren oder zu löschen, die gegen diese Bedingungen verstoßen oder anderweitig unangemessenes Verhalten aufweisen.",
            intellectualProperty: "Geistiges Eigentum",
            intellectualPropertyText: "Alle Inhalte und Materialien, die in unserer App veröffentlicht werden, einschließlich Text, Bilder, Grafiken, Videos und Audio, sind durch geistige Eigentumsrechte geschützt. Sie dürfen diese Inhalte nur im Rahmen der Nutzung unserer App und gemäß diesen Bedingungen verwenden. Jede andere Verwendung, einschließlich der Vervielfältigung, Verbreitung oder Veröffentlichung von Inhalten, ist strengstens untersagt, es sei denn, Sie haben ausdrücklich die Erlaubnis des jeweiligen Rechteinhabers erhalten.",
            useOfHashtags: "Verwendung von Hashtags, Marken und geistigem Eigentum",
            useOfHashtagsText: "Die Verwendung von Hashtags, Marken oder anderem geistigen Eigentum Dritter in Verbindung mit Ihrer Nutzung unserer App muss den geltenden Gesetzen und Vorschriften entsprechen. Sie dürfen keine Hashtags, Marken oder geistiges Eigentum Dritter verwenden, um unsere App oder unsere Dienstleistungen zu bewerben oder zu vermarkten, ohne unsere ausdrückliche schriftliche Zustimmung.",
            privacyPolicy: "Datenschutz",
            privacyPolicyText: "Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten gemäß unserer Datenschutzrichtlinie zu schützen. Durch die Nutzung der App stimmen Sie der Erfassung, Speicherung und Verarbeitung Ihrer persönlichen Daten gemäß unserer Datenschutzrichtlinie zu.",
            prohibitedContentAndBehavior: "Verbotene Inhalte und Verhaltensweisen",
            prohibitedContentAndBehaviorText: "Sie dürfen unsere App nicht nutzen, um Inhalte oder Verhaltensweisen zu veröffentlichen oder zu verbreiten, die rechtswidrig, missbräuchlich, belästigend, diskriminierend, bedrohlich, schädlich, diffamierend, obszön oder in anderer Weise unangemessen sind. Insbesondere dürfen Sie keine Inhalte oder Verhaltensweisen veröffentlichen oder verbreiten, die Mobbing, Hassrede, Rassismus, Extremismus oder Gewalt fördern. Zusätzlich dürfen Sie keine pornographischen Inhalte oder sexuell explizites Material veröffentlichen oder verbreiten. Wir behalten uns das Recht vor, Inhalte oder Verhaltensweisen, die gegen diese Bedingungen verstoßen, zu entfernen oder zu sperren, und Konten oder Profile von Nutzern zu sperren oder zu löschen, die gegen diese Bedingungen verstoßen.",
            contentMonetization: "Monetarisierung von Inhalten",
            contentMonetizationText: "Wenn Sie Inhalte erstellen und veröffentlichen, die monetarisiert werden können, sind Sie allein für die Einhaltung aller geltenden Gesetze und Vorschriften, einschließlich Steuergesetzen und Werberichtlinien, verantwortlich. Wir behalten uns das Recht vor, Ihre Inhalte zu entfernen oder zu sperren, wenn sie gegen unsere Richtlinien verstoßen.",
            liabilityLimitations: "Haftungsbeschränkungen",
            liabilityLimitationsText: "Wir übernehmen keine Haftung für Schäden, die durch Viren, Hacking oder andere Sicherheitsverletzungen verursacht werden. Wir übernehmen auch keine Haftung für Inhalte, die von unseren Nutzern erstellt oder veröffentlicht werden. Wir behalten uns jedoch das Recht vor, alle notwendigen Maßnahmen zu ergreifen, um die Sicherheit unserer App und unserer Nutzer zu gewährleisten.",
            jurisdiction: "Gerichtsstand",
            jurisdictionText: "Diese Bedingungen und Ihre Nutzung unserer App unterliegen den Gesetzen des Landes, in dem unser Unternehmen seinen Hauptsitz hat. Jegliche Rechtsstreitigkeiten, die sich aus diesen Bedingungen oder Ihrer Nutzung unserer App ergeben, unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte dieses Landes.",
            changesToTerms: "Änderungen dieser Bedingungen",
            changesToTermsText: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit ohne vorherige Ankündigung zu ändern. Ihre fortgesetzte Nutzung unserer App nach Änderungen dieser Bedingungen gilt als Zustimmung zu den aktualisierten Bedingungen.",
            termination: "Beendigung",
            terminationText: "Wir behalten uns das Recht vor, Ihre Nutzung unserer App jederzeit aus beliebigem Grund und ohne vorherige Ankündigung zu beenden. Im Falle einer solchen Beendigung bleiben diese Bedingungen in vollem Umfang wirksam und in Kraft.",
            otherProvisions: "Sonstige Bestimmungen",
            otherProvisionsText: "Sollte eine Bestimmung dieser Bedingungen für ungültig oder undurchsetzbar erklärt werden, bleibt die Gültigkeit und Durchsetzbarkeit der übrigen Bestimmungen unberührt. Unsere Unterlassung oder Verzögerung bei der Durchsetzung einer Bestimmung dieser Bedingungen stellt keinen Verzicht auf das Recht dar, diese Bestimmung später durchzusetzen.",
            contactText: "Diese Bedingungen stellen die vollständige und endgültige Vereinbarung zwischen Ihnen und uns in Bezug auf Ihre Nutzung unserer App dar und ersetzen alle vorherigen oder gleichzeitigen Vereinbarungen, Verhandlungen und Diskussionen zwischen uns. Wenn Sie Fragen oder Bedenken zu diesen Bedingungen haben oder uns kontaktieren möchten, senden Sie uns bitte eine E-Mail an support@chattyevent.com. Vielen Dank für Ihre Nutzung unserer App!",
          },
        },
        imprint: {
          title: "Impressum",
          data: {
            imprintDescription: "Impressum gemäß § 5 TMG:",
            name: "Name: Marlon Wißkirchen",
            city: "Stadt: Sinzig 53489",
            address: "Adresse: Im Rossbüsch 13",
            country: "Land: Deutschland",
            number: "Nummer: +4917672996744",
            email: "E-Mail: support{'@'}chattyevent.com",
            website: "Website: chattyevent.com",
            disclaimer: {
              title: "Haftungshinweis:",
              text:
                "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Der Inhalt der verlinkten Seiten liegt in der alleinigen Verantwortung ihrer Betreiber.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Recht auf Datenzugriff",
          data: {
            general: "Allgemein",
            generalText: "Auf dieser Seite stellen wir Ihnen alle Daten zur Verfügung, die wir sammeln. Die Verarbeitung der Daten ist in unserer Datenschutzerklärung beschrieben.",
            groupchats: "Gruppenchats",
            groupchatsText: "Gruppenchats speichern die folgenden nicht persönlichen Daten:",
            personalGroupchatsText: "Folgende persönliche Daten werden gespeichert:",
            events: "Veranstaltungen",
            eventsText: "Private Veranstaltungen speichern die folgenden nicht persönlichen Daten:",
            personalEventsText: "Folgende persönliche Daten werden gespeichert:",
            messages: "Nachrichten",
            messagesText: "Nachrichten speichern die folgenden Daten:",
            shoppingListItems: "Einkaufslisten-Artikel",
            shoppingListItemsText: "Einkaufslisten-Artikel speichern die folgenden Daten:",
            shoppingListItemsBoughtAmounts: "Gekaufte Mengen der Einkaufsliste",
            shoppingListItemsBoughtAmountsText: "Die gekauften Mengen der Einkaufslisten speichern die folgenden Daten:",
            userConnections: "Benutzer-Verbindungen",
            userConnectionsText: "Benutzer-Verbindungsereignisse speichern die folgenden Daten:",
            requests: "Anfragen",
            requestsText: "Anfragen speichern die folgenden Daten:",
            users: "Benutzer",
            usersText: "Benutzerdaten speichern die folgenden Daten:",
          }
        },
        rightOnDeletion: {
          title: "Recht auf Löschung",
          data: {
            general: "Allgemeines",
            generalText: "Auf dieser Seite erklären wir Ihnen, wie Sie alle Ihre Daten dauerhaft löschen können.",
            instructions: "Anleitung",
            instructionsList: {
              0: "Öffnen Sie die ChattyEvent App",
              1: "Navigieren Sie zur Einstellungsseite",
              2: 'Gehen Sie zu "Info & Datenschutz" und wählen Sie "Recht auf Löschung"',
              3: 'Klicken Sie auf "Daten löschen" und bestätigen Sie, indem Sie "Ja" klicken',
            },
          },
        },        
      },
      blog: {
        title: "Bisher kein Inhalt"
      },
      faq: {
        title: "Häufig gestellte Fragen",
        box1: {
          title: "Werden Events automatisch gelöscht?",
          answer: "Nein, Events werden nicht automatisch gelöscht. Sie müssen manuell gelöscht werden oder die Funktion zur automatischen Löschung des Events aktivieren, bevor Sie ein neues Event erstellen. Dann werden Events 24 Stunden nach dem Ende oder 48 Stunden nach dem Start gelöscht."
        },
        box2: {
          title: "Ist es möglich, Nachrichten nachträglich zu löschen?",
          answer: "Nein, einmal gesendete Nachrichten können nicht gelöscht werden. Eine Ausnahme besteht darin, dass alle Nachrichten gelöscht werden, wenn Sie Ihr gesamtes Konto löschen. Wir arbeiten an einer Funktion, mit der Sie individuelle Chats mit anderen Benutzern löschen können, aber diese wird frühestens im vierten Quartal veröffentlicht."
        },
        box3: {
          title: "Warum werden Nachrichten automatisch gelöscht?",
          answer: "Nachrichten werden automatisch nach 365 Tagen gelöscht, um Ressourcen zu sparen."
        }
      },
    },
    nl: {
      appBar: {
        datasecurity: "Gegevensbeveiliging",
        blog: "Blog",
        faq: "Veelgestelde vragen"
      },
      index: {
        title: "Plan eenvoudig je evenementen en feesten en chat met je vrienden met ChattyEvent!",
        description: "ChattyEvent is de ultieme oplossing voor het plannen van je feesten en evenementen! Onze innovatieve app draait om groepsinteractie en maakt het gemakkelijk om te communiceren met je vrienden, familie of collega's. Of je nu een episch feest organiseert of gewoon in nauwer contact wilt blijven, ChattyEvent is de ideale metgezel om al je contacten op één centrale plek samen te brengen."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Privacybeleid",
          data: {
            general: "Algemeen",
            generalText: "Op deze pagina verstrekken we u alle gegevens die we verzamelen. De verwerking van de gegevens wordt beschreven in ons privacybeleid.",
            responsibleParty: "Verantwoordelijke partij",
            responsiblePartyTitle: "Verantwoordelijke partij volgens de AVG:",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Verzameling van persoonlijke gegevens",
            personalDataCollectionText: "Deze gegevens worden uitsluitend verzameld en gebruikt voor de werking van de app. Ze worden niet aan derden verstrekt, tenzij de wet dit vereist of noodzakelijk is voor de uitvoering van het contract.",
            dataRetention: "De gegevens worden alleen bewaard zolang als nodig is voor de werking van de app. Na deze periode worden ze verwijderd. U kunt ook een exacte lijst van alle opgeslagen gegevens vinden op de pagina Recht op toegang.",
            useOfCookies: "Gebruik van cookies",
            useOfCookiesText: "De app maakt alleen gebruik van cookies die worden aangeboden door het advertentieplatform Admob, Firebase of Google Analytics.",
            useOfAnalytics: "Gebruik van Google Analytics, Admob, Google Maps en Firebase",
            useOfAnalyticsText: "De app gebruikt Google Analytics, Google Maps, Admob en Firebase om het gebruik van de app te analyseren en te optimaliseren. Hiervoor worden gegevens zoals IP-adres, apparaatinformatie en gebruikersgedrag verzameld en verwerkt. De gegevens worden geanonimiseerd zodat er geen conclusies kunnen worden getrokken over individuele personen.",
            userRights: "Rechten van de betrokkene",
            userRightsText: "Volgens de AVG hebben betrokkenen het recht op informatie, correctie, verwijdering, beperking van de verwerking en overdraagbaarheid van hun persoonlijke gegevens. Ze hebben ook het recht om bezwaar te maken tegen de verwerking van hun gegevens. Als u vragen of zorgen heeft over de verzameling en verwerking van uw persoonlijke gegevens, kunt u te allen tijde contact opnemen met de verantwoordelijke partij hierboven genoemd.",
            changesToPrivacyPolicy: "Wijzigingen in het privacybeleid",
            changesToPrivacyPolicyText: "We behouden ons het recht voor om dit privacybeleid op elk moment te wijzigen. De huidige versie van het privacybeleid is te raadplegen op het app-platform.",
            dataSecurity: "Gegevensbeveiliging",
            dataSecurityText: "We gebruiken technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen tegen verlies, vernietiging, manipulatie en ongeautoriseerde toegang. Onze beveiligingsmaatregelen worden regelmatig beoordeeld en aangepast aan de huidige stand van de techniek.",
            contact: "Contact",
            contactText: "Als u vragen of zorgen heeft over dit privacybeleid, kunt u te allen tijde contact met ons opnemen via het e-mailadres support{'@'}chattyevent.com.",
            finalProvisions: "Slotbepalingen",
            finalProvisionsText: "Dit privacybeleid valt onder de Duitse wetgeving inzake gegevensbescherming en de Algemene verordening gegevensbescherming (AVG). Indien een bepaling van dit privacybeleid ongeldig is of wordt, heeft dit geen invloed op de geldigheid van de overige bepalingen. In plaats van de ongeldige bepaling zal een geldige regeling van toepassing zijn die het doel van de ongeldige bepaling het dichtst benadert. Dit privacybeleid is voor het laatst bijgewerkt op 9 mei 2023."
          }
        },        
        termsOfUse: "Gebruiksvoorwaarden",
        imprint: {
          title: "Afdruk",
          data: {
            imprintDescription: "Afdruk conform § 5 TMG:",
            name: "Naam: Marlon Wißkirchen",
            city: "Stad: Sinzig 53489",
            address: "Adres: Im Rossbüsch 13",
            country: "Land: Duitsland",
            number: "Nummer: +4917672996744",
            email: "E-mail: support{'@'}chattyevent.com",
            website: "Website: chattyevent.com",
            disclaimer: {
              title: "Disclaimer:",
              text:
                "Ondanks zorgvuldige inhoudelijke controle aanvaarden wij geen aansprakelijkheid voor de inhoud van externe links. De inhoud van de gekoppelde pagina\'s is uitsluitend de verantwoordelijkheid van de exploitanten ervan.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Recht op Gegevenstoegang",
          data: {
            general: "Algemeen",
            generalText: "Op deze pagina stellen we alle gegevens beschikbaar die we verzamelen. De verwerking van de gegevens wordt beschreven in ons privacybeleid.",
            groupchats: "Groepschats",
            groupchatsText: "Groepschats slaan de volgende niet-persoonlijke gegevens op:",
            personalGroupchatsText: "De volgende persoonlijke gegevens worden opgeslagen:",
            events: "Evenementen",
            eventsText: "Privé-evenementen slaan de volgende niet-persoonlijke gegevens op:",
            personalEventsText: "De volgende persoonlijke gegevens worden opgeslagen:",
            messages: "Berichten",
            messagesText: "Berichten slaan de volgende gegevens op:",
            shoppingListItems: "Boodschappenlijst Items",
            shoppingListItemsText: "Boodschappenlijstitems slaan de volgende gegevens op:",
            shoppingListItemsBoughtAmounts: "Gekochte Hoeveelheden van Boodschappenlijst Items",
            shoppingListItemsBoughtAmountsText: "De gekochte hoeveelheden van boodschappenlijstitems slaan de volgende informatie op:",
            userConnections: "Gebruikersverbindingen",
            userConnectionsText: "Gebruikersverbindingen evenementen slaan de volgende gegevens op:",
            requests: "Verzoeken",
            requestsText: "Verzoeken slaan de volgende gegevens op:",
            users: "Gebruikers",
            usersText: "Gebruikersgegevens slaan de volgende gegevens op:",
          }
        },
        rightOnDeletion: {
          title: "Recht op verwijdering",
          data: {
            general: "Algemeen",
            generalText: "Op deze pagina leggen we uit hoe u al uw gegevens permanent kunt verwijderen.",
            instructions: "Instructies",
            instructionsList: {
              0: "Open de ChattyEvent-app",
              1: "Ga naar de instellingenpagina",
              2: 'Ga naar "Informatie en gegevensprivacy" en selecteer "Recht op verwijdering"',
              3: 'Klik op "Gegevens verwijderen" en bevestig door op "Ja" te klikken',
            },
          },
        },
      },
      blog: {
        title: "Nog geen inhoud"
      },
      faq: {
        title: "Veelgestelde vragen",
        box1: {
          title: "Worden evenementen automatisch verwijderd?",
          answer: "Nee, evenementen worden niet automatisch verwijderd. Ze moeten handmatig worden verwijderd of de functie voor automatische verwijdering van het evenement moet worden geactiveerd voordat je een nieuw evenement aanmaakt. Daarna worden evenementen 24 uur na afloop of 48 uur na het begin verwijderd."
        },
        box2: {
          title: "Is het mogelijk om berichten achteraf te verwijderen?",
          answer: "Nee, zodra berichten zijn verzonden, kunnen ze niet worden verwijderd. Een uitzondering is als je je hele account verwijdert, dan worden alle ooit geschreven berichten verwijderd. We werken aan een functie waarmee je individuele chats met andere gebruikers kunt verwijderen, maar dit wordt pas in het vierde kwartaal uitgebracht."
        },
        box3: {
          title: "Waarom worden berichten automatisch verwijderd?",
          answer: "Berichten worden automatisch na 365 dagen verwijderd om middelen te besparen."
        }
      },
    },
    es: {
      appBar: {
        datasecurity: "Seguridad de datos",
        blog: "Blog",
        faq: "Preguntas frecuentes"
      },
      index: {
        title: "¡Planifica tus eventos y fiestas fácilmente y habla con tus amigos con ChattyEvent!",
        description: "¡ChattyEvent es la solución definitiva para la planificación de fiestas y eventos! Nuestra innovadora aplicación se trata de la interacción en grupo y te facilita la comunicación con tus amigos, familiares o colegas. Ya sea que estés organizando una fiesta épica o simplemente quieras mantener un contacto más cercano, ChattyEvent es el compañero ideal para reunir todos tus contactos en un solo lugar central."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Política de privacidad",
          data: {
            general: "General",
            generalText: "En esta página, le proporcionamos todos los datos que recopilamos. El procesamiento de los datos se describe en nuestra política de privacidad.",
            responsibleParty: "Entidad responsable",
            responsiblePartyTitle: "Entidad responsable según el RGPD:",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Recopilación de datos personales",
            personalDataCollectionText: "Estos datos se recopilan y utilizan exclusivamente para el funcionamiento de la aplicación. No se divulgarán a terceros, a menos que la ley lo exija o sea necesario para el cumplimiento del contrato.",
            dataRetention: "Los datos se almacenarán solo durante el tiempo que sea necesario para el funcionamiento de la aplicación. Después de este período, se eliminarán. También puede encontrar una lista exacta de todos los datos almacenados en la página Derecho de acceso.",
            useOfCookies: "Uso de cookies",
            useOfCookiesText: "La aplicación utiliza solo cookies proporcionadas por la plataforma publicitaria Admob, Firebase o Google Analytics.",
            useOfAnalytics: "Uso de Google Analytics, Admob, Google Maps y Firebase",
            useOfAnalyticsText: "La aplicación utiliza Google Analytics, Google Maps, Admob y Firebase para analizar y optimizar su uso. Para ello, se recopilan y procesan datos como la dirección IP, la información del dispositivo y el comportamiento del usuario. Los datos se anonimizan para que no sea posible identificar a personas individuales.",
            userRights: "Derechos del interesado",
            userRightsText: "De acuerdo con el RGPD, los interesados tienen derecho a obtener información, corregir, eliminar, limitar el procesamiento y transferir sus datos personales. También tienen derecho a oponerse al procesamiento de sus datos. Si tiene preguntas o inquietudes sobre la recopilación y el procesamiento de sus datos personales, puede ponerse en contacto con la entidad responsable mencionada anteriormente.",
            changesToPrivacyPolicy: "Cambios en la política de privacidad",
            changesToPrivacyPolicyText: "Nos reservamos el derecho de cambiar esta política de privacidad en cualquier momento. La versión actual de la política de privacidad se puede consultar en la plataforma de la aplicación.",
            dataSecurity: "Seguridad de datos",
            dataSecurityText: "Utilizamos medidas técnicas y organizativas para proteger sus datos personales contra la pérdida, destrucción, manipulación y acceso no autorizado. Nuestras medidas de seguridad se revisan periódicamente y se adaptan al estado actual de la tecnología.",
            contact: "Contacto",
            contactText: "Si tiene preguntas o inquietudes sobre esta política de privacidad, puede ponerse en contacto con nosotros en cualquier momento por correo electrónico a support{'@'}chattyevent.com.",
            finalProvisions: "Disposiciones finales",
            finalProvisionsText: "Esta política de privacidad está sujeta a la legislación alemana de protección de datos y al Reglamento General de Protección de Datos (RGPD). Si alguna disposición de esta política de privacidad es o llega a ser inválida, esto no afectará la validez de las demás disposiciones. En lugar de la disposición inválida, se aplicará una disposición válida que se acerque más al propósito de la disposición inválida. Esta política de privacidad se actualizó por última vez el 9 de mayo de 2023."
          }
        },        
        termsOfUse: "Términos de uso",
        imprint: {
          title: "Impresión",
          data: {
            imprintDescription: "Impresión de acuerdo con el § 5 TMG:",
            name: "Nombre: Marlon Wißkirchen",
            city: "Ciudad: Sinzig 53489",
            address: "Dirección: Im Rossbüsch 13",
            country: "País: Alemania",
            number: "Número: +4917672996744",
            email: "Correo electrónico: support{'@'}chattyevent.com",
            website: "Sitio web: chattyevent.com",
            disclaimer: {
              title: "Aviso legal:",
              text:
                "A pesar de un control de contenidos cuidadoso, no asumimos ninguna responsabilidad por el contenido de los enlaces externos. El contenido de las páginas vinculadas es responsabilidad exclusiva de sus operadores.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Derecho de Acceso a los Datos",
          data: {
            general: "General",
            generalText: "En esta página, le proporcionamos todos los datos que recopilamos. El procesamiento de los datos está descrito en nuestra política de privacidad.",
            groupchats: "Chats de Grupo",
            groupchatsText: "Los chats de grupo almacenan la siguiente información no personal:",
            personalGroupchatsText: "Se almacenan los siguientes datos personales:",
            events: "Eventos",
            eventsText: "Los eventos privados almacenan la siguiente información no personal:",
            personalEventsText: "Se almacenan los siguientes datos personales:",
            messages: "Mensajes",
            messagesText: "Los mensajes almacenan la siguiente información:",
            shoppingListItems: "Artículos de la Lista de Compras",
            shoppingListItemsText: "Los artículos de la lista de compras almacenan la siguiente información:",
            shoppingListItemsBoughtAmounts: "Cantidad Comprada de Artículos de la Lista de Compras",
            shoppingListItemsBoughtAmountsText: "La cantidad comprada de los artículos de la lista de compras almacena la siguiente información:",
            userConnections: "Conexiones de Usuarios",
            userConnectionsText: "Los eventos de conexiones de usuarios almacenan la siguiente información:",
            requests: "Solicitudes",
            requestsText: "Las solicitudes almacenan la siguiente información:",
            users: "Usuarios",
            usersText: "Los datos de usuario almacenan la siguiente información:",
          }
        },
        rightOnDeletion: {
          title: "Droit à la suppression",
          data: {
            general: "Général",
            generalText: "Sur cette page, nous vous expliquons comment supprimer définitivement toutes vos données.",
            instructions: "Instructions",
            instructionsList: {
              0: "Ouvrez l'application ChattyEvent",
              1: "Accédez à la page des paramètres",
              2: 'Accédez à "Info et protection des données" et sélectionnez "Droit à la suppression"',
              3: 'Cliquez sur "Supprimer les données" et confirmez en cliquant sur "Oui"',
            },
          },
        },        
      },
      blog: {
        title: "Sin contenido por el momento"
      },
      faq: {
        title: "Preguntas frecuentes",
        box1: {
          title: "¿Se eliminan automáticamente los eventos?",
          answer: "No, los eventos no se eliminan automáticamente. Deben eliminarse manualmente o activar la función de eliminación automática del evento antes de crear uno nuevo. Luego, los eventos se eliminarán 24 horas después de su finalización o 48 horas después de su inicio."
        },
        box2: {
          title: "¿Es posible eliminar mensajes después de enviarlos?",
          answer: "No, una vez que los mensajes se han enviado, no se pueden eliminar. Una excepción es si eliminas toda tu cuenta, entonces se eliminarán todos los mensajes escritos. Estamos trabajando en una función para que puedas eliminar chats individuales con otros usuarios, pero esto no se lanzará hasta el cuarto trimestre como muy pronto."
        },
        box3: {
          title: "¿Por qué se eliminan automáticamente los mensajes?",
          answer: "Los mensajes se eliminan automáticamente después de 365 días para ahorrar recursos."
        }
      },
    },
    pt: {
      appBar: {
        datasecurity: "Segurança de dados",
        blog: "Blog",
        faq: "Perguntas frequentes"
      },
      index: {
        title: "Planeie facilmente os seus eventos, festas e converse com os seus amigos com o ChattyEvent!",
        description: "O ChattyEvent é a solução definitiva para o planeamento das suas festas e eventos! A nossa inovadora aplicação gira em torno da interação em grupo e torna fácil a comunicação com os seus amigos, família ou colegas. Quer esteja a organizar uma festa épica ou apenas queira manter um contacto mais próximo, o ChattyEvent é o companheiro ideal para reunir todos os seus contactos num único local central."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Política de Privacidade",
          data: {
            general: "Geral",
            generalText: "Nesta página, fornecemos todos os dados que coletamos. O processamento dos dados está descrito na nossa política de privacidade.",
            responsibleParty: "Entidade responsável",
            responsiblePartyTitle: "Entidade responsável nos termos do RGPD:",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Coleta de dados pessoais",
            personalDataCollectionText: "Esses dados são coletados e usados exclusivamente para o funcionamento do aplicativo. Eles não serão divulgados a terceiros, a menos que a lei o exija ou seja necessário para o cumprimento do contrato.",
            dataRetention: "Os dados serão armazenados apenas pelo tempo necessário para o funcionamento do aplicativo. Após esse período, eles serão excluídos. Você também pode encontrar uma lista exata de todos os dados armazenados na página Direito de Acesso.",
            useOfCookies: "Uso de cookies",
            useOfCookiesText: "O aplicativo usa apenas cookies fornecidos pela plataforma de publicidade Admob, Firebase ou Google Analytics.",
            useOfAnalytics: "Uso do Google Analytics, Admob, Google Maps e Firebase",
            useOfAnalyticsText: "O aplicativo usa o Google Analytics, o Google Maps, o Admob e o Firebase para analisar e otimizar o uso do aplicativo. Para esse fim, dados como endereço IP, informações do dispositivo e comportamento do usuário são coletados e processados. Os dados são anonimizados para que não seja possível tirar conclusões sobre pessoas individuais.",
            userRights: "Direitos do titular dos dados",
            userRightsText: "De acordo com o RGPD, os titulares dos dados têm o direito de obter informações, corrigir, apagar, restringir o processamento e transferir seus dados pessoais. Eles também têm o direito de se opor ao processamento de seus dados. Se você tiver alguma dúvida ou preocupação sobre a coleta e o processamento de seus dados pessoais, pode entrar em contato com a entidade responsável mencionada acima.",
            changesToPrivacyPolicy: "Alterações na Política de Privacidade",
            changesToPrivacyPolicyText: "Reservamo-nos o direito de alterar esta política de privacidade a qualquer momento. A versão atual da política de privacidade pode ser consultada na plataforma do aplicativo.",
            dataSecurity: "Segurança dos dados",
            dataSecurityText: "Utilizamos medidas técnicas e organizacionais para proteger seus dados pessoais contra perda, destruição, manipulação e acesso não autorizado. Nossas medidas de segurança são revisadas regularmente e adaptadas ao estado atual da tecnologia.",
            contact: "Contato",
            contactText: "Se você tiver alguma dúvida ou preocupação sobre esta política de privacidade, pode entrar em contato conosco a qualquer momento pelo e-mail support{'@'}chattyevent.com.",
            finalProvisions: "Disposições Finais",
            finalProvisionsText: "Esta política de privacidade está sujeita à lei alemã de proteção de dados e ao Regulamento Geral de Proteção de Dados (RGPD). Se alguma disposição desta política de privacidade for ou se tornar inválida, isso não afetará a validade das demais disposições. Em vez da disposição inválida, será aplicada uma disposição válida que mais se aproxime do objetivo da disposição inválida. Esta política de privacidade foi atualizada pela última vez em 9 de maio de 2023."
          }
        },        
        termsOfUse: "Termos de Utilização",
        imprint: {
          title: "Impressão",
          data: {
            imprintDescription: "Impressão de acordo com o § 5 TMG:",
            name: "Nome: Marlon Wißkirchen",
            city: "Cidade: Sinzig 53489",
            address: "Endereço: Im Rossbüsch 13",
            country: "País: Alemanha",
            number: "Número: +4917672996744",
            email: "E-mail: support{'@'}chattyevent.com",
            website: "Website: chattyevent.com",
            disclaimer: {
              title: "Aviso Legal:",
              text:
                "Apesar do controle cuidadoso do conteúdo, declinamos toda e qualquer responsabilidade pelo conteúdo de links externos. O conteúdo das páginas vinculadas é de responsabilidade exclusiva de seus operadores.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Direito de Acesso aos Dados",
          data: {
            general: "Geral",
            generalText: "Nesta página, fornecemos todos os dados que coletamos. O processamento dos dados está descrito em nossa política de privacidade.",
            groupchats: "Chats em Grupo",
            groupchatsText: "Os chats em grupo armazenam os seguintes dados não pessoais:",
            personalGroupchatsText: "Os seguintes dados pessoais são armazenados:",
            events: "Eventos",
            eventsText: "Os eventos privados armazenam os seguintes dados não pessoais:",
            personalEventsText: "Os seguintes dados pessoais são armazenados:",
            messages: "Mensagens",
            messagesText: "As mensagens armazenam os seguintes dados:",
            shoppingListItems: "Itens da Lista de Compras",
            shoppingListItemsText: "Os itens da lista de compras armazenam os seguintes dados:",
            shoppingListItemsBoughtAmounts: "Quantidade Comprada de Itens da Lista de Compras",
            shoppingListItemsBoughtAmountsText: "A quantidade comprada de itens da lista de compras armazena a seguinte informação:",
            userConnections: "Conexões de Usuários",
            userConnectionsText: "Os eventos de conexões de usuários armazenam os seguintes dados:",
            requests: "Solicitações",
            requestsText: "As solicitações armazenam os seguintes dados:",
            users: "Usuários",
            usersText: "Os dados de usuário armazenam os seguintes dados:",
          }
        },
        rightOnDeletion: {
          title: "Direito de exclusão",
          data: {
            general: "Geral",
            generalText: "Nesta página, explicamos como você pode excluir permanentemente todos os seus dados.",
            instructions: "Instruções",
            instructionsList: {
              0: "Abra o aplicativo ChattyEvent",
              1: "Acesse a página de configurações",
              2: 'Vá para "Informações e privacidade de dados" e selecione "Direito de exclusão"',
              3: 'Clique em "Excluir dados" e confirme clicando em "Sim"',
            },
          },
        },        
      },
      blog: {
        title: "Ainda sem conteúdo"
      },
      faq: {
        title: "Perguntas frequentes",
        box1: {
          title: "Os eventos são eliminados automaticamente?",
          answer: "Não, os eventos não são eliminados automaticamente. Devem ser eliminados manualmente ou ativar a função de eliminação automática do evento antes de criar um novo evento. Depois, os eventos serão eliminados 24 horas após o término ou 48 horas após o início."
        },
        box2: {
          title: "É possível eliminar mensagens depois de as enviar?",
          answer: "Não, uma vez que as mensagens tenham sido enviadas, não podem ser eliminadas. Uma exceção é se eliminar toda a sua conta, nesse caso, todas as mensagens já escritas serão eliminadas. Estamos a trabalhar numa funcionalidade para que possa eliminar chats individuais com outros utilizadores, mas isso só será lançado no quarto trimestre, no mínimo."
        },
        box3: {
          title: "Por que razão as mensagens são eliminadas automaticamente?",
          answer: "As mensagens são eliminadas automaticamente após 365 dias para poupar recursos."
        }
      },
    },
    it: {
      appBar: {
        datasecurity: "Sicurezza dei dati",
        blog: "Blog",
        faq: "Domande frequenti"
      },
      index: {
        title: "Pianifica facilmente i tuoi eventi e feste e chatta con i tuoi amici con ChattyEvent!",
        description: "ChattyEvent è la soluzione definitiva per la pianificazione delle tue feste ed eventi! La nostra innovativa app è incentrata sull'interazione di gruppo e facilita la comunicazione con i tuoi amici, familiari o colleghi. Che tu stia organizzando una festa epica o desideri mantenere un contatto più stretto, ChattyEvent è il compagno ideale per riunire tutti i tuoi contatti in un unico luogo centrale."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Informativa sulla privacy",
          data: {
            general: "Generale",
            generalText: "In questa pagina forniamo tutti i dati che raccogliamo. Il trattamento dei dati è descritto nella nostra informativa sulla privacy.",
            responsibleParty: "Responsabile del trattamento",
            responsiblePartyTitle: "Responsabile del trattamento ai sensi del GDPR:",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Raccolta di dati personali",
            personalDataCollectionText: "Questi dati vengono raccolti e utilizzati esclusivamente per il funzionamento dell'app. Non saranno divulgati a terzi, a meno che la legge lo richieda o sia necessario per l'adempimento del contratto.",
            dataRetention: "I dati verranno conservati solo per il tempo necessario al funzionamento dell'app. Dopo questo periodo, verranno eliminati. È possibile trovare un elenco preciso di tutti i dati memorizzati nella pagina Diritti dell'interessato.",
            useOfCookies: "Utilizzo dei cookie",
            useOfCookiesText: "L'app utilizza solo i cookie forniti dalla piattaforma pubblicitaria Admob, Firebase o Google Analytics.",
            useOfAnalytics: "Utilizzo di Google Analytics, Admob, Google Maps e Firebase",
            useOfAnalyticsText: "L'app utilizza Google Analytics, Google Maps, Admob e Firebase per analizzare e ottimizzare l'uso dell'app. A questo scopo vengono raccolti e elaborati dati come l'indirizzo IP, le informazioni sul dispositivo e il comportamento dell'utente. I dati vengono anonimizzati in modo che non sia possibile trarre conclusioni su singole persone.",
            userRights: "Diritti dell'interessato",
            userRightsText: "In conformità al GDPR, gli interessati hanno il diritto di ottenere informazioni, correggere, cancellare, limitare il trattamento e trasferire i propri dati personali. Hanno anche il diritto di opporsi al trattamento dei propri dati. Se avete domande o preoccupazioni sulla raccolta e il trattamento dei vostri dati personali, potete contattare il responsabile del trattamento sopra indicato.",
            changesToPrivacyPolicy: "Modifiche all'informativa sulla privacy",
            changesToPrivacyPolicyText: "Ci riserviamo il diritto di modificare questa informativa sulla privacy in qualsiasi momento. La versione attuale dell'informativa sulla privacy è consultabile sulla piattaforma dell'app.",
            dataSecurity: "Sicurezza dei dati",
            dataSecurityText: "Utilizziamo misure tecniche e organizzative per proteggere i vostri dati personali da perdite, distruzioni, manipolazioni e accessi non autorizzati. Le nostre misure di sicurezza sono regolarmente riviste ed adattate allo stato attuale della tecnologia.",
            contact: "Contatto",
            contactText: "Se avete domande o preoccupazioni riguardo a questa informativa sulla privacy, potete contattarci in qualsiasi momento all'indirizzo e-mail support{'@'}chattyevent.com.",
            finalProvisions: "Disposizioni finali",
            finalProvisionsText: "Questa informativa sulla privacy è soggetta alla legge tedesca sulla protezione dei dati e al Regolamento generale sulla protezione dei dati (GDPR). Se una disposizione di questa informativa sulla privacy è o diventa invalida, ciò non influisce sulla validità delle altre disposizioni. In caso di invalidità di una disposizione, sarà applicata una disposizione valida che si avvicini il più possibile allo scopo della disposizione invalida. Questa informativa sulla privacy è stata aggiornata per l'ultima volta il 9 maggio 2023."
          }
        },
        termsOfUse: "Termini di utilizzo",
        imprint: {
          title: "Impressum",
          data: {
            imprintDescription: "Impressum secondo il § 5 TMG:",
            name: "Nome: Marlon Wißkirchen",
            city: "Città: Sinzig 53489",
            address: "Indirizzo: Im Rossbüsch 13",
            country: "Paese: Germania",
            number: "Numero: +4917672996744",
            email: "E-mail: support{'@'}chattyevent.com",
            website: "Sito web: chattyevent.com",
            disclaimer: {
              title: "Disclaimer:",
              text:
                "Nonostante un controllo accurato dei contenuti, decliniamo ogni responsabilità per i contenuti dei link esterni. Il contenuto delle pagine collegate è di esclusiva responsabilità dei loro gestori.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Diritto di Accesso ai Dati",
          data: {
            general: "Generale",
            generalText: "In questa pagina, ti forniamo tutti i dati che raccogliamo. Il trattamento dei dati è descritto nella nostra informativa sulla privacy.",
            groupchats: "Chat di Gruppo",
            groupchatsText: "Le chat di gruppo memorizzano i seguenti dati non personali:",
            personalGroupchatsText: "Sono memorizzati i seguenti dati personali:",
            events: "Eventi",
            eventsText: "Gli eventi privati memorizzano i seguenti dati non personali:",
            personalEventsText: "Sono memorizzati i seguenti dati personali:",
            messages: "Messaggi",
            messagesText: "I messaggi memorizzano i seguenti dati:",
            shoppingListItems: "Articoli della Lista della Spesa",
            shoppingListItemsText: "Gli articoli della lista della spesa memorizzano i seguenti dati:",
            shoppingListItemsBoughtAmounts: "Quantità Acquistata degli Articoli della Lista della Spesa",
            shoppingListItemsBoughtAmountsText: "La quantità acquistata degli articoli della lista della spesa memorizza le seguenti informazioni:",
            userConnections: "Connessioni degli Utenti",
            userConnectionsText: "Gli eventi di connessioni degli utenti memorizzano i seguenti dati:",
            requests: "Richieste",
            requestsText: "Le richieste memorizzano i seguenti dati:",
            users: "Utenti",
            usersText: "I dati degli utenti memorizzano i seguenti dati:",
          }
        },
        rightOnDeletion: {
          title: "Diritto di cancellazione",
          data: {
            general: "Generale",
            generalText: "In questa pagina, spieghiamo come è possibile eliminare definitivamente tutti i propri dati.",
            instructions: "Istruzioni",
            instructionsList: {
              0: "Apri l'app ChattyEvent",
              1: "Vai alla pagina delle impostazioni",
              2: 'Vai su "Informazioni e privacy dei dati" e seleziona "Diritto di cancellazione"',
              3: 'Fai clic su "Elimina dati" e conferma facendo clic su "Sì"',
            },
          },
        },
      },
      blog: {
        title: "Nessun contenuto finora"
      },
      faq: {
        title: "Domande frequenti",
        box1: {
          title: "Gli eventi vengono eliminati automaticamente?",
          answer: "No, gli eventi non vengono eliminati automaticamente. Devono essere eliminati manualmente o attivare la funzione di eliminazione automatica dell'evento prima di creare un nuovo evento. In seguito, gli eventi verranno eliminati 24 ore dopo la fine o 48 ore dopo l'inizio."
        },
        box2: {
          title: "È possibile eliminare i messaggi dopo averli inviati?",
          answer: "No, una volta inviati, i messaggi non possono essere eliminati. Un'eccezione è se elimini l'intero account, in tal caso verranno eliminati tutti i messaggi mai scritti. Stiamo lavorando a una funzione che ti permetterà di eliminare le chat individuali con altri utenti, ma questa non sarà rilasciata prima del quarto trimestre, almeno."
        },
        box3: {
          title: "Perché i messaggi vengono eliminati automaticamente?",
          answer: "I messaggi vengono eliminati automaticamente dopo 365 giorni per risparmiare risorse."
        }
      },
    },
    fr: {
      appBar: {
        datasecurity: "Sécurité des données",
        blog: "Blog",
        faq: "Foire aux questions"
      },
      index: {
        title: "Planifiez vos événements et fêtes facilement et discutez avec vos amis grâce à ChattyEvent !",
        description: "ChattyEvent est la solution ultime pour la planification de vos fêtes et événements ! Notre application innovante repose sur l'interaction de groupe et facilite la communication avec vos amis, votre famille ou vos collègues. Que vous organisiez une fête épique ou que vous souhaitiez simplement rester en contact plus étroit, ChattyEvent est le compagnon idéal pour réunir tous vos contacts en un seul endroit central."
      },
      datasecurity: {
        privacyPolicy: {
          title: "Politique de confidentialité",
          data: {
            general: "Général",
            generalText: "Sur cette page, nous vous fournissons toutes les données que nous collectons. Le traitement des données est décrit dans notre politique de confidentialité.",
            responsibleParty: "Entité responsable",
            responsiblePartyTitle: "Entité responsable conformément au RGPD :",
            responsiblePartyInfo: "Marlon Wißkirchen, Eifelstraße 15, 53489 Sinzig, support{'@'}chattyevent.com",
            personalDataCollection: "Collecte de données personnelles",
            personalDataCollectionText: "Ces données sont collectées et utilisées exclusivement pour le fonctionnement de l'application. Elles ne seront pas divulguées à des tiers, sauf si la loi l'exige ou si cela est nécessaire à l'exécution du contrat.",
            dataRetention: "Les données ne seront stockées que le temps nécessaire au fonctionnement de l'application. Après cette période, elles seront supprimées. Vous pouvez également trouver une liste précise de toutes les données stockées sur la page Droit d'accès.",
            useOfCookies: "Utilisation de cookies",
            useOfCookiesText: "L'application utilise uniquement les cookies fournis par la plateforme publicitaire Admob, Firebase ou Google Analytics.",
            useOfAnalytics: "Utilisation de Google Analytics, Admob, Google Maps et Firebase",
            useOfAnalyticsText: "L'application utilise Google Analytics, Google Maps, Admob et Firebase pour analyser et optimiser son utilisation. À cette fin, des données telles que l'adresse IP, les informations sur l'appareil et le comportement de l'utilisateur sont collectées et traitées. Les données sont anonymisées de manière à ne pas permettre d'identifier des personnes spécifiques.",
            userRights: "Droits de la personne concernée",
            userRightsText: "Conformément au RGPD, les personnes concernées ont le droit d'obtenir des informations, de corriger, de supprimer, de restreindre le traitement et de transférer leurs données personnelles. Elles ont également le droit de s'opposer au traitement de leurs données. Si vous avez des questions ou des préoccupations concernant la collecte et le traitement de vos données personnelles, vous pouvez contacter l'entité responsable mentionnée ci-dessus.",
            changesToPrivacyPolicy: "Modifications de la politique de confidentialité",
            changesToPrivacyPolicyText: "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version actuelle de la politique de confidentialité est consultable sur la plateforme de l'application.",
            dataSecurity: "Sécurité des données",
            dataSecurityText: "Nous utilisons des mesures techniques et organisationnelles pour protéger vos données personnelles contre la perte, la destruction, la manipulation et l'accès non autorisé. Nos mesures de sécurité sont régulièrement examinées et adaptées à l'état actuel de la technologie.",
            contact: "Contact",
            contactText: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, vous pouvez nous contacter à tout moment par e-mail à l'adresse support{'@'}chattyevent.com.",
            finalProvisions: "Dispositions finales",
            finalProvisionsText: "Cette politique de confidentialité est soumise au droit allemand de la protection des données et au règlement général sur la protection des données (RGPD). Si certaines dispositions de cette politique de confidentialité sont ou deviennent invalides, cela n'affecte pas la validité des autres dispositions. En cas d'invalidité d'une disposition, une disposition valide qui se rapproche le plus de l'objectif de la disposition invalide sera appliquée. Cette politique de confidentialité a été mise à jour pour la dernière fois le 9 mai 2023."
          }
        },        
        termsOfUse: "Conditions d'utilisation",
        imprint: {
          title: "Mention légale",
          data: {
            imprintDescription: "Mention légale conformément à l\'article 5 TMG :",
            name: "Nom : Marlon Wißkirchen",
            city: "Ville : Sinzig 53489",
            address: "Adresse : Im Rossbüsch 13",
            country: "Pays : Allemagne",
            number: "Numéro : +4917672996744",
            email: "E-mail : support{'@'}chattyevent.com",
            website: "Site web : chattyevent.com",
            disclaimer: {
              title: "Avis de non-responsabilité :",
              text:
                "Malgré un contrôle attentif du contenu, nous déclinons toute responsabilité quant au contenu des liens externes. Le contenu des pages liées relève de la seule responsabilité de leurs exploitants.",
            },
          }
        },
        rightOnDataAccess: {
          title: "Droit d'accès aux données",
          data: {
            general: "Général",
            generalText: "Sur cette page, nous vous fournissons toutes les données que nous collectons. Le traitement des données est décrit dans notre politique de confidentialité.",
            groupchats: "Chats de groupe",
            groupchatsText: "Les chats de groupe stockent les données non personnelles suivantes :",
            personalGroupchatsText: "Les données personnelles suivantes sont stockées :",
            events: "Événements",
            eventsText: "Les événements privés stockent les données non personnelles suivantes :",
            personalEventsText: "Les données personnelles suivantes sont stockées :",
            messages: "Messages",
            messagesText: "Les messages stockent les données suivantes :",
            shoppingListItems: "Articles de liste de courses",
            shoppingListItemsText: "Les articles de liste de courses stockent les données suivantes :",
            shoppingListItemsBoughtAmounts: "Quantités achetées de la liste de courses",
            shoppingListItemsBoughtAmountsText: "Les quantités achetées d'articles de la liste de courses stockent les données suivantes :",
            userConnections: "Connexions d'utilisateurs",
            userConnectionsText: "Les événements de connexions d'utilisateurs stockent les données suivantes :",
            requests: "Demandes",
            requestsText: "Les demandes stockent les données suivantes :",
            users: "Utilisateurs",
            usersText: "Les données utilisateur stockent les données suivantes :",
          }
        },
        rightOnDeletion: {
          title: "Droit à la suppression",
          data: {
            general: "Général",
            generalText: "Sur cette page, nous vous expliquons comment supprimer définitivement toutes vos données.",
            instructions: "Instructions",
            instructionsList: {
              0: "Ouvrez l'application ChattyEvent",
              1: "Accédez à la page des paramètres",
              2: 'Accédez à "Info et protection des données" et sélectionnez "Droit à la suppression"',
              3: 'Cliquez sur "Supprimer les données" et confirmez en cliquant sur "Oui"',
            },
          },
        },        
      },
      blog: {
        title: "Aucun contenu pour le moment"
      },
      faq: {
        title: "Foire aux questions",
        box1: {
          title: "Les événements sont-ils automatiquement supprimés ?",
          answer: "Non, les événements ne sont pas automatiquement supprimés. Ils doivent être supprimés manuellement ou la fonction de suppression automatique de l'événement doit être activée avant de créer un nouvel événement. Ensuite, les événements seront supprimés 24 heures après la fin ou 48 heures après le début."
        },
        box2: {
          title: "Est-il possible de supprimer des messages après les avoir envoyés ?",
          answer: "Non, une fois les messages envoyés, ils ne peuvent pas être supprimés. Une exception est si vous supprimez l'intégralité de votre compte, alors tous les messages jamais écrits seront supprimés. Nous travaillons sur une fonctionnalité vous permettant de supprimer des discussions individuelles avec d'autres utilisateurs, mais cela ne sera pas publié avant le quatrième trimestre, au plus tôt."
        },
        box3: {
          title: "Pourquoi les messages sont-ils automatiquement supprimés ?",
          answer: "Les messages sont automatiquement supprimés après 365 jours pour économiser des ressources."
        }
      },
    }  
  }
}))
