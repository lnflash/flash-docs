---
title: Cashu NFC Cards Progress
description: Current progress on Cashu NFC cards and the NUT-XX work behind them.
---

## Cashu NFC Cards Progress

This page tracks the work behind Flash’s future Cashu NFC card experience.

It is **not** the Cash Wallet. The Cash Wallet is Flash’s current IBEX USD wallet.

---

## What we are building

The goal is a privacy-preserving, NFC-based ecash experience that can feel natural for everyday payments, especially where connectivity is poor.

The intended experience is:
- tap a card
- move value offline or with weak connectivity when possible
- keep the payment experience simple for normal users
- preserve more privacy than a traditional always-online wallet flow

---

## NUT-XX

NUT-XX is the working name for the Cashu NFC card protocol work.

At a high level, the protocol work is about:
- defining how the card stores and spends value
- making NFC interactions work cleanly with Flash
- keeping the UX simple enough for merchants and everyday users

---

## cashu-javacard

The `cashu-javacard` repo is the JavaCard applet work behind the NFC card.

Current repo signal:
- JavaCard applet package exists under `me.flashapp.cashu`
- the codebase is centered around `CashuApplet`
- the repo README describes it as a JavaCard applet implementing the Cashu ecash protocol

### What that means

This is the low-level card implementation work. It is the piece that makes the NFC card possible.

---

## Where we are right now

- protocol and applet work are in progress
- the direction is Cashu + NFC + offline-friendly payments
- this is **separate** from the Cash Wallet
- the current Cash Wallet remains the IBEX USD wallet users already see in the app

---

## Why it matters

If done well, Cashu NFC cards could give Flash:
- better privacy for small payments
- a more natural tap-to-pay experience
- less dependence on perfect connectivity
- a path to offline-friendly merchant payments

---

## More reading

- [Cashu](https://cashu.space)
- [cashu-javacard](https://github.com/lnflash/cashu-javacard)
- [BTCPay Server (Legacy)](btcpay-server)
- [Nerd Stats](nerd-stats)
