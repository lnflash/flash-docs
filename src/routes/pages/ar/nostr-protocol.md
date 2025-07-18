---
title: بروتوكول NOSTR
description: كيف يمكّن NOSTR من الاتصالات المقاومة للرقابة في ميزة الدردشة في Flash
---

## ما هو NOSTR؟

NOSTR (ملاحظات وأشياء أخرى تنقلها المرحلات) هو بروتوكول مفتوح يشغل وظيفة الدردشة في Flash. مصمم للاتصال العالمي المقاوم للرقابة، ينشئ NOSTR شبكة اجتماعية لامركزية حيث لا يتحكم أي كيان واحد في بيانات المستخدم أو الاتصالات.

على عكس الشبكات الاجتماعية وتطبيقات المراسلة التقليدية التي تعتمد على خوادم مركزية، يوزع NOSTR الرسائل عبر خوادم مرحل مستقلة متعددة. هذه البنية تجعل من المستحيل تقريبًا على أي شخص إسكات الاتصالات أو التحكم في تدفق المعلومات.

## كيف يشغل NOSTR دردشة Flash

يدمج Flash NOSTR لتوفير نظام دردشة آمن ومقاوم للرقابة يعمل عالميًا:

### ميزات الدردشة الأساسية

- **المراسلة المباشرة**: محادثات خاصة بين المستخدمين
- **الدردشات الجماعية**: التواصل بين عدة مشاركين
- **القنوات العامة**: مساحات نقاش مجتمعية
- **قناة دعم Flash**: قناة دعم رسمية للمستخدمين

### فوائد التكامل

- **التوافق عبر المنصات**: دردش مع الأصدقاء باستخدام عملاء NOSTR آخرين
- **الهوية ذات السيادة الذاتية**: تحكم في هويتك التشفيرية الخاصة
- **لا سلطة مركزية**: لا يمكن لأي شركة الوصول إلى رسائلك أو فرض الرقابة عليها
- **الاستمرارية**: تبقى الرسائل متاحة حتى لو اختفى Flash

## البنية التقنية

يستخدم NOSTR تصميمًا تقنيًا بسيطًا لكنه قوي:

### المكونات الرئيسية

- **تشفير المفتاح العام**: لكل مستخدم زوج مفاتيح عام/خاص
- **الأحداث**: تنسيق بيانات موحد لجميع المحتوى (الرسائل، الملفات الشخصية، إلخ)
- **المرحلات**: خوادم تخزن وتنقل الأحداث بين المستخدمين
- **العملاء**: التطبيقات (مثل Flash) التي تتفاعل مع المرحلات

### كيف يعمل

1. **إنشاء الهوية**: عند إعداد دردشة Flash، تقوم بإنشاء زوج مفاتيح تشفير
2. **تأليف الرسائل**: يتم توقيع رسائلك بمفتاحك الخاص
3. **نشر الرسائل**: يتم نشر الرسائل الموقعة إلى مرحلات متعددة
4. **توزيع الرسائل**: تشارك المرحلات الرسائل مع المستخدمين المتصلين الآخرين
5. **التحقق من التوقيع**: يتحقق المستلمون من توقيعك باستخدام مفتاحك العام

### البنية التحتية للمرحلات

تنتشر الرسائل في NOSTR عبر شبكة من خوادم المرحل:

- **مرحلات متعددة**: يتصل Flash بعدة مرحلات للتكرار
- **اختيار المرحل**: يمكن للمستخدمين اختيار المرحلات التي يثقون بها
- **نشر المرحل**: ينشر Flash الرسائل المهمة إلى مرحلات متعددة
- **تصفية الرسائل**: يمكن للعملاء طلب محتوى محدد من المرحلات

## ميزات NOSTR الرئيسية في Flash

يستفيد Flash من قدرات NOSTR لتوفير عدة ميزات مهمة:

### الخصوصية والأمان

