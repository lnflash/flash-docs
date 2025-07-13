---
title: 개발자용
description: Flash API, SDK, 통합 도구로 비트코인 애플리케이션을 구축하세요
---

# 개발자를 위한 Flash

Flash의 강력한 API와 SDK로 비트코인과 라이트닝 네트워크 기능을 애플리케이션에 통합하세요.

## 🚀 빠른 시작

### 1. API 키 받기
```bash
curl -X POST https://api.flash.xyz/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "dev@example.com", "password": "secure_password"}'
```

### 2. 첫 번째 결제 생성
```javascript
const payment = await flash.createInvoice({
  amount: 1000, // 사토시
  description: "Coffee payment",
  expiry: 600 // 초
});

console.log(payment.paymentRequest); // 라이트닝 인보이스
```

### 3. 결제 상태 확인
```javascript
const status = await flash.checkPayment(payment.id);
if (status.settled) {
  console.log("Payment received!");
}
```

## 📚 핵심 기능

### 결제 API
- **인보이스 생성**: 라이트닝 인보이스 생성
- **결제 전송**: 프로그래밍 방식으로 결제 전송
- **결제 추적**: 실시간 결제 상태 업데이트
- **환불 처리**: 자동 환불 관리

### 지갑 API
- **잔액 조회**: 현재 지갑 잔액 확인
- **거래 내역**: 상세 거래 로그 액세스
- **주소 생성**: 새로운 수신 주소 생성
- **일괄 전송**: 여러 결제를 한 번에 전송

### Webhook
- **결제 알림**: 결제 수신 시 즉시 알림
- **상태 업데이트**: 거래 상태 변경 추적
- **보안 서명**: 모든 webhook이 암호화 서명됨
- **재시도 로직**: 자동 재시도로 안정적인 전달

## 🛠️ SDK 및 라이브러리

### JavaScript/TypeScript
```bash
npm install @flash/sdk
```

```javascript
import { FlashClient } from '@flash/sdk';

const client = new FlashClient({
  apiKey: 'your_api_key',
  network: 'mainnet' // 또는 'testnet'
});

// 인보이스 생성
const invoice = await client.createInvoice({
  amount: 5000,
  description: 'Product purchase'
});
```

### Python
```bash
pip install flash-sdk
```

```python
from flash import FlashClient

client = FlashClient(
    api_key='your_api_key',
    network='mainnet'
)

# 결제 전송
payment = client.send_payment(
    invoice='lnbc...',
    amount=5000
)
```

### Go
```bash
go get github.com/flash/flash-go
```

```go
import "github.com/flash/flash-go"

client := flash.NewClient("your_api_key")

// 잔액 확인
balance, err := client.GetBalance()
if err != nil {
    log.Fatal(err)
}
```

## 🔧 통합 가이드

### 전자상거래 통합
웹 스토어에 Flash 결제를 통합하는 완전한 예제:

```javascript
// 1. 체크아웃 시 결제 요청 생성
app.post('/checkout', async (req, res) => {
  const invoice = await flash.createInvoice({
    amount: req.body.amount,
    description: `Order #${req.body.orderId}`,
    metadata: {
      orderId: req.body.orderId,
      customerEmail: req.body.email
    }
  });
  
  res.json({
    paymentRequest: invoice.paymentRequest,
    invoiceId: invoice.id
  });
});

// 2. Webhook 핸들러 설정
app.post('/webhook/payment', async (req, res) => {
  const signature = req.headers['x-flash-signature'];
  
  if (!flash.verifyWebhook(req.body, signature)) {
    return res.status(401).send('Invalid signature');
  }
  
  if (req.body.type === 'invoice.settled') {
    // 주문 처리
    await processOrder(req.body.metadata.orderId);
  }
  
  res.sendStatus(200);
});
```

### 모바일 앱 통합
React Native 예제:

```javascript
import { Flash } from '@flash/react-native';

const PaymentScreen = () => {
  const [invoice, setInvoice] = useState(null);
  
  const createPayment = async () => {
    const inv = await Flash.createInvoice({
      amount: 1000,
      description: 'In-app purchase'
    });
    setInvoice(inv);
  };
  
  return (
    <View>
      <Button title="Pay with Bitcoin" onPress={createPayment} />
      {invoice && (
        <QRCode value={invoice.paymentRequest} />
      )}
    </View>
  );
};
```

## 🏗️ 아키텍처

### API 엔드포인트
- **Base URL**: `https://api.flash.xyz/v1`
- **테스트넷**: `https://testnet-api.flash.xyz/v1`
- **WebSocket**: `wss://stream.flash.xyz`

