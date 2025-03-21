---
title: Breez SDK
description: Learn about the Breez SDK that powers Flash's Lightning Network features
---

## What is Breez SDK?

Breez SDK is a powerful, open-source toolkit that enables developers to quickly integrate Bitcoin Lightning Network capabilities into mobile and web applications. As one of the core technologies powering Flash, Breez SDK handles the complex Lightning Network operations behind the scenes, allowing for a seamless user experience.

## How Flash Uses Breez SDK

Flash leverages Breez SDK to provide several key Lightning Network features:

### Instant Payments

Breez SDK enables Flash to process Lightning payments within milliseconds, regardless of transaction amount. This makes it possible to:

- Send Bitcoin globally without waiting for blockchain confirmations
- Process micropayments as small as a few satoshis
- Support streaming payments for pay-per-use services
- Enable instant merchant settlements

### Simplified Lightning Experience

One of the biggest challenges with Lightning Network is managing channels, liquidity, and backups. Breez SDK handles these complexities automatically, allowing Flash to offer:

- Zero-configuration Lightning setup for new users
- Automatic channel management and liquidity
- Secure, encrypted backups of channel states
- Simplified recovery process if a device is lost

### LSP Integration

Breez SDK connects Flash to Lightning Service Providers (LSPs), which provide the necessary infrastructure for reliable Lightning operation:

- Inbound liquidity for receiving payments
- Channel creation and management
- Routing assistance for payments
- Fee optimization across the network

## Technical Capabilities

The Breez SDK provides Flash with several advanced technical features:

### Non-Custodial Architecture

Unlike many Lightning wallets that hold user funds, Breez SDK enables non-custodial functionality:

- Users maintain control of their private keys
- No third party can freeze or seize funds
- Flash never has access to user funds
- Self-sovereign financial experience

### Cross-Platform Support

Breez SDK's versatile design supports Flash across multiple platforms:

- iOS native integration
- Android native integration
- Web browser compatibility
- Desktop application support

### Advanced Payment Features

With Breez SDK, Flash can support diverse payment types:

- Standard Lightning payments
- Lightning Address support (user@domain.com format)
- LNURL compatibility for enhanced payment workflows
- Keysend for direct payments without invoices
- Spontaneous payments to nodes

### Simplified Backup and Recovery

Breez SDK provides Flash with robust backup mechanisms:

- Encrypted channel state backups
- Static channel backup compatibility
- Cloud storage integration options
- Recovery from seed phrase when needed

## Breez SDK Components

Breez SDK consists of several components that Flash utilizes:

### Core Lightning Module

This handles the fundamental Lightning Network operations:

- Payment channel creation and management
- Transaction construction and signing
- Channel state monitoring
- Routing table management

### Blockchain Interface

Connects to the Bitcoin blockchain for on-chain operations:

- Monitoring for on-chain transactions
- Channel opening and closing
- Funding transaction verification
- Chain synchronization

### Payment Processing Engine

Handles all aspects of sending and receiving payments:

- Invoice creation and parsing
- Payment pathfinding
- Multi-part payment support
- Payment status tracking

### Security Layer

Ensures funds remain secure:

- Encrypted storage for sensitive data
- Secure key management
- Watchtower integration for channel security
- Fraud protection mechanisms

## Advantages for Flash Users

By building on Breez SDK, Flash delivers significant benefits to users:

### Simplified User Experience

- No need to understand channels or liquidity
- Instant setup without technical knowledge
- Payments work reliably without user intervention
- Recovery is straightforward if a device is lost

### Maximum Financial Control

- Non-custodial design keeps users in control
- No KYC required for basic functionality
- Private transactions without intermediaries
- Self-custody without technical complexity

### Advanced Capabilities

- Support for the latest Lightning features
- Regular updates with new functionality
- Compatibility with the broader Lightning ecosystem
- Access to innovative payment types as they emerge

## Contributing to Breez SDK

Breez SDK is an open-source project that welcomes contributions from developers:

- **GitHub Repository**: [Breez SDK on GitHub](https://github.com/breez/breez-sdk)
- **Documentation**: Comprehensive guides for implementation
- **Community**: Active developer community for support

## Future Development

Breez SDK continues to evolve with new features that will enhance Flash:

- **Taproot Channel Support**: For enhanced privacy and lower fees
- **BOLT12 Offers**: Next-generation Lightning payment standard
- **Enhanced Fee Management**: For better payment reliability
- **Point-of-Sale Optimizations**: For merchant acceptance
- **Web Interface Improvements**: For better cross-platform support

## Resources

- [Breez Website](https://breez.technology)
- [Breez SDK GitHub](https://github.com/breez/breez-sdk)
- [Developer Documentation](https://breez.github.io/breez-sdk/)
- [Twitter](https://twitter.com/Breez_Tech)

As Flash continues to grow, Breez SDK provides the solid foundation needed for reliable, user-friendly Lightning Network functionality. This partnership between Flash and Breez Technology represents the collaborative nature of the open-source Bitcoin ecosystem, where specialized components work together to create exceptional user experiences.