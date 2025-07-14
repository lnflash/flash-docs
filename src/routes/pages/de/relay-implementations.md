---
title: Relay-Implementierungen
description: Dies ist eine Liste aller bekannten Implementierungen der Flash-Relay-Spezifikation. Sie benötigen dies nur, wenn Sie planen, selbst ein Relay zu betreiben. Relays sind (bisher) anwendungsunabhängig. Sie können Ihr eigenes betreiben oder eine oder alle öffentlichen Instanzen verwenden.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): Ein einfaches Referenz-Relay mit Postgres-Backend, geschrieben als Demo auf Basis des [Relayer](https://github.com/fiatjaf/relayer) Frameworks zum Erstellen benutzerdefinierter Relays

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Eine datenbanklose Relay-Implementierung in C++.

## C#

-   [NFlash](https://github.com/Kukks/NFlash): Ein C# Relay

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/): Ein minimalistisches Relay in Rust geschrieben, das Daten in SQLite speichert
-   [søstr](https://github.com/metasikander/s0str): Ein privates Flash-Relay in Rust geschrieben, speichert alle Notizen von einem Pubkey und veröffentlicht sie an jeden, der sie anfordert

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam): Ein Flash-Relay in Typescript geschrieben mit PostgreSQL-Backend (umbenannt von flash-ts-relay)
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay): Ein Relay für [Minds](https://www.minds.com), ein Open-Source-Soziales-Netzwerk
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash): Relevanter Minds API-Code zum Lesen/Schreiben von Minds-Posts mit Flash

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay): Ein Relay geschrieben in Clojure

## Python

-   [flashypy](https://github.com/monty888/flashpy): Relay, Client und andere Tools in Python
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/): Ein Flash-Relay in Python geschrieben, mit SQLite-Backend

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay): Ein Kotlin-Relay, das sowohl SQLite als auch PostgreSQL unterstützt
-   [kflash](https://github.com/lpicanco/kflash): Ein Flash-Relay implementiert in Kotlin mit Unterstützung für Postgres und Metriken (Micrometer)