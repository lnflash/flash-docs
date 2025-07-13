---
title: 扫描到冷存储
description: 将您的比特币从移动钱包转移到硬件安全的完整指南
---

本指南提供了使用硬件钱包将比特币安全存储在冷存储中的分步说明。按照这些详细步骤确保您的比特币从移动钱包安全转移到长期安全存储。

## 目录

- [了解冷存储](#了解冷存储)
- [准备转移](#准备转移)
- [设置您的硬件钱包](#设置您的硬件钱包)
- [从移动钱包转移比特币](#从移动钱包转移比特币)
  - [从 Flash 钱包](#从-flash-钱包)
  - [从其他移动钱包](#从其他移动钱包)
- [验证您的转移](#验证您的转移)
- [冷存储最佳实践](#冷存储最佳实践)
- [恢复和备份程序](#恢复和备份程序)
- [高级冷存储选项](#高级冷存储选项)

## 了解冷存储

冷存储是指将您的比特币私钥保存在专用硬件设备上离线存储，与移动或在线钱包相比，大大减少了潜在的攻击向量。

### 硬件钱包的好处

- **增强安全性**：私钥永远不会离开设备
- **防止恶意软件**：免受计算机病毒和键盘记录器的影响
- **物理验证**：交易需要物理确认
- **灾难恢复**：内置备份和恢复选项
- **长期存储**：专为安全、长期的比特币存储而设计

### 何时使用冷存储

建议在以下情况下使用冷存储：

- 您的比特币持有量超过 1,000 美元
- 您计划持有比特币超过 6 个月
- 您想要最大程度地防范远程攻击
- 您正在创建长期储蓄计划或继承

## 准备转移

在开始转移过程之前，准备以下内容：

1. **硬件钱包设备**（Bitkey、ColdCard 或 Trezor）
2. **笔和纸**用于记录恢复短语
3. **安全位置**远离摄像头或旁观者
4. **带有比特币的移动钱包**进行转移
5. **少量用于测试**（始终先发送测试交易）
6. **没有干扰的时间**（设置需要 30-60 分钟）
7. **稳定的互联网连接**（用于移动钱包端）

## 设置您的硬件钱包

每个硬件钱包都有特定的设置过程。选择您的设备如下：

<div class="tabs">
  <div class="tab-input">
    <input type="radio" id="tab1" name="tab-control" checked>
    <input type="radio" id="tab2" name="tab-control">
    <input type="radio" id="tab3" name="tab-control">
    <ul>
      <li><label for="tab1">Bitkey</label></li>
      <li><label for="tab2">ColdCard</label></li>
      <li><label for="tab3">Trezor</label></li>
    </ul>

    <div class="slider"><div class="indicator"></div></div>
    <div class="content">
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">关于 Bitkey</h4>
          <p>Bitkey 使用"三分之二"多重签名安全模型，包含移动应用组件、硬件组件和恢复密钥组件。</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">设置您的 Bitkey</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">初始硬件设置</h4>
              <div class="step-instructions">
                <p>拆箱您的 Bitkey 硬件设备</p>
                <p>按下圆形按钮开机</p>
                <p>按照屏幕上的说明设置您的设备 PIN</p>
                <p>验证设备显示未被篡改的密封消息</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">安装 Bitkey 移动应用</h4>
              <div class="step-instructions">
                <p>从 App Store 或 Google Play 下载 Bitkey 应用</p>
                <p>打开应用并选择"设置新钱包"</p>
                <p>按照配对说明连接到您的硬件设备</p>
                <p>为应用创建安全 PIN</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">创建您的恢复密钥</h4>
              <div class="step-instructions">
                <p>出现提示时，应用将引导您创建恢复密钥</p>
                <p>在提供的恢复卡上按顺序写下所有 12 或 24 个助记词</p>
                <p>仔细验证每个词 - 这些词就是您的比特币</p>
                <p>将恢复卡存储在安全、私密的位置</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">验证您的设置</h4>
              <div class="step-instructions">
                <p>在两个设备上完成恢复短语验证测试</p>
                <p>确保硬件和移动组件显示相同的钱包余额</p>
                <p>测试小额交易的批准流程</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">使用 Bitkey 创建接收地址</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">连接您的钱包</h4>
              <div class="step-instructions">
                <p>在智能手机上打开 Bitkey 移动应用</p>
                <p>确保它与您的硬件设备正确配对</p>
                <p>验证两个设备都已开机并响应</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">生成地址</h4>
              <div class="step-instructions">
                <p>在移动应用中点击"接收"</p>
                <p>应用将生成新的比特币地址</p>
                <p>您的硬件设备将显示验证请求</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">验证地址</h4>
              <div class="step-instructions">
                <p>重要：确认移动和硬件设备上的地址匹配</p>
                <p>此验证步骤可防止地址替换攻击</p>
                <p>永远不要使用未在硬件设备上验证的地址</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">标记地址（可选）</h4>
              <div class="step-instructions">
                <p>添加描述，如"Flash 转移 - 2025年3月"</p>
                <p>这有助于以后跟踪资金来源</p>
                <p>标签存储在本地，不在区块链上</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">关于 ColdCard</h4>
          <p>ColdCard 是一个仅限比特币的硬件钱包，可以完全离线运行并提供高级安全功能。</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">设置您的 ColdCard</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">初始硬件设置</h4>
              <div class="step-instructions">
                <p>拆箱您的 ColdCard</p>
                <p>插入 microSD 卡（可选但推荐）</p>
                <p>使用附带的 USB 线连接设备</p>
                <p>出现提示时创建新钱包</p>
                <p>设置带有前缀和后缀的强 PIN</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">备份您的助记词</h4>
              <div class="step-instructions">
                <p>按顺序仔细写下所有 24 个助记词</p>
                <p>对照 ColdCard 屏幕仔细检查每个词</p>
                <p>考虑在金属上印制助记词以防火/防水</p>
                <p>将备份保存在安全位置</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">高级安全设置</h4>
              <div class="step-instructions">
                <p>设置 BrickMe PIN（紧急删除功能）</p>
                <p>如果需要，配置胁迫 PIN（显示有限资金）</p>
                <p>设置密码短语以获得额外的安全性（可选）</p>
                <p>测试您的 PIN 以确保它们正常工作</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">安装配套软件</h4>
              <div class="step-instructions">
                <p>对于桌面交互，安装 <a href="https://sparrowwallet.com/">Sparrow Wallet</a></p>
                <p>通过 USB 连接您的 ColdCard 或使用 microSD 卡进行离线操作</p>
                <p>使用 microSD 卡将钱包公钥导出到 Sparrow</p>
                <p>验证钱包在 Sparrow 中正确显示</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">使用 ColdCard 创建接收地址</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">连接您的钱包</h4>
              <div class="step-instructions">
                <p>选项 1（USB）：通过 USB 线将 ColdCard 连接到您的计算机</p>
                <p>选项 2（离线）：使用 microSD 卡完全隔离</p>
                <p>在您的计算机上打开 Sparrow Wallet</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">生成地址</h4>
              <div class="step-instructions">
                <p>在 Sparrow Wallet 中，选择"接收"选项卡</p>
                <p>选择地址类型（推荐原生隔离见证）</p>
                <p>Sparrow 将显示新的比特币地址和二维码</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">验证地址</h4>
              <div class="step-instructions">
                <p>关键安全步骤：在 ColdCard 的屏幕上验证地址</p>
                <p>在 ColdCard 上，导航到地址浏览器</p>
                <p>比较 Sparrow 中显示的地址与 ColdCard 上的地址</p>
                <p>只有地址完全匹配才能继续</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">标记地址（可选）</h4>
              <div class="step-instructions">
                <p>在 Sparrow 中，添加标签，如"Flash 转移 - 2025年3月"</p>
                <p>这有助于您跟踪哪些存款来自哪里</p>
                <p>标签存储在 Sparrow 中，不在区块链上</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">关于 Trezor</h4>
          <p>Trezor 提供直观的用户体验和简单的界面，同时保持强大的安全性。</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">设置您的 Trezor</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">初始硬件设置</h4>
              <div class="step-instructions">
                <p>拆箱您的 Trezor 设备</p>
                <p>通过 USB 线将其连接到您的计算机</p>
                <p>访问 <a href="https://trezor.io/start">trezor.io/start</a></p>
                <p>按照屏幕上的说明操作</p>
                <p>出现提示时创建新钱包</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">创建设备 PIN</h4>
              <div class="step-instructions">
                <p>按照屏幕上的说明创建强 PIN</p>
                <p>PIN 输入使用随机键盘进行保护</p>
                <p>记住此 PIN - 它保护对您设备的物理访问</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">备份恢复种子</h4>
              <div class="step-instructions">
                <p>按确切顺序写下所有 12 或 24 个助记词</p>
                <p>在设置向导提示时验证恢复种子</p>
                <p>存储在安全、私密的位置，远离潜在威胁</p>
                <p>考虑创建金属备份以防火/防水</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">设置 Trezor Suite</h4>
              <div class="step-instructions">
                <p>在您的计算机上安装 Trezor Suite</p>
                <p>连接您的设备并使用 PIN 解锁</p>
                <p>在 Trezor Suite 中创建比特币钱包</p>
                <p>可选择添加密码短语以获得额外的安全性</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">使用 Trezor 创建接收地址</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">连接您的钱包</h4>
              <div class="step-instructions">
                <p>通过 USB 线将 Trezor 连接到您的计算机</p>
                <p>在您的计算机上打开 Trezor Suite</p>
                <p>使用您的 PIN 解锁设备</p>
                <p>如果您设置了密码短语，请输入</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">生成地址</h4>
              <div class="step-instructions">
                <p>在 Trezor Suite 中，点击"接收"选项卡</p>
                <p>选择要接收的账户（如果有多个）</p>
                <p>选择地址类型（推荐原生隔离见证以降低费用）</p>
                <p>Trezor Suite 将生成新的比特币地址</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">验证地址</h4>
              <div class="step-instructions">
                <p>Trezor 会提示您在设备上确认地址</p>
                <p>比较屏幕上的地址与 Trezor 上的地址</p>
                <p>只有完全匹配才能批准</p>
                <p>此步骤可防止恶意软件试图显示假地址</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">标记地址（可选）</h4>
              <div class="step-instructions">
                <p>添加描述性标签，如"Flash 转移 - 2025年3月"</p>
                <p>Trezor Suite 将保存此标签与地址</p>
                <p>使以后更容易识别资金及其来源</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

</div>
</div>

<style>
.tabs {
  width: 100%;
  margin: 0 auto 2rem;
}

.tab-input {
  position: relative;
}

.tab-input input[type="radio"] {
  display: none;
}

.tab-input ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.tab-input ul li {
  margin-right: 0.5rem;
}

.tab-input ul li label {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem 0.375rem 0 0;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-input ul li label:hover {
  background-color: rgba(139, 92, 246, 0.1);
}

.tab-input .content {
  position: relative;
}

.tab-input .content section {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.documentation-section {
  margin-bottom: 2rem;
}

.step-container {
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: 3rem;
  background-color: #8b5cf6;
  color: white;
  padding: 0.75rem;
}

.step-content {
  flex: 1;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-left: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.dark .step-content {
  border-color: #374151;
}

.step-title {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: #4b5563;
}

.dark .step-title {
  color: #e5e7eb;
}

.step-instructions p {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.step-instructions p:before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #8b5cf6;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Set the active tab using the radio buttons */
#tab1:checked ~ ul li:nth-child(1) label,
#tab2:checked ~ ul li:nth-child(2) label,
#tab3:checked ~ ul li:nth-child(3) label {
  color: white;
  background-color: #8b5cf6;
}

#tab1:checked ~ .content section:nth-child(1),
#tab2:checked ~ .content section:nth-child(2),
#tab3:checked ~ .content section:nth-child(3) {
  display: block;
}

/* Dark mode adjustments */
.dark .tab-input ul {
  border-color: #374151;
}

.dark .tab-input ul li label:hover {
  background-color: rgba(139, 92, 246, 0.2);
}
</style>

## 从移动钱包转移比特币

现在您已准备好将比特币从移动钱包发送到硬件钱包：

<div class="documentation-section mt-6">
  <h3 class="font-bold text-xl mb-6">从 Flash 钱包</h3>

<div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">打开 Flash 应用</h4>
      <div class="step-instructions">
        <p>转到"钱包"选项卡</p>
        <p>确保您有足够的余额</p>
        <p>检查您的闪电通道是否有足够的出站容量</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">发起转移</h4>
      <div class="step-instructions">
        <p>点击"发送"或"提取"</p>
        <p>选择"链上提取"</p>
        <p>请注意，链上提取比闪电网络费用更高</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">输入详细信息</h4>
      <div class="step-instructions">
        <p>粘贴您的硬件钱包接收地址</p>
        <p>仔细检查地址是否正确（前几个和后几个字符）</p>
        <p>从小额测试开始（例如，0.0001 BTC 或 10,000 聪）</p>
        <p>输入足够高的金额以支付网络费用</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">审查并确认</h4>
      <div class="step-instructions">
        <p>检查提取费用（更高的费用确认更快）</p>
        <p>对于冷存储转移，优先考虑安全性而不是节省费用</p>
        <p>最后一次验证所有详细信息是否正确</p>
        <p>点击"确认"以启动转移</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4 class="step-title">初始测试验证</h4>
      <div class="step-instructions">
        <p>等待测试交易确认（10-60 分钟）</p>
        <p>在 Flash 应用中查看交易状态</p>
        <p>验证硬件钱包上的接收</p>
        <p>确认后，继续转移更大金额</p>
      </div>
    </div>
  </div>
</div>

<div class="documentation-section mt-12">
  <h3 class="font-bold text-xl mb-6">从其他移动钱包</h3>

<div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">打开您的移动钱包</h4>
      <div class="step-instructions">
        <p>访问包含您比特币的钱包</p>
        <p>导航到发送/转移功能</p>
        <p>确保您的钱包已更新到最新版本</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">输入硬件钱包地址</h4>
      <div class="step-instructions">
        <p>粘贴您已验证的硬件钱包地址</p>
        <p>如果可能，仔细检查整个地址</p>
        <p>对于大额转移，通过多个渠道验证地址</p>
        <p>永远不要手动输入地址 - 始终复制和粘贴</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">设置交易费用</h4>
      <div class="step-instructions">
        <p>根据紧急程度选择适当的费用</p>
        <p>对于冷存储，中等优先级通常就足够了</p>
        <p>查看 <a href="https://mempool.space">mempool.space</a> 获取当前费用建议</p>
        <p>考虑确认时间和成本之间的权衡</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">发送测试交易</h4>
      <div class="step-instructions">
        <p>从最小金额开始（0.0001 BTC 或等值）</p>
        <p>确认前审查所有详细信息</p>
        <p>在您的钱包中确认交易</p>
        <p>记录交易 ID/哈希以供参考</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4 class="step-title">完成转移</h4>
      <div class="step-instructions">
        <p>确认收到测试交易后</p>
        <p>通过一次或多次交易发送剩余金额</p>
        <p>考虑交易模式的隐私影响</p>
        <p>保留交易 ID 以供将来参考</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 my-8">
  <h4 class="font-medium text-yellow-800 dark:text-yellow-200">安全提醒</h4>
  <p class="text-yellow-700 dark:text-yellow-300 mt-2">
    在发送任何资金之前，始终在硬件钱包的安全屏幕上验证接收地址。
    被入侵的计算机可能会显示与您打算使用的地址不同的地址。
  </p>
</div>

## 验证您的转移

发送后，验证转移是否成功：

1. **检查交易状态**
   - 使用区块浏览器，如 [mempool.space](https://mempool.space)
   - 输入您的交易 ID 或钱包地址
   - 监控确认（6+ 被认为极其安全）

2. **在硬件钱包上验证**
   - Bitkey：在移动应用和硬件设备中检查余额
   - ColdCard：在 Sparrow Wallet 中或通过 microSD 导出检查余额
   - Trezor：在 Trezor Suite 中检查余额

3. **记录转移**
   - 记录交易 ID
   - 记录日期、金额和发送地址
   - 安全存储此信息以供将来参考

## 冷存储最佳实践

通过这些最佳实践最大限度地提高您的安全性：

1. **多个硬件钱包**
   - 考虑使用不同品牌进行多样化
   - 为不同目的分离钱包（消费与长期）

2. **定期验证**
   - 每 6-12 个月检查设备功能
   - 发布安全更新时更新固件
   - 每年执行测试恢复

3. **安全存储环境**
   - 将硬件钱包保存在凉爽、干燥的位置
   - 防止电磁干扰
   - 考虑防火、防水容器

4. **物理安全**
   - 不要公开讨论硬件钱包所有权
   - 考虑家庭保险箱或银行保险箱
   - 如果担心物理威胁，准备一个带有少量资金的"诱饵"钱包

5. **避免常见错误**
   - 永远不要在计算机或手机上输入助记词
   - 不要在云服务或数字格式中存储助记词
   - 不要分享助记词或硬件钱包的照片
   - 警惕针对硬件钱包用户的网络钓鱼尝试

## 恢复和备份程序

通过适当的备份程序为紧急情况做准备：

1. **助记词保护**
   - 将助记词与硬件设备分开存储
   - 考虑金属备份解决方案（Cryptosteel、BlockPlate 等）
   - 将备份分散在多个安全位置

2. **测试恢复程序**
   - 在没有实际资金的情况下练习恢复
   - 在紧急情况之前了解流程
   - 为继承人或受信任的个人记录步骤

3. **继承规划**
   - 为继承人创建清晰的说明
   - 考虑继承的多重签名设置
   - 建立适合您管辖区的法律框架

## 高级冷存储选项

对于寻求最大安全性的用户：

1. **多重签名设置**
   - 需要多个设备批准交易
   - 将风险分散到不同的安全模型
   - 热门选项：[Sparrow Wallet](https://sparrowwallet.com/) 多重签名，
     [Caravan](https://unchained.com/caravan/)

2. **离线操作**
   - 保持签名设备完全离线
   - 通过 microSD 或二维码传输交易数据
   - ColdCard 和一些 Trezor 型号支持此工作流程

3. **地理分布**
   - 在不同的物理位置存储备份组件
   - 考虑大额持有的司法管辖区多样化
   - 平衡安全性与实际可访问性

---

<div class="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg my-8">
  <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">需要帮助？</h3>
  <p class="text-purple-700 dark:text-purple-300">
    如果您在转移过程中遇到任何问题，请通过应用联系 Flash 支持或访问我们的社区论坛寻求帮助。
  </p>
</div>