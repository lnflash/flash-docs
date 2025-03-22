---
title: Flash Infrastructure
description: Learn about the technical architecture powering Flash's Bitcoin, Lightning, and NOSTR capabilities
---

## How Flash Works Under the Hood

Flash combines open-source technologies to create a seamless financial application. This page explains the technical infrastructure powering Flash.

## Core Technology Stack

### 1. Bitcoin Core Integration

Flash connects to the Bitcoin network through:
- **Bitcoin Core nodes** for blockchain validation
- **Electrum Server** for efficient data access
- **Address indexing** for fast balance lookups

This provides on-chain Bitcoin functionality with self-custody withdrawals, transaction verification, and deposit detection.

### 2. Lightning Network Implementation

Flash uses [LND](https://github.com/lightningnetwork/lnd) for Lightning functionality:

- **LND nodes** provide core Lightning capabilities
- **Custom middleware** manages channel liquidity

Enabling instant payments, sub-cent micropayments, and cross-border transactions.

### 3. NOSTR Protocol Integration

Flash incorporates NOSTR via:
- **Multiple relay connections** for censorship resistance
- **Client-side key management** for identity control
- **End-to-end encryption** for private messages

Powering direct messaging, group chats, and business communication.

### 4. eCash System

Flash implements a chaumian eCash system offering:
- **Full transaction privacy**
- **Off-chain scaling**
- **Offline payment capabilities**

### 5. BTCPayServer Integration

Flash leverages [BTCPayServer](https://btcpayserver.org/) for:
- **Flash Cards** payment processing
- **Rewards system** management
- **Merchant services** infrastructure

## System Architecture

Flash's architecture is designed for reliability, scalability, and security with these key components:

### Server Components
- API Layer, Authentication Service, Lightning Service
- Bitcoin Service, NOSTR Relay, eCash Mint
- Database Cluster, Analytics Engine, BTCPayServer

### Client Components
- Secure Key Storage, Local Database, NOSTR Client
- Backup Systems, Payment Logic

## Security Model

Flash employs multiple security layers:
- HSM-protected nodes for Lightning and Bitcoin keys
- Multi-signature wallets for cold storage reserves
- Regular security audits and encrypted databases
- Rate limiting and anomaly detection systems

## Open Source Components

Flash builds upon and contributes to:
- [LND](https://github.com/lightningnetwork/lnd) - Lightning Network implementation
- [Galoy](https://github.com/GaloyMoney/galoy) - Bitcoin banking infrastructure
- [NOSTR](https://github.com/nostr-protocol/nostr) - Decentralized social protocol
- [Breez SDK](https://github.com/breez/breez-sdk) - Lightning SDK components
- [Cashu](https://github.com/cashubtc/cashu) - eCash implementation
- [BTCPayServer](https://github.com/btcpayserver/btcpayserver) - Self-hosted payment processor

## Developer Resources

- [API Documentation](https://docs.getflash.io/api)
- [GitHub Repositories](https://github.com/LNFlash)
- [Developer Discord](https://discord.gg/flashbitcoin)
- [Technical Blog](https://blog.getflash.io/tech)

Flash is committed to open-source development and welcomes community contributions.