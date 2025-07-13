---
title: Zapとは？
description: Zapとは何か、どのように動作するか、そしてFlashクライアントで使用するために何が必要かについて学ぶ。
---

## [§](#the-basics) 基本

Zapについて最もシンプルに考える方法は、単なるチップだということです。基本的に取引手数料なしで光速で[Lightning network](https://www.investopedia.com/terms/l/lightning-network.asp)を介して送信されるチップです。

Flashプロトコルの初期から、ノートにLightningインボイスを見ることは一般的でした。[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md)が実装されて以来、ZapはFlashノートで価値が送信される主要な方法になりました。NIP-57が実装したものとZapがどのように動作するかをより詳しく見てみましょう。

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md)は、Zapがどのように実装されるべきかを記述する文書です。これは2つの新しい種類のノート、kind 9735（Zap）とkind 9734（Zapリクエスト）を作成します。これら2つの種類が連携して、FlashクライアントがLNURLサーバーからZapインボイスをリクエストして支払うことを可能にします。NIP-57仕様は、Zap支払いを受信するLightningウォレットがリレーに送信するノートを作成する方法も記述しています。

💡 豆知識：Zapに選ばれたノート種類は、Lightningが使用するネットワークポート（9735）と同じです。

## [§](#how-zaps-work) Zapの動作方法

![Zap flowchart](/images/zap-flow.webp)

ここでは深い技術的詳細には入りませんが、好奇心旺盛な方のために、Zapがどのように動作するかの基本的なメカニズムを見てみましょう。

1. クライアント（Damus、Iris、Amethystなど）で小さな⚡アイコンをクリックまたはタップすると、最初に起こることは、クライアントがZapしようとしている人のLightningウォレットの前にある[LNURLサーバー](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/)にpingを送ることです。最初のリクエストは「こんにちは、Aliceにいくつかのsatを送りたいです」のようなものです。
1. LNURLサーバーが応答し、AliceのウォレットがZapをサポートしている場合、クライアントにそのことを伝え、Aliceの公開鍵を送信/確認します。
1. この時点で、クライアントはZapしたいプロフィールやノート、金額、ノートをブロードキャストすべきリレー、その他いくつかの情報を含むZapリクエスト（kind 9734ノート）をまとめる少しの作業を行います。これは効果的にLNURLサーバーからのインボイスのリクエストです。
1. LNURLサーバーが要求されたインボイスで応答します。
1. この時点で、クライアントはそのインボイスをユーザーのLightningウォレットに渡して支払いを行います。ブラウザでAlbyのようなウォレット（および予算設定）を使用している場合、このプロセスは非常に迅速に発生する可能性があります。
1. ユーザーがZapしている人のウォレットにインボイスを直接支払うと、受信者のウォレットがkind 9735ノートを作成し、それを先ほどのZapリクエストで指定されたリレーにブロードキャストします。
1. このノートを受信したリレーは、接続されたクライアントにZapについて伝え、クライアントがユーザーにUIでZapを表示できるようになります。

そして、これはすべてわずか数秒で起こり、1ペニーのほんの一部のコストがかかります。

## [§](#how-to-send-and-receive) Zapを送受信するにはどうすればよいですか？

FlashでZapを他の人に送るには、2つのものが必要です：

1. Zap対応Lightningウォレット（[Alby](https://getalby.com/)や[Wallet of Satoshi](https://www.walletofsatoshi.com/)など）
1. Zapを実装したクライアント（[Damus](/ja/guides/damus)、[Amethyst](/ja/guides/amethyst)、[Iris](/ja/guides/iris)、[Snort](https://snort.social)など）

他に必要なことは、Flashプロフィールにライトニングアドレスを設定することだけです。これがZapを受信するアドレスです。

プロフィールでZapを受信するために設定したアドレス以外のウォレット/アドレスからZapの支払いを行うことが可能であることに注意してください。

例えば、以下を想像してください：

1. Flashプロフィールに[Stacker News](https://stacker.news/)ライトニングアドレスを設定している。これがZapされたsatを受信する場所です。
1. Webブラウザで、IrisをクライアントとしてプロクトのAlbyウォレットを使用してZapの支払いを行います。
1. モバイルで、DamusをクライアントとしてWallet of StatoshiアプリでZapの支払いを行います。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      NOSTRプロトコル
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Flashチャット使用
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>