---
title: Het Bitcoin Protocol
description: Een duidelijke uitleg van Bitcoin, het Lightning Network, en hoe Flash deze technologieën gebruikt voor een beter financieel systeem.
---

## Bitcoin op het Hoogste Niveau

Bitcoin is een gedecentraliseerd digitaal geldsysteem dat werkt zonder centrale autoriteit of tussenpersonen. Gemaakt in 2009 door Satoshi Nakamoto, maakt Bitcoin directe peer-to-peer transacties mogelijk die worden geverifieerd door netwerkknooppunten via cryptografie en geregistreerd op een publiek gedistribueerd grootboek genaamd de blockchain.

Belangrijke componenten van het Bitcoin-protocol omvatten:

- **De Blockchain**: Een chronologisch, onveranderlijk record van alle transacties
- **Publieke Sleutel Cryptografie**: Beveiligt eigendom en transactieautorisatie
- **Proof of Work**: Het consensusmechanisme dat het netwerk beveiligt
- **Beperkte Voorraad**: Er zullen ooit slechts 21 miljoen bitcoins bestaan
- **Mining**: Het proces waarbij transacties worden geverifieerd en nieuwe bitcoins worden gecreëerd
- **Nodes**: Computers die het netwerk onderhouden door transacties te valideren

In tegenstelling tot traditionele financiële systemen, kan Bitcoin:
- Niet worden gemanipuleerd door overheden of centrale banken
- Heeft een vast, voorspelbaar monetair beleid
- Biedt toestemmingsloze toegang aan iedereen
- Staat onomkeerbare, niet-censureerbare transacties toe
- Werkt 24/7/365 zonder vakanties of kantooruren

## Het Bitcoin Netwerk, Geïllustreerd

Het Bitcoin-netwerk bestaat uit duizenden onafhankelijk beheerde nodes die samenwerken om consensus te behouden over de staat van de blockchain. Elke volledige node onderhoudt een complete kopie van de blockchain en verifieert onafhankelijk alle transacties volgens de protocolregels.

Wanneer je een Bitcoin-transactie doet:

1. Je zendt je transactie uit naar het netwerk
2. Miners nemen het op in een blok en lossen een computationele puzzel op (mining)
3. Het opgeloste blok wordt uitgezonden naar alle nodes
4. Nodes verifiëren dat het blok alle regels volgt
5. Het blok wordt toegevoegd aan de blockchain
6. Met elk extra blok wordt je transactie veiliger

Deze gedecentraliseerde architectuur creëert een systeem zonder single point of failure en extreme weerstand tegen censuur of aanvallen.

## Het Lightning Network

Terwijl Bitcoin's basislaag prioriteit geeft aan veiligheid en decentralisatie, heeft het beperkingen in transactiedoorvoer en snelheid. Het Lightning Network is een "tweede laag" protocol gebouwd bovenop Bitcoin dat deze beperkingen aanpakt.

Lightning maakt mogelijk:

- **Directe Betalingen**: Transacties bevestigen in milliseconden in plaats van minuten of uren
- **Microbetalingen**: Kosten zijn zo laag dat zelfs kleine betalingen (onder 1 cent) praktisch worden
- **Schaalbaarheid**: Het netwerk kan theoretisch miljoenen transacties per seconde verwerken
- **Verhoogde Privacy**: Lightning-transacties worden niet individueel op de blockchain geregistreerd

Het Lightning Network werkt door betalingskanalen tussen gebruikers te creëren. Zodra een kanaal is opgezet met een on-chain transactie, kunnen gebruikers onbeperkte transacties tussen hen uitvoeren zonder de blockchain aan te raken totdat ze het kanaal sluiten.

Flash gebruikt het Lightning Network voor zijn kernbetalingsfunctionaliteit, wat je de snelheid en lage kosten geeft die nodig zijn voor dagelijkse transacties terwijl je nog steeds gebruik maakt van Bitcoin's veiligheid en decentralisatie voor definitieve afwikkeling.

## Het Lightning Network, Geïllustreerd

Het Lightning Network vormt een netwerk van betalingskanalen tussen gebruikers en nodes. Deze kanalen maken het mogelijk dat bitcoin door het netwerk stroomt zonder dat elke betaling op de blockchain moet worden geregistreerd.

Wanneer je een Lightning-betaling doet:

