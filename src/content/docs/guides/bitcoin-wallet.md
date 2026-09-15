---
title: Your Bitcoin Wallet
description: Enable the non-custodial Bitcoin Wallet, receive over Lightning or on-chain, send, back it up, and handle unclaimed deposits.
---

The Bitcoin Wallet is an optional, non-custodial wallet inside the Flash app. You hold its keys as a 12-word recovery phrase. Use it when you want to hold or move Bitcoin as Bitcoin; for dollars, use the [Cash Wallet](/guides/cash-wallet/).

---

## Enabling it

It is off by default. Turn it on from the **Enable BTC wallet** card on Home, or Settings → **Enable Bitcoin Account (Advanced Mode)**, then **Create Wallet** (or **Import Wallet** if you have a recovery phrase). Home gains a **Bitcoin** row and a **Swap** button.

Back it up right away: Settings → **Backup options** → **Recovery Phrase**. Details are in [Managing Your Bitcoin](/manage-your-sats/#backing-up-the-bitcoin-wallet).

---

## Which account a payment goes to

In Advanced Mode, Send and Receive have an account picker: **Cash Account** or **Bitcoin Account**. Receive uses your **Default Account** (Settings → Default Account) unless you change it on the screen; the first time you open Receive in Advanced Mode the app asks you to set that default.

---

## Receiving Bitcoin

### Lightning (recommended)

1. Tap **Receive**, and make sure **Bitcoin Account** is selected.
2. **Lightning** is the default type. Enter an amount if the sender needs one.
3. Show the QR code, or tap the request text to copy it. The share icon opens your share sheet.
4. The payment shows up within seconds of being paid; the app notes that BTC may take up to 60 seconds to confirm.

### On-chain

For senders using a standard Bitcoin wallet:

1. Tap **Receive**, choose **Bitcoin Account**, then the **Onchain** type.
2. Share the address or QR code.
3. Funds arrive after network confirmations. How long that takes depends on the network fee the sender paid and how busy the network is; it can be minutes or more than an hour.

Paycode (your reusable Lightning address) is only offered for the Cash Account.

---

## Sending Bitcoin

1. Tap **Send** and choose **Bitcoin Account** as the source.
2. Paste or scan the destination. The field accepts a Flash username, a Lightning address, a Lightning invoice, or a Bitcoin address, and works out which it is.
3. Enter the amount. On-chain sends from the Bitcoin Wallet have a minimum (the app shows "Minimum amount for this transaction is 5,500 sats" or the US$2.00 equivalent) and let you pick a **Fast**, **Medium**, or **Slow** network fee.
4. Tap **Next**, review, and tap **Confirm payment**.

For sending in general, see [Sending Bitcoin in Flash](/send-bitcoin/).

---

## Unclaimed Deposits

An on-chain deposit to the Bitcoin Wallet has to be claimed into the wallet. Usually that happens by itself. When the network fee is high relative to the deposit, or something goes wrong, the deposit waits as an **Unclaimed Deposit** until you act.

### Where to find them

- A banner on the home screen: "Please complete or claim all unclaimed deposits before uninstalling Flash or unclaimed deposits will be lost." Tap **Unclaimed Deposits**.
- On the **BTC** tab of your transaction history, a floating **N Unclaimed Deposits** button.

Both open the Unclaimed Deposits list.

### What the states mean

| Status shown | Meaning |
|--------------|---------|
| This transfer will be claimed automatically | The app will claim it when network fees are lower. Nothing to do. |
| Broadcasting | A claim or refund transaction has been sent to the network and is waiting to confirm. |
| Approval Required | The fee is higher than expected. Open it and approve the fee to claim, or refund instead. |
| Claim failed | The claim did not go through. Open it and refund to another wallet. |

### Approving

Open the deposit, review the amount, the network fee, and what you will receive, then approve. The fee comes out of the deposit.

### Refunding

1. Open the deposit and choose **Refund**.
2. Enter or scan the Bitcoin address to refund to.
3. Pick a fee speed: **Fast**, **Medium**, or **Slow**. The screen shows the estimated fee and what you will receive; the fee is an estimate until the transaction is built.
4. Tap **Confirm & Refund**. The status becomes *Broadcasting*, then the refund confirms on-chain.

Do not uninstall the app while a deposit is unclaimed: the banner is right that it would be lost.

---

## When the app is offline

If the app cannot reach the network, Home shows "No connection — showing cached balances". The balances you see are the last ones it fetched. Reconnect and pull to refresh.

---

## Troubleshooting

**My Lightning payment hasn't arrived.** Lightning payments are usually instant. If nothing shows after a few minutes, contact support with the invoice.

**I sent an on-chain payment and it is not in the wallet.** Check the Unclaimed Deposits list first. If it is not there either, contact support with the transaction ID and amount.

---

## Need Help?

Settings → **Need help? Contact us.**, or email support@getflash.io.
