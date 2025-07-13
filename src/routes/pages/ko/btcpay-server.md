---
title: BTCPay Server
description: 자체 호스팅 비트코인 결제 처리를 위한 오픈 소스 솔루션인 BTCPay Server와의 통합
---

# BTCPay Server

BTCPay Server는 누구나 비트코인과 라이트닝 결제를 수락할 수 있게 해주는 자체 호스팅, 오픈 소스 암호화폐 결제 프로세서입니다. Flash는 BTCPay Server와 통합하여 비즈니스에 강력한 결제 인프라를 제공합니다.

## 🏪 BTCPay Server란?

BTCPay Server는 검열 저항적이고 P2P 비트코인 결제 프로세서로, 중개자 없이 직접 지갑으로 결제를 받을 수 있습니다. BitPay의 오픈 소스 대안으로 만들어졌으며, 사용자에게 완전한 제어권을 제공합니다.

### 핵심 원칙
- **수수료 없음**: 거래 수수료나 구독료 없음
- **중개자 없음**: 제3자 없이 직접 결제 수령
- **비수탁형**: 항상 자금을 완전히 제어
- **개인정보 보호 중심**: 최소한의 데이터 수집

## 🔧 기능

### 결제 처리
BTCPay Server는 다양한 결제 옵션을 지원합니다:

```javascript
// BTCPay 인보이스 생성
const invoice = await btcpay.createInvoice({
  price: 50.00,
  currency: 'USD',
  orderId: 'order-123',
  buyer: {
    email: 'customer@example.com'
  },
  notificationURL: 'https://yourstore.com/webhook',
  redirectURL: 'https://yourstore.com/success'
});

// 결제 URL 표시
console.log(`Pay at: ${invoice.url}`);
```

### 지원 통화
- **비트코인 (BTC)**: 온체인 결제
- **라이트닝 네트워크**: 즉시 결제
- **법정화폐 표시**: USD, EUR, KRW 등
- **알트코인**: 선택적 지원

## 💡 Flash 통합

### 가맹점 대시보드
Flash는 BTCPay Server의 기능을 향상시킵니다:

```typescript
interface FlashBTCPayIntegration {
  // 간소화된 설정
  quickSetup(): Promise<Store>;
  
  // 향상된 분석
  getAnalytics(): Promise<Analytics>;
  
  // 자동 라이트닝 관리
  manageLightning(): Promise<void>;
  
  // Flash 지갑 통합
  linkFlashWallet(): Promise<void>;
}
```

### 통합 워크플로우
```
가맹점이 Flash POS 설정
         ↓
BTCPay Server 인스턴스 생성
         ↓
Flash가 라이트닝 노드 구성
         ↓
결제 수락 준비 완료
```

## 🛒 전자상거래 통합

### WooCommerce
```php
// Flash-BTCPay WooCommerce 플러그인
add_action('woocommerce_payment_gateways', function($gateways) {
    $gateways[] = 'WC_Gateway_Flash_BTCPay';
    return $gateways;
});

// 결제 처리
public function process_payment($order_id) {
    $order = wc_get_order($order_id);
    
    $invoice = $this->flash_btcpay->createInvoice([
        'price' => $order->get_total(),
        'currency' => get_woocommerce_currency(),
        'orderId' => $order_id
    ]);
    
    return [
        'result' => 'success',
        'redirect' => $invoice->url
    ];
}
```

### Shopify
- **앱 통합**: Flash BTCPay Shopify 앱
- **자동 설정**: 원클릭 구성
- **재고 관리**: 실시간 업데이트
- **주문 처리**: 자동화된 이행

## 🎯 사용 사례

### 온라인 상점
BTCPay Server가 전자상거래에 적합한 이유:

1. **전환율 절약**: 신용카드 수수료 없음
2. **글로벌 판매**: 국경 제한 없음
3. **즉시 정산**: 대기 기간 없음
4. **사기 방지**: 지불 거절 없음

### 실제 매장
```javascript
// POS 통합 예시
class FlashPOSWithBTCPay {
  async createInvoice(amount, items) {
    const invoice = await this.btcpay.createInvoice({
      price: amount,
      currency: 'USD',
      itemDesc: items.map(i => i.name).join(', '),
      physical: true,
      posData: {
        terminal: this.terminalId,
        cashier: this.cashierId
      }
    });
    
    // QR 코드 표시
    this.displayQR(invoice.cryptoInfo[0].paymentUrls.BIP21);
    
    // 결제 모니터링
    this.monitorPayment(invoice.id);
  }
}
```

### 기부 및 크라우드펀딩
- **투명한 기부**: 공개 주소
- **즉시 액세스**: 자금 즉시 사용 가능
- **낮은 수수료**: 더 많은 기부금이 목적지에 도달
- **글로벌 도달**: 전 세계에서 기부 수락

## 🔐 보안 기능

### 자체 호스팅 이점
- **완전한 제어**: 서버와 데이터 소유
- **개인정보 보호**: 제3자와 데이터 공유 없음
- **검열 저항**: 아무도 결제를 차단할 수 없음
- **맞춤화**: 필요에 맞게 수정

