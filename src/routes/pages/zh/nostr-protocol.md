---
title: NOSTR 协议
description: NOSTR 如何在 Flash 的聊天功能中实现抗审查通信
---

## 什么是 NOSTR？

NOSTR（通过中继传输的笔记和其他内容）是一个为 Flash 聊天功能提供动力的开放协议。NOSTR 专为抗审查的全球通信而设计，创建了一个去中心化的社交网络，没有单一实体控制用户数据或通信。

与依赖中央服务器的传统社交网络和消息应用不同，NOSTR 将消息分布在多个独立的中继服务器上。这种架构使得任何人几乎不可能压制通信或控制信息流。

## NOSTR 如何为 Flash 聊天提供动力

Flash 集成 NOSTR 以提供一个安全、抗审查的聊天系统，在全球范围内工作：

### 核心聊天功能

- **直接消息**：用户之间的私人对话
- **群聊**：多个参与者之间的通信
- **公共频道**：社区讨论空间
- **Flash 支持频道**：为用户提供的官方支持频道

### 集成优势

- **跨平台兼容性**：与使用其他 NOSTR 客户端的朋友聊天
- **自主身份**：控制您自己的加密身份
- **无中央权威**：没有公司可以访问或审查您的消息
- **持久性**：即使 Flash 消失，消息仍然可用

## 技术架构

NOSTR 采用简单而强大的技术设计：

### 关键组件

- **公钥加密**：每个用户都有一个公钥/私钥对
- **事件**：所有内容（消息、个人资料等）的标准化数据格式
- **中继**：存储和在用户之间传输事件的服务器
- **客户端**：与中继交互的应用程序（如 Flash）

### 工作原理

1. **身份创建**：当您设置 Flash 聊天时，您会生成一个加密密钥对
2. **消息创作**：您的消息使用您的私钥签名
3. **消息发布**：签名的消息发布到多个中继
4. **消息分发**：中继与其他连接的用户共享消息
5. **签名验证**：接收者使用您的公钥验证您的签名

### 中继基础设施

NOSTR 中的消息通过中继服务器网络传播：

- **多个中继**：Flash 连接到多个中继以实现冗余
- **中继选择**：用户可以选择信任哪些中继
- **中继发布**：Flash 将重要消息发布到多个中继
- **消息过滤**：客户端可以从中继请求特定内容

## Flash 中的关键 NOSTR 功能

Flash 利用 NOSTR 的功能提供几个重要功能：

### 隐私和安全

- **端到端加密**：私人消息被加密
- **加密验证**：确保消息真实性
- **用户控制**：设置您自己的隐私偏好
- **无需电话号码**：使用时无需透露个人信息

### 抗审查性

- **无中央权威**：没有单一实体可以让您噤声
- **中继多样性**：消息传递的多条路径
- **客户端可移植性**：从不同的应用程序访问您的身份
- **无国界通信**：在全球范围内无限制地工作

### 跨应用程序兼容性

- **开放标准**：与任何兼容 NOSTR 的应用程序一起工作
- **身份可移植性**：在平台之间使用您的 NOSTR 身份
- **联系人共享**：与使用不同应用的朋友连接
- **生态系统访问**：参与更广泛的 NOSTR 网络

## 在 Flash 中使用 NOSTR

Flash 让每个人都能访问 NOSTR 的强大功能：

### 入门

1. **打开 Flash**：下载并安装 Flash 应用
2. **访问聊天选项卡**：点击导航栏中的聊天图标
3. **创建个人资料**：设置您的 NOSTR 身份（或导入现有密钥）
4. **开始消息传递**：与朋友联系并加入频道

### 查找联系人

通过 Flash 在 NOSTR 上与他人连接：

1. **扫描二维码**：扫描朋友的 NOSTR 公钥二维码
2. **按密钥搜索**：直接输入 NOSTR 公钥
3. **用户名搜索**：通过 NOSTR 用户名查找人员（如果已注册）
4. **加入频道**：在公共讨论空间中发现人员

### 管理您的身份

Flash 中的您的 NOSTR 身份是可移植和自主的：

