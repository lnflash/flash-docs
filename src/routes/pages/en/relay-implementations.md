---
title: Relay Implementations
description: This is a list of all known implementations of the Flash relay spec. You only need this if you're planning on running a relay yourself. Relays are (so far) application agnostic. You can run your own or use any or all of the public instances.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): A simple reference relay backed by Postgres, written as a demo on top of the [Relayer](https://github.com/fiatjaf/relayer) framework for building custom relays

## C++

-   [Stirfry](https://github.com/hoytech/strfry): A database-less relay implementation in C++.

## C#

-   [NFlash](https://github.com/Kukks/NFlash): A C# relay

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/): A minimalistic relay written in Rust that saves data on SQLite
-   [søstr](https://github.com/metasikander/s0str): A private flash relay written in rust, saves all notes from one pubkey and publish them to anyone that requests them

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam): A flash relay written in Typescript backed by PostgreSQL (renamed from flash-ts-relay)
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay): A relay for [Minds](https://www.minds.com), an open-source social network
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash): Relevant Minds API code for reading/writing Minds posts using Flash

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay): A relay written in Clojure

## Python

-   [flashypy](https://github.com/monty888/flashpy): Relay, client, and other tooling in python
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/): A Flash relay written in python, backed by SQLite

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay): A Kotlin Relay supporting both SQLite and Postgresql
-   [kflash](https://github.com/lpicanco/kflash): A flash relay implemented in Kotlin with support for Postgres and metrics(micrometer)
