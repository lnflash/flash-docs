---
title: Flashcard Guide
description: What the Flashcard is, how to add it to the Flash app, how to reload it, and how merchant rewards reach it.
---

The Flashcard is a contactless NFC card with its own Bitcoin balance. You tap it at a merchant's Flash POS to pay. The balance lives on the card's own account, not in your Flash Cash Wallet, and the app is a window onto it: you can see the balance, reload it, and let others top it up.

This is the canonical Flashcard page. [Flashcard Training](/training/flashcard/) is the short walkthrough.

---

## What the Flashcard is

- A physical NFC card. There is no chip to insert and no card number to type; everything happens by tap.
- It carries a balance in sats that is separate from your Cash Wallet and your Bitcoin Wallet.
- It has no PIN, no lock or freeze, and no recovery. See [Keeping Your Card Safe](#keeping-your-card-safe).

---

## Getting Your Flashcard

Ask at a participating Flashpoint. Merchants that hand out cards are on the [Map](/guides/map/).

---

## Adding the Card to the App

1. On the home screen tap **Flashcard** (or **Add Flashcard**). If no card is stored yet the screen says "No Cards Found. Tap a Flashcard to add it here."
2. Tap **Read NFC card** and hold the card against the back of your phone.
3. The card's balance and recent activity appear. The app stores one card at a time.

The app must have NFC available and enabled; otherwise it says so ("NFC is not supported on this device" / "NFC is not enabled on this device"). If the tap fails, the app reports "Card data not readable", "No card detected", or "Unsupported NFC card".

You can also read a card from the *Get Started* screen before logging in, to check a balance.

---

## Checking the Balance

- **In the app:** open **Flashcard**. The balance is read when you tap the card. It does not update on its own; tap the sync icon and hold the card to refresh it.
- **At a merchant:** the Flash POS keypad screen reads the balance when the card is tapped.

---

## Reloading the Card

From the Flashcard screen:

- **Reload Card** opens the Send flow with the card as the destination. Pick the amount (minimum 100 sats) and confirm. The sats move from your Flash wallet to the card.
- **Topup via QR** shows the card's own payment QR code. Anyone with a Lightning wallet can scan it to add funds to the card.

Merchants that exchange cash (the **Cash** badge on the map) can also load a card for you by paying its QR code.

---

## Paying with the Card

1. The merchant enters the amount on Flash POS.
2. Tap the card on the merchant's device. On iPhone-based POS setups the merchant taps a button first to start the NFC read.
3. The card pays the invoice. There is no confirmation on your phone.

The merchant can print a receipt showing the amount, the reward if any ("≈ N points"), who was paid, date, time, and status. The receipt does not show your card balance.

---

## Rewards

Rewards are optional and set by each merchant. When a merchant has rewards switched on in Flash POS, a reward in sats is sent to your card after you pay; the POS shows "… sats sent to your NFC card!". The percentage, minimum and maximum are the merchant's settings, so they differ from shop to shop, and many merchants have rewards off.

There is no points balance, no redemption step, no partner catalogue, and no way to send rewards to another user. Rewards are sats on the card; spend them the same way as the rest of the balance.

---

## Keeping Your Card Safe

The Flashcard has no PIN, no lock or freeze, and no way to recover the balance from a lost card. Anyone holding the card can spend what is on it, exactly like cash. The app shows this warning on the Flashcard screen: "Do not throw away your card! If your card is lost, the funds are not recoverable."

**Remove Card** in the app only forgets the card on your phone. It does not disable the card, and the balance stays on the card.

- Keep the balance small and reload it as you go
- Store the card the way you would store cash
- If you lose the card, treat the balance as spent; Flash support cannot restore it

---

## Troubleshooting

**Card not working at the merchant?**
- Ask the merchant to check the card balance on their keypad screen
- Make sure the amount does not exceed the balance
- Hold the card still against the reader; on iPhone the merchant must start the read first

**Balance looks old?**
- Tap the sync icon and hold the card to refresh

**Can't add the card?**
- Check that NFC is on
- Try the tap again; the card must touch the phone's NFC area
- If the app says "Unsupported NFC card", it is not a Flashcard

---

## Support

- **In-app:** Settings → **Need help? Contact us.** (App chat, WhatsApp, or Email)
- **Email:** support@getflash.io
- **At a merchant:** any Flashpoint can check a balance or load a card for you
