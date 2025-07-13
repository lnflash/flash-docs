---
title: 현금 정산
description: Flash에서 비트코인을 현지 통화로 전환하는 방법
---

# 현금 정산하기

비트코인을 현지 통화로 전환해야 할 때, Flash는 여러 편리한 옵션을 제공합니다. 은행 계좌로 직접 입금하거나 현금으로 받을 수 있습니다.

## 💸 정산 옵션

### 사용 가능한 방법
```javascript
const cashOutMethods = {
  bankTransfer: {
    speed: "1-3 영업일",
    fee: "1-2%",
    min: "$10",
    max: "$10,000/일"
  },
  
  instantCard: {
    speed: "즉시",
    fee: "2-3%",
    min: "$20",
    max: "$2,500/일"
  },
  
  cashPickup: {
    speed: "1시간",
    fee: "2-4%",
    min: "$50",
    max: "$1,000/일"
  },
  
  p2p: {
    speed: "협상",
    fee: "0-5%",
    min: "제한 없음",
    max: "제한 없음"
  }
};
```

## 🏦 은행 이체

### 단계별 프로세스

1. **정산 시작**
   - 지갑 탭 열기
   - "정산" 버튼 탭
   - "은행 이체" 선택

2. **은행 계좌 연결**
   ```typescript
   interface BankAccount {
     accountName: string;
     accountNumber: string;
     routingNumber: string;
     accountType: 'checking' | 'savings';
     verified: boolean;
   }
   ```

3. **금액 입력**
   ```
   정산 금액: 250,000 sats
   현재 환율: 1 BTC = $40,000
   받을 금액: $97.50
   수수료: $2.50 (2.5%)
   도착 예정: 2-3 영업일
   ```

4. **거래 확인**
   - 세부 정보 검토
   - 환율 확인
   - 정산 확인
   - 확인 이메일 받기

### 은행별 처리 시간
| 은행 유형 | 처리 시간 | 참고 사항 |
|----------|----------|----------|
| 주요 은행 | 1-2 영업일 | 가장 빠름 |
| 지역 은행 | 2-3 영업일 | 표준 |
| 신용 조합 | 2-4 영업일 | 다양함 |
| 온라인 은행 | 1-2 영업일 | 보통 빠름 |

## 💳 즉시 카드 입금

### 직불카드로 즉시 수령
1. **카드 추가**
   - 직불카드 정보 입력
   - 카드 확인
   - 보안 확인 완료

2. **즉시 전송**
   ```javascript
   const instantTransfer = {
     amount: 100000, // sats
     toCard: "****1234",
     fee: 3000, // sats (3%)
     receiveAmount: "$38.80",
     status: "완료",
     time: "< 30초"
   };
   ```

### 지원 카드
- Visa 직불카드
- Mastercard 직불카드
- 일부 선불 카드
- 가상 카드 (은행 발행)

## 🏪 현금 픽업

### 현금 수령 위치
1. **위치 찾기**
   - 지도에서 "현금 정산" 필터
   - 가까운 위치 선택
   - 운영 시간 확인

2. **픽업 코드 생성**
   ```
   픽업 코드: FLASH-7829-4521
   유효 기간: 72시간
   금액: $200
   수수료: $8 (4%)
   필요 서류: 신분증
   ```

3. **현금 수령**
   - 위치 방문
   - 코드와 신분증 제시
   - 현금 수령
   - 영수증 받기

### 파트너 위치
- 환전소
- 송금 서비스점
- 참여 소매점
- Flash 파트너 가맹점

## 🔄 P2P 거래

### 로컬 거래자 찾기
```typescript
interface P2POptions {
  online: {
    platforms: ["LocalBitcoins", "Paxful", "Bisq"],
    escrow: true,
    reputation: "필수",
    fee: "협상 가능"
  },
  
  inPerson: {
    meetups: ["Bitcoin 모임", "Flash 이벤트"],
    safety: "공공 장소",
    verification: "ID 확인",
    payment: ["현금", "은행 이체"]
  }
}
```

### P2P 안전 수칙
1. **항상 에스크로 사용**
2. **평판 확인**
3. **공공 장소에서 만나기**
4. **소액으로 시작**
5. **거래 기록 유지**

## 💱 환율 및 가격

