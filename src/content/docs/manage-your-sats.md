---
title: Managing Your Bitcoin
description: Which of your Flash balances is held by Flash and which one you hold yourself, how to enable the Bitcoin Wallet, and how to keep both safe.
---

## Two balances, two kinds of custody

Flash has two balances, and they are held differently.

| | Cash Wallet | Bitcoin Wallet |
|--|-------------|----------------|
| Shown on Home as | **Cash** | **Bitcoin** (only after you enable it) |
| Who holds the keys | Flash, on your behalf (custodial) | You, on your phone (non-custodial) |
| Restore with | Your phone number or email login | Your 12-word recovery phrase |
| Best for | Everyday spending, top-ups, cash-outs | Holding and moving Bitcoin as Bitcoin |

Your **Cash Wallet** is custodial. Flash keeps the balance stable in US dollars and holds it for you. Log in with your phone number or email on a new phone and it is there.

Your **Bitcoin Wallet** is non-custodial. It runs inside the app on Breez SDK (Spark), and its keys are a 12-word recovery phrase generated on your phone and stored in the phone's secure keychain. Flash cannot see that phrase and cannot restore the wallet for you. If you lose the phone and the phrase, the Bitcoin is gone.

Bitcoin in the Bitcoin Wallet is measured in **satoshis** (sats). There are 100,000,000 sats in one Bitcoin.

---

## Enabling the Bitcoin Wallet

The Bitcoin Wallet is off by default. Turn it on in either place:

- Home: the **Enable BTC wallet** card ("Easily transfer larger amounts in Bitcoin")
- Settings → **Enable Bitcoin Account (Advanced Mode)**

The app shows a *Welcome to Advanced Mode* notice: your BTC is non-custodial and fees may apply; you can swap between BTC and USD; BTC may take up to 60 seconds to confirm; do not share your recovery phrase. Choose **Create Wallet** for a new wallet or **Import Wallet** to restore one from a recovery phrase.

Once enabled, Home shows a **Bitcoin** row, a **Swap** button appears, and Send and Receive let you pick **Cash Account** or **Bitcoin Account**. Settings → **Default Account** decides which one Receive uses when you do not choose. Switch Advanced Mode off again with Settings → **Disable Bitcoin Account**.

---

## Backing up the Bitcoin Wallet

Do this as soon as you enable the wallet. Home shows a **Backup your BTC wallet** card until you have.

1. Settings → **Backup options** → **Recovery Phrase**.
2. The app shows your 12 words. Write them down on paper, in order.
3. Tap **Verify** and tap the words back in the right order. When it accepts them, your backup is complete.

**Backup to iCloud** and **Backup to Google Drive** on the same screen store a copy in your own cloud account; they are optional and are in addition to the paper copy, not a replacement.

**Reveal Recovery Phrase** under Backup options shows the words again later.

The recovery phrase is the whole wallet. Never type it into a website, a chat, or a support conversation; Flash support will never ask for it.

---

## Restoring the Bitcoin Wallet on a new phone

1. Log in to Flash with your phone number or email. This brings back your Cash Wallet, but not your Bitcoin Wallet.
2. Enable Advanced Mode and choose **Import Wallet**, or use Settings → **Backup options** → **Import Bitcoin Wallet using recovery phrase**.
3. Enter the 12 words. The wallet and its balance return.

Restoring the Cash login does not recover a Bitcoin Wallet whose phrase you have lost.

---

## Keeping your account safe

Flash has no account password. Login is a one-time code sent to your phone or email. On the device, you can require **biometrics** or a 4-digit **PIN Code** to open the app (Settings → Security and Privacy). Those lock the app on this phone; they are not a way to recover funds.

- Keep your login phone number and email current so you can always log back in
- Write your recovery phrase down and keep it somewhere safe
- **Hide Balance** in Settings blanks the home screen amounts from onlookers
- For larger long-term holdings, move Bitcoin to a hardware wallet: see [Non-Custodial Wallets](/guides/non-custodial-wallets/) and [Sweep sats to a self-custody wallet](/guides/sweep-to-self-custody/)
