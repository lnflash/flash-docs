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
- [Privacy and Security](#privacy-and-security)
- [Flash Support Channel](#flash-support-channel)
- [Troubleshooting](#troubleshooting)

## What is the Chat Tab?

The Chat Tab is a full-featured messaging platform built directly into Flash that leverages the NOSTR protocol to provide secure, censorship-resistant communication. Unlike traditional messaging apps that rely on centralized servers, Flash Chat uses a decentralized network that ensures your messages remain accessible and cannot be censored.

### Key Features

- **Decentralized Messaging**: Messages are distributed across multiple independent relay servers, with no single point of failure or censorship. Your conversations remain accessible even if individual servers go offline.

- **Integrated Bitcoin Payments**: Send Bitcoin payments (Zaps) directly within conversations with minimal fees using Lightning Network.

- **Cross-Platform & Group Chat**: Connect with users on other NOSTR-compatible apps and create both private one-on-one chats and group conversations with multiple participants.

## Getting Started with Chat

Follow these steps to begin using Flash Chat:

1. **Access the Chat Tab**
   - Open the Flash app and tap the Chat icon in the bottom navigation bar

2. **Set Up Your NOSTR Profile**
   - Create a username and optional profile picture
   - Back up your private key when prompted

3. **Find Friends and Contacts**
   - Flash automatically syncs with your existing contacts
   - Search for friends by username or scan a QR code

4. **Start Messaging**
   - Tap on a contact to open a conversation
   - Messages are delivered even if the recipient is offline

## Messaging Features

Flash Chat includes a variety of features to enhance your messaging experience:

- **Message Types**: Send text messages with emoji support, share images and media, voice messages, and location data.

- **Group Conversations**: Create groups by tapping "New Group", add participants, set a group name and image. All group messages are encrypted end-to-end.

- **Message Controls**: React to messages, reply to specific messages, forward messages to others, and delete messages from your device.

## Privacy and Security

Flash Chat is designed with privacy and security in mind:

- **End-to-End Encryption**: Private messages are encrypted using NIP-04 standards, and only the intended recipient can decrypt your messages.

- **Key Management**: Back up your private key in a secure location and never share it with anyone.

- **Data Ownership**: Your data belongs to you, not Flash. You can export your conversations and contacts at any time.

## Flash Support Channel

The Flash team maintains an official support channel where you can get help directly from the team and community:

1. **Joining the Support Channel**
   - Open the Chat Tab, look for "Flash Support" in your channel list or tap "+" to browse available channels.

2. **Getting Help**
   - Post your question in the channel with specific details about your issue. The channel is monitored during business hours.

## Troubleshooting

If you encounter issues with Flash Chat:

- **Connection Issues**: Ensure you have a stable internet connection, try closing and reopening the app, and check relay status.

- **Message Delivery Problems**: Messages may be delayed during high traffic. Verify you have the correct public key for your contact.

- **Payment Issues**: Ensure you have sufficient balance and verify the recipient has a valid Lightning address.

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
