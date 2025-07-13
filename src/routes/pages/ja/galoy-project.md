---
title: Galoyプロジェクト
description: Flashを支えるオープンソースBitcoin銀行インフラストラクチャ、Galoyについて学ぶ
---

## Galoyとは？

GaloyはFlashと世界中の他のBitcoinアプリケーションを支えるオープンソースBitcoin銀行インフラストラクチャです。世界中のコミュニティにBitcoinとLightning Networkをアクセス可能にするために作成されたGaloyは、Bitcoin上に構築された現代的で包摂的な金融サービスの基盤を提供します。

## Galoyのミッション

Galoyのミッションは、Bitcoin銀行ソリューションの構築を容易にすることでBitcoin採用を加速することです。無料のオープンソースインフラストラクチャを作成することで、Galoyは企業、コミュニティ、国がゼロから複雑な技術システムを構築することなく、ユーザーにBitcoinサービスを提供できるようにします。

このプロジェクトの目的は：

- Bitcoin銀行サービスの参入障壁を下げる
- 世界中の数十億の銀行サービスを受けられない人々に金融包摂をもたらす
- Bitcoin銀行のための相互運用可能でオープンな標準を作成
- Bitcoin金融アプリケーションのグローバルエコシステムを育成

## FlashでのGaloyの使用方法

Flashは、Galoyのインフラストラクチャの上に構築され、シームレスなユーザーエクスペリエンスを提供するために実証済みのコンポーネントを活用しています。Flashを支える主要なGaloyコンポーネントには以下があります：

### コア銀行機能

- **アカウント管理**: ユーザー登録、KYC統合、アカウント構造
- **BitcoinとLightningウォレット**: オンチェーンとLightning取引の両方のための安全なウォレットインフラストラクチャ
- **決済処理**: 預金、引き出し、内部送金の処理
- **Lightning Network統合**: チャネル管理、流動性、ルーティング最適化

### バックエンドインフラストラクチャ

- **APIレイヤー**: クライアントアプリケーションのためのRESTfulとGraphQL API
- **認証システム**: 安全なユーザー認証と認可
- **会計エンジン**: 財務精度のための複式簿記システム
- **通知サービス**: 取引とアカウント更新のプッシュ通知

### 管理ツール

- **コンプライアンスツール**: 取引監視とレポート
- **カスタマーサービスダッシュボード**: ユーザー管理とサポートツール
- **財務管理**: Bitcoin準備金管理ツール
- **分析ダッシュボード**: システム使用量とパフォーマンスに関する洞察

## Galoyの成功事例

Flash以外にも、Galoyは世界中でいくつかの成功したBitcoinアプリケーションを支えています：

### Bitcoin Beach Wallet

Galoyの元の実装は、エルサルバドルがBitcoinを法定通貨として採用する前に、エルサルバドルのエル・ソンテ（「Bitcoin Beach」として知られる）で開始されました。このコミュニティ重視のウォレットは、Bitcoinが地域経済で日常のお金として機能できることを証明し、全国的なBitcoin採用の触発に貢献しました。

### Bitcoin Jungle

Galoyインフラストラクチャを使用してコスタリカの地元マーチャントと住民にBitcoinをもたらすコミュニティBitcoinイニシアチブで、Bitcoinによって動力を得た循環経済の創造に焦点を当てています。

### Ibex Mercado

IbexはGaloyの技術を活用してラテンアメリカ全体の企業にBitcoinとLightning Networkサービスを提供し、決済処理、送金サービス、金融ツールを提供しています。

## 技術アーキテクチャ

Galoyのアーキテクチャはモジュラーで柔軟性があり、Flashのような実装がコア機能を維持しながらサービスをカスタマイズできます：

### 主要コンポーネント

- **Bitcoin Core統合**: オンチェーン取引のためにBitcoinネットワークに接続
- **LND統合**: Lightning Network機能を動力提供
- **GraphQL API**: クライアントアプリケーションにデータアクセスを提供
- **セキュアMongoDB**: ユーザーと取引データを保存
- **NodeJSバックエンド**: アプリケーションロジックとバックグラウンドプロセスを管理
- **Kubernetesオーケストレーション**: 信頼性の高いスケーラブルな操作を確保

### セキュリティ機能

- **マルチシグネチャコールドストレージ**: 安全な準備金管理
- **HSM統合**: キー管理のためのハードウェアセキュリティ
- **包括的ログ**: セキュリティ監視とコンプライアンス
- **定期セキュリティ監査**: 第三者セキュリティ企業による

## オープンソース開発

GaloyはMITライセンスの下でGitHubですべてのコードが利用可能な、完全にオープンソースです。このオープンソースへのコミットメントは以下を保証します：

- **透明性**: 誰でもセキュリティや機能のためにコードを検査可能
- **協力**: 世界中の開発者が改善に貢献可能
- **主権性**: ユーザーが望む場合、自分のインスタンスをセルフホスト可能
- **革新**: ある実装によって開発された機能がすべてに利益をもたらす

## Galoyへの参加

Galoyに興味のある開発者は、いくつかの方法で貢献できます：

### 開発者向け

- **GitHub**: [Galoyコードベース](https://github.com/GaloyMoney/galoy)を探索・貢献
- **開発ドキュメント**: [開発者ドキュメント](https://dev.galoy.io)で開始
- **コミュニティチャット**: [Slack](https://join.slack.com/t/galoymoney-workspace/shared_invite/zt-rvnhsdb5-72AZCD_jzw6_Q05aCs0SgA)での議論に参加

### 企業向け

- **Galoyの展開**: 独自のBitcoin銀行プラットフォームを立ち上げ
- **統合**: 既存サービスをGaloyエコシステムに接続
- **カスタマイゼーション**: 特定の市場ニーズにGaloyを適応

## 今後の開発

Galoyプロジェクトは、Flashユーザーに利益をもたらす機能とともに進化し続けています：

- **連合システム**: 異なるGaloyインスタンスがシームレスに相互作用できる
- **高度な財務管理**: Bitcoin準備金最適化ツール
- **強化されたプライバシー機能**: ユーザー金融プライバシーの改善
- **法定通貨ランプ**: 従来の金融システムとのより良い統合
- **開発者SDK**: Galoy上での構築を容易にする

## リソース

- [Galoyウェブサイト](https://galoy.io)
- [GitHubリポジトリ](https://github.com/GaloyMoney/galoy)
- [ドキュメント](https://dev.galoy.io)
- [Twitter](https://twitter.com/GaloyMoney)

Flashが成長し続ける中、Galoyのオープンソースインフラストラクチャ上の基盤は、ユーザーが期待するセキュリティと信頼性を維持しながら、Bitcoin金融技術の最先端に留まることを保証します。

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