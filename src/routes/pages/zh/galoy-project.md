---
title: Galoy 项目
description: 了解 Galoy，为 Flash 提供支持的开源比特币银行基础设施
---

## 什么是 Galoy？

Galoy 是为 Flash 和世界各地其他比特币应用程序提供支持的开源比特币银行基础设施。Galoy 旨在让全球社区能够访问比特币和闪电网络，为基于比特币构建的现代、包容性金融服务提供基础。

## Galoy 的使命

Galoy 的使命是通过让构建比特币银行解决方案变得更容易来加速比特币的采用。通过创建免费的开源基础设施，Galoy 使公司、社区和国家能够为其用户提供比特币服务，而无需从头开始构建复杂的技术系统。

该项目旨在：

- 降低比特币银行服务的进入门槛
- 为全球数十亿无银行账户的人带来金融包容性
- 创建比特币银行的互操作开放标准
- 培育比特币金融应用的全球生态系统

## Flash 如何使用 Galoy

Flash 建立在 Galoy 的基础设施之上，利用其经过实战测试的组件提供无缝的用户体验。为 Flash 提供支持的关键 Galoy 组件包括：

### 核心银行功能

- **账户管理**：用户注册、KYC 集成和账户结构
- **比特币和闪电钱包**：链上和闪电交易的安全钱包基础设施
- **支付处理**：处理存款、取款和内部转账
- **闪电网络集成**：通道管理、流动性和路由优化

### 后端基础设施

- **API 层**：用于客户端应用程序的 RESTful 和 GraphQL API
- **认证系统**：安全的用户认证和授权
- **会计引擎**：确保财务准确性的复式记账系统
- **通知服务**：交易和账户更新的推送通知

### 管理工具

- **合规工具**：交易监控和报告
- **客户服务仪表板**：用户管理和支持工具
- **财务管理**：管理比特币储备的工具
- **分析仪表板**：系统使用和性能洞察

## Galoy 的成功案例

除了 Flash，Galoy 还为全球多个成功的比特币应用程序提供支持：

### Bitcoin Beach 钱包

Galoy 的原始实施在萨尔瓦多 El Zonte（被称为"比特币海滩"）推出，早于该国采用比特币作为法定货币。这个以社区为中心的钱包证明了比特币可以在当地经济中作为日常货币使用，并帮助激发了全国范围的比特币采用。

### Bitcoin Jungle

哥斯达黎加的一个社区比特币倡议，使用 Galoy 基础设施为当地商户和居民带来比特币，专注于创建由比特币驱动的循环经济。

### Ibex Mercado

Ibex 利用 Galoy 的技术为拉丁美洲的企业提供比特币和闪电网络服务，提供支付处理、汇款服务和金融工具。

## 技术架构

Galoy 的架构是模块化和灵活的，允许像 Flash 这样的实施自定义其服务，同时保持核心功能：

### 关键组件

- **比特币核心集成**：连接到比特币网络进行链上交易
- **LND 集成**：提供闪电网络功能
- **GraphQL API**：为客户端应用程序提供数据访问
- **安全的 MongoDB**：存储用户和交易数据
- **NodeJS 后端**：管理应用程序逻辑和后台进程
- **Kubernetes 编排**：确保可靠和可扩展的操作

### 安全功能

- **多签名冷存储**：用于安全储备管理
- **HSM 集成**：用于密钥管理的硬件安全
- **全面日志记录**：用于安全监控和合规
- **定期安全审计**：由第三方安全公司进行

## 开源开发

Galoy 完全开源，所有代码都在 MIT 许可下在 GitHub 上提供。这种对开源的承诺确保了：

- **透明度**：任何人都可以检查代码的安全性或功能
- **协作**：全球开发者可以贡献改进
- **主权**：如果需要，用户可以自托管自己的实例
- **创新**：一个实施开发的功能可以使所有人受益

## 参与 Galoy

对 Galoy 感兴趣的开发者可以通过几种方式做出贡献：

### 对于开发者

- **GitHub**：探索并贡献 [Galoy 代码库](https://github.com/GaloyMoney/galoy)
- **开发文档**：开始使用[开发者文档](https://dev.galoy.io)
- **社区聊天**：在 [Slack](https://join.slack.com/t/galoymoney-workspace/shared_invite/zt-rvnhsdb5-72AZCD_jzw6_Q05aCs0SgA) 上加入讨论

### 对于企业

- **部署 Galoy**：启动您自己的比特币银行平台
- **集成**：将现有服务连接到 Galoy 生态系统
- **定制**：根据您的特定市场需求调整 Galoy

## 未来发展

Galoy 项目继续发展，其功能将使 Flash 用户受益：

- **联邦系统**：允许不同的 Galoy 实例无缝交互
- **高级财务管理**：优化比特币储备的工具
- **增强的隐私功能**：改善用户财务隐私
- **法币通道**：与传统金融系统更好的集成
- **开发者 SDK**：使在 Galoy 上构建更容易

## 资源

- [Galoy 网站](https://galoy.io)
- [GitHub 仓库](https://github.com/GaloyMoney/galoy)
- [文档](https://dev.galoy.io)
- [Twitter](https://twitter.com/GaloyMoney)

随着 Flash 的持续增长，其基于 Galoy 开源基础设施的基础确保它始终处于比特币金融技术的前沿，同时保持用户期望的安全性和可靠性。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="breez-sdk" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Breez SDK
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="ibex-mercado" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      IBEX Mercado
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>