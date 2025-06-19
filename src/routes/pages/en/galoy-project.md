---
title: The Galoy Project
description: Learn about Galoy, the open-source Bitcoin banking infrastructure that powers Flash
---

## What is Galoy?

Galoy is the open-source Bitcoin banking infrastructure that powers Flash and other Bitcoin applications around the world. Created to make Bitcoin and Lightning Network accessible to communities globally, Galoy provides the foundation for modern, inclusive financial services built on Bitcoin.

## Galoy's Mission

Galoy's mission is to accelerate Bitcoin adoption by making it easier to build Bitcoin banking solutions. By creating free, open-source infrastructure, Galoy enables companies, communities, and countries to provide Bitcoin services to their users without having to build complex technical systems from scratch.

The project aims to:

- Lower the barrier to entry for Bitcoin banking services
- Bring financial inclusion to the billions of unbanked people worldwide
- Create interoperable, open standards for Bitcoin banking
- Foster a global ecosystem of Bitcoin financial applications

## How Flash Uses Galoy

Flash is built on top of Galoy's infrastructure, leveraging its battle-tested components to provide a seamless user experience. Key Galoy components that power Flash include:

### Core Banking Features

- **Account Management**: User registration, KYC integration, and account structures
- **Bitcoin and Lightning Wallets**: Secure wallet infrastructure for both on-chain and Lightning transactions
- **Payment Processing**: Handling of deposits, withdrawals, and internal transfers
- **Lightning Network Integration**: Channel management, liquidity, and routing optimization

### Backend Infrastructure

- **API Layer**: RESTful and GraphQL APIs for client applications
- **Authentication System**: Secure user authentication and authorization
- **Accounting Engine**: Double-entry bookkeeping system for financial accuracy
- **Notification Service**: Push notifications for transactions and account updates

### Administrative Tools

- **Compliance Tools**: Transaction monitoring and reporting
- **Customer Service Dashboard**: User management and support tools
- **Treasury Management**: Tools for managing Bitcoin reserves
- **Analytics Dashboard**: Insights into system usage and performance

## Galoy's Success Stories

Beyond Flash, Galoy powers several successful Bitcoin applications worldwide:

### Bitcoin Beach Wallet

The original implementation of Galoy was launched in El Zonte, El Salvador (known as "Bitcoin Beach") before the country adopted Bitcoin as legal tender. This community-focused wallet proved that Bitcoin could serve as everyday money in a local economy and helped inspire nationwide Bitcoin adoption.

### Bitcoin Jungle

A community Bitcoin initiative in Costa Rica using Galoy infrastructure to bring Bitcoin to local merchants and residents, focusing on creating circular economies powered by Bitcoin.

### Ibex Mercado

Ibex leverages Galoy's technology to provide Bitcoin and Lightning Network services to businesses across Latin America, offering payment processing, remittance services, and financial tools.

## Technical Architecture

Galoy's architecture is modular and flexible, allowing implementations like Flash to customize their services while maintaining core functionality:

### Key Components

- **Bitcoin Core Integration**: Connects to the Bitcoin network for on-chain transactions
- **LND Integration**: Powers Lightning Network capabilities
- **GraphQL API**: Provides data access to client applications
- **Secured MongoDB**: Stores user and transaction data
- **NodeJS Backend**: Manages application logic and background processes
- **Kubernetes Orchestration**: Ensures reliable and scalable operations

### Security Features

- **Multi-signature Cold Storage**: For secure reserve management
- **HSM Integration**: Hardware security for key management
- **Comprehensive Logging**: For security monitoring and compliance
- **Regular Security Audits**: By third-party security firms

## Open Source Development

Galoy is completely open source, with all code available on GitHub under MIT license. This commitment to open source ensures:

- **Transparency**: Anyone can inspect the code for security or functionality
- **Collaboration**: Developers worldwide can contribute improvements
- **Sovereignty**: Users can self-host their own instances if desired
- **Innovation**: Features developed by one implementation benefit all

## Getting Involved with Galoy

Developers interested in Galoy can contribute in several ways:

### For Developers

- **GitHub**: Explore and contribute to the [Galoy codebase](https://github.com/GaloyMoney/galoy)
- **Development Documentation**: Get started with the [developer docs](https://dev.galoy.io)
- **Community Chat**: Join discussions on [Slack](https://join.slack.com/t/galoymoney-workspace/shared_invite/zt-rvnhsdb5-72AZCD_jzw6_Q05aCs0SgA)

### For Businesses

- **Deploy Galoy**: Launch your own Bitcoin banking platform
- **Integration**: Connect existing services to the Galoy ecosystem
- **Customization**: Adapt Galoy to your specific market needs

## Future Development

The Galoy project continues to evolve with features that will benefit Flash users:

- **Federated System**: Allowing different Galoy instances to interact seamlessly
- **Advanced Treasury Management**: Tools for optimizing Bitcoin reserves
- **Enhanced Privacy Features**: Improving user financial privacy
- **Fiat Ramps**: Better integration with traditional financial systems
- **Developer SDKs**: Making it easier to build on top of Galoy

## Resources

- [Galoy Website](https://galoy.io)
- [GitHub Repository](https://github.com/GaloyMoney/galoy)
- [Documentation](https://dev.galoy.io)
- [Twitter](https://twitter.com/GaloyMoney)

As Flash continues to grow, its foundation on Galoy's open-source infrastructure ensures that it remains at the cutting edge of Bitcoin financial technology while maintaining the security and reliability that users expect.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="breez-sdk" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Breez SDK
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="ibex-mercado" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      IBEX Mercado
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>