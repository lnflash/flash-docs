---
title: Implementazioni di Relè
description: Questo è un elenco di tutte le implementazioni note della specifica relè Flasha. Ne hai bisogno solo se hai intenzione di gestire tu stesso un relè. I relè sono (finora) indipendenti dall'applicazione. Puoi eseguire il tuo o utilizzare una o tutte le istanze pubbliche.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): A simple reference relay backed by Postgres, written as a demo on top of the [Relayer](https://github.com/fiatjaf/relayer) framework for building custom relays

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Un relè senza database in C++.

## C#

-   [NFlash](https://github.com/Kukks/NFlash)

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/): A minimalistic relay written in Rust that saves data on SQLite
-   [søstr](https://github.com/metasikander/s0str): Un relè privato in rust, salve tutte le note da un pubkey e publica a chiunque richiede.

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam): A flash relay in Typescript con un database di PostgreSQL
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay): Un relè per [Minds](https://www.minds.com).
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash)

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay)

## Python

-   [flashypy](https://github.com/monty888/flashpy): Relay, client, e altro in python
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/): Un Flash relè in python, con database SQLite

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay): Un relè Kotlin supportando entrambi SQLite e Postgresql
-   [kflash](https://github.com/lpicanco/kflash): Un relè in Kotlin con supporto per Postgres e metrics(micrometer)
