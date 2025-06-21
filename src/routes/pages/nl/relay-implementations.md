---
title: Relay Implementaties
description: Dit is een lijst van alle bekende implementaties van de Flash relay specificatie. Je hebt dit alleen nodig als je van plan bent zelf een relay te draaien. Relays zijn (tot nu toe) toepassingsagnostisch. Je kunt je eigen draaien of een of alle publieke instanties gebruiken.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): Een eenvoudige referentie relay ondersteund door Postgres, geschreven als demo bovenop het [Relayer](https://github.com/fiatjaf/relayer) framework voor het bouwen van aangepaste relays

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Een database-loze relay implementatie in C++.

## C#

-   [NFlash](https://github.com/Kukks/NFlash): Een C# relay

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/): Een minimalistische relay geschreven in Rust die gegevens opslaat op SQLite
-   [søstr](https://github.com/metasikander/s0str): Een privé flash relay geschreven in rust, slaat alle notities van één pubkey op en publiceert ze naar iedereen die ze opvraagt

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam): Een flash relay geschreven in Typescript ondersteund door PostgreSQL (hernoemd van flash-ts-relay)
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay): Een relay voor [Minds](https://www.minds.com), een open-source sociaal netwerk
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash): Relevante Minds API code voor het lezen/schrijven van Minds posts met Flash

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay): Een relay geschreven in Clojure

## Python

-   [flashypy](https://github.com/monty888/flashpy): Relay, client en andere tooling in python
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/): Een Flash relay geschreven in python, ondersteund door SQLite

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay): Een Kotlin Relay die zowel SQLite als Postgresql ondersteunt
-   [kflash](https://github.com/lpicanco/kflash): Een flash relay geïmplementeerd in Kotlin met ondersteuning voor Postgres en metrics(micrometer)