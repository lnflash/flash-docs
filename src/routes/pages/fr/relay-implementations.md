---
title: Implantations de relais
description: Ceci est une liste de toutes les implémentations connues de la spécification du relais Flash. Vous n'avez besoin de cette liste que si vous avez l'intention de faire fonctionner un relais vous-même. Les relais sont (jusqu'à présent) agnostiques en termes d'applications. Vous pouvez le faire fonctionner ou utiliser l'une ou l'autre des instances publiques.
---

## Go

- [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic) : Un relais de référence simple qui utilise Postgres comme base de données, écrit comme une démo au dessus du framework [Relayer](https://github.com/fiatjaf/relayer) pour construire des relais personnalisés.

## C++

- [Stirfry](https://github.com/hoytech/strfry) : Une implémentation de relais sans base de données en C++.

## C#

-   [NFlash](https://github.com/Kukks/NFlash): Relai en C#

## Rust

- [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/) : Un relais minimaliste écrit en Rust qui sauvegarde les données sur SQLite
- [søstr](https://github.com/metasikander/s0str) : Un relai flash privé écrit en Rust, qui sauvegarde toutes les notes d'une pubkey et les publie à toute personne qui en fait la demande.

## Node.js / Typescript

- [flasheam](https://github.com/Cameri/flasheam) : Un relais flash écrit en Typescript qui utilise Postgres comme base de données (anciennement flash-ts-relay)
- [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay) : Un relais pour [Minds](https://www.minds.com), un réseau social open-source
    - [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash) : Code API Minds pertinent pour lire/écrire des posts Minds en utilisant Flash

## Clojure

- [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay) : Un relais écrit en Clojure

## Python
- [flashypy](https://github.com/monty888/flashpy) : Relais, client, et autres outils en python
- [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/) : Un relais Flash écrit en python, SQLite pour le stockage des données

## Kotlin

- [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay) : Un relais Kotlin supportant à la fois SQLite et Postgresql
- kflash](https://github.com/lpicanco/kflash) : Un relais flash implémenté en Kotlin avec le support de Postgres et de metrics(micrics)
