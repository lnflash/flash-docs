---
title: 什么是 Zaps？
description: 了解什么是 Zaps，它们如何工作，以及在您的 Flash 客户端上使用它们需要什么。
---

## [§](#the-basics) 基础知识

理解 Zaps 最简单的方式是将它们视为小费。这些小费通过[闪电网络](https://www.investopedia.com/terms/l/lightning-network.asp)以光速传输，几乎没有交易费用。

从 Flash 协议诞生之初，在笔记中看到闪电发票就很常见。自从实施了 [NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) 后，Zaps 已成为在 Flash 笔记中传递价值的主要方式。让我们仔细看看 NIP-57 实现了什么以及 Zaps 是如何工作的。

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) 是描述 Zaps 应该如何实现的文档。它创建了两种新的笔记类型：kind 9735（一个 Zap）和 kind 9734（一个 Zap 请求）。这两种类型配合使用，使 Flash 客户端能够从 LNURL 服务器请求 Zap 发票并支付它们。NIP-57 规范还描述了接收 Zap 付款的闪电钱包应该如何创建要发送到中继的笔记。

💡 有趣的事实：为 Zaps 选择的笔记类型与闪电网络使用的网络端口（9735）相同。

## [§](#how-zaps-work) Zaps 如何工作

![Zap 流程图](/images/zap-flow.webp)

我们不会在这里深入技术细节，但对于好奇的朋友，让我们看看 Zaps 的基本工作原理。

1. 当您在客户端（Damus、Iris、Amethyst 等）点击或轻点小 ⚡ 图标时，首先发生的是客户端会向位于您要打赏的人的闪电钱包前面的 [LNURL 服务器](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/)发送请求。第一个请求大概是："您好，我想给 Alice 一些聪。"
1. LNURL 服务器会响应，如果 Alice 的钱包支持 Zaps，它会告诉客户端并发送/确认 Alice 的公钥。
1. 此时，客户端会做一些工作来组装一个 Zap 请求（kind 9734 笔记），其中包含有关它想要打赏的个人资料或笔记、金额、应该广播笔记的中继以及其他一些信息的数据。这实际上是向 LNURL 服务器请求发票。
1. LNURL 服务器会响应请求的发票。
1. 此时，客户端会将该发票交给用户的闪电钱包进行支付。如果您在浏览器中使用像 Alby 这样的钱包（并且已设置预算），这个过程可以非常快速地完成。
1. 一旦用户直接向他们打赏的人的钱包支付了发票，接收者的钱包将创建一个 kind 9735 笔记，然后将其广播到之前在 Zap 请求中指定的中继。
1. 接收到此笔记的中继将能够告知连接的客户端有关 zap 的信息，客户端会在其 UI 中向用户显示 zap。

所有这一切都在几秒钟内发生，成本只是一分钱的极小部分。

## [§](#how-to-send-and-receive) 如何发送和接收 Zaps？

要在 Flash 中给其他人发送 Zap，您只需要两样东西：

1. 一个支持 Zap 的闪电钱包（如 [Alby](https://getalby.com/) 或 [Wallet of Satoshi](https://www.walletofsatoshi.com/)）
1. 一个已实现 Zaps 的客户端（如 [Damus](/zh/guides/damus)、[Amethyst](/zh/guides/amethyst)、[Iris](/zh/guides/iris) 或 [Snort](https://snort.social)）

您唯一需要做的其他事情是确保在您的 Flash 个人资料中设置了您的闪电地址。这是您接收 Zaps 的地址。

请记住，您可以从与您在个人资料中设置的接收 Zaps 地址不同的钱包/地址支付 Zaps。

例如，想象以下情况：

1. 您在 Flash 个人资料中设置了 [Stacker News](https://stacker.news/) 闪电地址，这是您接收任何打赏聪的地方。
1. 在您的网络浏览器中，您使用 Iris 作为客户端，并通过 Alby 的 Chrome 扩展程序使用 Alby 钱包支付 Zaps
1. 在移动设备上，您使用 Damus 作为客户端，并使用 Wallet of Satoshi 应用程序支付 Zaps。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      NOSTR 协议
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      使用 Flash 聊天
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>