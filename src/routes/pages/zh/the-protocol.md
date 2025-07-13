---
title: 比特币协议
description: 关于比特币、闪电网络以及Flash如何利用这些技术创建更好的金融系统的清晰解释。
---

## 比特币的最高层面

比特币是一个去中心化的数字货币系统，无需中央机构或中介即可运行。比特币由中本聪于2009年创建，使直接的点对点交易成为可能，这些交易通过密码学由网络节点验证，并记录在称为区块链的公共分布式账本上。

比特币协议的关键组成部分包括：

- **区块链**：所有交易的按时间顺序排列的不可变记录
- **公钥加密**：保护所有权和交易授权
- **工作量证明**：保护网络的共识机制
- **有限供应**：只会存在2100万个比特币
- **挖矿**：验证交易并创建新比特币的过程
- **节点**：通过验证交易来维护网络的计算机

与传统金融系统不同，比特币：
- 不能被政府或中央银行操纵
- 具有固定、可预测的货币政策
- 为任何人提供无需许可的访问
- 允许不可逆转、不可审查的交易
- 全年365天24小时运行，无节假日或营业时间

## 比特币网络图解

比特币网络由数千个独立运行的节点组成，这些节点共同工作以保持对区块链状态的共识。每个全节点都维护区块链的完整副本，并根据协议规则独立验证所有交易。

当您进行比特币交易时：

1. 您将交易广播到网络
2. 矿工将其包含在区块中并解决计算难题（挖矿）
3. 已解决的区块被广播到所有节点
4. 节点验证该区块是否遵循所有规则
5. 区块被添加到区块链
6. 随着每个额外的区块，您的交易变得更加安全

这种去中心化架构创建了一个没有单点故障的系统，对审查或攻击具有极强的抵抗力。

## 闪电网络

虽然比特币的基础层优先考虑安全性和去中心化，但它在交易吞吐量和速度方面有限制。闪电网络是建立在比特币之上的"第二层"协议，解决了这些限制。

闪电网络实现了：

- **即时支付**：交易在毫秒内确认，而不是几分钟或几小时
- **微支付**：费用如此之低，即使是微小的支付（不到1美分）也变得实用
- **可扩展性**：网络理论上每秒可以处理数百万笔交易
- **增强隐私**：闪电交易不会单独记录在区块链上

闪电网络通过在用户之间创建支付通道来工作。一旦通过链上交易建立了通道，用户就可以在它们之间进行无限制的交易，而无需接触区块链，直到他们关闭通道。

Flash利用闪电网络作为其核心支付功能，为您提供日常交易所需的速度和低成本，同时仍然利用比特币的安全性和去中心化进行最终结算。

## 闪电网络图解

闪电网络在用户和节点之间形成支付通道网络。这些通道使比特币能够在网络中流动，而无需在区块链上记录每笔支付。

当您进行闪电支付时：

1. 您的Flash应用程序通过连接的通道找到通往收款人的路线
2. 加密合约确保支付只能发送给预期的收款人
3. 支付几乎立即通过通道流动
4. 不需要信任中间节点
5. 只有在通道关闭时，最终余额才会最终在区块链上结算

这种巧妙的设计使比特币能够在全球范围内扩展，同时保持其核心安全属性。Flash的基础设施直接连接到这个网络，让您无缝访问快速、低成本的比特币支付。

## 比特币上的电子现金

除了直接的比特币交易和闪电支付之外，Flash还支持电子现金 - 一种建立在比特币上的数字现金形式，提供：

- **完全隐私**：交易完全私密
- **无区块链足迹**：电子现金交易发生在链外
- **不记名票据**：像数字形式的实物现金一样工作
- **无交易对手关系**：无需账户或身份即可使用

Flash中的电子现金使用加密技术确保代币只能使用一次，防止双重支付而无需跟踪个人用户。这将实物现金的最佳方面与数字货币的便利性相结合。

## Flash的比特币基础设施

Flash建立在这些比特币技术之上，创建了一个无缝、用户友好的支付系统：

- **闪电网络集成**：用于即时、低费用交易
- **链上比特币支持**：用于最终结算和自我托管
- **电子现金功能**：用于隐私和离线使用案例
- **互操作性**：与更广泛的比特币生态系统兼容

通过这些集成，Flash提供了传统支付应用程序的简单性和易用性，同时保留了比特币的自由、安全和隐私保证。

## NOSTR协议

除了比特币支付技术之外，Flash还集成了NOSTR（Notes and Other Stuff Transmitted by Relays）- 一个用于全球抗审查通信的简单开放协议。

NOSTR支持Flash的消息和社交功能，允许：
- 用户之间的直接消息
- 公共和私人群聊
- 社交网络功能
- 全球抗审查通信

通过将比特币的支付基础设施与NOSTR的通信协议相结合，Flash为金融交易和社交互动创建了一个综合平台。

## 比特币历史（2007年至2014年）
<iframe width="100%" height="800" frameborder="0" src="https://historyofbitcoin.org/" title="The History of Bitcoin" allowfullscreen></iframe>

### 在哪里可以找到更多信息？

关于比特币的信息永无止境。以下是一些入门的地方：
-   [The Bullish Case for Bitcoin](https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1)
-   [21 Lessons](https://21lessons.com/)
-   [Gradually, Then Suddenly](https://unchained.com/blog/category/gradually-then-suddenly/)
-   [比特币白皮书](https://bitcoin.org/bitcoin.pdf) - 中本聪的原始文档
-   [闪电网络白皮书](https://lightning.network/lightning-network-paper.pdf) - 闪电网络的技术细节
-   [A Guide to Bitcoin's Technical Brilliance](https://medium.com/digitalassetresearch/a-guide-to-bitcoins-technical-brilliance-for-non-programmers-e28211e797c0)
-   [Bitcoin Resources](https://bitcoin-resources.com/)
-   [Bitcoin.org](https://bitcoin.org/en/)
-   [Lightning Labs Resources](https://docs.lightning.engineering/)

<div style="height:400px;width:100%"></div>


"也许只是买一些以防万一它流行起来是有意义的。" ~ (中本聪)。

[🐇](https://rabbithole.flashapp.com)

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="bitcoin-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      比特币协议
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      闪电网络
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>