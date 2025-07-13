---
title: 보안 채팅
description: Flash의 암호화된 메시징 기능을 사용하여 비공개로 통신하고 결제를 보내는 방법
---

# Flash 보안 채팅

Flash는 NOSTR 프로토콜을 사용하여 종단간 암호화된 메시징을 제공합니다. 채팅하고, 파일을 공유하고, 대화 내에서 바로 비트코인을 보낼 수 있습니다.

## 🔐 보안 메시징 기본

### 작동 방식
```javascript
const flashMessaging = {
  protocol: "NOSTR",
  encryption: "종단간",
  storage: "탈중앙화 릴레이",
  features: {
    text: true,
    voice: "출시 예정",
    files: true,
    payments: true,
    groups: true
  }
};
```

### 개인정보 보호 기능
- **키 소유권**: 메시지 키 제어
- **메타데이터 보호**: 최소 정보 노출
- **전방 비밀성**: 각 세션에 새 키
- **탈중앙화**: 중앙 서버 없음

## 🚀 시작하기

### 1단계: 채팅 프로필 설정
```typescript
interface ChatProfile {
  displayName: string;
  avatar?: string;
  bio?: string;
  verified?: boolean;
  
  privacy: {
    readReceipts: boolean;
    onlineStatus: boolean;
    typingIndicators: boolean;
  };
}

// 프로필 설정
const myProfile: ChatProfile = {
  displayName: "사토시",
  bio: "비트코인 애호가 ⚡",
  privacy: {
    readReceipts: false,
    onlineStatus: false,
    typingIndicators: true
  }
};
```

### 2단계: 연락처 추가
1. **공개 키로**
   ```
   npub1a2b3c4d5e6f...
   ```

2. **QR 코드 스캔**
   - 친구의 QR 표시
   - Flash로 스캔
   - 자동 추가

3. **사용자 이름 검색**
   - Flash 사용자 이름
   - 확인된 계정
   - ENS/도메인 이름

## 💬 채팅 기능

### 개인 메시지
```javascript
// 메시지 유형
const messageTypes = {
  text: {
    maxLength: 10000,
    formatting: ["bold", "italic", "code"],
    emoji: true,
    mentions: true
  },
  
  media: {
    images: ["jpg", "png", "gif"],
    maxSize: "10MB",
    autoCompress: true
  },
  
  voice: {
    maxDuration: "5분",
    format: "opus",
    transcription: "선택사항"
  }
};
```

### 그룹 채팅
```typescript
interface GroupChat {
  name: string;
  members: string[];
  admins: string[];
  
  settings: {
    encrypted: boolean;
    maxMembers: number;
    joinApproval: boolean;
    messageHistory: boolean;
  };
  
  permissions: {
    sendMessages: 'all' | 'approved';
    sendPayments: 'all' | 'admins';
    inviteMembers: 'all' | 'admins';
  };
}
```

## ⚡ 채팅 내 결제

### 비트코인 보내기
```javascript
// 채팅에서 결제
const sendPaymentInChat = async (amount: number, message?: string) => {
  const payment = {
    type: 'lightning',
    amount: amount, // sats
    memo: message || "채팅 결제",
    
    // 메시지에 포함
    embed: {
      preview: `${amount} sats 전송됨`,
      status: 'pending',
      expires: Date.now() + 3600000
    }
  };
  
  return await flash.chat.sendPayment(payment);
};
```

### 결제 요청
```typescript
// 인보이스 요청
const requestPayment = {
  amount: 10000, // sats
  description: "저녁값 분담",
  expires: "24시간",
  
  display: {
    qrCode: true,
    copyButton: true,
    shareLink: true
  }
};

// 분할 계산
const splitBill = {
  total: 50000, // sats
  participants: ["alice", "bob", "carol"],
  shares: "균등", // 또는 맞춤형
  
  autoReminder: true,
  deadline: "48시간"
};
```

## 🛡️ 고급 보안

### 사라지는 메시지
```javascript
const disappearingMessages = {
  enabled: true,
  duration: {
    options: ["5분", "1시간", "24시간", "7일"],
    default: "24시간"
  },
  
  types: {
    text: true,
    media: true,
    payments: false // 결제 기록은 유지
  },
  
  notification: "이 대화는 24시간 후 사라집니다 ⏰"
};
```

### 메시지 확인
```typescript
interface MessageVerification {
  signature: string;
  publicKey: string;
  timestamp: number;
  
  verify(): boolean {
    // NOSTR 서명 확인
    return verifySignature(
      this.signature,
      this.publicKey,
      this.timestamp
    );
  }
}

// 확인 표시기
const verificationBadges = {
  verified: "✓", // 서명 확인됨
  encrypted: "🔒", // E2E 암호화
  relay: "📡", // 릴레이 확인
};
```

