---
title: Sending Bitcoin in Flash
description: How to send from the Flash app to a Flash username, a Lightning address, a Lightning invoice, or a Bitcoin address.
---

These are the canonical send steps. The [Cash Wallet](/guides/cash-wallet/) and [Bitcoin Wallet](/guides/bitcoin-wallet/) pages link here rather than repeat them.

## Before you send

- **Which account pays.** Without Advanced Mode, every payment comes from your Cash Wallet. With Advanced Mode on, the Send screen has a *From* picker: **Cash Account** or **Bitcoin Account**.
- **Four kinds of destination.** The destination field accepts a Flash username, a Lightning address (`name@domain`), a Lightning invoice (`lnbc…`), or a Bitcoin address, and works out which one you pasted. There is no separate menu for on-chain sends.

## Steps

1. On the home screen tap **Send**.
2. If you see the *From* picker, choose the account to pay from.
3. Type, paste, or scan the destination. Scan with the camera button or the **Scan QR** tab.
4. Tap **Next**, enter the amount (unless the invoice fixes it), add a note if you like, and tap **Next** again.
5. Check the confirmation screen: destination, amount, and the **Flash fee** row. Tap **Confirm payment**.

## What to expect by destination

| Destination | Speed | Notes |
|-------------|-------|-------|
| Flash username | Instant | The recipient is added to your Chat contacts the first time you pay them, if their username resolves to a Nostr profile |
| Lightning address | Seconds | Works with any wallet that supports Lightning addresses |
| Lightning invoice | Seconds | Amount and expiry come from the invoice |
| Bitcoin address | Minutes to hours, network dependent | From the Bitcoin Account there is a minimum of 5,500 sats (about US$2.00) and a **Fast** / **Medium** / **Slow** fee choice. From the Cash Account, Flash handles the on-chain fee and you see it on the confirmation screen |

## Tips

- Double-check the destination before you confirm; Bitcoin payments cannot be reversed.
- Lightning is cheaper and faster for everyday payments. Use a Bitcoin address only when the recipient has no Lightning option.
- The fee shown on the confirmation screen is the one you pay. This page does not quote a rate, because the app shows the actual figure.

For receiving, see [Your Cash Wallet](/guides/cash-wallet/#receiving-money) and [Your Bitcoin Wallet](/guides/bitcoin-wallet/#receiving-bitcoin).