### 인증
모든 API 요청에는 인증이 필요합니다:

```bash
curl https://api.flash.xyz/v1/wallet/balance \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 속도 제한
- **표준**: 분당 100개 요청
- **Pro**: 분당 1000개 요청
- **Enterprise**: 맞춤형 제한

## 📊 고급 기능

### 일괄 처리
여러 작업을 효율적으로 처리:

```javascript
const batch = await flash.batch([
  { type: 'send', to: 'address1', amount: 1000 },
  { type: 'send', to: 'address2', amount: 2000 },
  { type: 'send', to: 'address3', amount: 3000 }
]);

console.log(`Processed ${batch.successful} payments`);
```

### 스트리밍 데이터
실시간 업데이트를 위한 WebSocket 연결:

```javascript
const ws = flash.connect();

ws.on('payment:received', (payment) => {
  console.log(`Received ${payment.amount} sats`);
});

ws.on('invoice:expired', (invoice) => {
  console.log(`Invoice ${invoice.id} expired`);
});
```

### 맞춤형 통합
특별한 요구 사항이 있나요? Flash는 다음을 제공합니다:
- 화이트 라벨 솔루션
- 맞춤형 API 엔드포인트
- 전담 지원
- SLA 보장

## 🧪 테스트

### 테스트넷 환경
```javascript
const testClient = new FlashClient({
  apiKey: 'test_api_key',
  network: 'testnet'
});

// 무료 테스트넷 비트코인 받기
const faucet = await testClient.requestTestCoins(10000);
```

### 모의 객체
테스트를 위한 내장 모의 객체:

```javascript
import { MockFlashClient } from '@flash/sdk/testing';

const mockClient = new MockFlashClient();
mockClient.setBalance(50000);

// 테스트에서 실제 클라이언트처럼 사용
const balance = await mockClient.getBalance();
```

## 📖 API 참조

### 결제 메서드

#### `createInvoice(params)`
라이트닝 인보이스를 생성합니다.

**매개변수:**
- `amount` (number): 사토시 단위 금액
- `description` (string): 결제 설명
- `expiry` (number): 만료 시간(초)
- `metadata` (object): 맞춤 메타데이터

**응답:**
```json
{
  "id": "inv_123456",
  "paymentRequest": "lnbc1000n1...",
  "expiresAt": "2024-01-01T00:00:00Z",
  "amount": 1000
}
```

#### `sendPayment(invoice, options)`
라이트닝 결제를 전송합니다.

**매개변수:**
- `invoice` (string): 라이트닝 인보이스
- `options` (object): 선택적 매개변수

**응답:**
```json
{
  "paymentHash": "abc123...",
  "fee": 10,
  "settledAt": "2024-01-01T00:00:00Z"
}
```

## 🤝 커뮤니티 및 지원

### 개발자 리소스
- [API 문서](https://docs.flash.xyz)
- [GitHub 저장소](https://github.com/flash)
- [개발자 포럼](https://forum.flash.xyz)
- [Discord 커뮤니티](https://discord.gg/flash)

### 지원 받기
- **문서**: 종합적인 가이드 및 튜토리얼
- **이메일**: dev-support@flash.xyz
- **우선 지원**: Enterprise 계정 사용 가능

### 기여하기
Flash는 오픈 소스를 믿습니다:
- SDK에 기여
- 버그 보고
- 기능 제안
- 문서 개선

<div class="dev-cta">
  <h2>구축을 시작할 준비가 되셨나요?</h2>
  <p>지금 무료 개발자 계정을 만들고 Flash로 구축을 시작하세요</p>
  <div class="cta-buttons">
    <a href="https://dashboard.flash.xyz/register" class="btn-primary">개발자 대시보드</a>
    <a href="https://docs.flash.xyz" class="btn-secondary">API 문서</a>
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
  
  pre code {
    background: none;
    color: inherit;
    padding: 0;
  }
  
  .dev-cta {
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .dev-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .dev-cta p {
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
    background-color: #8b5cf6;
    color: white;
  }
  
  .btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn-primary:hover {
    background-color: #7c3aed;
    transform: translateY(-2px);
  }
  
  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  :global(.dark) code {
    background: #374151;
    color: #f3f4f6;
  }
</style>