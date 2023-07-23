---
title: Implementaciones de Relés
description: Esta es una lista de todas las implementaciones conocidas de la especificación de relé Flash. Solo necesitas esto si planeas ejecutar un relé tú mismo. Los relés son (hasta ahora) agnósticos a la aplicación. Puedes ejecutar el tuyo propio o utilizar cualquiera o todas las instancias públicas.
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): Un sencillo relé de referencia respaldado por Postgres, escrito como una demostración sobre el marco de trabajo [Relayer](https://github.com/fiatjaf/relayer) para construir relés personalizados.

## C++

-   [Stirfry](https://github.com/hoytech/strfry): Una implementación de relé sin base de datos en C++.

## C#

-   [NFlash](https://github.com/Kukks/NFlash): Un relé en C#

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/): Un relé minimalista escrito en Rust que guarda datos en SQLite
-   [søstr](https://github.com/metasikander/s0str): Un relé privado de Flash escrito en Rust, guarda todas las notas de una clave pública y las publica para cualquiera que las solicite.

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam): Un relé de Flash escrito en Typescript respaldado por PostgreSQL (renombrado de flash-ts-relay)
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay): Un relé para [Minds](https://www.minds.com), una red social de código abierto.
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash): Código relevante de la API de Minds para leer/escribir publicaciones de Minds utilizando Flash.

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay): Un relé escrito en Clojure.

## Python

-   [flashypy](https://github.com/monty888/flashpy): Relé, cliente y otras herramientas en Python.
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/): Un relé de Flash escrito en Python, respaldado por SQLite.

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay): Un relé de Kotlin que admite tanto SQLite como PostgreSQL.
-   [kflash](https://github.com/lpicanco/kflash): Un relé de Flash implementado en Kotlin con soporte para Postgres y métricas (micrómetro).
