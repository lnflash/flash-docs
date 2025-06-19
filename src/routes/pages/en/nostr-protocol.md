---
title: The NOSTR Protocol
description: How NOSTR enables censorship-resistant communication in Flash's Chat feature
---

## What is NOSTR?

NOSTR (Notes and Other Stuff Transmitted by Relays) is an open protocol that powers Flash's Chat functionality. Designed for censorship-resistant global communication, NOSTR creates a decentralized social network where no single entity controls user data or communications.

Unlike traditional social networks and messaging apps that rely on central servers, NOSTR distributes messages across multiple independent relay servers. This architecture makes it nearly impossible for anyone to silence communication or control the flow of information.

## How NOSTR Powers Flash Chat

Flash integrates NOSTR to provide a secure, censorship-resistant chat system that works globally:

### Core Chat Features

- **Direct Messaging**: Private conversations between users
- **Group Chats**: Communication among multiple participants
- **Public Channels**: Community discussion spaces
- **Flash Support Channel**: Official support channel for users

### Integration Benefits

- **Cross-Platform Compatibility**: Chat with friends using other NOSTR clients
- **Self-Sovereign Identity**: Control your own cryptographic identity
- **No Central Authority**: No company can access or censor your messages
- **Persistence**: Messages remain available even if Flash were to disappear

## Technical Architecture

NOSTR employs a simple yet powerful technical design:

### Key Components

- **Public Key Cryptography**: Each user has a public/private key pair
- **Events**: Standardized data format for all content (messages, profiles, etc.)
- **Relays**: Servers that store and transmit events between users
- **Clients**: Applications (like Flash) that interact with relays

### How It Works

1. **Identity Creation**: When you set up Flash Chat, you generate a cryptographic key pair
2. **Message Authoring**: Your messages are signed with your private key
3. **Message Publication**: Signed messages are published to multiple relays
4. **Message Distribution**: Relays share messages with other connected users
5. **Signature Verification**: Recipients verify your signature using your public key

### Relay Infrastructure

Messages in NOSTR propagate through a network of relay servers:

- **Multiple Relays**: Flash connects to several relays for redundancy
- **Relay Selection**: Users can choose which relays to trust
- **Relay Publishing**: Flash publishes important messages to multiple relays
- **Message Filtering**: Clients can request specific content from relays

## Key NOSTR Features in Flash

Flash leverages NOSTR's capabilities to provide several important features:

### Privacy and Security

- **End-to-End Encryption**: Private messages are encrypted
- **Cryptographic Verification**: Ensures message authenticity
- **User Control**: Set your own privacy preferences
- **No Phone Number Requirement**: Use without revealing personal information

### Censorship Resistance

- **No Central Authority**: No single entity can silence your voice
- **Relay Diversity**: Multiple paths for message delivery
- **Client Portability**: Access your identity from different apps
- **Borderless Communication**: Works globally without restrictions

### Cross-Application Compatibility

- **Open Standard**: Works with any NOSTR-compatible application
- **Identity Portability**: Use your NOSTR identity across platforms
- **Contact Sharing**: Connect with friends on different apps
- **Ecosystem Access**: Participate in the broader NOSTR network

## Using NOSTR in Flash

Flash makes NOSTR's powerful capabilities accessible to everyone:

### Getting Started

1. **Open Flash**: Download and install the Flash app
2. **Access Chat Tab**: Tap the Chat icon in the navigation bar
3. **Create Profile**: Set up your NOSTR identity (or import existing keys)
4. **Start Messaging**: Connect with friends and join channels

### Finding Contacts

Connect with others on NOSTR through Flash:

1. **Scan QR Code**: Scan a friend's NOSTR public key QR code
2. **Search by Key**: Enter a NOSTR public key directly
3. **Username Search**: Find people by their NOSTR username (if registered)
4. **Join Channels**: Discover people in public discussion spaces

### Managing Your Identity