- **备份您的密钥**：安全保存您的私钥
- **导入现有密钥**：在 Flash 中使用您现有的 NOSTR 身份
- **多设备**：从不同设备访问您的账户
- **身份恢复**：使用您的私钥恢复您的个人资料

## Zaps：聊天中的比特币支付

Flash 中 NOSTR 的一个强大功能是能够在聊天对话中直接发送比特币支付：

### 什么是 Zaps？

Zaps 是在 NOSTR 内发送的比特币闪电网络支付：

- **微支付**：通过消息发送微量比特币
- **内容支持**：为有价值的贡献给朋友小费
- **集成体验**：支付和消息传递一体化
- **跨平台**：在不同的 NOSTR 客户端之间工作

### 在 Flash 中发送 Zaps

1. 打开聊天对话
2. 点击闪电图标
3. 输入要发送的金额
4. 添加可选备注
5. 确认支付

### 接收 Zaps

当有人在 Flash 中向您发送 Zap 时：

1. 您会在聊天对话中看到 Zap
2. 比特币立即添加到您的 Flash 钱包
3. 如果您的应用在后台，会出现通知
4. 交易出现在您的支付历史中

## NOSTR 超越聊天

虽然 Flash 目前主要将 NOSTR 用于聊天，但该协议可以实现更多功能：

### 当前 NOSTR 功能

- **短篇内容**：类似 Twitter 的帖子和回复
- **长篇内容**：博客风格的文章和新闻通讯
- **媒体共享**：图片、视频和其他附件
- **市场功能**：使用比特币买卖

### Flash 中的未来潜力

Flash 计划扩展 NOSTR 集成：

- **增强的商业通信**：为商户提供高级工具
- **内容发现**：查找以比特币为重点的内容和创作者
- **社区建设**：创建和加入基于兴趣的群组
- **身份验证**：企业的可选身份证明

## NOSTR 生态系统

Flash 的聊天是 NOSTR 应用程序不断增长的生态系统的一部分：

### 流行的 NOSTR 客户端

- **Damus**：专注于 iOS 的 NOSTR 客户端
- **Amethyst**：Android NOSTR 体验
- **Snort**：基于网络的 NOSTR 平台
- **Primal**：功能丰富的网络和移动客户端

### 关键 NOSTR 项目

- **NIP 开发**：定义标准的 NOSTR 改进提案
- **中继软件**：中继服务器的各种实现
- **开发者工具**：用于在 NOSTR 上构建的库和 SDK
- **用户目录**：在网络上发现人员的方式

## 技术规格

对于对 NOSTR 技术细节感兴趣的开发者：

### 事件类型

NOSTR 对不同内容使用不同的事件类型：

- **Kind 1**：短文本笔记（帖子）
- **Kind 4**：加密的直接消息
- **Kind 3**：联系人列表
- **Kind 0**：元数据（个人资料）
- **Kind 9735**：支付的 Zap 收据

### NIPs（NOSTR 改进提案）

协议通过 NIPs 发展：

- **NIP-01**：基本协议规范
- **NIP-04**：加密的直接消息
- **NIP-05**：将标识符映射到密钥（用户名）
- **NIP-57**：闪电支付的 Zap 功能

### NOSTR URIs

Flash 支持标准 NOSTR 寻址：

- **nostr:npub...**：链接到用户个人资料
- **nostr:note...**：链接到特定消息
- **nostr:nevent...**：链接到任何事件类型

## 资源

- [NOSTR 协议规范](https://github.com/nostr-protocol/nostr)
- [NOSTR NIPs 仓库](https://github.com/nostr-protocol/nips)
- [NOSTR 常见问题](https://nostr.com/faq)
- [开始使用 NOSTR](https://nostr.how)

通过集成 NOSTR，Flash 为用户提供了与比特币本身一样抗审查和去中心化的通信能力。这种技术的结合创建了一个平台，在这个平台上，金钱和消息都可以自由流动，不受任何中央权威的控制。

<!-- 导航链接 -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      闪电网络
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- 可选的中心内容 -->
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