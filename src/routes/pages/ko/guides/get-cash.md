---
title: 충전하기
description: Flash 지갑에 비트코인을 추가하는 다양한 방법에 대한 단계별 가이드
---

# Flash 지갑에 충전하기

Flash 지갑에 자금을 추가하는 것은 빠르고 쉽습니다. 은행 이체부터 현금 입금까지 다양한 옵션을 제공합니다.

## 🏦 은행 이체

### 단계별 프로세스
1. **충전 탭 열기**
   - Flash 앱 열기
   - 하단의 "충전" 탭 탭하기
   - "은행 이체" 선택

2. **금액 입력**
   ```
   충전 금액: $100
   받을 예정: ~250,000 sats
   수수료: $1.50 (1.5%)
   ```

3. **은행 연결**
   - 은행 선택
   - 로그인 자격 증명 입력
   - 계좌 확인

4. **이체 확인**
   - 세부 정보 검토
   - 이체 확인
   - 1-3 영업일 대기

### 지원 은행
- 주요 국내 은행
- 신용 조합
- 온라인 은행
- 국제 은행 (선택 국가)

## 💳 카드 구매

### 즉시 구매
신용카드나 직불카드로 즉시 비트코인 구매:

```javascript
// 카드 구매 예시
const purchase = {
  amount: 50,           // USD
  paymentMethod: 'card',
  card: {
    type: 'visa',
    last4: '1234'
  },
  fees: {
    processing: 2.50,   // 5%
    network: 0.50       // 1%
  },
  total: 53.00,
  receiveSats: 125000
};
```

### 카드 보안
- 3D Secure 인증
- CVV 확인
- 사기 방지
- 즉시 확인

## 🏪 현금 입금

### 현금 입금 위치 찾기
1. 지도 탭 열기
2. "현금 입금" 필터
3. 가까운 위치 선택
4. 길 안내 받기

### 입금 과정
```
1. 위치 방문
2. 계산원에게 Flash 입금 요청
3. QR 코드 또는 전화번호 제공
4. 현금 지불
5. 즉시 확인 받기
```

### 파트너 네트워크
- 편의점
- 식료품점
- 환전소
- Flash 파트너 가맹점

## ⚡ 라이트닝 네트워크

### 라이트닝 인보이스 받기
다른 라이트닝 지갑에서 즉시 수신:

1. **인보이스 생성**
   ```
   금액: 100,000 sats
   설명: "지갑 충전"
   만료: 24시간
   ```

2. **공유 옵션**
   - QR 코드 표시
   - 인보이스 복사
   - 공유 버튼
   - NFC 탭

3. **즉시 수신**
   - 1초 미만 확인
   - 수수료 없음
   - 24시간 가용성

## 🔗 온체인 비트코인

### 비트코인 주소 생성
더 큰 금액이나 다른 지갑에서:

```typescript
// 주소 유형
interface AddressTypes {
  native_segwit: {
    format: "bc1q...",
    fees: "가장 낮음",
    compatibility: "현대적"
  },
  
  nested_segwit: {
    format: "3...",
    fees: "낮음",
    compatibility: "좋음"
  },
  
  taproot: {
    format: "bc1p...",
    fees: "가장 낮음",
    privacy: "향상됨"
  }
}
```

### 확인 대기
- 첫 확인: ~10분
- 권장: 3-6 확인
- 큰 금액: 6+ 확인

## 💱 암호화폐 교환

### 지원 암호화폐
다른 암호화폐를 비트코인으로 전환:

| 암호화폐 | 기호 | 수수료 | 시간 |
|----------|------|--------|------|
| Ethereum | ETH | 1.5% | 5-30분 |
| USDT | USDT | 1% | 5-15분 |
| USDC | USDC | 1% | 5-15분 |
| Litecoin | LTC | 1.5% | 15-30분 |

### 스왑 프로세스
```javascript
// 스왑 플로우
async function swapCrypto() {
  // 1. 통화 선택
  const swap = await flash.createSwap({
    from: 'ETH',
    to: 'BTC',
    amount: 0.1
  });
  
  // 2. 입금 주소로 전송
  console.log(`Send ${swap.fromAmount} ${swap.from} to:`);
  console.log(swap.depositAddress);
  
  // 3. 확인 대기
  await swap.waitForConfirmation();
  
  // 4. 비트코인 수신
  console.log(`Received ${swap.toAmount} BTC!`);
}
```

## 🎁 Flash 리워드

### 리워드 적립 방법
비트코인을 무료로 적립:

1. **Flashcard 사용**
   - 모든 구매 시 2% 캐시백
   - 파트너 가맹점에서 최대 10%

2. **추천 프로그램**
   ```
   추천 보너스:
   - 당신: 10,000 sats
   - 친구: 10,000 sats
   - 요구사항: 첫 거래 완료
   ```

