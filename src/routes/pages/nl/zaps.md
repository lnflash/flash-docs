---
title: Wat zijn Zaps?
description: Leer over wat Zaps zijn, hoe ze werken, en wat je nodig hebt om ze te gebruiken op je Flash client.
---

## [§](#the-basics) De basis

De eenvoudigste manier om over Zaps na te denken is dat het gewoon fooien zijn. Fooien die worden verzonden via het [Lightning netwerk](https://www.investopedia.com/terms/l/lightning-network.asp) met de snelheid van het licht met vrijwel geen transactiekosten.

Vanaf het begin van het Flash protocol was het gebruikelijk om Lightning facturen in notities te zien. Sinds [NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) werd geïmplementeerd, zijn Zaps de belangrijkste manier geworden waarop waarde wordt overgedragen in Flash notities. Laten we eens nader bekijken wat NIP-57 implementeerde en hoe Zaps werken.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) is het document dat beschrijft hoe Zaps moeten worden geïmplementeerd. Het creëert twee nieuwe soorten notities, kind 9735 (Een Zap) en kind 9734 (Een Zap verzoek). Samen maken deze twee soorten het mogelijk voor Flash clients om Zap facturen aan te vragen bij LNURL servers en ze te betalen. De NIP-57 specificatie beschrijft ook hoe Lightning wallets die Zap betalingen ontvangen notities moeten maken om naar relays te sturen.

💡 Leuk feitje, het notitienummer gekozen voor Zaps is hetzelfde als de netwerkpoort (9735) die Lightning gebruikt.

## [§](#how-zaps-work) Hoe Zaps werken

![Zap flowchart](/images/zap-flow.webp)

We zullen hier niet in de diepe technische details gaan, maar voor de nieuwsgierigen onder jullie, laten we kijken naar de basismechanica van hoe Zaps werken.

1. Wanneer je klikt of tikt op het kleine ⚡ icoon in je client (Damus, Iris, Amethyst, enz.), is het eerste wat gebeurt dat de client de [LNURL server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) pingt die voor de lightning wallet staat van de persoon die je probeert te Zappen. Het eerste verzoek gaat ongeveer als volgt: "Hallo, ik zou graag Alice wat sats willen geven."
1. De LNURL server reageert en, als Alice's wallet Zaps ondersteunt, zal het de client dit vertellen en Alice's publieke sleutel verzenden/bevestigen.
1. Op dit punt doet de client wat werk om een Zap verzoek samen te stellen (een kind 9734 notitie) met gegevens over het profiel of de notitie die het wil Zappen, het bedrag, de relays waar het de notitie naar moet uitzenden, en een paar andere dingen. Dit is effectief een verzoek om een factuur van de LNURL server.
1. De LNURL server reageert met de gevraagde factuur.
1. Op dit punt zal de client die factuur doorgeven aan de lightning wallet van de gebruiker om te worden betaald. Als je een wallet zoals Alby in de browser gebruikt (en een budget hebt ingesteld) kan dit proces zeer snel gebeuren.
1. Zodra de gebruiker de factuur direct heeft betaald aan de wallet van de persoon die ze zappen, zal de wallet van de ontvanger een kind 9735 notitie maken en deze vervolgens uitzenden naar de relays die eerder zijn gespecificeerd in het Zap verzoek.
1. Relays die deze notitie ontvangen kunnen dan verbonden clients over de zap vertellen en clients kunnen de zap aan gebruikers tonen in hun UI.

En dit gebeurt allemaal in slechts een paar seconden en kost een kleine fractie van een cent.

## [§](#how-to-send-and-receive) Hoe verstuur en ontvang ik Zaps?

Om andere mensen in Flash te Zappen, heb je slechts twee dingen nodig:

1. Een Zap-compatibele lightning wallet (zoals [Alby](https://getalby.com/) of [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Een client die Zaps heeft geïmplementeerd (zoals [Damus](/nl/guides/damus), [Amethyst](/nl/guides/amethyst), [Iris](/nl/guides/iris), of [Snort](https://snort.social))

Het enige andere wat je moet doen is ervoor zorgen dat je je lightning adres hebt ingesteld in je Flash profiel. Dit is het adres waar je Zaps zult ontvangen.

Houd er rekening mee dat het mogelijk is om voor Zaps te betalen vanuit een wallet/adres anders dan het adres dat je in je profiel hebt ingesteld om Zaps te ontvangen.

Stel je bijvoorbeeld het volgende voor:

1. Je hebt een [Stacker News](https://stacker.news/) lightning adres ingesteld in je Flash profiel, dit is waar je gezapte sats zult ontvangen.
1. In je webbrowser gebruik je Iris als je client en betaal je voor Zaps met je Alby wallet via hun chrome extensie
1. Op mobiel gebruik je Damus als je client en betaal je voor Zaps met de Wallet of Statoshi app.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      NOSTR Protocol
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Flash Chat Gebruiken
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>