- **التشفير من طرف إلى طرف**: الرسائل الخاصة مشفرة
- **التحقق بالتشفير**: يضمن أصالة الرسائل
- **تحكم المستخدم**: حدد تفضيلات الخصوصية الخاصة بك
- **لا حاجة لرقم هاتف**: استخدمه دون الكشف عن معلومات شخصية

### مقاومة الرقابة

- **لا سلطة مركزية**: لا يمكن لأي كيان واحد إسكات صوتك
- **تنوع المرحل**: مسارات متعددة لتسليم الرسائل
- **قابلية نقل العميل**: الوصول إلى هويتك من تطبيقات مختلفة
- **الاتصال بلا حدود**: يعمل عالميًا دون قيود

### التوافق عبر التطبيقات

- **معيار مفتوح**: يعمل مع أي تطبيق متوافق مع NOSTR
- **قابلية نقل الهوية**: استخدم هوية NOSTR الخاصة بك عبر المنصات
- **مشاركة جهات الاتصال**: تواصل مع الأصدقاء على تطبيقات مختلفة
- **الوصول إلى النظام البيئي**: شارك في شبكة NOSTR الأوسع

## استخدام NOSTR في Flash

يجعل Flash قدرات NOSTR القوية متاحة للجميع:

### البدء

1. **افتح Flash**: قم بتنزيل وتثبيت تطبيق Flash
2. **الوصول إلى علامة تبويب الدردشة**: اضغط على أيقونة الدردشة في شريط التنقل
3. **إنشاء ملف شخصي**: قم بإعداد هوية NOSTR الخاصة بك (أو استيراد المفاتيح الموجودة)
4. **ابدأ المراسلة**: تواصل مع الأصدقاء وانضم إلى القنوات

### العثور على جهات الاتصال

تواصل مع الآخرين على NOSTR من خلال Flash:

1. **مسح رمز QR**: امسح رمز QR للمفتاح العام NOSTR لصديقك
2. **البحث بالمفتاح**: أدخل مفتاح NOSTR العام مباشرة
3. **البحث باسم المستخدم**: ابحث عن الأشخاص باسم مستخدم NOSTR الخاص بهم (إذا كان مسجلًا)
4. **الانضمام إلى القنوات**: اكتشف الأشخاص في مساحات النقاش العامة

### إدارة هويتك

هوية NOSTR الخاصة بك في Flash قابلة للنقل وذات سيادة ذاتية:

- **نسخ احتياطي لمفاتيحك**: احفظ مفتاحك الخاص بأمان
- **استيراد المفاتيح الموجودة**: استخدم هوية NOSTR الموجودة في Flash
- **أجهزة متعددة**: الوصول إلى حسابك من أجهزة مختلفة
- **استعادة الهوية**: استعد ملفك الشخصي باستخدام مفتاحك الخاص

## Zaps: مدفوعات البيتكوين في الدردشة

ميزة قوية لـ NOSTR في Flash هي القدرة على إرسال مدفوعات البيتكوين مباشرة في محادثات الدردشة:

### ما هي Zaps؟

Zaps هي مدفوعات شبكة البرق بالبيتكوين يتم إرسالها داخل NOSTR:

- **المدفوعات الصغيرة**: أرسل كميات صغيرة من البيتكوين مع الرسائل
- **دعم المحتوى**: أعط إكرامية للأصدقاء مقابل المساهمات القيمة
- **تجربة متكاملة**: الدفع والمراسلة في تدفق واحد
- **عبر المنصات**: يعمل بين عملاء NOSTR المختلفين

### إرسال Zaps في Flash

1. افتح محادثة دردشة
2. اضغط على أيقونة البرق
3. أدخل المبلغ المراد إرساله
4. أضف ملاحظة اختيارية
5. أكد الدفع

### استقبال Zaps

عندما يرسل لك شخص ما Zap في Flash:

1. سترى Zap في محادثة الدردشة الخاصة بك
2. يضاف البيتكوين فورًا إلى محفظة Flash الخاصة بك
3. يظهر إشعار إذا كان تطبيقك في الخلفية
4. تظهر المعاملة في سجل المدفوعات الخاص بك

