---
title: BTCPay Server
description: 了解BTCPay Server，驱动Flash卡和奖励系统的开源支付处理器
---

## 什么是BTCPay Server？

BTCPay Server是一个自托管的开源加密货币支付处理器，使Flash能够接受比特币支付并管理我们的奖励系统。BTCPay Server旨在让商户对其支付拥有主权，提供了一个安全、私密、抗审查的平台，没有传统支付处理器的费用和限制。

## BTCPay Server的使命

BTCPay Server的使命是赋予商户和用户对其比特币交易的完全控制权。通过提供免费的开源解决方案，BTCPay Server使各种规模的企业都能接受比特币支付，而无需依赖第三方处理器或中介机构。

该项目旨在：

- 消除支付处理费用和退款
- 为企业提供支付主权
- 创建私密和安全的支付基础设施
- 支持充满活力的比特币商业生态系统

## Flash如何使用BTCPay Server

Flash在我们生态系统的几个关键功能中利用BTCPay Server的基础设施：

### Flash卡系统

- **卡片发行**：处理和激活Flash预付卡
- **余额管理**：跟踪余额和交易历史
- **商户结算**：自动向参与商户付款
- **集成API**：将卡交易与Flash应用程序连接

### 奖励计划

- **积分发放**：管理奖励积分的分发
- **积分兑换**：处理积分兑换比特币或服务
- **活动管理**：创建和跟踪奖励促销的工具
- **分析仪表板**：监控奖励计划的有效性

### 商户服务

- **发票生成**：为商户创建付款请求
- **支付验证**：在比特币网络上确认交易
- **闪电网络处理**：处理即时闪电支付
- **会计工具**：生成商户交易报告

## BTCPay Server的关键功能

BTCPay Server为Flash提供了增强我们服务产品的强大功能：

### 支付处理

- **多种钱包选项**：与各种比特币钱包实现兼容
- **闪电网络支持**：即时、低费用交易
- **链上比特币**：传统比特币网络交易
- **支付按钮**：可定制的结账体验UI元素

### 安全和隐私

- **自托管**：没有第三方服务器可以访问用户数据
- **无KYC要求**：保护用户隐私
- **开源代码库**：透明且可审计的安全性
- **硬件钱包集成**：增强资金安全性

### 商业工具

- **用户管理**：团队成员的基于角色的访问控制
- **众筹功能**：筹款活动的工具
- **退款管理**：处理退货和退款的流程
- **自定义通知**：支付的电子邮件和webhook警报

## 技术架构

BTCPay Server的架构强大且适应性强，使其成为Flash实施的理想选择：

### 核心组件

- **比特币全节点**：直接连接到比特币网络
- **闪电网络节点**：启用即时支付功能
- **服务器应用程序**：处理支付逻辑和用户交互
- **数据库层**：存储配置和交易数据
- **API端点**：提供对功能的程序化访问
- **Web界面**：用户友好的管理控制台

### 集成方法

- **REST API**：用于程序化访问BTCPay Server功能
- **Webhooks**：支付活动的基于事件的通知
- **服务器到服务器**：系统之间的直接通信
- **插件**：针对特定用例的可扩展功能

## 开源开发

BTCPay Server是完全开源的，所有代码都在MIT许可下在GitHub上可用，确保：

- **透明度**：所有代码都可以检查安全性和功能
- **社区支持**：全球开发者网络贡献改进
- **可定制性**：Flash可以根据我们的特定需求调整系统
- **长寿**：无论任何单一实体如何，项目都将继续

## 对Flash用户的好处

Flash与BTCPay Server的集成为我们的用户提供了几个优势：

- **增强的隐私**：处理支付而不收集不必要的用户数据
- **降低成本**：消除传统支付处理费用
- **更大的控制**：管理资金的自我托管选项
- **灵活的奖励**：用于赚取和兑换奖励的复杂系统
- **无缝体验**：Flash应用程序内的集成支付流程

## 未来发展

BTCPay Server项目继续发展，其功能将使Flash用户受益：

- **增强的闪电支持**：改进的路由和流动性管理
- **高级报告**：为商户和管理员提供更好的洞察
- **多供应商市场**：管理多个卖家的工具
- **销售点改进**：增强的面对面支付体验
- **额外的支付选项**：支持新的比特币第2层解决方案

## 资源

- [BTCPay Server网站](https://btcpayserver.org)
- [GitHub仓库](https://github.com/btcpayserver/btcpayserver)
- [文档](https://docs.btcpayserver.org)
- [社区聊天](https://chat.btcpayserver.org)

随着Flash的持续扩展，我们与BTCPay Server的集成确保我们能够为Flash卡和奖励系统提供安全、主权的支付处理，同时保持用户期望的隐私和安全标准。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="ibex-mercado" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      IBEX Mercado
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="third-party-vendors" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      所有集成
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>