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
        title: 'Plan your events and parties easily and chat with your friends using ChattyEvent!',
        description: "ChattyEvent is the ultimate solution for your party and event planning! Our innovative app is all about group interaction and makes it easy for you to communicate with your friends, family or colleagues. Whether you're organizing an epic party or just want to keep in closer touch, ChattyEvent is the ideal companion to bring all your contacts together in one central place."
      },
      datasecurity: {
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        imprint: {
          title: "Imprint",
          data: {
            imprintDescription: 'Imprint according to § 5 TMG:',
            name: 'Name: Marlon Wißkirchen',
            city: 'City: Sinzig 53489',
            address: 'Address: Im Rossbüsch 13',
            country: 'Country: Germany',
            number: 'Number: +4917672996744',
            email: 'E-Mail: support@chattyevent.com',
            website: 'Website: chattyevent.com',
            disclaimer: {
              title: 'Disclaimer:',
              text:
                'Despite careful content control, we do not assume any liability for the content of external links. The content of the linked pages is the sole responsibility of their operators.',
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
        rightOnDeletion: "Right on Deletion"
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
        title: 'Plane deine Events und Partys einfach und chatte mit deinen Freunden mit ChattyEvent!',
        description: "ChattyEvent ist die ultimative Lösung für deine Party- und Eventplanung! Unsere innovative App dreht sich alles um Gruppeninteraktion und macht es dir leicht, mit deinen Freunden, deiner Familie oder deinen Kollegen zu kommunizieren. Egal, ob du eine epische Party organisierst oder einfach in engerem Kontakt bleiben möchtest, ChattyEvent ist der ideale Begleiter, um alle deine Kontakte an einem zentralen Ort zusammenzubringen."
      },
      datasecurity: {
        privacyPolicy: "Datenschutzerklärung",
        termsOfUse: "Nutzungsbedingungen",
        imprint: {
          title: "Impressum",
          data: {
            imprintDescription: 'Impressum gemäß § 5 TMG:',
            name: 'Name: Marlon Wißkirchen',
            city: 'Stadt: Sinzig 53489',
            address: 'Adresse: Im Rossbüsch 13',
            country: 'Land: Deutschland',
            number: 'Nummer: +4917672996744',
            email: 'E-Mail: support@chattyevent.com',
            website: 'Website: chattyevent.com',
            disclaimer: {
              title: 'Haftungshinweis:',
              text:
                'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Der Inhalt der verlinkten Seiten liegt in der alleinigen Verantwortung ihrer Betreiber.',
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
        rightOnDeletion: "Recht auf Löschung"
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
        title: 'Plan eenvoudig je evenementen en feesten en chat met je vrienden met ChattyEvent!',
        description: "ChattyEvent is de ultieme oplossing voor het plannen van je feesten en evenementen! Onze innovatieve app draait om groepsinteractie en maakt het gemakkelijk om te communiceren met je vrienden, familie of collega's. Of je nu een episch feest organiseert of gewoon in nauwer contact wilt blijven, ChattyEvent is de ideale metgezel om al je contacten op één centrale plek samen te brengen."
      },
      datasecurity: {
        privacyPolicy: "Privacybeleid",
        termsOfUse: "Gebruiksvoorwaarden",
        imprint: {
          title: "Afdruk",
          data: {
            imprintDescription: 'Afdruk conform § 5 TMG:',
            name: 'Naam: Marlon Wißkirchen',
            city: 'Stad: Sinzig 53489',
            address: 'Adres: Im Rossbüsch 13',
            country: 'Land: Duitsland',
            number: 'Nummer: +4917672996744',
            email: 'E-mail: support@chattyevent.com',
            website: 'Website: chattyevent.com',
            disclaimer: {
              title: 'Disclaimer:',
              text:
                'Ondanks zorgvuldige inhoudelijke controle aanvaarden wij geen aansprakelijkheid voor de inhoud van externe links. De inhoud van de gekoppelde pagina\'s is uitsluitend de verantwoordelijkheid van de exploitanten ervan.',
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
        rightOnDeletion: "Recht op verwijdering"
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
        title: '¡Planifica tus eventos y fiestas fácilmente y habla con tus amigos con ChattyEvent!',
        description: "¡ChattyEvent es la solución definitiva para la planificación de fiestas y eventos! Nuestra innovadora aplicación se trata de la interacción en grupo y te facilita la comunicación con tus amigos, familiares o colegas. Ya sea que estés organizando una fiesta épica o simplemente quieras mantener un contacto más cercano, ChattyEvent es el compañero ideal para reunir todos tus contactos en un solo lugar central."
      },
      datasecurity: {
        privacyPolicy: "Política de privacidad",
        termsOfUse: "Términos de uso",
        imprint: {
          title: "Impresión",
          data: {
            imprintDescription: 'Impresión de acuerdo con el § 5 TMG:',
            name: 'Nombre: Marlon Wißkirchen',
            city: 'Ciudad: Sinzig 53489',
            address: 'Dirección: Im Rossbüsch 13',
            country: 'País: Alemania',
            number: 'Número: +4917672996744',
            email: 'Correo electrónico: support@chattyevent.com',
            website: 'Sitio web: chattyevent.com',
            disclaimer: {
              title: 'Aviso legal:',
              text:
                'A pesar de un control de contenidos cuidadoso, no asumimos ninguna responsabilidad por el contenido de los enlaces externos. El contenido de las páginas vinculadas es responsabilidad exclusiva de sus operadores.',
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
        rightOnDeletion: "Derecho de eliminación"
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
        title: 'Planeie facilmente os seus eventos, festas e converse com os seus amigos com o ChattyEvent!',
        description: "O ChattyEvent é a solução definitiva para o planeamento das suas festas e eventos! A nossa inovadora aplicação gira em torno da interação em grupo e torna fácil a comunicação com os seus amigos, família ou colegas. Quer esteja a organizar uma festa épica ou apenas queira manter um contacto mais próximo, o ChattyEvent é o companheiro ideal para reunir todos os seus contactos num único local central."
      },
      datasecurity: {
        privacyPolicy: "Política de Privacidade",
        termsOfUse: "Termos de Utilização",
        imprint: {
          title: "Impressão",
          data: {
            imprintDescription: 'Impressão de acordo com o § 5 TMG:',
            name: 'Nome: Marlon Wißkirchen',
            city: 'Cidade: Sinzig 53489',
            address: 'Endereço: Im Rossbüsch 13',
            country: 'País: Alemanha',
            number: 'Número: +4917672996744',
            email: 'E-mail: support@chattyevent.com',
            website: 'Website: chattyevent.com',
            disclaimer: {
              title: 'Aviso Legal:',
              text:
                'Apesar do controle cuidadoso do conteúdo, declinamos toda e qualquer responsabilidade pelo conteúdo de links externos. O conteúdo das páginas vinculadas é de responsabilidade exclusiva de seus operadores.',
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
        rightOnDeletion: "Direito de Eliminação"
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
        title: 'Pianifica facilmente i tuoi eventi e feste e chatta con i tuoi amici con ChattyEvent!',
        description: "ChattyEvent è la soluzione definitiva per la pianificazione delle tue feste ed eventi! La nostra innovativa app è incentrata sull'interazione di gruppo e facilita la comunicazione con i tuoi amici, familiari o colleghi. Che tu stia organizzando una festa epica o desideri mantenere un contatto più stretto, ChattyEvent è il compagno ideale per riunire tutti i tuoi contatti in un unico luogo centrale."
      },
      datasecurity: {
        privacyPolicy: "Informativa sulla privacy",
        termsOfUse: "Termini di utilizzo",
        imprint: {
          title: "Impressum",
          data: {
            imprintDescription: 'Impressum secondo il § 5 TMG:',
            name: 'Nome: Marlon Wißkirchen',
            city: 'Città: Sinzig 53489',
            address: 'Indirizzo: Im Rossbüsch 13',
            country: 'Paese: Germania',
            number: 'Numero: +4917672996744',
            email: 'E-mail: support@chattyevent.com',
            website: 'Sito web: chattyevent.com',
            disclaimer: {
              title: 'Disclaimer:',
              text:
                'Nonostante un controllo accurato dei contenuti, decliniamo ogni responsabilità per i contenuti dei link esterni. Il contenuto delle pagine collegate è di esclusiva responsabilità dei loro gestori.',
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
        rightOnDeletion: "Diritto di cancellazione"
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
        title: 'Planifiez vos événements et fêtes facilement et discutez avec vos amis grâce à ChattyEvent !',
        description: "ChattyEvent est la solution ultime pour la planification de vos fêtes et événements ! Notre application innovante repose sur l'interaction de groupe et facilite la communication avec vos amis, votre famille ou vos collègues. Que vous organisiez une fête épique ou que vous souhaitiez simplement rester en contact plus étroit, ChattyEvent est le compagnon idéal pour réunir tous vos contacts en un seul endroit central."
      },
      datasecurity: {
        privacyPolicy: "Politique de confidentialité",
        termsOfUse: "Conditions d'utilisation",
        imprint: {
          title: "Mention légale",
          data: {
            imprintDescription: 'Mention légale conformément à l\'article 5 TMG :',
            name: 'Nom : Marlon Wißkirchen',
            city: 'Ville : Sinzig 53489',
            address: 'Adresse : Im Rossbüsch 13',
            country: 'Pays : Allemagne',
            number: 'Numéro : +4917672996744',
            email: 'E-mail : support@chattyevent.com',
            website: 'Site web : chattyevent.com',
            disclaimer: {
              title: 'Avis de non-responsabilité :',
              text:
                'Malgré un contrôle attentif du contenu, nous déclinons toute responsabilité quant au contenu des liens externes. Le contenu des pages liées relève de la seule responsabilité de leurs exploitants.',
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
        rightOnDeletion: "Droit de suppression"
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
