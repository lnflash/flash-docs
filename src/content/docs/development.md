---
title: Development
description: Resources and documentation for developers looking to integrate with Flash
---

## API Documentation

Flash exposes a single GraphQL API. Everything the Flash apps do is available to you through it.

### 🚀 Flash API Documentation

Access the full API reference, integration guides, and code examples.

[Visit API Documentation](https://docs.flashapp.me)

### What you'll find

- **GraphQL reference**: every query, mutation, subscription, and type, generated from the live schema
- **Authentication guide**: the phone-code login that returns a session token, and TOTP
- **API keys**: long-lived, scoped keys for server-to-server integrations
- **Examples**: queries and mutations with sample responses, targeting the TEST environment
- **Error handling**: gateway, GraphQL, and payload errors

There is no interactive playground: the endpoints answer POST requests only. Use any GraphQL client or `curl`.

### What exists beyond the docs

- **JavaScript client**: [`lnflash/flash-client`](https://github.com/lnflash/flash-client), a JavaScript client library for the Flash fork of the Galoy stack. It is not yet covered by the API docs.
- **Webhooks**: `callbackEndpointAdd` (admin scope) registers a URL that receives exactly two events today, `receive.intraledger` and `receive.lightning`. There are no send, on-chain, or USDT events.
- **Fee probes**: `lnInvoiceFeeProbe`, `lnUsdInvoiceFeeProbe`, `lnNoAmountInvoiceFeeProbe`, `lnNoAmountUsdInvoiceFeeProbe`, `onChainTxFee`, `onChainUsdTxFee`, and `onChainUsdTxFeeAsBtcDenominated` return the fee a send would cost without sending. They are read-only; the fee they return is an estimate at that moment, not a quoted rate.

### Quick start

1. **Create** a Flash account in the app
2. **Authenticate** with your phone number to get a session token, or create an API key from that session
3. **Explore** the API against `https://api.test.flashapp.me/graphql`
4. **Build** your integration following the guides

### Popular integration scenarios

- **E-commerce**: accept Bitcoin payments in your online store
- **Point of sale**: process in-person payments
- **Payroll**: automate Bitcoin salary payments
- **Apps**: add Bitcoin functionality to your mobile or web application

### Developer support

- **Documentation**: [docs.flashapp.me](https://docs.flashapp.me)
- **Email**: [support@getflash.io](mailto:support@getflash.io)