3. **일일 리워드**
   - 로그인 보너스
   - 연속 기록 리워드
   - 특별 프로모션

## 🌍 국제 옵션

### 국가별 방법
위치에 따른 옵션:

```yaml
미국:
  - ACH 이체
  - 전신 송금
  - 직불/신용 카드
  - 현금 (CVS, 7-Eleven)

유럽:
  - SEPA 이체
  - 신용/직불 카드
  - 현금 (파트너 위치)
  - IBAN 이체

아시아:
  - 현지 은행 이체
  - QR 결제 통합
  - 편의점 현금
  - 모바일 머니

라틴 아메리카:
  - 현지 은행
  - 현금 네트워크
  - SPEI (멕시코)
  - PIX (브라질)
```

## 💰 수수료 및 한도

### 수수료 구조
```javascript
const feeStructure = {
  bankTransfer: {
    fee: "1-2%",
    min: "$0.50",
    max: "$10"
  },
  
  cardPurchase: {
    fee: "3-5%",
    min: "$1",
    max: "$25"
  },
  
  cashDeposit: {
    fee: "1-3%",
    min: "$1",
    max: "$5"
  },
  
  lightning: {
    fee: "0%",
    min: "1 sat",
    max: "채널 용량"
  },
  
  onchain: {
    fee: "네트워크 수수료",
    min: "546 sats",
    max: "무제한"
  }
};
```

### 거래 한도
```typescript
interface Limits {
  unverified: {
    daily: 1000,      // USD
    monthly: 5000,
    perTransaction: 500
  },
  
  verified: {
    daily: 10000,
    monthly: 50000,
    perTransaction: 5000
  },
  
  enhanced: {
    daily: 50000,
    monthly: 250000,
    perTransaction: 25000
  }
}
```

## 🛡️ 보안 팁

### 충전 시 안전 유지
1. **주소 확인**: 항상 입금 주소를 다시 확인
2. **보안 네트워크**: 공용 WiFi 피하기
3. **피싱 방지**: 공식 Flash 앱만 사용
4. **거래 확인**: 모든 세부 정보 검토

### 사기 방지
```javascript
// 🚨 경고 신호
const scamWarnings = [
  "보장된 수익 약속",
  "긴급함 압박",
  "개인 키 요청",
  "Flash를 가장한 가짜 웹사이트",
  "소셜 미디어 '경품'"
];

// ✅ 항상 확인
const alwaysVerify = [
  "공식 Flash 도메인",
  "SSL 인증서",
  "앱 서명",
  "지원팀 신원"
];
```

## 🎯 프로 팁

### 수수료 최소화
1. **대량 충전**: 더 큰 금액 = 낮은 수수료 비율
2. **라이트닝 사용**: 제로 수수료 전송
3. **은행 이체**: 카드보다 저렴
4. **타이밍**: 네트워크가 덜 혼잡할 때

### 충전 최적화
```javascript
// 최적 충전 전략
const topUpStrategy = {
  regular: {
    method: "은행 이체",
    amount: "$500",
    frequency: "월간",
    savings: "$180/년"
  },
  
  instant: {
    method: "라이트닝",
    amount: "필요 시",
    fee: "0%",
    time: "1초"
  },
  
  rewards: {
    method: "Flashcard",
    passive: true,
    earning: "2-10%",
    compound: true
  }
};
```

## 🆘 문제 해결

### 일반적인 문제
| 문제 | 해결책 |
|------|--------|
| 거래 보류 중 | 확인 상태 확인, 지원팀 문의 |
| 카드 거부됨 | 은행에 확인, 다른 카드 시도 |
| 한도 도달 | 계정 확인 또는 24시간 대기 |
| 잘못된 주소 | 항상 복사/붙여넣기 사용 |

### 지원 받기
- 앱 내 채팅: 24시간 이용 가능
- 이메일: support@flash.app
- FAQ: 일반적인 질문
- 커뮤니티: Discord/Telegram

<div class="next-steps">
  <h2>충전 완료!</h2>
  <p>이제 Flash로 결제를 시작할 준비가 되었습니다</p>
  <a href="/ko/guides/flashcard" class="btn-primary">Flashcard 설정하기</a>
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color, #e5e7eb);
  }
  
  th {
    font-weight: 600;
    background: var(--bg-secondary, #f9fafb);
  }
  
  .next-steps {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .next-steps h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .next-steps p {
    margin: 0 0 1.5rem 0;
  }
  
  .btn-primary {
    display: inline-block;
    background-color: white;
    color: #3b82f6;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  :global(.dark) th {
    background: #1f2937;
  }
  
  :global(.dark) th,
  :global(.dark) td {
    border-color: #374151;
  }
</style>