Your NOSTR identity in Flash is portable and self-sovereign:

- **Backup Your Keys**: Save your private key securely
- **Import Existing Keys**: Use your existing NOSTR identity in Flash
- **Multiple Devices**: Access your account from different devices
- **Identity Recovery**: Restore your profile using your private key

## Zaps: Bitcoin Payments in Chat

A powerful feature of NOSTR in Flash is the ability to send Bitcoin payments directly in chat conversations:

### What are Zaps?

Zaps are Bitcoin Lightning Network payments sent within NOSTR:

- **Micropayments**: Send tiny amounts of Bitcoin with messages
- **Content Support**: Tip friends for valuable contributions
- **Integrated Experience**: Payment and messaging in one flow
- **Cross-platform**: Works between different NOSTR clients

### Sending Zaps in Flash

1. Open a chat conversation
2. Tap the lightning bolt icon
3. Enter the amount to send
4. Add an optional note
5. Confirm the payment

### Receiving Zaps

When someone sends you a Zap in Flash:

1. You'll see the Zap in your chat conversation
2. The Bitcoin is instantly added to your Flash wallet
3. A notification appears if your app is in the background
4. The transaction appears in your payment history

## NOSTR Beyond Chat

While Flash currently uses NOSTR primarily for chat, the protocol enables much more:

### Current NOSTR Capabilities

- **Short-form Content**: Twitter-like posts and replies
- **Long-form Content**: Blog-style articles and newsletters
- **Media Sharing**: Images, videos, and other attachments
- **Marketplace Functionality**: Buy and sell with Bitcoin

### Future Potential in Flash

Flash plans to expand NOSTR integration:

- **Enhanced Business Communication**: Advanced tools for merchants
- **Content Discovery**: Find Bitcoin-focused content and creators
- **Community Building**: Create and join interest-based groups
- **Identity Verification**: Optional proof of identity for businesses

## The NOSTR Ecosystem

Flash's Chat is part of a growing ecosystem of NOSTR applications:

### Popular NOSTR Clients

- **Damus**: iOS-focused NOSTR client
- **Amethyst**: Android NOSTR experience
- **Snort**: Web-based NOSTR platform
- **Primal**: Feature-rich web and mobile client

### Key NOSTR Projects

- **NIP Development**: NOSTR Improvement Proposals defining standards
- **Relay Software**: Various implementations of relay servers
- **Developer Tools**: Libraries and SDKs for building on NOSTR
- **User Directories**: Ways to discover people on the network

## Technical Specifications

For developers interested in NOSTR's technical details:

### Event Types

NOSTR uses different event types for various content:

- **Kind 1**: Short text notes (posts)
- **Kind 4**: Encrypted direct messages
- **Kind 3**: Contact lists
- **Kind 0**: Metadata (profiles)
- **Kind 9735**: Zap receipts for payments

### NIPs (NOSTR Improvement Proposals)

The protocol evolves through NIPs:

- **NIP-01**: Basic protocol specification
- **NIP-04**: Encrypted direct messages
- **NIP-05**: Mapping identifiers to keys (usernames)
- **NIP-57**: Zap functionality for Lightning payments

### NOSTR URIs

Flash supports standard NOSTR addressing:

- **nostr:npub...**: Link to a user profile
- **nostr:note...**: Link to a specific message
- **nostr:nevent...**: Link to any event type

## Resources

- [NOSTR Protocol Specification](https://github.com/nostr-protocol/nostr)
- [NOSTR NIPs Repository](https://github.com/nostr-protocol/nips)
- [NOSTR FAQ](https://nostr.com/faq)
- [Get Started with NOSTR](https://nostr.how)

By integrating NOSTR, Flash provides users with communication capabilities that are as censorship-resistant and decentralized as Bitcoin itself. This alignment of technologies creates a platform where both money and messages flow freely, outside the control of any central authority.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Lightning Network
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Using Flash Chat
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>