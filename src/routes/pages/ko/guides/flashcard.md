---
title: Flashcard 가이드
description: Flashcard를 설정하고 모든 구매 시 비트코인 리워드를 적립하는 방법
---

## Flashcard 시작하기

Flashcard는 일상적인 구매를 비트코인 적립 기회로 바꿔줍니다. 기존 카드를 연결하고 평소처럼 사용하기만 하면 자동으로 비트코인 리워드를 받을 수 있습니다.

## 💳 Flashcard란?

Flashcard는 물리적 카드가 아닌 리워드 프로그램입니다:

```javascript
const flashcard = {
  type: "리워드 프로그램",
  works_with: "기존 직불/신용 카드",
  rewards: {
    standard: "2% 비트코인 캐시백",
    partners: "최대 10% 캐시백",
    promotions: "특별 보너스"
  },
  payment: {
    instant: true,
    currency: "사토시",
    minimum: "없음"
  }
};
```

## 🚀 설정하기

### 1단계: Flashcard 활성화
1. Flash 앱 열기
2. "적립" 탭으로 이동
3. "Flashcard" 선택
4. "시작하기" 탭

### 2단계: 카드 연결
```typescript
interface CardLinking {
  supported: {
    credit: ["Visa", "Mastercard", "Amex"],
    debit: ["Visa", "Mastercard"],
    prepaid: "일부 지원"
  },
  
  security: {
    encryption: "은행 수준",
    storage: "토큰화",
    pci: "준수"
  },
  
  process: {
    time: "2-3분",
    verification: "즉시",
    activation: "자동"
  }
}
```

### 3단계: 보안 확인
1. **카드 확인**
   - 작은 금액 청구/환불
   - SMS/이메일 코드
   - 은행 앱 확인

2. **개인정보 보호 설정**
   ```javascript
   const privacySettings = {
     transactionAlerts: true,
     merchantNames: "숨김",
     spendingInsights: false,
     dataSharing: "최소"
   };
   ```

## 💰 리워드 구조

### 기본 캐시백
```typescript
const rewardTiers = {
  standard: {
    rate: "2%",
    categories: "모든 구매",
    cap: "없음",
    payout: "즉시"
  },
  
  boosted: {
    groceries: "3%",
    dining: "4%",
    travel: "5%",
    online: "3%"
  },
  
  special: {
    newUser: "첫 30일 동안 2배",
    referral: "3개월 동안 +1%",
    milestone: "보너스 리워드"
  }
};
```

### 파트너 가맹점
| 카테고리 | 가맹점 예시 | 캐시백 |
|----------|------------|---------|
| 커피숍 | Starbucks, 지역 카페 | 5% |
| 식료품 | Whole Foods, Target | 4% |
| 온라인 | Amazon, Newegg | 6% |
| 여행 | Airlines, Hotels | 8% |
| 엔터테인먼트 | Netflix, Spotify | 10% |

## 📊 리워드 추적

### 대시보드 개요
```javascript
// 리워드 대시보드
const rewardsDashboard = {
  today: {
    transactions: 5,
    earned: 2500, // sats
    pending: 0
  },
  
  thisMonth: {
    transactions: 143,
    earned: 75000,
    avgPerTx: 524,
    topCategory: "식료품"
  },
  
  lifetime: {
    totalEarned: 850000,
    usdValue: "$340",
    joined: "2024-01-15",
    level: "골드"
  }
};
```

### 거래 세부 정보
각 구매에 대해 다음을 확인할 수 있습니다:
- 가맹점 이름 (선택적)
- 구매 금액
- 적립된 사토시
- 리워드 비율
- 타임스탬프

## 🎯 리워드 극대화

### 전략적 사용
```typescript
const maximizeRewards = {
  usePartners: {
    strategy: "가능하면 파트너 가맹점 이용",
    potential: "3-5배 리워드",
    example: "스타벅스 대신 파트너 카페"
  },
  
  stackPromotions: {
    strategy: "특별 프로모션 결합",
    potential: "최대 15% 캐시백",
    example: "휴일 + 카테고리 보너스"
  },
  
  timingPurchases: {
    strategy: "보너스 기간 동안 큰 구매",
    potential: "수백 달러 추가",
    example: "2배 리워드 주간"
  }
};
```

### 리워드 캘린더
```javascript
// 월간 프로모션 예시
const monthlyPromotions = {
  week1: {
    category: "식료품",
    bonus: "+2%",
    total: "5%"
  },
  week2: {
    category: "레스토랑",
    bonus: "+3%",
    total: "7%"
  },
  week3: {
    merchant: "Amazon",
    bonus: "2배",
    total: "12%"
  },
  week4: {
    all: "모든 구매",
    bonus: "+1%",
    total: "3%"
  }
};
```

## 🔧 고급 기능

### 자동 전환
```javascript
const autoConvert = {
  enabled: true,
  rules: [
    {
      trigger: "잔액 > 10000 sats",
      action: "라이트닝으로 이동",
      frequency: "일일"
    },
    {
      trigger: "잔액 > 100000 sats",
      action: "콜드 스토리지로 스윕",
      frequency: "주간"
    }
  ]
};
```

