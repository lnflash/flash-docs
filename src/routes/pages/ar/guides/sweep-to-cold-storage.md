---
title: النقل إلى التخزين البارد
description: دليل كامل لنقل البيتكوين الخاص بك من محافظ الهاتف المحمول إلى الأمان بالأجهزة
---

يوفر هذا الدليل تعليمات خطوة بخطوة لتأمين البيتكوين الخاص بك في التخزين البارد باستخدام المحافظ الصلبة. اتبع هذه الخطوات التفصيلية لضمان نقل البيتكوين الخاص بك بأمان من محافظ الهاتف المحمول إلى التخزين الآمن طويل المدى.

## جدول المحتويات

- [فهم التخزين البارد](#understanding-cold-storage)
- [التحضير للنقل](#preparing-for-the-transfer)
- [إعداد محفظتك الصلبة](#setting-up-your-hardware-wallet)
- [نقل البيتكوين من محافظ الهاتف المحمول](#transferring-bitcoin-from-mobile-wallets)
  - [من محفظة Flash](#from-flash-wallet)
  - [من محافظ الهاتف المحمول الأخرى](#from-other-mobile-wallets)
- [التحقق من عملية النقل](#verifying-your-transfer)
- [أفضل الممارسات للتخزين البارد](#best-practices-for-cold-storage)
- [إجراءات الاسترداد والنسخ الاحتياطي](#recovery-and-backup-procedures)
- [خيارات التخزين البارد المتقدمة](#advanced-cold-storage-options)

## فهم التخزين البارد

يشير التخزين البارد إلى الاحتفاظ بالمفاتيح الخاصة للبيتكوين في وضع غير متصل بالإنترنت على جهاز مخصص، مما يقلل بشكل كبير من نواقل الهجوم المحتملة مقارنة بمحافظ الهاتف المحمول أو عبر الإنترنت.

### فوائد المحافظ الصلبة

- **الأمان المحسن**: المفاتيح الخاصة لا تغادر الجهاز أبدًا
- **الحماية من البرامج الضارة**: محصنة من فيروسات الكمبيوتر وبرامج تسجيل لوحة المفاتيح
- **التحقق المادي**: تتطلب المعاملات تأكيدًا ماديًا
- **الاسترداد من الكوارث**: خيارات النسخ الاحتياطي والاسترداد المدمجة
- **التخزين طويل المدى**: مصممة لتخزين البيتكوين بشكل آمن على المدى الطويل

### متى تستخدم التخزين البارد

يُنصح بالتخزين البارد عندما:

- تتجاوز حيازاتك من البيتكوين 1000 دولار في القيمة
- تخطط للاحتفاظ بالبيتكوين لأكثر من 6 أشهر
- تريد أقصى حماية ضد الهجمات عن بُعد
- تقوم بإنشاء خطة ادخار طويلة المدى أو وراثة

## التحضير للنقل

قبل بدء عملية النقل، قم بإعداد ما يلي:

1. **جهاز المحفظة الصلبة** (Bitkey أو ColdCard أو Trezor)
2. **قلم وورق** لتسجيل عبارات الاسترداد
3. **موقع آمن** خالٍ من الكاميرات أو المتطفلين
4. **محفظة الهاتف المحمول** مع البيتكوين للنقل
5. **مبلغ صغير للاختبار** (أرسل دائمًا معاملة اختبار أولاً)
6. **وقت بدون تشتيت** (30-60 دقيقة للإعداد)
7. **اتصال إنترنت مستقر** (لجانب محفظة الهاتف المحمول)

## إعداد محفظتك الصلبة

لكل محفظة صلبة عملية إعداد محددة. اختر جهازك أدناه:

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
          <h4 class="font-bold mb-2">حول Bitkey</h4>
          <p>يستخدم Bitkey نموذج أمان متعدد التوقيع "اثنان من ثلاثة" مع مكون تطبيق محمول ومكون جهاز ومكون مفتاح استرداد.</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">إعداد Bitkey الخاص بك</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">الإعداد الأولي للجهاز</h4>
              <div class="step-instructions">
                <p>أخرج جهاز Bitkey من العلبة</p>
                <p>قم بتشغيله بالضغط على الزر الدائري</p>
                <p>اتبع التعليمات على الشاشة لإعداد رقم PIN لجهازك</p>
                <p>تحقق من أن الجهاز يعرض رسالة ختم غير معبوث به</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">تثبيت تطبيق Bitkey المحمول</h4>
              <div class="step-instructions">
                <p>قم بتنزيل تطبيق Bitkey من App Store أو Google Play</p>
                <p>افتح التطبيق واختر "إعداد محفظة جديدة"</p>
                <p>اتبع تعليمات الإقران للاتصال بجهازك</p>
                <p>قم بإنشاء رقم PIN آمن للتطبيق</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">إنشاء مفتاح الاسترداد الخاص بك</h4>
              <div class="step-instructions">
                <p>عند المطالبة، سيرشدك التطبيق خلال إنشاء مفتاح استرداد</p>
                <p>اكتب جميع كلمات الاسترداد 12 أو 24 بالترتيب على بطاقات الاسترداد المقدمة</p>
                <p>تحقق من كل كلمة بعناية - هذه الكلمات هي البيتكوين الخاص بك</p>
                <p>احتفظ ببطاقات الاسترداد في مكان آمن وخاص</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">التحقق من الإعداد الخاص بك</h4>
              <div class="step-instructions">
                <p>أكمل اختبار التحقق من عبارة الاسترداد على كلا الجهازين</p>
                <p>تأكد من أن كلاً من الجهاز والمكونات المحمولة تعرض نفس رصيد المحفظة</p>
                <p>اختبر عملية الموافقة لمعاملة صغيرة</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">إنشاء عنوان استلام باستخدام Bitkey</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">اتصال محفظتك</h4>
              <div class="step-instructions">
                <p>افتح تطبيق Bitkey المحمول على هاتفك الذكي</p>
                <p>تأكد من أنه مقترن بشكل صحيح مع جهازك</p>
                <p>تحقق من أن كلا الجهازين قيد التشغيل ومستجيبان</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">إنشاء عنوان</h4>
              <div class="step-instructions">
                <p>انقر على "استلام" في التطبيق المحمول</p>
                <p>سيقوم التطبيق بإنشاء عنوان بيتكوين جديد</p>
                <p>سيعرض جهازك طلب تحقق</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">التحقق من العنوان</h4>
              <div class="step-instructions">
                <p>مهم: تأكد من تطابق العنوان على كل من الأجهزة المحمولة والصلبة</p>
                <p>خطوة التحقق هذه تحمي من هجمات استبدال العنوان</p>
                <p>لا تستخدم أبدًا عنوانًا لم تتحقق منه على الجهاز</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">تسمية العنوان (اختياري)</h4>
              <div class="step-instructions">
                <p>أضف وصفًا مثل "نقل Flash - مارس 2025"</p>
                <p>هذا يساعد في تتبع مصدر الأموال لاحقًا</p>
                <p>يتم تخزين التسميات محليًا وليس على البلوكشين</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">حول ColdCard</h4>
          <p>ColdCard هي محفظة صلبة للبيتكوين فقط يمكن أن تعمل بشكل منفصل تمامًا عن الإنترنت وتوفر ميزات أمان متقدمة.</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">إعداد ColdCard الخاص بك</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">الإعداد الأولي للجهاز</h4>
              <div class="step-instructions">
                <p>أخرج ColdCard من العلبة</p>
                <p>أدخل بطاقة microSD (اختياري ولكن موصى به)</p>
                <p>قم بتوصيل الجهاز باستخدام كابل USB المرفق</p>
                <p>قم بإنشاء محفظة جديدة عند المطالبة</p>
                <p>قم بإعداد رقم PIN قوي مع بادئة ولاحقة</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">نسخ كلمات الاسترداد احتياطيًا</h4>
              <div class="step-instructions">
                <p>اكتب بعناية جميع كلمات الاسترداد الـ 24 بالترتيب</p>
                <p>تحقق مرتين من كل كلمة مقابل شاشة ColdCard</p>
                <p>فكر في ختم كلمات الاسترداد على المعدن لمقاومة الحريق/الماء</p>
                <p>احفظ النسخة الاحتياطية في مكان آمن</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">إعداد الأمان المتقدم</h4>
              <div class="step-instructions">
                <p>قم بإعداد BrickMe PIN (وظيفة الحذف في حالات الطوارئ)</p>
                <p>قم بتكوين Duress PIN إذا رغبت (يعرض أموالاً محدودة)</p>
                <p>قم بإعداد عبارة مرور لأمان إضافي (اختياري)</p>
                <p>اختبر أرقام PIN الخاصة بك للتأكد من أنها تعمل بشكل صحيح</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">تثبيت البرامج المصاحبة</h4>
              <div class="step-instructions">
                <p>للتفاعل مع سطح المكتب، قم بتثبيت <a href="https://sparrowwallet.com/">Sparrow Wallet</a></p>
                <p>قم بتوصيل ColdCard عبر USB أو استخدم بطاقة microSD للعمل بمعزل عن الإنترنت</p>
                <p>قم بتصدير المفتاح العام للمحفظة إلى Sparrow باستخدام بطاقة microSD</p>
                <p>تحقق من ظهور المحفظة بشكل صحيح في Sparrow</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">إنشاء عنوان استلام باستخدام ColdCard</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">اتصال محفظتك</h4>
              <div class="step-instructions">
                <p>الخيار 1 (USB): قم بتوصيل ColdCard عبر كابل USB بجهاز الكمبيوتر الخاص بك</p>
                <p>الخيار 2 (معزول عن الإنترنت): استخدم بطاقة microSD للعزل الكامل</p>
                <p>افتح Sparrow Wallet على جهاز الكمبيوتر الخاص بك</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">إنشاء عنوان</h4>
              <div class="step-instructions">
                <p>في Sparrow Wallet، حدد علامة التبويب "استلام"</p>
                <p>اختر نوع العنوان (يُنصح بـ Native SegWit)</p>
                <p>ستعرض Sparrow عنوان بيتكوين جديد ورمز QR</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">التحقق من العنوان</h4>
              <div class="step-instructions">
                <p>خطوة أمان حاسمة: تحقق من العنوان على شاشة ColdCard</p>
                <p>في ColdCard، انتقل إلى مستكشف العناوين</p>
                <p>قارن العنوان المعروض في Sparrow مع العنوان على ColdCard</p>
                <p>تابع فقط إذا تطابقت العناوين تمامًا</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">تسمية العنوان (اختياري)</h4>
              <div class="step-instructions">
                <p>في Sparrow، أضف تسمية مثل "نقل Flash - مارس 2025"</p>
                <p>هذا يساعدك على تتبع الإيداعات التي جاءت من أين</p>
                <p>يتم تخزين التسميات في Sparrow، وليس على البلوكشين</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">حول Trezor</h4>
          <p>يقدم Trezor تجربة مستخدم بديهية مع واجهة بسيطة مع الحفاظ على أمان قوي.</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">إعداد Trezor الخاص بك</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">الإعداد الأولي للجهاز</h4>
              <div class="step-instructions">
                <p>أخرج جهاز Trezor من العلبة</p>
                <p>قم بتوصيله بجهاز الكمبيوتر الخاص بك عبر كابل USB</p>
                <p>قم بزيارة <a href="https://trezor.io/start">trezor.io/start</a></p>
                <p>اتبع التعليمات على الشاشة</p>
                <p>قم بإنشاء محفظة جديدة عند المطالبة</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">إنشاء رقم PIN للجهاز</h4>
              <div class="step-instructions">
                <p>قم بإنشاء رقم PIN قوي باتباع التعليمات على الشاشة</p>
                <p>يستخدم إدخال رقم PIN لوحة مفاتيح عشوائية للحماية</p>
                <p>تذكر رقم PIN هذا - فهو يحمي الوصول المادي إلى جهازك</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">نسخ كلمات الاسترداد احتياطيًا</h4>
              <div class="step-instructions">
                <p>اكتب جميع كلمات الاسترداد 12 أو 24 بالترتيب الدقيق</p>
                <p>تحقق من كلمات الاسترداد عند مطالبة معالج الإعداد</p>
                <p>احتفظ بها في مكان آمن وخاص بعيدًا عن التهديدات المحتملة</p>
                <p>فكر في إنشاء نسخة احتياطية معدنية لمقاومة الحريق/الماء</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">إعداد Trezor Suite</h4>
              <div class="step-instructions">
                <p>قم بتثبيت Trezor Suite على جهاز الكمبيوتر الخاص بك</p>
                <p>قم بتوصيل جهازك وفتحه باستخدام رقم PIN</p>
                <p>قم بإنشاء محفظة بيتكوين في Trezor Suite</p>
                <p>اختياريًا أضف عبارة مرور لأمان إضافي</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">إنشاء عنوان استلام باستخدام Trezor</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">اتصال محفظتك</h4>
              <div class="step-instructions">
                <p>قم بتوصيل Trezor بجهاز الكمبيوتر الخاص بك عبر كابل USB</p>
                <p>افتح Trezor Suite على جهاز الكمبيوتر الخاص بك</p>
                <p>افتح جهازك باستخدام رقم PIN</p>
                <p>أدخل عبارة المرور إذا كنت قد أعددت واحدة</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">إنشاء عنوان</h4>
              <div class="step-instructions">
                <p>في Trezor Suite، انقر على علامة التبويب "استلام"</p>
                <p>حدد الحساب الذي تريد الاستلام إليه (إذا كان متعددًا)</p>
                <p>اختر نوع العنوان (يُنصح بـ Native SegWit لرسوم أقل)</p>
                <p>ستقوم Trezor Suite بإنشاء عنوان بيتكوين جديد</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">التحقق من العنوان</h4>
              <div class="step-instructions">
                <p>سيطالبك Trezor بتأكيد العنوان على الجهاز</p>
                <p>قارن العنوان على شاشتك مع العنوان على Trezor</p>
                <p>وافق فقط إذا تطابقا تمامًا</p>
                <p>هذه الخطوة تحمي من البرامج الضارة التي قد تحاول عرض عناوين مزيفة</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">تسمية العنوان (اختياري)</h4>
              <div class="step-instructions">
                <p>أضف تسمية وصفية مثل "نقل Flash - مارس 2025"</p>
                <p>ستحفظ Trezor Suite هذه التسمية مع العنوان</p>
                <p>يسهل تحديد الأموال ومصدرها لاحقًا</p>
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

## نقل البيتكوين من محافظ الهاتف المحمول

الآن أنت جاهز لإرسال البيتكوين من محفظة هاتفك المحمول إلى محفظتك الصلبة:

<div class="documentation-section mt-6">
  <h3 class="font-bold text-xl mb-6">من محفظة Flash</h3>

<div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">افتح تطبيق Flash</h4>
      <div class="step-instructions">
        <p>انتقل إلى علامة التبويب "المحفظة"</p>
        <p>تأكد من أن لديك رصيدًا كافيًا</p>
        <p>تحقق من أن قنوات Lightning الخاصة بك لديها سعة صادرة كافية</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">بدء النقل</h4>
      <div class="step-instructions">
        <p>انقر على "إرسال" أو "سحب"</p>
        <p>حدد "سحب على السلسلة"</p>
        <p>لاحظ أن عمليات السحب على السلسلة لها رسوم أعلى من Lightning</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">أدخل التفاصيل</h4>
      <div class="step-instructions">
        <p>الصق عنوان استلام محفظتك الصلبة</p>
        <p>تحقق مرتين من صحة العنوان (الأحرف الأولى والأخيرة)</p>
        <p>ابدأ بمبلغ اختبار صغير (مثل 0.0001 BTC أو 10,000 ساتوشي)</p>
        <p>أدخل مبلغًا مرتفعًا بما يكفي لتغطية رسوم الشبكة</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">المراجعة والتأكيد</h4>
      <div class="step-instructions">
        <p>تحقق من رسوم السحب (الرسوم الأعلى تؤكد بشكل أسرع)</p>
        <p>أعط الأولوية للأمان على توفير الرسوم لنقل التخزين البارد</p>
        <p>تحقق من صحة جميع التفاصيل مرة أخيرة</p>
        <p>انقر على "تأكيد" لبدء النقل</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4 class="step-title">التحقق الأولي من الاختبار</h4>
      <div class="step-instructions">
        <p>انتظر تأكيد معاملة الاختبار (10-60 دقيقة)</p>
        <p>اعرض حالة المعاملة في تطبيق Flash</p>
        <p>تحقق من الاستلام على محفظتك الصلبة</p>
        <p>بمجرد التأكيد، تابع نقل المبالغ الأكبر</p>
      </div>
    </div>
  </div>
</div>

<div class="documentation-section mt-12">
  <h3 class="font-bold text-xl mb-6">من محافظ الهاتف المحمول الأخرى</h3>

<div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">افتح محفظة هاتفك المحمول</h4>
      <div class="step-instructions">
        <p>اوصل إلى المحفظة التي تحتوي على البيتكوين الخاص بك</p>
        <p>انتقل إلى وظيفة الإرسال/النقل</p>
        <p>تأكد من تحديث محفظتك إلى أحدث إصدار</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">أدخل عنوان المحفظة الصلبة</h4>
      <div class="step-instructions">
        <p>الصق عنوان محفظتك الصلبة المتحقق منه</p>
        <p>تحقق مرتين من العنوان بالكامل إن أمكن</p>
        <p>للنقل الكبير، تحقق من العنوان من خلال قنوات متعددة</p>
        <p>لا تكتب العناوين يدويًا أبدًا - دائمًا انسخ والصق</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">تعيين رسوم المعاملة</h4>
      <div class="step-instructions">
        <p>اختر رسمًا مناسبًا بناءً على مدى الاستعجال</p>
        <p>للتخزين البارد، عادة ما تكون الأولوية المتوسطة كافية</p>
        <p>تحقق من <a href="https://mempool.space">mempool.space</a> للحصول على توصيات الرسوم الحالية</p>
        <p>فكر في المفاضلة بين وقت التأكيد والتكلفة</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">إرسال معاملة الاختبار</h4>
      <div class="step-instructions">
        <p>ابدأ بمبلغ أدنى (0.0001 BTC أو ما يعادله)</p>
        <p>راجع جميع التفاصيل قبل التأكيد</p>
        <p>أكد المعاملة في محفظتك</p>
        <p>سجل معرف المعاملة/الهاش للرجوع إليه</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4 class="step-title">أكمل النقل</h4>
      <div class="step-instructions">
        <p>بعد تأكيد استلام معاملة الاختبار</p>
        <p>أرسل المبلغ المتبقي في معاملة واحدة أو عدة معاملات</p>
        <p>فكر في الآثار على الخصوصية لأنماط المعاملات</p>
        <p>احتفظ بمعرفات المعاملات للرجوع إليها في المستقبل</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 my-8">
  <h4 class="font-medium text-yellow-800 dark:text-yellow-200">تذكير أمني</h4>
  <p class="text-yellow-700 dark:text-yellow-300 mt-2">
    تحقق دائمًا من عنوان الاستلام على شاشة محفظتك الصلبة الآمنة قبل إرسال أي أموال.
    يمكن لجهاز كمبيوتر مخترق أن يعرض عنوانًا مختلفًا عن العنوان الذي تنوي استخدامه.
  </p>
</div>

## التحقق من عملية النقل

بعد الإرسال، تحقق من نجاح النقل:

1. **تحقق من حالة المعاملة**
   - استخدم مستكشف الكتل مثل [mempool.space](https://mempool.space)
   - أدخل معرف المعاملة أو عنوان المحفظة
   - راقب التأكيدات (6+ تعتبر آمنة للغاية)

2. **تحقق على المحفظة الصلبة**
   - Bitkey: تحقق من الرصيد في كل من التطبيق المحمول والجهاز
   - ColdCard: تحقق من الرصيد في Sparrow Wallet أو عبر تصدير microSD
   - Trezor: تحقق من الرصيد في Trezor Suite

3. **وثّق النقل**
   - سجل معرف المعاملة
   - لاحظ التاريخ والمبلغ وعنوان الإرسال
   - احتفظ بهذه المعلومات بشكل آمن للرجوع إليها في المستقبل

## أفضل الممارسات للتخزين البارد

زد من أمانك مع أفضل الممارسات هذه:

1. **محافظ صلبة متعددة**
   - فكر في استخدام علامات تجارية مختلفة للتنويع
   - محافظ منفصلة لأغراض مختلفة (الإنفاق مقابل الطويل الأجل)

2. **التحقق المنتظم**
   - تحقق من وظائف الجهاز كل 6-12 شهرًا
   - قم بتحديث البرامج الثابتة عند إصدار تحديثات الأمان
   - قم بإجراء استرداد اختباري سنويًا

3. **بيئة تخزين آمنة**
   - احتفظ بالمحافظ الصلبة في أماكن باردة وجافة
   - احمِها من التداخل الكهرومغناطيسي
   - فكر في حاوية مقاومة للحريق والماء

4. **الأمان المادي**
   - لا تناقش ملكية المحفظة الصلبة علنًا
   - فكر في خزنة منزلية أو صندوق ودائع آمن بالبنك
   - امتلك محفظة "طعم" بأموال صغيرة إذا كنت قلقًا من التهديدات المادية

5. **تجنب الأخطاء الشائعة**
   - لا تدخل أبدًا عبارات الاسترداد على جهاز كمبيوتر أو هاتف
   - لا تخزن عبارات الاسترداد في الخدمات السحابية أو التنسيقات الرقمية
   - لا تشارك صور عبارات الاسترداد أو المحافظ الصلبة
   - احذر من محاولات التصيد الاحتيالي التي تستهدف مستخدمي المحافظ الصلبة

## إجراءات الاسترداد والنسخ الاحتياطي

استعد لحالات الطوارئ بإجراءات النسخ الاحتياطي المناسبة:

1. **حماية عبارة الاسترداد**
   - احتفظ بعبارات الاسترداد منفصلة عن الأجهزة الصلبة
   - فكر في حلول النسخ الاحتياطي المعدنية (Cryptosteel، BlockPlate، إلخ)
   - قسّم النسخ الاحتياطية عبر مواقع آمنة متعددة

2. **اختبار إجراء الاسترداد**
   - مارس الاسترداد بدون أموال فعلية
   - افهم العملية قبل حالة الطوارئ
   - وثّق الخطوات للورثة أو الأفراد الموثوق بهم

3. **تخطيط الوراثة**
   - أنشئ تعليمات واضحة للورثة
   - فكر في إعدادات متعددة التوقيع للوراثة
   - أنشئ أطرًا قانونية مناسبة لولايتك القضائية

## خيارات التخزين البارد المتقدمة

للمستخدمين الذين يسعون للحصول على أقصى قدر من الأمان:

1. **إعدادات متعددة التوقيع**
   - تتطلب أجهزة متعددة للموافقة على المعاملات
   - توزع المخاطر عبر نماذج أمان مختلفة
   - الخيارات الشائعة: [Sparrow Wallet](https://sparrowwallet.com/) multisig،
     [Caravan](https://unchained.com/caravan/)

2. **العمليات المعزولة عن الإنترنت**
   - احتفظ بجهاز التوقيع غير متصل بالإنترنت تمامًا
   - انقل بيانات المعاملات عبر microSD أو رموز QR
   - ColdCard وبعض طرازات Trezor تدعم سير العمل هذا

3. **التوزيع الجغرافي**
   - احتفظ بمكونات النسخ الاحتياطي في مواقع فعلية مختلفة
   - فكر في التنويع القضائي للحيازات الكبيرة
   - وازن بين الأمان وإمكانية الوصول العملية

---

<div class="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg my-8">
  <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">تحتاج إلى مساعدة؟</h3>
  <p class="text-purple-700 dark:text-purple-300">
    إذا واجهت أي مشاكل أثناء عملية النقل، تواصل مع دعم Flash من خلال التطبيق أو قم بزيارة منتديات مجتمعنا للحصول على المساعدة.
  </p>
</div>