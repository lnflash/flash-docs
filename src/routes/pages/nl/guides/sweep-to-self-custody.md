---
title: Sats overmaken naar zelfbewaarneming
description: Neem volledige controle over je Bitcoin door fondsen van Flash naar een zelfbewaarnemingswallet te verplaatsen
---

## [§](#who-is-this-guide-for) Voor wie is deze gids?

Als je Flash gebruikt om Bitcoin te ontvangen en op te slaan, gebruik je momenteel een custodiale lightning wallet. Hoewel handig voor dagelijkse transacties, is het niet ideaal om al je Bitcoin in een custodiale oplossing te bewaren voor langetermijnopslag.

Deze gids is voor iedereen die:
- Bitcoin heeft verzameld in hun Flash wallet
- Het tegenpartijrisico voor hun spaargeld wil verminderen
- Van plan is Bitcoin voor de lange termijn te bewaren
- Waarde hecht aan financiële soevereiniteit en zelfbewaarneming

We leiden je door het opzetten van een zelfbewaarnemingswallet en het verplaatsen van een deel van je fondsen daarheen voor veilige, langetermijnopslag.

## [§](#why-is-self-custody-important) Waarom is zelfbewaarneming belangrijk?

Het fundamentele Bitcoin-principe is: **niet jouw sleutels, niet jouw munten**.

Wanneer je Bitcoin in Flash of een andere custodiale wallet staat, vertrouw je erop dat die dienst:
- Hun systemen veilig houdt tegen hackers
- Hun financiën verantwoordelijk beheert
- Je opnameverzoeken honoreert
- Operationeel blijft in de loop van de tijd

Hoewel Flash de beste beveiligingspraktijken in de industrie toepast, introduceert elke custodiale dienst tegenpartijrisico. Zelfbewaarneming elimineert dit risico door je volledige controle over je Bitcoin te geven.

Voordelen van zelfbewaarneming zijn:
- **Volledig eigendom**: Alleen jij hebt toegang tot en kunt je fondsen verplaatsen
- **Censuurbestendigheid**: Niemand kan je Bitcoin bevriezen of in beslag nemen
- **Verminderd risico van derden**: Geen blootstelling aan problemen van dienstverleners
- **Privacy**: Houd Bitcoin zonder KYC-informatie
- **Langetermijnbeveiliging**: Goed beveiligde Bitcoin kan generaties lang worden bewaard

## [§](#ready-lets-go) Klaar? Laten we beginnen!

Flash maakt het gemakkelijk om je Bitcoin naar zelfbewaarneming te verplaatsen zonder geavanceerde technische kennis. Je hebt twee primaire methoden:

### Methode 1: Directe On-Chain Opname (Aanbevolen voor beginners)

Flash staat directe opnames naar on-chain Bitcoin-adressen toe:

