---
title: 中继实现
description: 这是所有已知的 Flash 中继规范实现的列表。只有在您计划自己运行中继时才需要这个。中继（到目前为止）与应用程序无关。您可以运行自己的中继或使用任何或所有公共实例。
---

## Go

-   [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic)：一个由 Postgres 支持的简单参考中继，作为在 [Relayer](https://github.com/fiatjaf/relayer) 框架之上构建自定义中继的演示编写

## C++

-   [Stirfry](https://github.com/hoytech/strfry)：一个无数据库的 C++ 中继实现。

## C#

-   [NFlash](https://github.com/Kukks/NFlash)：一个 C# 中继

## Rust

-   [flash-rs-relay](https://sr.ht/~gheartsfield/flash-rs-relay/)：一个用 Rust 编写的极简中继，在 SQLite 上保存数据
-   [søstr](https://github.com/metasikander/s0str)：一个用 rust 编写的私人 flash 中继，保存来自一个公钥的所有笔记，并将它们发布给任何请求它们的人

## Node.js / Typescript

-   [flasheam](https://github.com/Cameri/flasheam)：一个用 Typescript 编写的 flash 中继，由 PostgreSQL 支持（从 flash-ts-relay 重命名）
-   [Minds Flash Relay](https://gitlab.com/minds/infrastructure/flash-relay)：[Minds](https://www.minds.com)（一个开源社交网络）的中继
    -   [Minds Engine - Flash](https://gitlab.com/minds/engine/-/tree/master/Core/Flash)：使用 Flash 读/写 Minds 帖子的相关 Minds API 代码

## Clojure

-   [me.untethr.flash-relay](https://github.com/atdixon/me.untethr.flash-relay)：一个用 Clojure 编写的中继

## Python

-   [flashypy](https://github.com/monty888/flashpy)：Python 中的中继、客户端和其他工具
-   [flash_relay](https://code.pobblelabs.org/fossil/flash_relay/)：一个用 python 编写的 Flash 中继，由 SQLite 支持

## Kotlin

-   [FlashPostr Relay](https://github.com/Giszmo/FlashPostr/tree/master/FlashRelay)：一个支持 SQLite 和 Postgresql 的 Kotlin 中继
-   [kflash](https://github.com/lpicanco/kflash)：一个在 Kotlin 中实现的 flash 中继，支持 Postgres 和指标（micrometer）