## 🎨 채팅 사용자 정의

### 테마 및 모양
```javascript
const chatThemes = {
  default: {
    bubble: "#8b5cf6",
    background: "#ffffff",
    text: "#000000"
  },
  
  dark: {
    bubble: "#7c3aed",
    background: "#1f2937",
    text: "#ffffff"
  },
  
  bitcoin: {
    bubble: "#f7931a",
    background: "#000000",
    text: "#ffffff"
  },
  
  custom: {
    // 사용자 정의 색상
  }
};
```

### 알림 설정
```typescript
const notificationSettings = {
  messages: {
    all: true,
    mentions: true,
    payments: true,
    groups: 'mentions_only'
  },
  
  sounds: {
    enabled: true,
    custom: "lightning.mp3"
  },
  
  quiet: {
    hours: { start: 22, end: 8 },
    timezone: "local"
  }
};
```

## 📎 파일 공유

### 지원 파일 유형
```javascript
const fileSharing = {
  documents: [".pdf", ".doc", ".txt"],
  images: [".jpg", ".png", ".gif"],
  limits: {
    fileSize: "25MB",
    totalStorage: "1GB"
  },
  
  encryption: {
    automatic: true,
    method: "AES-256"
  }
};

// 파일 전송 예시
async function shareFile(file: File) {
  const encrypted = await encryptFile(file);
  const stored = await storeOnIPFS(encrypted);
  
  return {
    cid: stored.cid,
    key: encrypted.key,
    name: file.name,
    size: file.size
  };
}
```

## 🌐 크로스 플랫폼 동기화

### 장치 간 메시지
```typescript
const syncSettings = {
  devices: ["iPhone", "iPad", "MacBook"],
  
  sync: {
    messages: true,
    contacts: true,
    settings: true,
    drafts: true
  },
  
  backup: {
    frequency: "실시간",
    encryption: true,
    location: "Flash 클라우드"
  }
};
```

## 🎯 채팅 팁 및 트릭

### 생산성 기능
1. **메시지 예약**
   ```javascript
   const scheduledMessage = {
     to: "alice",
     content: "회의 리마인더!",
     sendAt: "2024-12-25 09:00",
     timezone: "America/New_York"
   };
   ```

2. **빠른 응답**
   ```javascript
   const quickReplies = [
     "👍",
     "곧 갈게",
     "알겠습니다",
     "⚡ 결제 전송됨"
   ];
   ```

3. **메시지 번역**
   - 자동 언어 감지
   - 인라인 번역
   - 50개 언어 지원

### 봇 및 자동화
```typescript
interface ChatBot {
  commands: {
    "/price": "현재 BTC 가격",
    "/pay [amount]": "빠른 결제",
    "/remind [time] [message]": "리마인더 설정",
    "/split [amount] [@users]": "계산 분할"
  };
  
  autoResponses: {
    away: "자리를 비웠습니다. 곧 돌아옵니다!",
    payment: "결제 받았습니다. 감사합니다! ⚡"
  };
}
```

## 🔍 검색 및 아카이브

### 메시지 검색
```javascript
const searchOptions = {
  filters: {
    sender: "특정 연락처",
    dateRange: { from: "2024-01-01", to: "2024-12-31" },
    hasPayment: true,
    hasMedia: true
  },
  
  sort: "날짜" | "관련성",
  
  export: {
    format: "JSON" | "CSV" | "PDF",
    includeMedia: boolean
  }
};
```

## ⚠️ 문제 해결

### 일반적인 문제
| 문제 | 해결책 |
|------|--------|
| 메시지 전달 안 됨 | 릴레이 연결 확인 |
| 동기화 안 됨 | 모든 장치에서 동일한 키 확인 |
| 미디어 로드 안 됨 | 파일 크기 제한 확인 |
| 알림 안 옴 | 앱 권한 확인 |

### 개인정보 모범 사례
1. **정기적으로 키 회전**
2. **민감한 정보에 사라지는 메시지 사용**
3. **알 수 없는 연락처 차단**
4. **채팅 백업 암호화**

<div class="chat-ready">
  <h2>채팅 준비 완료!</h2>
  <p>안전하고 비공개적인 대화를 시작하고 채팅에서 바로 비트코인을 보내세요</p>
  <a href="/ko/guides/contacts" class="btn-primary">연락처 관리</a>
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
  
  .chat-ready {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .chat-ready h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .chat-ready p {
    margin: 0 0 1.5rem 0;
  }
  
  .btn-primary {
    display: inline-block;
    background-color: white;
    color: #06b6d4;
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