## NOSTR ما بعد الدردشة

بينما يستخدم Flash حاليًا NOSTR بشكل أساسي للدردشة، يمكّن البروتوكول من المزيد:

### قدرات NOSTR الحالية

- **المحتوى قصير الشكل**: منشورات وردود شبيهة بتويتر
- **المحتوى طويل الشكل**: مقالات ونشرات إخبارية بأسلوب المدونة
- **مشاركة الوسائط**: الصور ومقاطع الفيديو والمرفقات الأخرى
- **وظائف السوق**: الشراء والبيع بالبيتكوين

### الإمكانات المستقبلية في Flash

يخطط Flash لتوسيع تكامل NOSTR:

- **اتصالات الأعمال المحسنة**: أدوات متقدمة للتجار
- **اكتشاف المحتوى**: البحث عن المحتوى والمنشئين المركزين على البيتكوين
- **بناء المجتمع**: إنشاء والانضمام إلى مجموعات قائمة على الاهتمامات
- **التحقق من الهوية**: إثبات اختياري للهوية للأعمال

## النظام البيئي لـ NOSTR

دردشة Flash جزء من نظام بيئي متنام من تطبيقات NOSTR:

### عملاء NOSTR الشائعون

- **Damus**: عميل NOSTR يركز على iOS
- **Amethyst**: تجربة NOSTR لنظام Android
- **Snort**: منصة NOSTR على الويب
- **Primal**: عميل ويب ومحمول غني بالميزات

### مشاريع NOSTR الرئيسية

- **تطوير NIP**: مقترحات تحسين NOSTR التي تحدد المعايير
- **برامج المرحل**: تطبيقات مختلفة لخوادم المرحل
- **أدوات المطورين**: مكتبات و SDKs للبناء على NOSTR
- **أدلة المستخدمين**: طرق لاكتشاف الأشخاص على الشبكة

## المواصفات التقنية

للمطورين المهتمين بالتفاصيل التقنية لـ NOSTR:

### أنواع الأحداث

يستخدم NOSTR أنواع أحداث مختلفة لمحتوى مختلف:

- **النوع 1**: ملاحظات نصية قصيرة (منشورات)
- **النوع 4**: رسائل مباشرة مشفرة
- **النوع 3**: قوائم جهات الاتصال
- **النوع 0**: البيانات الوصفية (الملفات الشخصية)
- **النوع 9735**: إيصالات Zap للمدفوعات

### NIPs (مقترحات تحسين NOSTR)

يتطور البروتوكول من خلال NIPs:

- **NIP-01**: مواصفات البروتوكول الأساسية
- **NIP-04**: الرسائل المباشرة المشفرة
- **NIP-05**: ربط المعرفات بالمفاتيح (أسماء المستخدمين)
- **NIP-57**: وظيفة Zap لمدفوعات Lightning

### معرفات NOSTR الموحدة

يدعم Flash معالجة NOSTR القياسية:

- **nostr:npub...**: رابط إلى ملف تعريف المستخدم
- **nostr:note...**: رابط إلى رسالة محددة
- **nostr:nevent...**: رابط إلى أي نوع حدث

## الموارد

- [مواصفات بروتوكول NOSTR](https://github.com/nostr-protocol/nostr)
- [مستودع NOSTR NIPs](https://github.com/nostr-protocol/nips)
- [أسئلة NOSTR الشائعة](https://nostr.com/faq)
- [ابدأ مع NOSTR](https://nostr.how)

من خلال دمج NOSTR، يوفر Flash للمستخدمين قدرات اتصال مقاومة للرقابة ولامركزية مثل البيتكوين نفسه. هذا التوافق بين التقنيات يخلق منصة حيث يتدفق كل من المال والرسائل بحرية، خارج سيطرة أي سلطة مركزية.

<!-- روابط التنقل -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-right">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      شبكة البرق
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- محتوى اختياري في المنتصف -->
  </div>
  <div class="w-1/3 text-left">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      استخدام دردشة Flash
    </a>
  </div>
</div>