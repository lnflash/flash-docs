---
title: Frequently Asked Questions
description: Find answers to common questions about Flash, accounts, payments, security, and troubleshooting
---

Find quick answers to common questions about using Flash. Can't find what you're looking for? Contact us from the app (Settings → **Need help? Contact us.**) or at [support@getflash.io](mailto:support@getflash.io).

## Getting Started

### What is Flash?

Flash is a Bitcoin service provider creating products and services specifically for the Caribbean. Our ecosystem includes the Flash app for everyday users, the Flash POS app for merchants, and the Flashcard for tap-to-pay purchases and merchant rewards.

### Which countries is Flash available in?

Flash is currently available in Jamaica and expanding throughout the Caribbean region. Check our [map](https://getflash.io/map) to find Flash locations near you.

### What's the difference between Trial, Verified, and Business accounts?

- **Trial account**: what you get when you tap *Start*. Reduced limits and no way to recover the balance if you lose the phone before verifying.
- **Verified**: you have confirmed a phone number (and optionally an email), so you can log back in anywhere. Verified accounts can add **Bank cash-out** (settle to a Jamaican bank) and a **USD Virtual Bank Account**.
- **Business**: a verified account with a business profile, for Flashpoints and Flash POS.

See [How to Upgrade Your Account](/guides/upgrade-account/).

### How do I get started with Flash?

1. Download the Flash app from your app store
2. Tap **Start** to create a Trial account, or **Login** to restore an account with your phone number or email
3. Verify your account from the **Upgrade your account** card
4. Fund your wallet: [top up](/guides/top-up/) by card or bank, or receive a payment
5. Start sending and receiving payments

See our [Get Started guide](/get-started/) for details.

## Account & Security

### Is there a password?

No. You log in with a one-time code sent to your phone (SMS or WhatsApp) or email. Inside the app you can require **biometrics** or a 4-digit **PIN Code** to open it; those lock the app on your phone.

### I forgot my app PIN

There is no "Forgot PIN" button. On the unlock screen use **Use PIN** or biometrics; after too many wrong attempts the app logs you out. Log back in with your phone number or email code, then set a new PIN under Settings → **Security and Privacy** → **Set PIN**.

The 4-digit PIN is not the same as the 6-digit login code that arrives by SMS, WhatsApp, or email.

### Is my money safe with Flash?

Your **Cash Wallet** is held by Flash for you. Logging in with your phone number or email brings it back on any device. Your **Bitcoin Wallet** (optional, Advanced Mode) is held by you: its 12-word recovery phrase is the only way to restore it, and Flash cannot recover it for you. See [Managing Your Bitcoin](/manage-your-sats/).

### What happens if I lose my phone?

1. Install Flash on your new device and tap **Login** with your phone number or email. Your Cash Wallet comes back.
2. If you had enabled the Bitcoin Wallet, enable Advanced Mode again and choose **Import Wallet**, then enter your 12-word recovery phrase.
3. Set a new PIN and re-enable biometrics.
4. If the phone was stolen, contact support from Settings → **Need help? Contact us.** so they can look at recent activity with you.

Write your recovery phrase down when you enable the Bitcoin Wallet; without it, that balance is lost with the phone.

### Can I have multiple Flash accounts?

Each phone number or email can be linked to one Flash account. We recommend one account per person. Businesses use the same account with a Business profile.

## Payments & Transfers

### What are the fees for using Flash?

- **Sending**: the confirmation screen shows a **Flash fee** row before you confirm. Payments between Flash users normally show no fee.
- **Lightning network fees**: included in what the confirmation screen shows.
- **Bitcoin network fees**: variable; from the Bitcoin Wallet you choose Fast, Medium, or Slow.
- **Card top-up**: card and processing fees; the top-up screen shows what you will receive.
- **Bank transfer top-up**: 2%.
- **Settle to a JMD bank account**: shown as an amount in the offer you review.
- **Settle to an international bank account**: 0.5%.

Always review the fee on the screen before confirming.

### How long do transfers take?

- **Flash to Flash and Lightning**: seconds
- **On-chain Bitcoin**: minutes to hours, depending on the network
- **Settle to a JMD bank account**: usually same day; transactions after 2:00 pm on weekdays, and on Fridays and weekends, are confirmed the next business day
- **Bank transfer top-up**: after Flash receives your transfer, typically the same business day

### What are the transaction limits?

Limits depend on your account status and are set in US dollars. See yours in the app under Settings → **Account** → **Transaction Limits**; the screen converts them to your local currency at the current rate.

### Can I cancel a transaction?

- **Lightning and Flash-to-Flash payments**: cannot be reversed once sent. Contact support immediately if you paid the wrong person.
- **On-chain Bitcoin payments**: cannot be reversed once broadcast.
- **On-chain deposits that have not been claimed** into your Bitcoin Wallet can be refunded to another Bitcoin address from the **Unclaimed Deposits** screen. See [Unclaimed Deposits](/guides/bitcoin-wallet/#unclaimed-deposits).
- **Failed payments**: funds do not leave your wallet unless the payment succeeds.

_Note: Bitcoin transactions are irreversible by design. Always double-check recipient details before sending._

## Flashcard

### How do I get a Flashcard?

1. Visit a participating Flashpoint and ask for a card
2. In the Flash app, tap **Flashcard** → **Read NFC card** and hold the card to your phone
3. Load it with **Reload Card** or let someone pay its **Topup via QR** code
4. Tap to pay at any merchant running Flash POS

See our [Flashcard guide](/guides/flashcard/) for details.

### What if my Flashcard is lost or stolen?

The balance lives on the card itself, not in your Flash account. If the card is lost, the funds on it are not recoverable, and Flash cannot freeze or block the card. The app shows the same warning on the Flashcard screen: "Do not throw away your card! If your card is lost, the funds are not recoverable."

Tapping **Remove Card** in the app only removes the card from your phone. It does not disable the card, and the balance stays on the card.

Treat the card like cash: keep the balance small, reload it as you go, and keep the card somewhere safe.

### How do Flashcard rewards work?

Rewards are set by each merchant in Flash POS and are off unless the merchant has switched them on. When they are on, a reward in sats is sent to your card after you pay; the rate and limits are the merchant's. There is no points balance, no point value, and nothing to redeem: the reward is part of the card balance. Tap the card in the app to see it.

## Technical Issues

### The app won't open or keeps crashing

Try these steps:

1. Force close the app and restart
2. Check for app updates in your app store
3. Restart your phone
4. Clear app cache (Android) or reinstall (iOS)
5. Ensure your OS is up to date

Do not uninstall while the app shows an Unclaimed Deposits banner, and make sure your Bitcoin Wallet recovery phrase is written down before you reinstall.

Still having issues? Contact [support@getflash.io](mailto:support@getflash.io).

### I'm not receiving my login code

1. Check your phone has signal or data
2. Verify the phone number or email is correct
3. Try the other channel: **Send via WhatsApp** instead of SMS, or email if you have one linked
4. Wait a minute and request the code again
5. Contact support if it still does not arrive

### Transactions are failing or stuck

- Check your balance is enough, including the fee
- Verify recipient details are correct
- If Home says "No connection — showing cached balances", reconnect and pull to refresh
- For on-chain payments, the network may be busy; check the transaction on [mempool.space](https://mempool.space)
- For an on-chain deposit that has not appeared, check **Unclaimed Deposits**

## Business & Merchants

### How do I accept Flash payments at my business?

1. Verify your account, then tap **Business** under *Grow* in the *Do more with Flash* hub
2. Provide your business name and address, an ID, and your bank details
3. Optionally tick **Do you want a Flash terminal?** for a POS device
4. When approved, add your pin on the Map and install Flash POS

Learn more in our [Business section](/business/) and [Flash POS Training](/training/flash-pos/).

### What are the benefits of accepting Flash?

- No chargebacks
- Payments from any Flash user or Lightning wallet
- Settle to your bank account from the app
- Listing on the Flash Map
- Optional Flashcard rewards for your customers

### How does the merchant settlement process work?

Payments land in your Cash Wallet. To move them to a bank, use **Transfer → Settle** and choose **JMD Bank Account** or, where enabled, **International Bank Account**. You settle when you choose; there is no scheduled settlement. See [How to Cash Out](/guides/cash-out/).

## Bitcoin & Lightning

### I'm new to Bitcoin. Is it complicated?

Not at all! Flash makes Bitcoin as easy as using any payment app:

- No technical knowledge required
- Balances shown in your local currency
- Conversion handled by Flash
- Optional: learn more in our [Bitcoin Basics](/bitcoin-protocol/) guide

### What's the difference between Bitcoin and Lightning?

- **Bitcoin**: the base layer, like bank wires: secure but slower
- **Lightning**: the fast layer, like card payments: instant and cheap

Flash uses both automatically. Learn more about the [Lightning Network](/lightning-network/).

### Can I send Bitcoin to other wallets?

Yes. Flash sends to:

- Other Flash users, by username
- Lightning addresses
- Lightning invoices
- Bitcoin addresses (on-chain)

The app detects the destination type for you. See [Sending Bitcoin in Flash](/send-bitcoin/).

## Need More Help?

- In the app: Settings → **Need help? Contact us.** (App chat, Discord, WhatsApp, or Email)
- 📧 Email: [support@getflash.io](mailto:support@getflash.io)
- 🏪 Visit any Flashpoint merchant for in-person help
- 📚 Browse our [complete documentation](/)
