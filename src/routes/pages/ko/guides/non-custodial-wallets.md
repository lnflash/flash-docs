---
title: 비수탁형 지갑
description: Flash에서 자체 관리 비트코인 지갑을 설정하고 사용하여 완전한 재정 주권을 확보하는 방법
---

# 비수탁형 지갑 가이드

비수탁형(자체 관리) 지갑은 비트코인에 대한 완전한 제어권을 제공합니다. 은행이나 제3자가 아닌 당신이 키를 보유합니다. Flash는 사용 편의성을 희생하지 않고도 진정한 재정 주권을 쉽게 달성할 수 있도록 합니다.

## 🔑 비수탁형이란?

### 핵심 개념
```javascript
const custodyTypes = {
  custodial: {
    keyHolder: "Flash 또는 거래소",
    pros: ["편리함", "계정 복구", "지원"],
    cons: ["신뢰 필요", "동결 가능", "해킹 위험"],
    bestFor: "초보자, 소액"
  },
  
  nonCustodial: {
    keyHolder: "당신",
    pros: ["완전한 제어", "검열 불가", "진정한 소유권"],
    cons: ["책임", "복구 불가", "기술 지식"],
    bestFor: "큰 금액, 장기 보유"
  }
};
```

### 왜 비수탁형인가?
```typescript
interface WhyNonCustodial {
  sovereignty: "당신의 키, 당신의 코인";
  permission: "사용 허가 불필요";
  censorship: "아무도 동결 불가";
  privacy: "향상된 개인정보 보호";
  inheritance: "직접 상속 제어";
  
  quote: "Not your keys, not your coins";
}
```

## 🚀 Flash 비수탁형 설정

### 초기 설정
```javascript
const setupProcess = {
  step1: {
    action: "설정 → 지갑 → 비수탁형",
    choice: "새 지갑 생성",
    important: "안전한 환경에서"
  },
  
  step2: {
    seedPhrase: {
      words: 12, // 또는 24
      language: "한국어 가능",
      display: "한 번만 표시됨"
    },
    warning: "스크린샷 금지!"
  },
  
  step3: {
    backup: {
      write: "종이에 작성",
      verify: "단어 순서 확인",
      store: "안전한 장소"
    }
  },
  
  step4: {
    test: {
      receive: "소액 수신",
      send: "소액 전송",
      verify: "모든 것 작동"
    }
  }
};
```

### 시드 문구 백업
```typescript
interface SeedBackup {
  methods: {
    paper: {
      pros: "간단, 저렴",
      cons: "화재/물 손상",
      tips: "여러 복사본"
    },
    
    metal: {
      pros: "내구성, 방화",
      cons: "비용",
      products: ["ColdCard", "Billfodl"]
    },
    
    encrypted: {
      pros: "디지털 백업",
      cons: "복잡성",
      tools: ["Shamir shares", "암호화 USB"]
    }
  };
  
  security: {
    locations: ["집", "은행 금고", "가족"],
    never: ["클라우드", "사진", "이메일"],
    test: "정기적으로 복구 테스트"
  };
}
```

## 💰 지갑 유형

### 핫 월렛 (온라인)
```javascript
const hotWallet = {
  definition: "인터넷 연결된 지갑",
  
  flashImplementation: {
    type: "모바일 앱 내장",
    security: "PIN + 생체인증",
    features: ["라이트닝", "온체인", "스왑"]
  },
  
  usage: {
    dailySpending: true,
    maxAmount: "월 지출액",
    convenience: "최고"
  },
  
  risks: {
    malware: "가능",
    physicalTheft: "장치 접근",
    mitigation: "소액만 보관"
  }
};
```

### 콜드 월렛 (오프라인)
```typescript
interface ColdWallet {
  definition: "오프라인 키 저장";
  
  types: {
    hardware: {
      devices: ["Ledger", "Trezor", "ColdCard"],
      cost: "$50-200",
      security: "매우 높음"
    };
    
    paper: {
      cost: "무료",
      complexity: "낮음",
      durability: "주의 필요"
    };
    
    airgapped: {
      device: "오프라인 전용 컴퓨터",
      security: "최고",
      complexity: "높음"
    };
  };
  
  usage: {
    longTerm: true,
    largeAmounts: true,
    frequency: "드물게"
  };
}
```

## 🔐 보안 모범 사례

### 필수 보안
```javascript
const essentialSecurity = {
  seed: {
    generation: "오프라인에서",
    storage: "물리적으로",
    sharing: "절대 안 함",
    digital: "저장 안 함"
  },
  
  device: {
    dedicated: "가능하면 전용",
    updated: "항상 최신",
    apps: "최소한으로",
    wifi: "신뢰할 수 있는 것만"
  },
  
  behavior: {
    verify: "주소 항상 확인",
    small: "먼저 소액 테스트",
    paranoid: "의심될 때 중지",
    backup: "변경 전 백업"
  }
};
```

