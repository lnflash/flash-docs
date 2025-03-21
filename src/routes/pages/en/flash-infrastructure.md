---
title: Flash Infrastructure
description: Learn about the technical architecture powering Flash's Bitcoin, Lightning, and NOSTR capabilities
---

## How Flash Works Under the Hood

Flash combines multiple open-source technologies to create a seamless, user-friendly financial application. This page explains the technical infrastructure that powers Flash, helping developers and technical users understand how different components work together.

## Core Technology Stack

Flash is built on a foundation of open-source Bitcoin technologies:

### 1. Bitcoin Core Integration

Flash connects to the Bitcoin network through:
- **Bitcoin Core nodes** for blockchain validation and transaction verification
- **Electrum Server** for efficient blockchain data access
- **Address indexing** for fast balance lookups and transaction history

This gives users access to on-chain Bitcoin functionality with features like:
- Self-custody withdrawals
- Transaction verification
- On-chain deposit detection

### 2. Lightning Network Implementation

Flash uses [LNDHub](https://github.com/BlueWallet/LNDHub) and [LND](https://github.com/lightningnetwork/lnd) for Lightning Network functionality:

- **LND nodes** provide the core Lightning Network capabilities
- **LNDHub** creates an account-based system on top of LND
- **Custom middleware** manages channel liquidity and routing optimization

This infrastructure enables:
- Instant payments
- Sub-cent micropayments
- Cross-border transactions without intermediaries

### 3. NOSTR Protocol Integration

Flash incorporates the NOSTR protocol via:
- **Multiple relay connections** for fault tolerance and censorship resistance
- **Client-side key management** for secure identity control
- **End-to-end encryption** for private messages

This powers Flash's social features:
- Direct messaging
- Group chats
- Business communication

### 4. eCash System

Flash implements a chaumian eCash system built on Bitcoin, offering:
- **Full transaction privacy**
- **Off-chain scaling**
- **Bearer instrument** functionality
- **Offline payment capabilities**

## System Architecture

Flash's architecture is designed for reliability, scalability, and security:

### Server Components

- **API Layer**: RESTful interfaces for client interactions
- **Authentication Service**: Manages user identity and permissions
- **Lightning Service**: Handles Lightning Network operations
- **Bitcoin Service**: Manages on-chain transactions
- **NOSTR Relay**: Connects to the broader NOSTR network
- **eCash Mint**: Issues and verifies eCash tokens
- **Database Cluster**: Stores user data and transaction history
- **Analytics Engine**: Monitors system health and performance

### Client Components

The Flash mobile and web apps include:
- **Secure Key Storage**: Protects cryptographic keys
- **Local Database**: Caches transaction history and contacts
- **NOSTR Client**: Handles messaging and identity
- **Backup Systems**: Helps users secure their data
- **Payment Logic**: Manages different payment methods

## Security Model

Flash employs multiple layers of security:

- **HSM-protected nodes** for Lightning and Bitcoin keys
- **Multi-signature wallets** for cold storage reserves
- **Regular security audits** by third-party firms
- **Network isolation** between critical components
- **Encrypted databases** for user information
- **Rate limiting** to prevent abuse
- **Anomaly detection** systems for unusual activity

## Scalability Approach

Flash is designed to scale to millions of users through:

- **Horizontal scaling** of server components
- **Load balancing** across multiple nodes
- **Database sharding** for efficient data storage
- **Caching layers** to reduce database load
- **Asynchronous processing** for non-critical operations

## Network Resilience

Flash maintains high availability through:

- **Geographic distribution** of servers
- **Multiple data centers** for redundancy
- **Automated failover** systems
- **Connection to multiple Lightning nodes**
- **Multiple NOSTR relays** for resilience
- **Backup communication channels**

## Node Management

Flash operates and maintains:

- **Bitcoin full nodes** in multiple regions
- **Lightning Network nodes** with well-managed channels
- **NOSTR relay servers** for messaging resilience
- **Watchtowers** to protect against channel breaches

## Future Infrastructure Development

Flash's infrastructure roadmap includes:

- **Channel factory integration** for more efficient Lightning usage
- **Taproot adoption** for enhanced privacy and lower fees
- **Submarine swaps** for seamless Lightning/on-chain interchange
- **Point-of-sale infrastructure** for merchant adoption
- **Hardware security module integration** for enhanced key security
- **Additional NOSTR capabilities** for richer social features
- **eCash improvements** for better privacy and offline use

## Open Source Components

Flash builds upon and contributes to open-source projects:

- [LND](https://github.com/lightningnetwork/lnd) - Lightning Network implementation
- [LNDHub](https://github.com/BlueWallet/LNDHub) - Lightning account system
- [Galoy](https://github.com/GaloyMoney/galoy) - Bitcoin banking infrastructure
- [NOSTR](https://github.com/nostr-protocol/nostr) - Decentralized social protocol
- [Breez SDK](https://github.com/breez/breez-sdk) - Lightning SDK components
- [Cashu](https://github.com/cashubtc/cashu) - eCash implementation

For developers interested in contributing to Flash or building on similar infrastructure, we recommend exploring these projects as starting points to understand our technology stack.

## Self-Hosting Options

While Flash provides a convenient hosted service, we support sovereignty and self-hosting. Technical users can:

1. Run their own Bitcoin and Lightning nodes
2. Connect to the Flash network through open APIs
3. Self-host NOSTR relays for messaging
4. Operate their own eCash mint

Documentation for self-hosting is available on our [GitHub repository](https://github.com/LNFlash).

## Developer Resources

If you're a developer interested in Flash's infrastructure:

- [API Documentation](https://docs.getflash.io/api)
- [GitHub Repositories](https://github.com/LNFlash)
- [Developer Discord](https://discord.gg/flashbitcoin)
- [Technical Blog](https://blog.getflash.io/tech)

Flash is committed to open-source development and welcomes contributions from the community to improve our infrastructure.