### 지출 통찰력
```typescript
interface SpendingInsights {
  categories: {
    food: { percent: 35, trend: "증가" },
    transport: { percent: 20, trend: "안정" },
    shopping: { percent: 25, trend: "감소" },
    bills: { percent: 20, trend: "안정" }
  },
  
  recommendations: [
    "파트너 식료품점에서 월 $50 더 절약 가능",
    "온라인 쇼핑을 Flash 파트너로 전환하여 3% 추가",
    "다음 보너스 기간: 3일 후"
  ],
  
  projections: {
    monthlyAverage: 100000, // sats
    yearlyTotal: 1200000,
    at10xPrice: "$4,800"
  }
}
```

## 🛡️ 보안 및 개인정보

### 데이터 보호
```yaml
Flashcard 보안:
  카드 정보:
    - 토큰화 저장
    - PCI-DSS 준수
    - 실제 번호 저장 안 함
    
  거래 데이터:
    - 암호화 전송
    - 익명화 옵션
    - 판매 안 함
    
  접근 제어:
    - 생체 인증 필요
    - 거래별 알림
    - 즉시 정지 가능
```

### 사기 방지
Flash는 카드를 보호합니다:
- 실시간 사기 모니터링
- 비정상 지출 알림
- 즉시 카드 잠금/잠금 해제
- 제로 책임 보호

## 🌟 특별 프로그램

### 레벨 시스템
```javascript
const loyaltyLevels = {
  bronze: {
    requirement: "활성 사용자",
    baseReward: "2%",
    perks: ["기본 지원"]
  },
  
  silver: {
    requirement: "월 $500 지출",
    baseReward: "2.5%",
    perks: ["우선 지원", "조기 액세스"]
  },
  
  gold: {
    requirement: "월 $2000 지출",
    baseReward: "3%",
    perks: ["컨시어지", "독점 혜택"]
  },
  
  platinum: {
    requirement: "초대 전용",
    baseReward: "4%",
    perks: ["모든 혜택", "맞춤형 리워드"]
  }
};
```

### 추천 프로그램
```typescript
const referralProgram = {
  yourReward: {
    perReferral: 10000, // sats
    bonusPeriod: "3개월 동안 +1%",
    lifetime: true
  },
  
  friendReward: {
    welcome: 10000, // sats
    firstPurchase: "2배 리워드",
    duration: "30일"
  },
  
  superReferrer: {
    threshold: 10,
    bonus: 100000, // sats
    status: "VIP"
  }
};
```

## ❓ 자주 묻는 질문

### 일반 질문
**Q: Flashcard 사용에 수수료가 있나요?**
A: 아니요! Flashcard는 완전 무료입니다.

**Q: 어떤 카드든 사용할 수 있나요?**
A: 대부분의 주요 신용카드와 직불카드가 지원됩니다.

**Q: 리워드는 언제 받나요?**
A: 리워드는 각 거래 후 즉시 Flash 지갑에 입금됩니다.

### 문제 해결
```javascript
const troubleshooting = {
  cardNotLinking: [
    "카드가 지원되는지 확인",
    "청구 주소 확인",
    "은행에 국제 거래 활성화 확인"
  ],
  
  missingRewards: [
    "거래 보류 중 확인",
    "가맹점 자격 확인",
    "24-48시간 대기"
  ],
  
  cardDeclined: [
    "카드 한도 확인",
    "사기 방지 알림 확인",
    "카드 재연결 시도"
  ]
};
```

## 🚀 프로 팁

### 리워드 해킹
1. **카드 순환**: 카테고리 보너스에 따라 여러 카드 사용
2. **선물 카드**: 파트너 가맹점 선물 카드로 리워드 2배
3. **그룹 구매**: 친구들을 위해 구매하고 리워드 수집
4. **구독 결합**: 모든 정기 결제를 Flashcard로

### 장기 전략
```typescript
const longTermStrategy = {
  accumulation: {
    target: "월 100,000 sats",
    method: "일관된 사용",
    timeline: "1년 = 1.2M sats"
  },
  
  optimization: {
    reviews: "월간 지출 패턴 검토",
    adjust: "고수익 카테고리로 전환",
    stack: "프로모션과 보너스 결합"
  },
  
  growth: {
    compound: "리워드를 재투자하지 않음",
    hodl: "장기 가치 상승 위해 보유",
    target: "은퇴 시 상당한 가치"
  }
};
```

<div class="flashcard-activated">
  <h2>Flashcard 활성화 준비 완료!</h2>
  <p>오늘부터 모든 구매에서 비트코인 적립을 시작하세요</p>
  <a href="/ko/guides/earn" class="btn-primary">더 많은 적립 방법 알아보기</a>
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
  
  .flashcard-activated {
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .flashcard-activated h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .flashcard-activated p {
    margin: 0 0 1.5rem 0;
  }
  
  .btn-primary {
    display: inline-block;
    background-color: white;
    color: #8b5cf6;
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