### 보안 모범 사례
```yaml
# BTCPay 보안 구성
Security:
  SSL: 
    enabled: true
    certificate: letsencrypt
  
  Authentication:
    twoFactor: required
    passwordPolicy: strong
  
  API:
    rateLimit: 100/hour
    ipWhitelist: 
      - 192.168.1.0/24
  
  Backup:
    frequency: daily
    encryption: true
```

## 📊 고급 기능

### 1. 결제 버튼
웹사이트용 임베드 가능한 결제 버튼:

```html
<!-- BTCPay 결제 버튼 -->
<form method="POST" action="https://btcpay.flash.app/api/v1/invoices">
  <input type="hidden" name="storeId" value="your-store-id" />
  <input type="hidden" name="price" value="10" />
  <input type="hidden" name="currency" value="USD" />
  <button type="submit">비트코인으로 결제</button>
</form>
```

### 2. 회계 통합
```javascript
// 자동 회계 내보내기
const accounting = await btcpay.exportAccountingData({
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  format: 'quickbooks',
  includeRefunds: true
});

// Flash 분석과 통합
const combined = flash.analytics.combine(accounting);
```

### 3. 멀티시그 지갑
향상된 보안을 위한 설정:
- **2-of-3 멀티시그**: 비즈니스 계정
- **시간 잠금**: 예약된 릴리스
- **콜드 스토리지**: 자동 스위프

## 🌍 배포 옵션

### 클라우드 호스팅
Flash는 관리형 BTCPay 인스턴스를 제공합니다:

```javascript
// Flash 클라우드 BTCPay
const btcpay = await flash.cloud.deployBTCPay({
  region: 'us-east',
  tier: 'business',
  features: ['lightning', 'accounting', 'multi-store']
});

console.log(`Your BTCPay instance: ${btcpay.url}`);
```

### 자체 호스팅
자체 인프라에 배포:

```bash
# Docker 배포
git clone https://github.com/btcpayserver/btcpayserver-docker
cd btcpayserver-docker
./btcpay-setup.sh -i
```

### 하이브리드 접근
- **BTCPay**: 결제 처리
- **Flash**: 라이트닝 관리
- **통합**: 원활한 경험

## 📈 분석 및 보고

### 대시보드 메트릭
```typescript
interface BTCPayAnalytics {
  sales: {
    total: number;
    count: number;
    average: number;
  };
  
  products: {
    topSelling: Product[];
    revenue: Map<string, number>;
  };
  
  customers: {
    new: number;
    returning: number;
    geographic: Map<string, number>;
  };
  
  performance: {
    conversionRate: number;
    abandonedCarts: number;
    processingTime: number;
  };
}
```

### 사용자 정의 보고서
- 매출 추세
- 고객 행동
- 제품 성과
- 결제 방법 분석

## 🚀 향후 개발

### 로드맵
BTCPay Server와 Flash의 계획된 기능:

1. **향상된 라이트닝**: 더 나은 채널 관리
2. **DeFi 통합**: 수익률 창출 옵션
3. **NFT 지원**: 디지털 수집품 판매
4. **구독 관리**: 반복 결제

### 커뮤니티 기여
```bash
# BTCPay 개발에 기여
git clone https://github.com/btcpayserver/btcpayserver
cd btcpayserver
dotnet build
dotnet test
```

## 🎓 시작하기

### 빠른 설정 가이드
1. **Flash 비즈니스 계정 생성**
2. **BTCPay Server 활성화**
3. **스토어 구성**
4. **결제 방법 설정**
5. **지갑 연결**
6. **결제 수락 시작!**

### 지원 리소스
- [BTCPay 문서](https://docs.btcpayserver.org)
- [Flash 통합 가이드](/ko/guides/btcpay)
- [비디오 튜토리얼](https://youtube.com/flashbtcpay)
- [커뮤니티 포럼](https://chat.btcpayserver.org)

<div class="btcpay-cta">
  <h2>BTCPay Server로 결제 혁신</h2>
  <p>수수료 없이 비트코인 결제를 완전히 제어하세요</p>
  <div class="cta-buttons">
    <a href="/ko/business" class="btn-primary">비즈니스 시작</a>
    <a href="https://btcpayserver.org" class="btn-secondary">BTCPay 자세히 알아보기</a>
  </div>
</div>

<style>
  pre {
    background: var(--code-bg, #1f2937);
    color: var(--code-color, #e5e7eb);
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
  }
  
  code {
    background: var(--inline-code-bg, #f3f4f6);
    color: var(--inline-code-color, #1f2937);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
  }
  
  .btcpay-cta {
    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .btcpay-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .btcpay-cta p {
    margin: 0 0 2rem 0;
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn-primary, .btn-secondary {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
  }
  
  .btn-primary {
    background-color: white;
    color: #22c55e;
  }
  
  .btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  :global(.dark) code {
    background: #374151;
    color: #f3f4f6;
  }
</style>