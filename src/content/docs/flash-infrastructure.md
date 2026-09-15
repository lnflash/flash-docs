---
title: Flash Infrastructure
description: The services Flash actually runs, who holds what, and which parts of the older architecture are history.
---

This page describes the Flash backend as it is deployed today. It replaces an earlier version that listed Bitcoin nodes, Lightning nodes, an eCash mint, and BTCPay Server as running components; those came from the upstream Galoy design and are not part of Flash's deployment. Where something is historical or future, it says so.

## The shape of it

Flash is a Galoy-derived banking backend that does not run its own Bitcoin or Lightning nodes. Two partners hold the keys:

- **IBEX Mercado** holds the custodial Cash balances and provides Lightning and on-chain settlement for them. The backend talks to IBEX over its API and webhooks.
- **Breez SDK (Spark)** runs inside the mobile app for the optional Bitcoin Wallet. Its keys never leave the user's phone, so the backend only records that wallet as an *external* wallet with no server-side balance.

The Cash balance is held at IBEX as a dollar-denominated wallet. Since July 2026 new accounts get a USDT-denominated wallet; older USD-denominated wallets remain until migrated.

## Deployed services

The `flash` Helm chart and the deployments repo bring up:

| Component | Role |
|-----------|------|
| API, trigger, websocket, exporter | The Flash backend (GraphQL API, background jobs, subscriptions, metrics) |
| Apollo Router | Fronts the public GraphQL API |
| Ory Kratos + Postgres | Identity and sessions (phone and email login, TOTP) |
| Ory Oathkeeper | Authentication gateway for the API and API keys |
| MongoDB, Redis | Ledger, accounts, caches, rate limits |
| Price service | Exchange rates for display currencies |
| strfry + nostr-multiplexer | The Nostr relay behind Flash Chat |
| IBEX, Bridge, Fygaro webhook receivers | Settlement, US bank rails, and card top-ups |
| ERPNext | Back-office and accounting |
| OpenTelemetry collector | Tracing and metrics |

Not deployed: bitcoind, Electrum, LND, a Cashu mint, BTCPay Server. The chart's LND and bria settings are upstream leftovers switched off (`lndTasksEnabled: false`), and the backend's `LndService` code path is unused.

## Integrations users see

- **Lightning and on-chain for Cash**: IBEX. Invoices, Lightning addresses (`username@flashapp.me`), and on-chain deposits all settle through it.
- **Bitcoin Wallet**: Breez SDK Spark in the app. See [Lightning Wallet Technology](/breez-sdk/).
- **Card top-ups**: Fygaro checkout, credited to the Cash Wallet.
- **US bank rails**: Bridge, for the USD virtual bank account and international settlement.
- **Chat**: Nostr, over Flash's own relay plus public relays.
- **Flashcard and POS rewards**: the card is an NFC LNURL card; Flash POS pays rewards from a BTCPay Server pull payment configured by each merchant. That BTCPay instance is merchant tooling, not part of the Flash backend.

## Historical and future

- **Galoy**: Flash's backend began as a fork of Galoy (now Blink). The [Galoy Project](/galoy-project/) page describes that lineage. The backend repo's `ARCHITECTURE.md` still describes the upstream node-based design and should be read as history.
- **BTCPay Server** in the Flash backend: retired. See [BTCPay Server (Legacy)](/btcpay-server/).
- **Cashu eCash and NFC cards**: research in progress, not shipped. See [Cashu NFC Cards Progress](/cashu-progress/) and [eCash on Bitcoin](/ecash-on-bitcoin/).

## Security model

- Flash holds no Bitcoin or Lightning node keys. Custody of Cash balances is with IBEX; custody of the Bitcoin Wallet is with the user.
- API access is gated by Oathkeeper with Kratos sessions or scoped API keys, with per-key rate limits.
- Databases run in replicated mode on Kubernetes with automated failover.

## Open source components

- [Galoy / Blink](https://github.com/GaloyMoney/blink): the backend's origin
- [Breez SDK](https://github.com/breez/spark-sdk): the in-app Bitcoin Wallet
- [Nostr](https://github.com/nostr-protocol/nostr): the chat protocol; [strfry](https://github.com/hoytech/strfry) is the relay
- [Ory Kratos and Oathkeeper](https://github.com/ory): identity and gateway
- [Apollo Router](https://github.com/apollographql/router)

## Developer resources

- [API documentation](https://docs.flashapp.me)
- [GitHub repositories](https://github.com/lnflash)
- Community: the Discord link is in the app under Settings → **Need help? Contact us.** → *Join the community*
