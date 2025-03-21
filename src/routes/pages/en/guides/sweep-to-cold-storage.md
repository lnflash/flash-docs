---
title: Sweep sats to a cold storage wallet
description: Take full control of your Bitcoin by moving funds from Flash to a cold storage wallet
---

## [§](#who-is-this-guide-for) Who is this guide for?

If you're using Flash to receive and store Bitcoin, you're currently using a custodial lightning wallet. While convenient for daily transactions, keeping all your Bitcoin in a custodial solution isn't ideal for long-term storage.

This guide is for anyone who:
- Has accumulated Bitcoin in their Flash wallet 
- Wants to reduce counter-party risk for their savings
- Plans to hold Bitcoin for the long term
- Values financial sovereignty and cold storage security

We'll walk you through setting up a cold storage wallet and moving some of your funds there for secure, long-term storage.

## [§](#why-is-cold-storage-important) Why is cold storage important?

The fundamental Bitcoin principle is: **not your keys, not your coins**. 

When your Bitcoin is in Flash or any custodial wallet, you're trusting that service to:
- Keep their systems secure from hackers
- Manage their finances responsibly
- Honor your withdrawal requests
- Remain operational over time

While Flash employs industry-best security practices, any custodial service introduces counter-party risk. Cold storage eliminates this risk by giving you complete control over your Bitcoin.

Benefits of cold storage include:
- **Full ownership**: Only you can access and move your funds
- **Censorship resistance**: No one can freeze or seize your Bitcoin
- **Reduced third-party risk**: No exposure to service provider problems
- **Privacy**: Hold Bitcoin without KYC information
- **Long-term security**: Properly secured Bitcoin can be held for generations

## [§](#ready-lets-go) Ready? Let's go!

Flash makes it easy to move your Bitcoin to cold storage without requiring advanced technical knowledge. You have two primary methods:

### Method 1: Direct On-Chain Withdrawal (Recommended for beginners)

Flash allows direct withdrawals to on-chain Bitcoin addresses:

1. **Choose a cold storage wallet**
   - Mobile options: [Blue Wallet](https://bluewallet.io/), [Blockstream Green](https://blockstream.com/green/), or [Muun](https://muun.com/)
   - Hardware options: [Ledger](https://www.ledger.com/), [Trezor](https://trezor.io/), or [ColdCard](https://coldcard.com/) (for larger amounts)

2. **Set up your wallet**
   - Download and install your chosen wallet
   - Create a new wallet and follow the setup process
   - **CRITICAL**: Write down your seed phrase on paper and store it securely. This is your backup!
   
3. **Get your Bitcoin address**
   - In your new wallet, find the "Receive" section
   - Copy your Bitcoin address (starts with "bc1" or "3" or "1")
   
4. **Withdraw from Flash**
   - Open Flash and go to the Wallet tab
   - Tap "Send" or "Withdraw"
   - Select "On-chain withdrawal"
   - Paste your Bitcoin address
   - Enter the amount (consider starting with a small test amount)
   - Confirm the withdrawal
   
5. **Verify receipt**
   - On-chain transactions typically take 10-60 minutes to confirm
   - Check your cold storage wallet to confirm receipt
   - You can track the transaction status using a block explorer like [mempool.space](https://mempool.space)

### Method 2: Using a Flash Exchange Point (For Lightning to on-chain conversion)

Flash's peer-to-peer network enables in-person exchanges:

1. **Set up your cold storage wallet** (follow steps 1-3 above)

2. **Find an Exchange Point**
   - Open Flash and go to the Map tab
   - Look for Exchange Points in your area (orange pins)
   - Alternatively, use the Flash Support chat to find remote exchange partners

3. **Arrange the exchange**
   - Contact the Exchange Point through Flash Chat
   - Agree on an amount to swap
   - Share your Bitcoin address with them

4. **Complete the exchange**
   - Send sats to the Exchange Point via Flash Lightning
   - They'll initiate an on-chain transaction to your address
   - Verify the transaction ID and track it on [mempool.space](https://mempool.space)

## [§](#flash-cold-storage-workflow) Recommended Cold Storage Workflow

For optimal Bitcoin management with Flash:

1. **Use Flash as your daily spending wallet**
   - Keep a modest amount for everyday transactions
   - Benefit from instant, low-fee Lightning payments

2. **Periodically sweep to cold storage**
   - Set a threshold (e.g., when your Flash balance exceeds $100)
   - Move excess funds to your cold storage wallet
   - Consider automating this with recurring calendar reminders

3. **Layer your security**
   - Small amounts: Mobile wallet apps
   - Medium amounts: Hardware wallets like Ledger or Trezor
   - Large amounts: Air-gapped solutions like ColdCard or multi-signature setups

## [§](#lightning-bitcoin-on-chain-what) Key Concepts: Lightning, On-Chain, and Cold Storage

### Bitcoin

Bitcoin is a decentralized digital money system that operates without central control. It enables peer-to-peer transactions globally without requiring trusted intermediaries.

Key properties:
- **Limited supply**: Only 21 million Bitcoin will ever exist
- **Permissionless**: Anyone can use it without approval
- **Decentralized**: No single entity controls the network
- **Immutable**: Transactions can't be reversed or modified
- **Verifiable**: Everyone can audit the entire system

The Bitcoin base layer prioritizes security and finality over speed and cost, making it ideal for final settlement and storage.

### Lightning Network

Lightning is a second layer built on top of Bitcoin that enables:
- **Instant payments**: Transactions confirm in seconds
- **Near-zero fees**: Makes micropayments practical
- **Scalability**: Handles millions of transactions per second
- **Privacy**: Enhanced transaction privacy compared to on-chain

Flash primarily uses Lightning for its payments, giving you the speed and low costs needed for everyday transactions.

### On-Chain vs Off-Chain

- **On-chain transactions**: Recorded directly on the Bitcoin blockchain
  - Higher security and finality
  - Higher fees (especially during high demand periods)
  - Slower confirmation times (minutes to hours)
  - Best for larger amounts and final settlement

- **Off-chain transactions** (Lightning): Occur outside the main blockchain
  - Instant confirmations
  - Extremely low fees
  - Perfect for small, frequent payments
  - Requires channels to be funded and online

### Custodial vs Cold Storage

- **Custodial solutions** (like Flash's default wallet):
  - A third party holds your private keys
  - Simple and convenient
  - No technical knowledge required
  - Introduces counter-party risk

- **Cold storage solutions**:
  - You alone control your private keys
  - Full sovereignty over your funds
  - Requires responsible key management
  - No counter-party risk

Most Bitcoin users adopt a hybrid approach: custodial solutions for daily spending and cold storage for savings. This combines convenience with security in a practical way.

Remember: Cold storage is a skill that improves with practice. Start with small amounts, get comfortable with the technology, and gradually increase your cold storage holdings as your confidence grows.