1. Je Flash app vindt een route door verbonden kanalen naar je ontvanger
2. Cryptografische contracten zorgen ervoor dat de betaling alleen naar de beoogde ontvanger kan gaan
3. De betaling stroomt bijna onmiddellijk door kanalen
4. Er is geen vertrouwen vereist in tussenliggende nodes
5. Alleen het eindsaldo wordt uiteindelijk afgewikkeld op de blockchain wanneer kanalen worden gesloten

Dit ingenieuze ontwerp stelt Bitcoin in staat om wereldwijd te schalen terwijl de kernbeveiligingseigenschappen behouden blijven. Flash's infrastructuur maakt direct verbinding met dit netwerk, wat je naadloze toegang geeft tot snelle, goedkope Bitcoin-betalingen.

## eCash op Bitcoin

Naast directe Bitcoin-transacties en Lightning-betalingen ondersteunt Flash ook eCash - een vorm van digitaal contant geld gebouwd op Bitcoin dat biedt:

- **Volledige Privacy**: Transacties zijn volledig privé
- **Geen Blockchain Voetafdruk**: eCash-transacties gebeuren off-chain
- **Toonderinstrument**: Werkt als fysiek contant geld in digitale vorm
- **Geen Tegenpartijrelatie**: Gebruik zonder accounts of identificatie

eCash in Flash gebruikt cryptografische technieken om ervoor te zorgen dat tokens slechts één keer kunnen worden uitgegeven, waardoor dubbele uitgaven worden voorkomen zonder individuele gebruikers te volgen. Dit combineert de beste aspecten van fysiek contant geld met het gemak van digitaal geld.

## Flash's Bitcoin Infrastructuur

Flash bouwt voort op deze Bitcoin-technologieën om een naadloos, gebruiksvriendelijk betalingssysteem te creëren:

- **Lightning Network Integratie**: Voor directe transacties met lage kosten
- **On-Chain Bitcoin Ondersteuning**: Voor definitieve afwikkeling en zelfbewaarneming
- **eCash Mogelijkheden**: Voor privacy en offline gebruikssituaties
- **Interoperabiliteit**: Compatibel met het bredere Bitcoin-ecosysteem

Via deze integraties biedt Flash de eenvoud en gebruiksvriendelijkheid van traditionele betalingsapps terwijl de vrijheid, veiligheid en privacygaranties van Bitcoin behouden blijven.

## Het NOSTR Protocol

Naast Bitcoin-betalingstechnologieën bevat Flash NOSTR (Notes and Other Stuff Transmitted by Relays) - een eenvoudig, open protocol voor wereldwijde, censuurbestendige communicatie.

NOSTR maakt Flash's berichten- en sociale functies mogelijk, waaronder:
- Directe berichten tussen gebruikers
- Openbare en privé groepschats
- Sociale netwerkmogelijkheden
- Wereldwijde, censuurbestendige communicatie

Door Bitcoin's betalingsinfrastructuur te combineren met NOSTR's communicatieprotocol, creëert Flash een uitgebreid platform voor zowel financiële transacties als sociale interactie.

## De Geschiedenis van Bitcoin (2007 tot 2014)
<iframe width="100%" height="800" frameborder="0" src="https://historyofbitcoin.org/" title="De Geschiedenis van Bitcoin" allowfullscreen></iframe>

### Waar kan ik meer informatie vinden?

Er is een eindeloos konijnenhol aan informatie over Bitcoin. Hier zijn een paar plaatsen om te beginnen:
-   [The Bullish Case for Bitcoin](https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1)
-   [21 Lessons](https://21lessons.com/)
-   [Gradually, Then Suddenly](https://unchained.com/blog/category/gradually-then-suddenly/)
-   [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf) - Het originele document van Satoshi Nakamoto
-   [Lightning Network Whitepaper](https://lightning.network/lightning-network-paper.pdf) - Technische details van Lightning
-   [A Guide to Bitcoin's Technical Brilliance](https://medium.com/digitalassetresearch/a-guide-to-bitcoins-technical-brilliance-for-non-programmers-e28211e797c0)
-   [Bitcoin Resources](https://bitcoin-resources.com/)
-   [Bitcoin.org](https://bitcoin.org/en/)
-   [Lightning Labs Resources](https://docs.lightning.engineering/)

<div style="height:400px;width:100%"></div>


"Het zou misschien zinvol zijn om er wat te kopen voor het geval het aanslaat." ~ (Satoshi Nakamoto).

[🐇](https://rabbithole.flashapp.com)

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="bitcoin-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Bitcoin Protocol
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Lightning Network
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>