1. **Kies een zelfbewaarnemingswallet**
   - Mobiele opties: [Blue Wallet](https://bluewallet.io/), [Blockstream Green](https://blockstream.com/green/), of [Muun](https://muun.com/)
   - Hardware opties: [Ledger](https://www.ledger.com/), [Trezor](https://trezor.io/), of [ColdCard](https://coldcard.com/) (voor grotere bedragen)

2. **Stel je wallet in**
   - Download en installeer je gekozen wallet
   - Maak een nieuwe wallet aan en volg het installatieproces
   - **CRUCIAAL**: Schrijf je zaadzin op papier en bewaar deze veilig. Dit is je back-up!
   
3. **Verkrijg je Bitcoin-adres**
   - In je nieuwe wallet, vind de sectie "Ontvangen"
   - Kopieer je Bitcoin-adres (begint met "bc1" of "3" of "1")
   
4. **Opnemen van Flash**
   - Open Flash en ga naar het Wallet-tabblad
   - Tik op "Verzenden" of "Opnemen"
   - Selecteer "On-chain opname"
   - Plak je Bitcoin-adres
   - Voer het bedrag in (overweeg te beginnen met een klein testbedrag)
   - Bevestig de opname
   
5. **Verifieer ontvangst**
   - On-chain transacties duren meestal 10-60 minuten om te bevestigen
   - Controleer je zelfbewaarnemingswallet om ontvangst te bevestigen
   - Je kunt de transactiestatus volgen met een block explorer zoals [mempool.space](https://mempool.space)

### Methode 2: Een Flash Exchange Point gebruiken (Voor Lightning naar on-chain conversie)

Flash's peer-to-peer netwerk maakt persoonlijke uitwisselingen mogelijk:

1. **Stel je zelfbewaarnemingswallet in** (volg stappen 1-3 hierboven)

2. **Vind een Exchange Point**
   - Open Flash en ga naar het Kaart-tabblad
   - Zoek naar Exchange Points in je omgeving (oranje pinnen)
   - Als alternatief, gebruik de Flash Support chat om partners voor uitwisseling op afstand te vinden

3. **Regel de uitwisseling**
   - Neem contact op met het Exchange Point via Flash Chat
   - Spreek een bedrag af om te ruilen
   - Deel je Bitcoin-adres met hen

4. **Voltooi de uitwisseling**
   - Stuur sats naar het Exchange Point via Flash Lightning
   - Zij initiëren een on-chain transactie naar je adres
   - Verifieer de transactie-ID en volg deze op [mempool.space](https://mempool.space)

## [§](#flash-self-custody-workflow) Aanbevolen Zelfbewaarnemingsworkflow

Voor optimaal Bitcoin-beheer met Flash:

1. **Gebruik Flash als je dagelijkse uitgavenwallet**
   - Houd een bescheiden bedrag voor dagelijkse transacties
   - Profiteer van directe, goedkope Lightning-betalingen

2. **Maak periodiek over naar zelfbewaarneming**
   - Stel een drempel in (bijv. wanneer je Flash-saldo meer dan €100 bedraagt)
   - Verplaats overtollige fondsen naar je zelfbewaarnemingswallet
   - Overweeg dit te automatiseren met terugkerende agenda-herinneringen

3. **Laag je beveiliging**
   - Kleine bedragen: Mobiele wallet apps
   - Middelgrote bedragen: Hardware wallets zoals Ledger of Trezor
   - Grote bedragen: Air-gapped oplossingen zoals ColdCard of multi-signature setups

## [§](#lightning-bitcoin-on-chain-what) Kernconcepten: Lightning, On-Chain en Zelfbewaarneming

### Bitcoin

Bitcoin is een gedecentraliseerd digitaal geldsysteem dat zonder centrale controle werkt. Het maakt peer-to-peer transacties wereldwijd mogelijk zonder vertrouwde tussenpersonen te vereisen.

Belangrijke eigenschappen:
- **Beperkte voorraad**: Er zullen ooit slechts 21 miljoen Bitcoin bestaan
- **Toestemmingsloos**: Iedereen kan het gebruiken zonder goedkeuring
- **Gedecentraliseerd**: Geen enkele entiteit controleert het netwerk
- **Onveranderlijk**: Transacties kunnen niet worden teruggedraaid of gewijzigd
- **Verifieerbaar**: Iedereen kan het hele systeem controleren

De Bitcoin basislaag geeft prioriteit aan veiligheid en finaliteit boven snelheid en kosten, waardoor het ideaal is voor definitieve afwikkeling en opslag.

### Lightning Network

Lightning is een tweede laag bovenop Bitcoin die mogelijk maakt:
- **Directe betalingen**: Transacties bevestigen in seconden
- **Bijna-nul kosten**: Maakt microbetalingen praktisch
- **Schaalbaarheid**: Verwerkt miljoenen transacties per seconde
- **Privacy**: Verbeterde transactieprivacy vergeleken met on-chain

Flash gebruikt voornamelijk Lightning voor zijn betalingen, wat je de snelheid en lage kosten geeft die nodig zijn voor dagelijkse transacties.

### On-Chain vs Off-Chain

- **On-chain transacties**: Direct geregistreerd op de Bitcoin blockchain
  - Hogere veiligheid en finaliteit
  - Hogere kosten (vooral tijdens perioden met hoge vraag)
  - Langzamere bevestigingstijden (minuten tot uren)
  - Het beste voor grotere bedragen en definitieve afwikkeling

- **Off-chain transacties** (Lightning): Vinden plaats buiten de hoofdblockchain
  - Directe bevestigingen
  - Extreem lage kosten
  - Perfect voor kleine, frequente betalingen
  - Vereist dat kanalen gefinancierd en online zijn

### Custodiaal vs Zelfbewaarneming

- **Custodiale oplossingen** (zoals Flash's standaard wallet):
  - Een derde partij bewaart je privésleutels
  - Simpel en handig
  - Geen technische kennis vereist
  - Introduceert tegenpartijrisico

- **Zelfbewaarnemingsoplossingen**:
  - Jij alleen controleert je privésleutels
  - Volledige soevereiniteit over je fondsen
  - Vereist verantwoordelijk sleutelbeheer
  - Geen tegenpartijrisico

De meeste Bitcoin-gebruikers hanteren een hybride aanpak: custodiale oplossingen voor dagelijkse uitgaven en zelfbewaarneming voor spaargeld. Dit combineert gemak met veiligheid op een praktische manier.

Onthoud: Zelfbewaarneming is een vaardigheid die verbetert met oefening. Begin met kleine bedragen, raak vertrouwd met de technologie, en verhoog geleidelijk je zelfbewaarnemingsbezit naarmate je vertrouwen groeit.