---
title: Connect with Friends using the Chat Tab
description: A guide to using the Flash Chat Tab for messaging and payments using the NOSTR protocol
---

<div class="text-center mb-12">
  <img src="/images/chat-tab-bar.webp" alt="Flash Chat Tab" class="mx-auto h-40 mb-4" />
</div>

# Messaging & Payments with Flash Chat

This guide provides a complete overview of Flash's Chat feature, explaining how to use secure, censorship-resistant messaging and integrated Bitcoin payments through the NOSTR protocol.

## Table of Contents

- [What is the Chat Tab?](#what-is-the-chat-tab)
- [Getting Started with Chat](#getting-started-with-chat)
- [Messaging Features](#messaging-features)
- [Understanding NOSTR Protocol](#understanding-nostr-protocol)
- [Sending and Receiving Zaps](#sending-and-receiving-zaps)
- [Privacy and Security](#privacy-and-security)
- [Flash Support Channel](#flash-support-channel)
- [Troubleshooting](#troubleshooting)

## What is the Chat Tab?

The Chat Tab is a full-featured messaging platform built directly into Flash that leverages the NOSTR protocol to provide secure, censorship-resistant communication. Unlike traditional messaging apps that rely on centralized servers, Flash Chat uses a decentralized network that ensures your messages remain accessible and cannot be censored.

### Key Features

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Decentralized Messaging</h4>
      <div class="step-instructions">
        <p>Messages are distributed across multiple independent relay servers</p>
        <p>No single point of failure or censorship</p>
        <p>Your conversations remain accessible even if individual servers go offline</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Integrated Bitcoin Payments</h4>
      <div class="step-instructions">
        <p>Send Bitcoin payments (Zaps) directly within conversations</p>
        <p>Instantly transfer value with minimal fees using Lightning Network</p>
        <p>Split bills or tip friends without leaving your chat</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Cross-Platform Compatibility</h4>
      <div class="step-instructions">
        <p>Connect with users on other NOSTR-compatible apps</p>
        <p>Your identity works across the entire NOSTR ecosystem</p>
        <p>Not locked into Flash – your data and contacts are portable</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">Individual & Group Conversations</h4>
      <div class="step-instructions">
        <p>Create private one-on-one chats with friends</p>
        <p>Participate in group conversations with multiple participants</p>
        <p>Join public channels around specific topics or interests</p>
      </div>
    </div>
  </div>
</div>

## Getting Started with Chat

Follow these steps to begin using Flash Chat:

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Access the Chat Tab</h4>
      <div class="step-instructions">
        <p>Open the Flash app on your mobile device</p>
        <p>Tap the Chat icon in the bottom navigation bar</p>
        <p>Allow any permissions requested for full functionality</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Set Up Your NOSTR Profile</h4>
      <div class="step-instructions">
        <p>Create a username and optional profile picture</p>
        <p>Flash will automatically generate your cryptographic keys</p>
        <p>Back up your private key or recovery phrase when prompted</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Find Friends and Contacts</h4>
      <div class="step-instructions">
        <p>Flash automatically syncs with your existing contacts using NOSTR</p>
        <p>Search for friends by username or public key</p>
        <p>Scan a QR code to add a new contact directly</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">Start Messaging</h4>
      <div class="step-instructions">
        <p>Tap on a contact to open a conversation</p>
        <p>Type your message in the text field at the bottom</p>
        <p>Tap the send button to deliver your message</p>
        <p>Messages will be delivered even if the recipient is offline</p>
      </div>
    </div>
  </div>
</div>

## Messaging Features

Flash Chat includes a variety of features to enhance your messaging experience:

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Message Types</h4>
      <div class="step-instructions">
        <p>Text messages with emoji support</p>
        <p>Image and media sharing</p>
        <p>Voice messages and audio clips</p>
        <p>Location sharing</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Group Conversations</h4>
      <div class="step-instructions">
        <p>Create groups by tapping the "New Group" option</p>
        <p>Add participants from your contacts</p>
        <p>Set a group name and optional group image</p>
        <p>All group messages are encrypted end-to-end</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Message Controls</h4>
      <div class="step-instructions">
        <p>Tap and hold to react to messages</p>
        <p>Reply to specific messages within a conversation</p>
        <p>Forward messages to other contacts</p>
        <p>Delete messages from your device</p>
      </div>
    </div>
  </div>
</div>

## Understanding NOSTR Protocol

<div class="documentation-section mt-6">
  <h3 class="font-bold text-xl mb-6">What is NOSTR?</h3>

  <p class="mb-4">NOSTR (Notes and Other Stuff Transmitted by Relays) is an open protocol that enables censorship-resistant communication. Unlike traditional social networks or messaging apps that rely on central servers, NOSTR distributes your messages across multiple independent relay servers, making it nearly impossible for anyone to silence your communication.</p>
  
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Key Benefits</h4>
      <div class="step-instructions">
        <p>No central authority that can control or censor your messages</p>
        <p>Your identity is tied to cryptographic keys you control, not a company's database</p>
        <p>Messages are signed cryptographically, preventing impersonation</p>
        <p>You can choose which relays to connect to, giving you control over your data</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Why NOSTR Matters</h4>
      <div class="step-instructions">
        <p>Censorship-resistant: No single entity can silence you</p>
        <p>Globally accessible: Works anywhere with internet access</p>
        <p>Open and interoperable: Multiple apps can connect to the same network</p>
        <p>Self-sovereign: You own your identity and data</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">How Flash Uses NOSTR</h4>
      <div class="step-instructions">
        <p>Flash connects to multiple high-quality NOSTR relays</p>
        <p>Your messages are distributed across these relays for redundancy</p>
        <p>Your identity works across the entire NOSTR ecosystem</p>
        <p>You can export your keys to use in other NOSTR apps</p>
      </div>
    </div>
  </div>
</div>

## Sending and Receiving Zaps

Zaps are Bitcoin micropayments sent directly within a chat using the Lightning Network. With Zaps, you can instantly send value to friends or receive Bitcoin in your conversations.

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Sending a Zap</h4>
      <div class="step-instructions">
        <p>Open a chat with a friend who has a Lightning address set up</p>
        <p>Tap the lightning bolt icon in the message input area</p>
        <p>Enter the amount you want to send (in sats)</p>
        <p>Add an optional message with your payment</p>
        <p>Confirm the payment</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Receiving Zaps</h4>
      <div class="step-instructions">
        <p>Ensure your Lightning address is set up in your Flash profile</p>
        <p>When someone sends you a Zap, you'll see it in your conversation</p>
        <p>Zaps are credited to your Flash wallet automatically</p>
        <p>No action needed to claim received funds</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Common Zap Uses</h4>
      <div class="step-instructions">
        <p>Splitting bills with friends</p>
        <p>Sending small gifts or showing appreciation</p>
        <p>Paying for goods or services in peer-to-peer transactions</p>
        <p>Tipping content creators for valuable posts</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 my-8">
  <h4 class="font-medium text-yellow-800 dark:text-yellow-200">Pro Tip</h4>
  <p class="text-yellow-700 dark:text-yellow-300 mt-2">
    Zaps work between any Lightning-enabled NOSTR apps, not just Flash. You can send and receive Bitcoin with people using Damus, Amethyst, or any other NOSTR client with Lightning support.
  </p>
</div>

## Privacy and Security

Flash Chat is designed with privacy and security in mind:

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">End-to-End Encryption</h4>
      <div class="step-instructions">
        <p>Private messages are encrypted using NIP-04 standards</p>
        <p>Only the intended recipient can decrypt your messages</p>
        <p>Even Flash cannot read your encrypted conversations</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Key Management</h4>
      <div class="step-instructions">
        <p>Back up your private key in a secure location</p>
        <p>Never share your private key with anyone</p>
        <p>Use the recovery options in Flash if you lose access to your device</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Data Ownership</h4>
      <div class="step-instructions">
        <p>Your data belongs to you, not Flash</p>
        <p>You can export your conversations and contacts at any time</p>
        <p>Your identity is portable across the NOSTR ecosystem</p>
      </div>
    </div>
  </div>
</div>

## Flash Support Channel

The Flash team maintains an official support channel where you can get help directly from the team and community:

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Joining the Support Channel</h4>
      <div class="step-instructions">
        <p>Open the Chat Tab</p>
        <p>Look for "Flash Support" in your channel list</p>
        <p>If not visible, tap the "+" button to browse available channels</p>
        <p>Search for "Flash Support" and join the channel</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Getting Help</h4>
      <div class="step-instructions">
        <p>Post your question or issue in the channel</p>
        <p>Be specific about what problem you're experiencing</p>
        <p>Team members or experienced community members will respond</p>
        <p>The channel is monitored during business hours</p>
      </div>
    </div>
  </div>
</div>

## Troubleshooting

If you encounter issues with Flash Chat:

<div class="documentation-section mt-6">
  <div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Connection Issues</h4>
      <div class="step-instructions">
        <p>Ensure you have a stable internet connection</p>
        <p>Try closing and reopening the Flash app</p>
        <p>Check if Flash's relays are experiencing downtime</p>
        <p>Enable additional relays in settings if available</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Message Delivery Problems</h4>
      <div class="step-instructions">
        <p>Messages may be delayed if relays are congested</p>
        <p>Check that the recipient is using a NOSTR-compatible app</p>
        <p>Verify that you have the correct public key for your contact</p>
        <p>Try sending to the recipient's npub address directly</p>
      </div>
    </div>
  </div>
  
  <div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Zap Payment Issues</h4>
      <div class="step-instructions">
        <p>Ensure you have sufficient balance in your Flash wallet</p>
        <p>Check Lightning Network status if payments are failing</p>
        <p>Verify the recipient has a valid Lightning address</p>
        <p>Try a small test payment before sending larger amounts</p>
      </div>
    </div>
  </div>
</div>

For further development information on NOSTR, visit the [official NOSTR protocol repository](https://github.com/nostr-protocol/nostr) on GitHub.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="map" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Map
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="contacts" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Contacts
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>
