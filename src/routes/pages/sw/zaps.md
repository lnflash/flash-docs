---
title: Zaps ni nini?
description: Jifunze kuhusu Zaps ni nini, jinsi zinavyofanya kazi, na unachohitaji ili kuzitumia kwenye mteja wako wa Flash.
---

## [§](#the-basics) Misingi

Njia rahisi zaidi ya kufikiria kuhusu Zaps ni kwamba ni tu chips. Chips zinazotumwa kupitia [mtandao wa Lightning](https://www.investopedia.com/terms/l/lightning-network.asp) kwa kasi ya mwanga na kwa kimsingi hakuna ada za shughuli.

Tangu mwanzo wa itifaki ya Flash, ilikuwa kawaida kuona ankara za Lightning katika noti. Tangu [NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) ilitekelezwa, Zaps zimekuwa njia kuu ambayo thamani inatumwa katika noti za Flash. Hebu tuangalie kwa karibu zaidi NIP-57 ilitekelezwa nini na jinsi Zaps zinavyofanya kazi.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) ni hati inayoelezea jinsi Zaps zinapaswa kutekelezwa. Inaunda aina mbili mpya za noti, aina 9735 (Zap) na aina 9734 (Ombi la Zap). Pamoja aina hizi mbili zinafanya iwezekane kwa wateja wa Flash kuomba ankara za Zap kutoka kwa seva za LNURL na kuzilipa. Vipimo vya NIP-57 pia vinaelezea jinsi pochi za Lightning zinazopokea malipo ya Zap zinapaswa kuunda noti za kutumwa kwa vituo.

💡 Ukweli wa kufurahisha, aina ya noti iliyochaguliwa kwa Zaps ni sawa na bandari ya mtandao (9735) ambayo Lightning inatumia.

## [§](#how-zaps-work) Jinsi Zaps zinavyofanya kazi

![Mchoro wa mfumo wa Zap](/images/zap-flow.webp)

Hatutaenda katika majani ya kina ya kiufundi hapa lakini kwa wale wenyu wenye udadisi, hebu tuangalie makanismu ya msingi ya jinsi Zaps zinavyofanya kazi.

1. Unapobofya au kugusa kwenye ikoni ndogo ya ⚡ katika mteja wako (Damus, Iris, Amethyst, n.k.), jambo la kwanza linafanyika ni kwamba mteja anaping [seva ya LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) ambayo inakaa mbele ya pochi ya lightning ya mtu anayejaribu kum-Zap. Ombi la kwanza linaenda kitu kama, "Hujambo huko, ningependa kumpa Alice sats."
1. Seva ya LNURL inajibu na, ikiwa pochi ya Alice inasaidia Zaps, itamwambia mteja hivyo na kutuma/kuthibitisha funguo ya umma ya Alice.
1. Katika hatua hii, mteja anafanya kazi kidogo kuweka pamoja ombi la Zap (noti ya aina 9734) na data kuhusu wasifu au noti ambayo angependa ku-Zap, kiasi, vituo vinavyopaswa kutangaza noti, na vitu vichache vingine. Hii ni kimsingi ombi la ankara kutoka kwa seva ya LNURL.
1. Seva ya LNURL inajibu na ankara iliyoombwa.
1. Katika hatua hii mteja atapeana ankara hiyo kwa pochi ya lightning ya mtumiaji ili kulipwa. Ikiwa unatumia pochi kama Alby katika kivinjari (na umeweka bajeti) mchakato huu unaweza kutokea haraka sana.
1. Mara tu mtumiaji amelipa ankara moja kwa moja kwa pochi ya mtu anayewazap, pochi ya mpokeaji itaunda noti ya aina 9735 na kisha kuitangaza kwenye vituo vilivyobainishwa mapema katika ombi la Zap.
1. Vituo vinavyopokea noti hii kisha vitaweza kuwaambia wateja walioungwa kuhusu zap na wateja na kuonyesha zap kwa watumiaji katika UI yao.

Na hii yote hutokea katika sekunde chache na inágharimu sehemu ndogo ya senti.

## [§](#how-to-send-and-receive) Ninawezaje kutuma na kupokea Zaps?

Ili ku-Zap watu wengine katika Flash, unahitaji vitu viwili tu:

1. Pochi ya lightning inayopatana na Zap (kama [Alby](https://getalby.com/) au [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Mteja ambaye ametekeleza Zaps (kama [Damus](/en/guides/damus), [Amethyst](/en/guides/amethyst), [Iris](/en/guides/iris), au [Snort](https://snort.social))

Jambo lingine tu unahitajilo kufanya ni kuhakikisha una anwani yako ya lightning iliyowekwa katika wasifu wako wa Flash. Hii ni anwani ambapo utapokea Zaps.

Kumbuka, ni uwezekano wa kulipa kwa Zaps kutoka kwa pochi/anwani nyingine kuliko anwani uliyoweka katika wasifu wako kupokea Zaps.

Kwa mfano, fikiria ifuatavyo:

1. Una anwani ya lightning ya [Stacker News](https://stacker.news/) iliyowekwa katika wasifu wako wa Flash, hapa ndapo utapokea sats zozote zilizozapwa.
1. Katika kivinjari chako, unatumia Iris kama mteja wako na kulipa kwa Zaps kwa kutumia pochi yako ya Alby kupitia kiendelezi chao cha chrome
1. Kwenye simu, unatumia Damus kama mteja wako na kulipa kwa Zaps kwa kutumia programu ya Wallet of Satoshi.

<!-- Viungo vya urambazaji -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Itifaki ya NOSTR
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Kutumia Mazungumzo ya Flash
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>