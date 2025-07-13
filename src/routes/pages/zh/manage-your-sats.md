---
title: 安全管理您的聪
description: 这是一份关于如何安全管理您通过Flash中的Zaps积累的聪的入门指南。
---

## 比特币基础知识

本指南旨在成为一个非常基础的入门指南，所以我们在这里只会略微涉及比特币的表面，但是关于您在Flash中发送和接收的zaps，有一些非常重要的事情需要了解。

1. 您在Nostr中来回zapping的聪就是比特币。
1. 聪（sats）是比特币的细分单位。一个完整的比特币有100,000,000聪。
1. 比特币是一种持有即拥有的工具，这意味着谁持有它，谁就拥有它。如果您的比特币最终落入他人之手，没有追索权或保险。

如果您想深入了解并学习更多关于比特币的知识...

<!-- TODO: 添加比特币101网站链接 -->

## 钱包基础知识

市面上有许多不同的比特币钱包，但您可以将它们分为两类：托管钱包和自托管钱包。

**托管钱包：** 使用托管钱包时，您是在用便利性换取确定性。它们被称为托管钱包，是因为运行钱包的公司或开发者是使用该钱包的所有用户的所有比特币的最终所有者（或托管人）。

当您使用托管钱包时，您信任钱包开发者不会卷走您的资金。这种情况很少发生，但正如我们最近在许多托管交易所（Blockfi、Celsius、FTX等）看到的那样，交易对手风险是真实的危险，您应该意识到这一点。

**自托管钱包：** 自托管钱包是您个人持有密钥的钱包。这意味着您对其中的比特币拥有完全的控制权、所有权和责任。如果您丢失了密钥，您的币就丢失了。

就像生活中的所有事情一样，托管与自托管的问题是关于权衡的。只有您才能决定是否愿意用不管理密钥的便利性（其实真的不难）来换取持有自己比特币的确定性。

也就是说，作为一个很好的经验法则，想想失去您现在在Wallet of Satoshi中的所有东西。如果这个想法让您感到害怕或不舒服，您应该为自己设定一个目标，尽快切换到自托管。一个很好的起点是我们关于如何设置[自托管](/zh/guides/sweep-to-self-custody)钱包来清扫聪的指南。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="user-guides" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      用户指南
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/non-custodial-wallets" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      非托管钱包
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>