---
title: BTCPay Server
description: Learn about BTCPay Server, the open-source payment processor that powers Flash Cards and rewards
---

## What is BTCPay Server?

BTCPay Server is a self-hosted, open-source cryptocurrency payment processor that enables Flash to accept Bitcoin payments and manage our rewards system. Created to give merchants sovereignty over their payments, BTCPay Server provides a secure, private, censorship-resistant platform without the fees and restrictions of traditional payment processors.

## BTCPay Server's Mission

BTCPay Server's mission is to empower merchants and users with full control over their Bitcoin transactions. By providing a free, open-source solution, BTCPay Server enables businesses of all sizes to accept Bitcoin payments without relying on third-party processors or intermediaries.

The project aims to:

- Eliminate payment processing fees and chargebacks
- Provide businesses with payment sovereignty
- Create a private and secure payment infrastructure
- Support a vibrant ecosystem of Bitcoin commerce

## How Flash Uses BTCPay Server

Flash leverages BTCPay Server's infrastructure for several key functions within our ecosystem:

### Flash Cards System

- **Card Issuance**: Processing and activation of Flash prepaid cards
- **Balance Management**: Tracking balances and transaction history
- **Merchant Settlement**: Automating payments to participating merchants
- **Integration API**: Connecting card transactions with the Flash app

### Rewards Program

- **Points Issuance**: Managing the distribution of rewards points
- **Points Redemption**: Processing exchanges of points for Bitcoin or services
- **Campaign Management**: Tools for creating and tracking rewards promotions
- **Analytics Dashboard**: Monitoring rewards program effectiveness

### Merchant Services

- **Invoice Generation**: Creating payment requests for merchants
- **Payment Verification**: Confirming transactions on the Bitcoin network
- **Lightning Network Processing**: Handling instant Lightning payments
- **Accounting Tools**: Generating reports for merchant transactions

## BTCPay Server's Key Features

BTCPay Server provides Flash with powerful capabilities that enhance our service offerings:

### Payment Processing

- **Multiple Wallet Options**: Compatibility with various Bitcoin wallet implementations
- **Lightning Network Support**: Instant, low-fee transactions
- **On-Chain Bitcoin**: Traditional Bitcoin network transactions
- **Payment Buttons**: Customizable UI elements for checkout experiences

### Security and Privacy

- **Self-Hosted**: No third-party servers have access to user data
- **No KYC Requirements**: Preserves user privacy
- **Open-Source Codebase**: Transparent and auditable security
- **Hardware Wallet Integration**: Enhanced security for funds

### Business Tools

- **User Management**: Role-based access control for team members
- **Crowdfunding Functions**: Tools for fundraising campaigns
- **Refund Management**: Process for handling returns and refunds
- **Custom Notifications**: Email and webhook alerts for payments

## Technical Architecture

BTCPay Server's architecture is robust and adaptable, making it ideal for Flash's implementation:

### Core Components

- **Bitcoin Full Node**: Connects directly to the Bitcoin network
- **Lightning Network Node**: Enables instant payment capabilities
- **Server Application**: Processes payment logic and user interactions
- **Database Layer**: Stores configuration and transaction data
- **API Endpoints**: Provides programmatic access to functionality
- **Web Interface**: User-friendly management console

### Integration Methods

- **REST API**: For programmatic access to BTCPay Server functions
- **Webhooks**: Event-based notifications for payment activities
- **Server-to-Server**: Direct communication between systems
- **Plugins**: Extendable functionality for specific use cases

## Open Source Development

BTCPay Server is fully open source, with all code available on GitHub under the MIT license, ensuring:

- **Transparency**: All code can be reviewed for security and functionality
- **Community Support**: A global network of developers contributing improvements
- **Customizability**: Flash can adapt the system to our specific needs
- **Longevity**: The project will continue regardless of any single entity

## Benefits for Flash Users

Flash's integration with BTCPay Server provides several advantages for our users:

- **Enhanced Privacy**: Processing payments without collecting unnecessary user data
- **Reduced Costs**: Eliminating traditional payment processing fees
- **Greater Control**: Self-custody options for managing funds
- **Flexible Rewards**: A sophisticated system for earning and redeeming rewards
- **Seamless Experience**: Integrated payment flow within the Flash app

## Future Development

The BTCPay Server project continues to evolve with features that will benefit Flash users:

- **Enhanced Lightning Support**: Improved routing and liquidity management
- **Advanced Reporting**: Better insights for merchants and administrators
- **Multi-vendor Marketplace**: Tools for managing multiple sellers
- **Point-of-Sale Improvements**: Enhanced in-person payment experiences
- **Additional Payment Options**: Support for new Bitcoin Layer 2 solutions

## Resources

- [BTCPay Server Website](https://btcpayserver.org)
- [GitHub Repository](https://github.com/btcpayserver/btcpayserver)
- [Documentation](https://docs.btcpayserver.org)
- [Community Chat](https://chat.btcpayserver.org)

As Flash continues to expand, our integration with BTCPay Server ensures we can provide secure, sovereign payment processing for our Flash Cards and rewards system while maintaining the privacy and security standards our users expect.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="ibex-mercado" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      IBEX Mercado
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="third-party-vendors" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      All Integrations
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div> 