### 실시간 환율
```javascript
// Flash 환율 시스템
const exchangeRate = {
  source: "실시간 시장 데이터",
  spread: "1%", // 시장 환율 대비
  update: "5초마다",
  
  calculation: {
    btcPrice: 40000,
    satsAmount: 250000,
    btcValue: 0.0025,
    usdValue: 100,
    fee: 2,
    netReceive: 98
  }
};
```

### 가격 보장
- 15분 환율 고정
- 즉시 실행
- 숨겨진 수수료 없음
- 투명한 가격 책정

## 📊 세금 고려사항

### 거래 기록
Flash는 세금 보고를 위한 상세 기록 제공:

```typescript
interface TaxReport {
  transactions: Array<{
    date: Date;
    type: 'cashout';
    btcAmount: number;
    fiatAmount: number;
    fee: number;
    exchangeRate: number;
    gain_loss?: number;
  }>;
  
  summary: {
    totalCashOut: number;
    totalFees: number;
    taxableEvents: number;
  };
  
  export: {
    formats: ['CSV', 'PDF', 'TurboTax'];
  };
}
```

### 세금 팁
1. **모든 정산 기록 유지**
2. **취득 가격 추적**
3. **세무 전문가 상담**
4. **분기별 추정세 고려**

## 🚀 대량 정산

### 비즈니스 정산
대량 또는 정기 정산이 필요한 비즈니스용:

```javascript
const businessCashOut = {
  options: {
    scheduled: {
      frequency: "일일/주간/월간",
      amount: "고정/백분율",
      destination: "등록된 계좌"
    },
    
    bulk: {
      maxAmount: "$100,000",
      reducedFees: "0.5-1%",
      dedicatedSupport: true,
      apiAccess: true
    }
  },
  
  requirements: {
    verification: "향상된 KYC",
    volume: "> $10,000/월",
    accountAge: "> 3개월"
  }
};
```

## 🛡️ 보안 조치

### 정산 보안
1. **2단계 인증 필수**
2. **정산 주소 화이트리스트**
3. **일일 한도 설정**
4. **이메일/SMS 확인**

### 사기 방지
```javascript
// 보안 확인
const securityChecks = [
  "IP 주소 확인",
  "장치 지문 인식",
  "행동 분석",
  "수동 검토 (대량)",
  "24시간 대기 기간 (신규 방법)"
];
```

## ⚡ 빠른 팁

### 수수료 최소화
1. **은행 이체 사용**: 가장 낮은 수수료
2. **대량 정산**: 여러 작은 거래 대신
3. **비수기 시간**: 더 나은 환율
4. **로열티 할인**: 정기 사용자

### 속도 최적화
```typescript
const speedOptimization = {
  fastest: {
    method: "즉시 카드",
    time: "30초",
    fee: "3%"
  },
  
  balanced: {
    method: "은행 이체",
    time: "1-2일",
    fee: "1.5%"
  },
  
  cheapest: {
    method: "P2P",
    time: "협상",
    fee: "0-1%"
  }
};
```

## 🌍 국제 정산

### 해외 송금
```yaml
지원 국가: 120+
통화: 50+
방법:
  - SWIFT 송금
  - 현지 은행 네트워크
  - 모바일 머니
  - 송금 서비스

요구 사항:
  - 수취인 정보
  - 목적 코드
  - 규정 준수 확인
```

## 📞 지원

### 정산 지원
- **지연된 정산**: 거래 ID로 상태 확인
- **실패한 정산**: 자동 환불 또는 재시도
- **한도 증가**: enhanced@flash.app으로 문의
- **비즈니스 지원**: 전담 계정 관리자

### 긴급 지원
```javascript
const emergencySupport = {
  channels: {
    inApp: "24시간 채팅",
    email: "support@flash.app",
    phone: "+1-800-FLASH-00",
    priority: "2시간 내 응답"
  },
  
  commonIssues: {
    delayed: "거래 추적 제공",
    failed: "24시간 내 해결",
    disputed: "조사 프로세스",
    locked: "보안 검토"
  }
};
```

<div class="cashout-complete">
  <h2>정산 옵션 탐색 완료!</h2>
  <p>필요에 맞는 최적의 방법을 선택하세요</p>
  <a href="/ko/guides/earn" class="btn-primary">더 많은 비트코인 적립하기</a>
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
  
  .cashout-complete {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .cashout-complete h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .cashout-complete p {
    margin: 0 0 1.5rem 0;
  }
  
  .btn-primary {
    display: inline-block;
    background-color: white;
    color: #10b981;
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