---
title: Flash POS Training
description: Set up the Flash POS app, take a payment, print a receipt, read a Flashcard, and understand the reward and event settings.
---

Flash POS is the merchant app for taking Flash payments at the counter on Android and iOS.

## Set up

1. Install Flash POS and open it.
2. Enter your Flash username and pick your currency, then tap **Start**. There is no password: the POS takes payments to the Flash account that owns that username.
3. Check the **Profile** tab. It shows your Lightning address and your **PayCode** (merchant QR code), and holds the reward, event, and security settings.

## Take a payment

1. On the **POS** tab, type the amount on the keypad.
2. Show the invoice QR code, or let the customer tap a Flashcard on the device. On iPhone, tap the NFC button on the invoice screen first to start the read.
3. When the payment lands, the success screen offers **Print** (then **Reprint**). There is no share button; receipts go to the connected printer.

A printed receipt shows the amount, the reward if any ("≈ N points"), who was paid, date, time, status, the description, and a QR code that downloads the Flash app.

## Flashcard balance

With the keypad open, a tapped Flashcard shows its balance. Customers who want to check a card can ask you to do this.

## Paycode

**Profile → PayCode → Print QR code** prints a static QR code customers can scan to pay you any amount. Useful for a second till or a delivery bag.

## Rewards and events

Rewards are off unless your build has them enabled and you have switched on **Rewards System** in the Profile's reward settings and entered your reward pool's Pull Payment ID. When they are on, each Lightning payment sends a reward in sats to the customer's Flashcard, within the rate, minimum and maximum you set; the **Rewards** tab lets you give a standalone reward to a tapped card. **Event Mode** applies a temporary rate and budget for a promotion.

Only promise rewards to customers when they are switched on for your device. The reward figures on receipts are labelled "points"; they are sats.

## Admin PIN

**Profile → Security → Set Admin PIN** protects the reward settings from staff changes. Keep it with the owner or manager.

## Refunds and failed payments

The POS has no refund action. **Transaction History** has a *Refund* filter for records that were marked as refunds, and a **Reprint** button for any past receipt. To return money to a customer, send it from your Flash app to their username.

## Support

The **Support** tab opens a chat with Flash support from inside the POS.

## Related guides

- [Flashcard Guide](/guides/flashcard/)
- [Upgrade Your Account](/guides/upgrade-account/)
- [Cash Wallet](/guides/cash-wallet/)
- [How to Cash Out](/guides/cash-out/)
