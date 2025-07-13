---
title: Bitcoinプロトコル
description: Bitcoin、Lightning Network、そしてFlashがより良い金融システムのためにこれらの技術をどのように活用するかの明確な説明。
---

## 最高レベルでのBitcoin

Bitcoinは、中央機関や仲介者なしで動作する分散デジタル貨幣システムです。2009年にSatoshi Nakamotoによって作成されたBitcoinは、暗号学によって検証され、ブロックチェーンと呼ばれる公開分散台帳に記録されるピアツーピア取引を可能にします。

Bitcoinプロトコルの主要コンポーネントには以下があります：

- **ブロックチェーン**: すべての取引の時系列的で不変の記録
- **公開鍵暗号学**: 所有権と取引承認を保護
- **プルーフオブワーク**: ネットワークを保護するコンセンサスメカニズム
- **限定供給**: 2100万ビットコインしか存在しない
- **マイニング**: 取引が検証され、新しいビットコインが作成されるプロセス
- **ノード**: 取引を検証してネットワークを維持するコンピュータ

従来の金融システムとは異なり、Bitcoin：
- 政府や中央銀行によって操作されることはない
- 固定された予測可能な金融政策を持つ
- 誰にでも許可なしアクセスを提供
- 不可逆的で検閲不可能な取引を可能にする
- 休日や営業時間なしで24/7/365動作

## Bitcoinネットワーク、図解

Bitcoinのネットワークは、ブロックチェーンの状態についてコンセンサスを維持するために連携する何千もの独立運営ノードで構成されています。各フルノードはブロックチェーンの完全なコピーを維持し、プロトコルルールに従ってすべての取引を独立して検証します。

Bitcoin取引を行うとき：

1. ネットワークに取引をブロードキャスト
2. マイナーがそれをブロックに含め、計算パズルを解く（マイニング）
3. 解決されたブロックがすべてのノードにブロードキャスト
4. ノードがブロックがすべてのルールに従っているかを検証
5. ブロックがブロックチェーンに追加
6. 追加ブロックごとに、取引がより安全になる

この分散アーキテクチャは、単一障害点のないシステムを作成し、検閲や攻撃に対する極度の耐性を持ちます。

## Lightning Network

Bitcoinのベースレイヤーはセキュリティと分散化を優先しますが、取引スループットと速度に制限があります。Lightning NetworkはBitcoin上に構築された「セカンドレイヤー」プロトコルで、これらの制限に対処します。

Lightningは以下を可能にします：

- **即座の決済**: 取引が分や時間ではなくミリ秒で確認
- **マイクロペイメント**: 手数料が非常に安く、小額決済（1セント未満）も実用的
- **スケーラビリティ**: ネットワークは理論的に毎秒数百万の取引を処理可能
- **プライバシー向上**: Lightning取引はブロックチェーンに個別記録されない

Lightning Networkは、ユーザー間に決済チャネルを作成することで動作します。オンチェーン取引でチャネルが確立されると、ユーザーはチャネルを閉じるまでブロックチェーンに触れることなく、無制限の取引を実行できます。

Flashは、日常取引に必要な速度と低コストを提供しながら、最終決済にBitcoinのセキュリティと分散化を活用するため、コア決済機能にLightning Networkを利用しています。

## Lightning Network、図解

Lightning Networkは、ユーザーとノード間の決済チャネルのメッシュを形成します。これらのチャネルにより、各決済がブロックチェーンに記録される必要なく、ネットワーク全体でビットコインが流れることができます。

Lightning決済を行うとき：

1. Flashアプリが受信者への接続チャネルを通じてルートを見つける
2. 暗号契約により、決済が意図された受信者にのみ行くことを保証
3. 決済がチャネルを通じてほぼ即座に流れる
4. 中間ノードへの信頼は不要
5. チャネルが閉じられるときに最終残高のみがブロックチェーンで決済

この巧妙な設計により、Bitcoinはコアセキュリティプロパティを維持しながらグローバルにスケールできます。Flashのインフラストラクチャはこのネットワークに直接接続し、高速で低コストのBitcoin決済へのシームレスなアクセスを提供します。

## Bitcoin上のeCash

直接のBitcoin取引とLightning決済以外に、FlashはeCash、つまりBitcoin上に構築されたデジタルキャッシュの形式もサポートします：

- **完全プライバシー**: 取引は完全にプライベート
- **ブロックチェーンフットプリントなし**: eCash取引はオフチェーンで発生
- **無記名証券**: デジタル形式で物理的なキャッシュのように動作
- **カウンターパーティ関係なし**: アカウントや身元確認なしで使用

FlashのeCashは、個々のユーザーを追跡することなく二重支払いを防ぐ暗号技術を使用し、トークンが一度だけ使用できることを保証します。これは、物理的なキャッシュの最良の側面とデジタルマネーの利便性を組み合わせます。

## FlashのBitcoinインフラストラクチャ

Flashは、これらのBitcoin技術の上に構築して、シームレスでユーザーフレンドリーな決済システムを作成します：

- **Lightning Network統合**: 即座の低手数料取引
- **オンチェーンBitcoinサポート**: 最終決済とセルフカストディ
- **eCash機能**: プライバシーとオフラインユースケース
- **相互運用性**: より広いBitcoinエコシステムとの互換性

これらの統合を通じて、Flashは従来の決済アプリのシンプルさと使いやすさを提供しながら、Bitcoinの自由、セキュリティ、プライバシー保証を保持します。

## NOSTRプロトコル

Bitcoin決済技術に加えて、FlashはNOSTR（リレーによって送信されるノートとその他のもの）を組み込んでいます。これは、グローバルで検閲耐性のある通信のためのシンプルでオープンなプロトコルです。

NOSTRは、Flashのメッセージングとソーシャル機能を可能にし、以下を提供します：
- ユーザー間の直接メッセージング
- パブリックおよびプライベートグループチャット
- ソーシャルネットワーキング機能
- グローバルで検閲耐性のある通信

Bitcoinの決済インフラストラクチャとNOSTRの通信プロトコルを組み合わせることで、Flashは金融取引とソーシャルインタラクションの両方のための包括的なプラットフォームを作成します。

## Bitcoinの歴史（2007年〜2014年）
<iframe width="100%" height="800" frameborder="0" src="https://historyofbitcoin.org/" title="The History of Bitcoin" allowfullscreen></iframe>

### より多くの情報はどこで見つけられますか？

Bitcoinに関する情報は無限のウサギの穴があります。始めるためのいくつかの場所：
-   [The Bullish Case for Bitcoin](https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1)
-   [21 Lessons](https://21lessons.com/)
-   [Gradually, Then Suddenly](https://unchained.com/blog/category/gradually-then-suddenly/)
-   [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf) - Satoshi Nakamotoによる元の文書
-   [Lightning Network Whitepaper](https://lightning.network/lightning-network-paper.pdf) - Lightningの技術詳細
-   [A Guide to Bitcoin's Technical Brilliance](https://medium.com/digitalassetresearch/a-guide-to-bitcoins-technical-brilliance-for-non-programmers-e28211e797c0)
-   [Bitcoin Resources](https://bitcoin-resources.com/)
-   [Bitcoin.org](https://bitcoin.org/en/)
-   [Lightning Labs Resources](https://docs.lightning.engineering/)

<div style="height:400px;width:100%"></div>


「もし流行すれば、いくらか手に入れるのは意味があるかもしれない。」 〜 （Satoshi Nakamoto）

[🐇](https://rabbithole.flashapp.com)

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="bitcoin-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Bitcoinプロトコル
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Lightning Network
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>