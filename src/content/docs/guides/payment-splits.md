---
title: Payment Splits
description: Automatically forward a share of every Lightning payment your Cash Wallet receives to other Flash wallets.
---

Payment splits forward a fixed share of incoming payments to other Flash wallets, automatically. A business can pay a partner, a landlord or a revenue share on every sale without moving money by hand.

:::note
Payment splits are set up through the **Flash API** today. There is no screen for them in the Flash app yet. You will need a Flash API key; see [Development](/development/).
:::

---

## How It Works

1. You add split rules to your **Cash Wallet**. Each rule names a destination Flash wallet and a whole percentage.
2. Someone pays your wallet over Lightning from outside Flash, for example a customer paying your invoice or your Lightning address.
3. A few minutes later, Flash sends each destination its share, as a normal Flash-to-Flash transfer from your wallet.
4. You and each destination get the usual payment notifications, and the transfers appear in your transaction history.

**Example:** you have a 10% rule to your partner's wallet. A customer pays you $50. Your partner receives $5.00 and you keep $45.00.

---

## Which Payments Are Split

| Payment into your Cash Wallet | Split? |
|---|---|
| Lightning invoice or Lightning address payment from outside Flash | Yes |
| Payment from another Flash user | No |
| Top-up at a Flashpoint | No |
| Rewards and referral payouts | No |
| A split payment you receive from someone else's rule | No |
| On-chain deposits, including deposits to your US or EUR virtual account | No |

Splits only apply to payments received **after** the rule was created.

---

## Rules

- **Cash Wallet only.** Splits are not available on the Bitcoin Wallet.
- **Up to 10 rules per wallet**, each to a different destination.
- **Whole percentages from 1 to 100.** All rules on a wallet together can add up to at most 100%.
- **Destinations are Flash wallets**, given as a Flash username or a wallet ID. The destination must be an active account and hold the same currency as your wallet.
- **Shares are rounded down to the cent.** A share smaller than 1 cent is not sent.

---

## Limits and Timing

- Split payouts usually arrive **2 to 3 minutes** after the payment that triggered them.
- Each payout is a normal send from your wallet, so it counts toward your account's **send limits** and follows the same account checks as any other payment.
- If your balance is too low when the payout runs (for example, you spent the money first), that split is not sent.

---

## If a Split Can't Be Paid

Flash retries temporary problems automatically. If a split still can't be paid, for example because it would go over your send limits, it is marked as failed and you get a notification. The money stays in your wallet.

If a destination account is closed or no longer active, Flash turns that rule off and notifies you, so it stops failing on every payment. Remove it or set a new destination.

---

## Set Up Splits With the API

Use an API key with the `write:wallet` scope. Full reference: [Flash API documentation](https://docs.flashapp.me).

**Find your Cash Wallet ID.** Send the header `X-Flash-Client-Capabilities: cash-wallet-usdt-v1` so the API returns your current Cash Wallet:

```graphql
query {
  me {
    defaultAccount {
      wallets { id walletCurrency splits { id destinationWalletId percent enabled } }
    }
  }
}
```

**Set your splits.** This replaces every rule on the wallet. Send an empty list to remove them all.

```graphql
mutation {
  walletSplitsSet(input: {
    walletId: "YOUR_CASH_WALLET_ID"
    splits: [
      { destination: "partner_username", percent: 10 }
      { destination: "landlord_username", percent: 5 }
    ]
  }) {
    errors { message }
    splits { id destinationWalletId percent enabled }
  }
}
```

**Remove one split:**

```graphql
mutation {
  walletSplitDelete(input: { walletId: "YOUR_CASH_WALLET_ID", splitId: "SPLIT_ID" }) {
    errors { message }
  }
}
```

Removing or changing a rule does not cancel a split that has already been triggered.

---

## Need Help?

Contact Flash support via the app.
