---
title: 연락처 관리
description: Flash에서 연락처를 추가, 구성 및 관리하여 원활한 결제와 통신을 하는 방법
---

## Flash 연락처 관리

연락처를 효율적으로 관리하면 결제 전송, 채팅, Flash 네트워크 구축이 쉬워집니다. Flash의 강력한 연락처 시스템을 최대한 활용하는 방법을 알아보세요.

## 👥 연락처 추가하기

### 추가 방법
```javascript
const addContactMethods = {
  qrCode: {
    steps: ["QR 스캔", "세부 정보 확인", "저장"],
    time: "5초",
    accuracy: "100%"
  },
  
  publicKey: {
    format: "npub1...",
    paste: true,
    verify: "자동"
  },
  
  username: {
    search: "@username",
    verified: "체크마크 확인",
    domain: "user@domain.com"
  },
  
  phoneNumber: {
    sync: "주소록에서",
    invite: "Flash 사용 안 함 시",
    privacy: "해시됨"
  }
};
```

### 연락처 정보
```typescript
interface Contact {
  // 기본 정보
  pubkey: string;
  name: string;
  avatar?: string;
  
  // 통신
  lightningAddress?: string;
  nostrRelays?: string[];
  verified: boolean;
  
  // 조직
  tags: string[];
  notes?: string;
  favorite: boolean;
  
  // 결제
  defaultAmount?: number;
  currency: 'sats' | 'btc' | 'fiat';
  paymentHistory: Transaction[];
}
```

## 🏷️ 연락처 구성

### 태그 시스템
```javascript
const tagSystem = {
  predefined: [
    "👨‍👩‍👧‍👦 가족",
    "👫 친구",
    "💼 일",
    "🏪 가맹점",
    "⚡ 라이트닝",
    "🤝 비즈니스"
  ],
  
  custom: {
    create: "새 태그 추가",
    color: "색상 선택",
    icon: "이모지 선택",
    bulk: "여러 연락처에 적용"
  },
  
  smart: {
    autoTag: "거래 기반",
    suggestions: "AI 제안",
    rules: "if/then 로직"
  }
};
```

### 그룹 관리
```typescript
interface ContactGroup {
  name: string;
  members: Contact[];
  
  settings: {
    defaultSplit: 'equal' | 'custom';
    notifications: boolean;
    sharedExpenses: boolean;
  };
  
  actions: {
    sendToAll: (amount: number) => void;
    splitBill: (total: number) => void;
    groupChat: () => void;
  };
}

// 그룹 예시
const groups: ContactGroup[] = [
  {
    name: "🍕 금요일 점심 그룹",
    members: [/* 연락처들 */],
    settings: {
      defaultSplit: 'equal',
      notifications: true,
      sharedExpenses: true
    }
  }
];
```

## 💸 빠른 결제

### 즐겨찾기 연락처
```javascript
const favoriteContacts = {
  display: "홈 화면 위젯",
  access: "스와이프 제스처",
  
  quickPay: {
    defaultAmounts: [1000, 5000, 10000], // sats
    oneClick: true,
    confirmThreshold: 50000 // 이상은 확인
  },
  
  customization: {
    nicknames: true,
    avatars: true,
    sounds: "맞춤 알림음"
  }
};
```

### 결제 템플릿
```typescript
interface PaymentTemplate {
  contact: Contact;
  amount: number;
  frequency?: 'once' | 'weekly' | 'monthly';
  memo?: string;
  
  automation?: {
    nextDate?: Date;
    endDate?: Date;
    reminder: boolean;
  };
}

// 템플릿 예시
const rentPayment: PaymentTemplate = {
  contact: landlord,
  amount: 2500000, // sats
  frequency: 'monthly',
  memo: "월세 - {month}",
  automation: {
    nextDate: new Date('2024-02-01'),
    reminder: true
  }
};
```

## 🔍 검색 및 필터

### 고급 검색
```javascript
const searchFeatures = {
  instant: {
    asYouType: true,
    fuzzyMatch: true,
    recent: "상위 5개 표시"
  },
  
  filters: {
    hasLightning: boolean,
    verified: boolean,
    tags: string[],
    lastContact: "날짜 범위",
    transactionVolume: "금액 범위"
  },
  
  sort: {
    options: ["이름", "최근", "거래량", "즐겨찾기"],
    direction: "오름차순" | "내림차순"
  }
};
```

### 스마트 목록
```typescript
const smartLists = {
  frequent: {
    criteria: "월 3회 이상 거래",
    autoUpdate: true,
    limit: 20
  },
  
  highValue: {
    criteria: "총 거래 > 1M sats",
    badge: "VIP",
    perks: "우선 지원"
  },
  
  inactive: {
    criteria: "90일 이상 거래 없음",
    action: "재연결 제안",
    cleanup: "보관 옵션"
  }
};
```

## 📇 가져오기/내보내기

