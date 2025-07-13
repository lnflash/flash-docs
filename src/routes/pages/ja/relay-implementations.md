---
title: リレー実装
description: これはFlashリレー仕様のすべての既知の実装のリストです。独自のリレーを運営する予定がある場合にのみ必要です。リレーは（これまでのところ）アプリケーション不可知論的です。独自のものを実行するか、パブリックインスタンスのいずれかまたはすべてを使用できます。
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic): Postgresをバックエンドとし、カスタムリレーを構築するための[Relayer](https://github.com/fiatjaf/relayer)フレームワーク上のデモとして書かれたシンプルなリファレンスリレー

## C++

-   [Stirfry](https://github.com/hoytech/strfry): C++でのデータベースレスリレー実装。

## C#

-   [NFlash](https://github.com/Kukks/NFlash): C# リレー

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/): SQLiteにデータを保存するRustで書かれたミニマリストリレー
-   [søstr](https://github.com/metasikander/s0str): Rustで書かれたプライベートFlashリレーで、1つのpubkeyからすべてのノートを保存し、それらを要求する人誰にでも公開します

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam): PostgreSQLをバックエンドとするTypescriptで書かれたFlashリレー（flash-ts-relayから名前変更）
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay): オープンソースソーシャルネットワークである[Minds](https://www.minds.com)のためのリレー
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash): Flashを使用してMindsの投稿を読み書きするための関連Minds APIコード

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay): Clojureで書かれたリレー

## Python

-   [flashypy](https://github.com/monty888/flashpy): Python でのリレー、クライアント、その他のツール
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/): SQLiteをバックエンドとするPythonで書かれたFlashリレー

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay): SQLiteとPostgresqlの両方をサポートするKotlinリレー
-   [kflash](https://github.com/lpicanco/kflash): PostgresとメトリクスをサポートするKotlinで実装されたFlashリレー（micrometer）