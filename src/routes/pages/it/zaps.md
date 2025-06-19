---
title: Cosa sono gli Zap?
description: Scopri cosa sono gli Zap, come funzionano e cosa ti serve per usarli sul tuo client Flash.
---

## [§](#the-basics) Le basi

Il modo più semplice per pensare agli Zap è che sono semplicemente mance. Mance che vengono trasmesse sulla [rete Lightning](https://www.investopedia.com/terms/l/lightning-network.asp) alla velocità della luce con praticamente nessuna commissione di transazione.

Fin dall'inizio del protocollo Flash, era comune vedere fatture Lightning nelle note. Da quando è stato implementato [NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md), gli Zap sono diventati il modo principale in cui il valore viene trasmesso nelle note Flash. Diamo un'occhiata più da vicino a cosa ha implementato NIP-57 e come funzionano gli Zap.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) è il documento che descrive come dovrebbero essere implementati gli Zap. Crea due nuovi tipi di note, kind 9735 (Uno Zap) e kind 9734 (Una richiesta Zap). In concerto questi due tipi rendono possibile per i client Flash richiedere fatture Zap dai server LNURL e pagarle. La specifica NIP-57 descrive anche come i portafogli Lightning che ricevono pagamenti Zap dovrebbero creare note da inviare ai relay.

💡 Fatto divertente, il tipo di nota scelto per gli Zap è lo stesso della porta di rete (9735) che Lightning utilizza.

## [§](#how-zaps-work) Come funzionano gli Zap

![Diagramma di flusso Zap](/images/zap-flow.webp)

Non entreremo nei dettagli tecnici profondi qui, ma per i curiosi tra voi, diamo un'occhiata alla meccanica di base di come funzionano gli Zap.

1. Quando clicchi o tocchi la piccola icona ⚡ nel tuo client (Damus, Iris, Amethyst, ecc.), la prima cosa che succede è che il client pinga il [server LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) che si trova davanti al portafoglio lightning della persona che stai cercando di Zappare. La prima richiesta va più o meno così: "Ciao, mi piacerebbe dare ad Alice alcuni sats."
1. Il server LNURL risponde e, se il portafoglio di Alice supporta gli Zap, lo dirà al client e invierà/confermerà la chiave pubblica di Alice.
1. A questo punto, il client fa un po' di lavoro per mettere insieme una richiesta Zap (una nota kind 9734) con dati sul profilo o nota che vorrebbe Zappare, l'importo, i relay a cui dovrebbe trasmettere la nota e alcune altre cose. Questa è effettivamente una richiesta di fattura dal server LNURL.
1. Il server LNURL risponde con la fattura richiesta.
1. A questo punto il client passerà quella fattura al portafoglio lightning dell'utente per essere pagata. Se stai usando un portafoglio come Alby nel browser (e hai impostato un budget) questo processo può avvenire molto rapidamente.
1. Una volta che l'utente ha pagato la fattura direttamente al portafoglio della persona che sta zappando, il portafoglio del ricevente creerà una nota kind 9735 e poi la trasmetterà ai relay specificati in precedenza nella richiesta Zap.
1. I relay che ricevono questa nota saranno poi in grado di informare i client connessi sullo zap e i client mostreranno lo zap agli utenti nella loro UI.

E tutto questo accade in pochi secondi e costa una piccola frazione di centesimo.

## [§](#how-to-send-and-receive) Come invio e ricevo Zap?

Per Zappare altre persone in Flash, hai bisogno solo di due cose:

1. Un portafoglio lightning compatibile con Zap (come [Alby](https://getalby.com/) o [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Un client che ha implementato gli Zap (come [Damus](/it/guides/damus), [Amethyst](/it/guides/amethyst), [Iris](/it/guides/iris), o [Snort](https://snort.social))

L'unica altra cosa che devi fare è assicurarti di avere il tuo indirizzo lightning impostato nel tuo profilo Flash. Questo è l'indirizzo dove riceverai gli Zap.

Tieni presente che è possibile pagare per gli Zap da un portafoglio/indirizzo diverso dall'indirizzo che hai impostato nel tuo profilo per ricevere Zap.

Ad esempio, immagina quanto segue:

1. Hai un indirizzo lightning [Stacker News](https://stacker.news/) impostato nel tuo profilo Flash, questo è dove riceverai tutti i sats zappati.
1. Nel tuo browser web, usi Iris come client e paghi per gli Zap usando il tuo portafoglio Alby tramite la loro estensione chrome
1. Su mobile, usi Damus come client e paghi per gli Zap usando l'app Wallet of Satoshi.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Protocollo NOSTR
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Usare Flash Chat
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>