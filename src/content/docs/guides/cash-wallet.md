---
title: Your Cash Wallet
description: The Flash Cash Wallet holds a US-dollar balance for everyday use, top-ups, and bank cash-outs. Flash holds it on your behalf.
---

The **Cash Wallet** (the **Cash** row on Home) is your main Flash balance. It is denominated in US dollars and shown in your local currency.

Flash holds this balance for you: it is a custodial wallet, and logging in with your phone number or email on any phone brings it back. That is the opposite of the optional [Bitcoin Wallet](/guides/bitcoin-wallet/), which you hold yourself.

This is the wallet you use for:
- Topping up from a card or bank
- Cashing out to your bank account
- Paying merchants at Flashpoints
- Sending and receiving money with other Flash users
- Swapping into Bitcoin when you want to hold BTC

---

## How the Cash Wallet Works

Your dollar balance stays a dollar balance. If Bitcoin's price moves, your $50 is still $50.

Behind the scenes the balance is held with Flash's Lightning partner, IBEX Mercado, as a dollar-denominated wallet. Since the July 2026 wallet upgrade it is implemented as a USDT (Tether) wallet; accounts created before that may still hold the older USD-denominated wallet until they are migrated. The app showed "Cash Wallet Updated" when this happened. Either way the balance is in dollars, and you do not need to think about which one you have.

This is not a bank deposit. It is a dollar balance held by Flash and moved over the Lightning Network.

---

## Checking Your Balance

The Cash balance is on the home screen. Tap it for the transaction history; the **USD** tab lists Cash Wallet activity and the **BTC** tab lists the Bitcoin Wallet's. **Hide Balance** in Settings blanks the amounts on Home.

---

## Sending Money

1. Tap **Send**.
2. If you have Advanced Mode on, choose **Cash Account** as the source. Otherwise Cash is the only source.
3. Enter the recipient: a Flash username, a Lightning address, a Lightning invoice, or a Bitcoin address. The field works out which it is.
4. Enter the amount and tap **Next**.
5. Review and tap **Confirm payment**.

Payments between Flash users are instant. Full detail in [Sending Bitcoin in Flash](/send-bitcoin/).

---

## Receiving Money

1. Tap **Receive**.
2. Choose the type: **Lightning** (an invoice), **Paycode** (your Lightning address, reusable, needs a username), or **Onchain**.
3. Show the QR code, or tap the request to copy it; the share icon opens your share sheet.

Without Advanced Mode, everything you receive lands in the Cash Wallet. With it on, Receive uses your **Default Account** unless you pick one.

---

## Topping Up

Card, bank, or in person: see [How to Top Up](/guides/top-up/).

---

## Swapping to Bitcoin

With Advanced Mode on, **Swap** moves value between the Cash Wallet and the Bitcoin Wallet. See [Swap Between Wallets](/guides/swap/).

---

## Cashing Out to Your Bank

**Transfer → Settle** sends your Cash balance to a bank account. It needs a verified account with Bank cash-out set up. See [How to Cash Out](/guides/cash-out/).

---

## Cash Wallet vs Bitcoin Wallet

| | Cash Wallet | Bitcoin Wallet |
|--|-------------|---------------|
| Currency | USD (displayed in local currency) | Bitcoin (sats) |
| Custody | Held by Flash | Held by you (recovery phrase) |
| Price volatility | None in USD terms | Follows the Bitcoin price |
| Enabled | Always | Optional (Advanced Mode) |
| Top up | Card, bank, Flashpoint | Lightning or on-chain BTC |
| Cash out | Bank account (Settle) | Send to any BTC or Lightning wallet |
| Best for | Everyday spending, bank transfers | Holding Bitcoin, paying in Bitcoin |

---

## Need Help?

Settings → **Need help? Contact us.**, or email support@getflash.io.
