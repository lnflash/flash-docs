---
title: Satを安全に管理する
description: Flashでザップを通して蓄積したSatを安全に管理する方法についての入門ガイドです。
---

## Bitcoinの基本

このガイドは非常に基本的な入門ガイドなので、Bitcoinについてはごく表面的にしか触れませんが、Flashで送受信するザップについて知っておくべき重要なことがいくつかあります。

1. Flashでやり取りしているSatは、Bitcoinです。
1. Satoshi（Sat）はBitcoinの分割単位です。1つのBitcoinには100,000,000 Satoshiがあります。
1. Bitcoinは無記名証券であり、これは保有する者が所有者であることを意味します。あなたのBitcoinが他人の手に渡った場合、救済や保険はありません。

Bitcoinについてより深く学びたい場合は...

<!-- TODO: ADD LINK TO BITCOIN 101 SITE -->

## ウォレットの基本

世の中には多くの異なるBitcoinウォレットがありますが、カストディアルとセルフカストディアルの2つのカテゴリに分けることができます。

**カストディアルウォレット：** カストディアルウォレットでは、利便性と確実性を交換しています。ウォレットを運営している会社や開発者が、そのウォレットを使用しているすべてのユーザーのすべてのBitcoinの究極の所有者（またはカストディアン）であるため、カストディアルウォレットと呼ばれます。

カストディアルウォレットを使用する場合、ウォレット開発者があなたをだまして資金を盗まないことを信頼しています。これはめったに起こりませんが、最近多くのカストディアル取引所（Blockfi、Celcius、FTXなど）で見たように、カウンターパーティリスクは実際の危険であり、認識すべきものです。

**セルフカストディアルウォレット：** セルフカストディアルウォレットは、あなたが個人的にキーを保持するウォレットです。これは、その中のBitcoinを完全に制御し、所有し、責任を負うことを意味します。キーを失うと、コインも失われます。

人生のすべてと同様に、カストディアル対セルフカストディアルの問題はトレードオフについてです。キーを管理しないことの利便性（実際はそれほど難しくありません）と、自分のBitcoinを保持することの確実性を交換することに快適を感じるかどうかは、あなただけが決めることができます。

とはいえ、良い経験則として、現在Wallet of Satoshiに持っているすべてを失うことを考えてみてください。そのアイデアがあなたを怖がらせたり、不快にさせたりする場合は、すぐにセルフカストディへの切り替えを目標に設定すべきです。良い出発点は、Satをスイープするための[セルフカストディ](/ja/guides/sweep-to-self-custody)ウォレットの設定方法に関するガイドです。

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="user-guides" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      ユーザーガイド
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/non-custodial-wallets" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      ノンカストディアルウォレット
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>