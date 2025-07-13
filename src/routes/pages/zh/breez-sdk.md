---
title: Breez SDK
description: 了解为 Flash 闪电网络功能提供支持的 Breez SDK
---

## 什么是 Breez SDK？

Breez SDK 是一个强大的开源工具包，使开发者能够快速将比特币闪电网络功能集成到移动和 Web 应用程序中。作为为 Flash 提供支持的核心技术之一，Breez SDK 在后台处理复杂的闪电网络操作，实现无缝的用户体验。

## Flash 如何使用 Breez SDK

Flash 利用 Breez SDK 提供几个关键的闪电网络功能：

### 即时支付

Breez SDK 使 Flash 能够在毫秒内处理闪电支付，无论交易金额如何。这使得以下成为可能：

- 无需等待区块链确认即可在全球范围内发送比特币
- 处理小至几个聪的微支付
- 支持按使用付费服务的流式支付
- 实现即时商户结算

### 简化的闪电体验

闪电网络的最大挑战之一是管理通道、流动性和备份。Breez SDK 自动处理这些复杂性，允许 Flash 提供：

- 为新用户提供零配置闪电设置
- 自动通道管理和流动性
- 通道状态的安全加密备份
- 设备丢失时的简化恢复过程

### LSP 集成

Breez SDK 将 Flash 连接到闪电服务提供商（LSP），这些提供商为可靠的闪电操作提供必要的基础设施：

- 用于接收付款的入站流动性
- 通道创建和管理
- 付款的路由协助
- 整个网络的费用优化

## 技术能力

Breez SDK 为 Flash 提供了几个高级技术功能：

### 非托管架构

与许多持有用户资金的闪电钱包不同，Breez SDK 启用非托管功能：

- 用户保持对其私钥的控制
- 没有第三方可以冻结或扣押资金
- Flash 永远无法访问用户资金
- 自主权金融体验

### 跨平台支持

Breez SDK 的多功能设计支持 Flash 跨多个平台：

- iOS 原生集成
- Android 原生集成
- Web 浏览器兼容性
- 桌面应用程序支持

### 高级支付功能

通过 Breez SDK，Flash 可以支持多种支付类型：

- 标准闪电支付
- 闪电地址支持（user@domain.com 格式）
- LNURL 兼容性以增强支付工作流程
- Keysend 用于无需发票的直接支付
- 向节点的自发支付

### 简化的备份和恢复

Breez SDK 为 Flash 提供强大的备份机制：

- 加密的通道状态备份
- 静态通道备份兼容性
- 云存储集成选项
- 需要时从助记词恢复

## Breez SDK 组件

Breez SDK 由 Flash 使用的几个组件组成：

### 核心闪电模块

这处理基本的闪电网络操作：

- 支付通道创建和管理
- 交易构建和签名
- 通道状态监控
- 路由表管理

### 区块链接口

连接到比特币区块链进行链上操作：

- 监控链上交易
- 通道打开和关闭
- 资金交易验证
- 链同步

### 支付处理引擎

处理发送和接收付款的所有方面：

- 发票创建和解析
- 支付路径查找
- 多部分支付支持
- 支付状态跟踪

### 安全层

确保资金保持安全：

- 敏感数据的加密存储
- 安全密钥管理
- 瞭望塔集成以确保通道安全
- 欺诈保护机制

## Flash 用户的优势

通过建立在 Breez SDK 上，Flash 为用户带来了显著的好处：

### 简化的用户体验

- 无需了解通道或流动性
- 无需技术知识即可即时设置
- 付款无需用户干预即可可靠工作
- 如果设备丢失，恢复很简单

### 最大的财务控制

- 非托管设计让用户保持控制
- 基本功能无需 KYC
- 无中介的私人交易
- 无技术复杂性的自托管

### 高级功能

- 支持最新的闪电功能
- 定期更新新功能
- 与更广泛的闪电生态系统兼容
- 随着新兴支付类型的出现即可访问

## 为 Breez SDK 做贡献

Breez SDK 是一个欢迎开发者贡献的开源项目：

- **GitHub 仓库**：[GitHub 上的 Breez SDK](https://github.com/breez/breez-sdk)
- **文档**：实施的全面指南
- **社区**：活跃的开发者社区提供支持

## 未来发展

Breez SDK 继续发展新功能，这些功能将增强 Flash：

- **Taproot 通道支持**：增强隐私和降低费用
- **BOLT12 报价**：下一代闪电支付标准
- **增强的费用管理**：提高支付可靠性
- **销售点优化**：用于商户接受
- **Web 界面改进**：更好的跨平台支持

## 资源

- [Breez 网站](https://breez.technology)
- [Breez SDK GitHub](https://github.com/breez/breez-sdk)
- [开发者文档](https://breez.github.io/breez-sdk/)
- [Twitter](https://twitter.com/Breez_Tech)

随着 Flash 的持续增长，Breez SDK 为可靠、用户友好的闪电网络功能提供了坚实的基础。Flash 和 Breez Technology 之间的这种合作代表了开源比特币生态系统的协作性质，其中专门的组件协同工作以创造卓越的用户体验。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="third-party-vendors" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      所有集成
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="galoy-project" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Galoy 项目
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>