### 고급 보안
```typescript
interface AdvancedSecurity {
  multisig: {
    description: "여러 키 필요",
    setup: "2-of-3, 3-of-5",
    use: "큰 금액, 공동 관리"
  };
  
  passphrases: {
    addition: "13번째/25번째 단어",
    benefit: "숨겨진 지갑",
    risk: "잊어버림"
  };
  
  timelock: {
    description: "시간 제한 지출",
    use: "상속, 저축",
    implementation: "스마트 계약"
  };
}
```

## 📱 Flash 비수탁형 기능

### 라이트닝 통합
```javascript
const lightningFeatures = {
  channels: {
    management: "자동",
    backup: "암호화 클라우드",
    recovery: "SCB 파일"
  },
  
  payments: {
    send: "즉시",
    receive: "항상 온라인",
    routing: "자동 경로"
  },
  
  advanced: {
    customNodes: "자체 노드 연결",
    channelControl: "수동 관리",
    fees: "사용자 정의"
  }
};
```

### 백업 및 복구
```typescript
interface BackupRecovery {
  automatic: {
    channels: "실시간 백업",
    settings: "클라우드 동기화",
    metadata: "거래 라벨"
  };
  
  manual: {
    seed: "종이/금속",
    channelBackup: "다운로드 SCB",
    export: "거래 내역"
  };
  
  recovery: {
    newDevice: {
      steps: ["앱 설치", "시드 입력", "백업 복원"],
      time: "5-10분",
      data: "모든 자금, 일부 메타데이터"
    };
  };
}
```

## 🔄 수탁형에서 전환

### 마이그레이션 프로세스
```javascript
const migration = {
  preparation: {
    backup: "현재 지갑",
    test: "소액으로",
    timing: "수수료 낮을 때"
  },
  
  steps: [
    "비수탁형 지갑 생성",
    "백업 확인",
    "소액 전송 테스트",
    "나머지 자금 이동",
    "이전 지갑 모니터링"
  ],
  
  considerations: {
    fees: "네트워크 수수료",
    time: "확인 대기",
    taxes: "관할권 확인"
  }
};
```

## 💡 사용 팁

### 일상 사용
```typescript
const dailyUsage = {
  hotWallet: {
    amount: "주간 지출액",
    refill: "주간/월간",
    backup: "자동"
  },
  
  coldStorage: {
    amount: "저축",
    access: "분기별 검토",
    verify: "정기 확인"
  },
  
  hybrid: {
    spending: "핫 월렛",
    savings: "콜드 스토리지",
    emergency: "중간 금액"
  }
};
```

### 문제 해결
| 문제 | 해결책 |
|------|--------|
| 시드 분실 | 복구 불가 - 예방이 최선 |
| 장치 분실 | 시드로 새 장치에 복원 |
| 거래 안 됨 | 수수료 확인, 연결 확인 |
| 잔액 표시 안 됨 | 블록체인 재스캔 |

## 🎯 고급 전략

### 지갑 구조
```javascript
const walletStructure = {
  mobile: {
    purpose: "일일 지출",
    amount: "$100-500",
    type: "핫 월렛"
  },
  
  desktop: {
    purpose: "주간 관리",
    amount: "$500-5000",
    type: "웜 월렛"
  },
  
  hardware: {
    purpose: "장기 저축",
    amount: "$5000+",
    type: "콜드 스토리지"
  },
  
  multisig: {
    purpose: "가족/비즈니스",
    amount: "큰 금액",
    type: "공동 관리"
  }
};
```

### 프라이버시 향상
```typescript
interface PrivacyEnhancements {
  coinControl: {
    description: "UTXO 선택",
    benefit: "프라이버시 향상",
    complexity: "중간"
  };
  
  mixing: {
    services: ["Whirlpool", "JoinMarket"],
    benefit: "거래 연결 끊기",
    cost: "수수료"
  };
  
  addressing: {
    new: "각 거래마다 새 주소",
    labeling: "내부 추적",
    avoid: "주소 재사용"
  };
}
```

## 🚀 미래 준비

### 기술 발전
```javascript
const futureFeatures = {
  taproot: {
    benefit: "향상된 프라이버시",
    smartContracts: "더 복잡한 설정",
    adoption: "증가 중"
  },
  
  lightning: {
    improvements: "더 나은 UX",
    capacity: "증가하는 유동성",
    features: "새로운 사용 사례"
  },
  
  sovereignty: {
    tools: "더 쉬운 자체 관리",
    education: "더 나은 자료",
    adoption: "주류화"
  }
};
```

<div class="sovereignty-achieved">
  <h2>재정 주권 달성!</h2>
  <p>이제 진정으로 비트코인을 소유하고 있습니다</p>
  <a href="/ko/guides/sweep-to-cold-storage" class="btn-primary">콜드 스토리지 설정</a>
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
  
  .sovereignty-achieved {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .sovereignty-achieved h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .sovereignty-achieved p {
    margin: 0 0 1.5rem 0;
  }
  
  .btn-primary {
    display: inline-block;
    background-color: white;
    color: #f97316;
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