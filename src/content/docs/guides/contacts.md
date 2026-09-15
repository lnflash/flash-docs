---
title: Managing Your Contacts in Flash
description: Find, follow, and pay contacts from the Contacts tab inside Flash Chat.
---

Contacts live inside [Flash Chat](/guides/chat/), so Chat has to be enabled first. Your contact list is a Nostr follow list published from your chat key; it is not stored on Flash's servers.

## Opening your contacts

1. Open the **Chat** tab.
2. Tap the people icon in the top row of icon tabs (chats, profile, contacts).

## Finding people

- **Search** the field labelled "username or nostr pubkey". It resolves a Flash username or a Nostr public key across the network; it is not a filter for your own list.
- **Your list** shows your own profile first, then your follows in the order the relay returns them. There is no sorting by activity.

## Adding contacts

- **Follow** someone from their profile.
- **Automatic follow.** When you pay a Flash username with **Send**, Flash follows that person for you if their username resolves to a Nostr profile. Receiving a payment does not add anyone.

## A contact's profile

Tap a contact to open their profile: avatar, name, npub, Lightning address, and *About*, with their **Recent Posts** below. The action row has two buttons:

- **Chat bubble**: open or create a conversation
- **Orange arrow**: send them sats through the Flash send flow

There is no transaction history on a contact's profile. Your payments to them are in your wallet's transaction history like any other.

## Sending sats to a contact

From the profile, tap the arrow button, enter the amount, add a note if you like, and confirm. Inside a conversation, use the flash icon for a quick zap, or long-press it for the **Send Zap** presets (21, 100, 500, 1000 sats by default, editable).

## Removing a contact

Open the contact's profile, scroll to **Contact Management**, and tap **Unfollow Contact**.

## Privacy

- Your follow list and profile are Nostr events signed by your chat key and stored on the relays Flash connects to, so they are public to anyone who knows your npub.
- Direct messages are end-to-end encrypted.
- Payments you make to contacts are normal Flash payments and are not published to Nostr.