### 연락처 가져오기
```javascript
const importOptions = {
  sources: {
    phone: {
      permission: "필요",
      match: "전화번호로",
      invite: "비사용자"
    },
    
    csv: {
      format: "name,pubkey,lightning",
      validate: true,
      duplicates: "병합|건너뛰기|덮어쓰기"
    },
    
    socialMedia: {
      twitter: "NOSTR 확인된",
      telegram: "사용자 이름",
      discord: "Flash 봇"
    }
  }
};
```

### 백업 및 동기화
```typescript
interface ContactBackup {
  version: number;
  timestamp: Date;
  contacts: Contact[];
  groups: ContactGroup[];
  settings: ContactSettings;
  
  export(): {
    format: 'json' | 'csv' | 'vcard';
    encryption: boolean;
    includeHistory: boolean;
  };
  
  sync: {
    cloud: boolean;
    devices: string[];
    frequency: 'realtime' | 'daily';
  };
}
```

## 🎨 연락처 사용자 정의

### 프로필 향상
```javascript
const profileEnhancements = {
  avatars: {
    upload: "사용자 정의 사진",
    generate: "Identicon",
    emoji: "기본값으로",
    nft: "NFT 프로필 사진"
  },
  
  badges: {
    verified: "✓",
    merchant: "🏪",
    vip: "⭐",
    developer: "👨‍💻"
  },
  
  customFields: [
    { label: "생일", type: "date" },
    { label: "회사", type: "text" },
    { label: "시간대", type: "timezone" }
  ]
};
```

### 상호작용 기록
```typescript
interface InteractionHistory {
  contact: Contact;
  
  timeline: Array<{
    date: Date;
    type: 'payment' | 'chat' | 'zap';
    details: any;
  }>;
  
  stats: {
    totalSent: number;
    totalReceived: number;
    messageCount: number;
    firstInteraction: Date;
  };
  
  insights: {
    frequency: 'daily' | 'weekly' | 'monthly';
    preferredTime: string;
    commonAmounts: number[];
  };
}
```

## 🔗 통합

### 소셜 연결
```javascript
const socialIntegrations = {
  nostr: {
    follow: "NOSTR 프로필 팔로우",
    sync: "프로필 업데이트",
    events: "활동 보기"
  },
  
  twitter: {
    verify: "파란색 체크 = 신뢰",
    import: "팔로워 찾기",
    share: "QR 코드 트윗"
  },
  
  linkedin: {
    professional: "비즈니스 연락처",
    invoicing: "프로 기능",
    network: "연결 가져오기"
  }
};
```

## 🛡️ 개인정보 및 보안

### 개인정보 설정
```typescript
const privacySettings = {
  profile: {
    public: ['name', 'avatar'],
    contacts: ['lightning address'],
    hidden: ['phone', 'email']
  },
  
  permissions: {
    payments: 'all' | 'contacts' | 'nobody',
    messages: 'all' | 'contacts' | 'nobody',
    location: 'never' | 'contacts' | 'ask'
  },
  
  blocking: {
    blocklist: string[],
    reportSpam: boolean,
    autoBlock: "의심스러운 활동"
  }
};
```

### 데이터 보호
```javascript
const dataProtection = {
  encryption: {
    atRest: "AES-256",
    inTransit: "TLS 1.3",
    backups: "비밀번호 보호"
  },
  
  access: {
    biometric: true,
    pin: "대체",
    timeout: "5분"
  },
  
  recovery: {
    secretQuestions: false, // 안전하지 않음
    recoveryContacts: 3,
    timelock: "48시간"
  }
};
```

## 📊 연락처 분석

### 네트워크 통찰력
```javascript
const networkAnalytics = {
  growth: {
    newContacts: { week: 5, month: 23 },
    activeRate: "73%",
    churn: "2%"
  },
  
  value: {
    totalNetwork: "50M sats",
    avgTransaction: "5000 sats",
    topContacts: [/* 상위 10 */]
  },
  
  patterns: {
    peakHours: "오후 6-9시",
    commonDays: ["금", "토"],
    seasonality: "휴일 급증"
  }
};
```

## 🚀 프로 팁

### 효율성 해킹
1. **키보드 단축키**
   - `Cmd/Ctrl + K`: 빠른 검색
   - `Space`: 연락처 미리보기
   - `S`: 빠른 전송

2. **제스처**
   - 스와이프하여 결제
   - 길게 눌러 옵션
   - 핀치하여 그룹화

3. **자동화**
   ```javascript
   const automations = [
     "생일 알림",
     "비활성 연락처 정리",
     "중복 병합",
     "관계 제안"
   ];
   ```

<div class="contacts-mastered">
  <h2>연락처 마스터 완료!</h2>
  <p>이제 Flash 네트워크를 프로처럼 관리할 준비가 되었습니다</p>
  <a href="/ko/guides/map" class="btn-primary">주변 탐색하기</a>
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
  
  .contacts-mastered {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .contacts-mastered h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .contacts-mastered p {
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