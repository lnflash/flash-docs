---
title: ما هي Zaps؟
description: تعرف على ماهية Zaps وكيف تعمل وما تحتاجه لاستخدامها على عميل Flash الخاص بك
---

## [§](#the-basics) الأساسيات

أبسط طريقة للتفكير في Zaps هي أنها مجرد إكراميات. إكراميات يتم نقلها عبر [شبكة البرق](https://www.investopedia.com/terms/l/lightning-network.asp) بسرعة الضوء مع عدم وجود رسوم معاملات تقريباً.

منذ بداية بروتوكول Flash، كان من الشائع رؤية فواتير البرق في الملاحظات. منذ تنفيذ [NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md)، أصبحت Zaps الطريقة الرئيسية التي يتم بها نقل القيمة في ملاحظات Flash. دعونا نلقي نظرة فاحصة على ما نفذه NIP-57 وكيف تعمل Zaps.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) هو المستند الذي يصف كيف يجب تنفيذ Zaps. إنه ينشئ نوعين جديدين من الملاحظات، النوع 9735 (Zap) والنوع 9734 (طلب Zap). في تناسق، هذان النوعان يجعلان من الممكن لعملاء Flash طلب فواتير Zap من خوادم LNURL ودفعها. تصف مواصفات NIP-57 أيضاً كيف يجب على محافظ البرق التي تتلقى مدفوعات Zap إنشاء ملاحظات لإرسالها إلى المرحلات.

💡 حقيقة ممتعة، رقم نوع الملاحظة المختار لـ Zaps هو نفس منفذ الشبكة (9735) الذي يستخدمه البرق.

## [§](#how-zaps-work) كيف تعمل Zaps

![مخطط تدفق Zap](/images/zap-flow.webp)

لن ندخل في الأعشاب التقنية العميقة هنا ولكن للفضوليين بينكم، دعونا ننظر في الآليات الأساسية لكيفية عمل Zaps.

1. عندما تنقر أو تضغط على أيقونة ⚡ الصغيرة في عميلك (Damus، Iris، Amethyst، إلخ)، أول شيء يحدث هو أن العميل يرسل إشارة إلى [خادم LNURL](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) الذي يجلس أمام محفظة البرق للشخص الذي تحاول أن تقوم بـ Zap له. الطلب الأول يذهب شيئاً مثل، "مرحباً، أود أن أعطي أليس بعض الساتوشيات."
1. يستجيب خادم LNURL، وإذا كانت محفظة أليس تدعم Zaps، فسوف يخبر العميل بذلك ويرسل/يؤكد المفتاح العام لأليس.
1. في هذه المرحلة، يقوم العميل ببعض العمل لتجميع طلب Zap (ملاحظة من النوع 9734) مع بيانات حول الملف الشخصي أو الملاحظة التي يريد Zap لها، والمبلغ، والمرحلات التي يجب أن يبث الملاحظة إليها، وبعض الأشياء الأخرى. هذا بشكل فعال طلب للحصول على فاتورة من خادم LNURL.
1. يستجيب خادم LNURL بالفاتورة المطلوبة.
1. في هذه المرحلة، سيسلم العميل تلك الفاتورة إلى محفظة البرق الخاصة بالمستخدم لدفعها. إذا كنت تستخدم محفظة مثل Alby في المتصفح (وقمت بتعيين ميزانية) يمكن أن تحدث هذه العملية بسرعة كبيرة.
1. بمجرد أن يدفع المستخدم الفاتورة مباشرة إلى محفظة الشخص الذي يقوم بـ zapping له، ستقوم محفظة المستلم بإنشاء ملاحظة من النوع 9735 ثم بثها إلى المرحلات المحددة سابقاً في طلب Zap.
1. المرحلات التي تتلقى هذه الملاحظة ستتمكن بعد ذلك من إخبار العملاء المتصلين حول zap وسيظهر العملاء zap للمستخدمين في واجهة المستخدم الخاصة بهم.

وكل هذا يحدث في بضع ثوانٍ فقط ويكلف جزءاً صغيراً من فلس واحد.

## [§](#how-to-send-and-receive) كيف أرسل وأستقبل Zaps؟

لـ Zap أشخاص آخرين في Flash، تحتاج فقط إلى شيئين:

1. محفظة برق متوافقة مع Zap (مثل [Alby](https://getalby.com/) أو [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. عميل قام بتنفيذ Zaps (مثل [Damus](/ar/guides/damus)، [Amethyst](/ar/guides/amethyst)، [Iris](/ar/guides/iris)، أو [Snort](https://snort.social))

الشيء الوحيد الآخر الذي تحتاج إلى القيام به هو التأكد من أن لديك عنوان البرق الخاص بك معيّن في ملفك الشخصي في Flash. هذا هو العنوان الذي ستتلقى فيه Zaps.

ضع في اعتبارك أنه من الممكن الدفع مقابل Zaps من محفظة/عنوان آخر غير العنوان الذي قمت بتعيينه في ملفك الشخصي لتلقي Zaps.

على سبيل المثال، تخيل ما يلي:

1. لديك عنوان برق [Stacker News](https://stacker.news/) معيّن في ملفك الشخصي في Flash، هذا هو المكان الذي ستتلقى فيه أي ساتوشيات تم zapped.
1. في متصفح الويب الخاص بك، تستخدم Iris كعميلك وتدفع مقابل Zaps باستخدام محفظة Alby الخاصة بك عبر ملحق chrome الخاص بهم
1. على الهاتف المحمول، تستخدم Damus كعميلك وتدفع مقابل Zaps باستخدام تطبيق Wallet of Satoshi.

<!-- روابط التنقل -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      بروتوكول NOSTR
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- محتوى اختياري في المنتصف -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      استخدام دردشة Flash
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>