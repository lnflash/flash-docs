---
title: 릴레이
description: Flash의 탈중앙화 통신을 가능하게 하는 NOSTR 릴레이 이해하기
---

# NOSTR 릴레이

릴레이는 NOSTR 프로토콜의 중추로, Flash의 탈중앙화 메시징과 소셜 기능을 가능하게 합니다. 사용자와 애플리케이션 간의 메시지 저장 및 전달을 담당합니다.

## 🌐 릴레이란?

NOSTR 릴레이는 NOSTR 이벤트를 저장하고 전달하는 서버입니다. 중앙화된 소셜 미디어 플랫폼과 달리, 누구나 릴레이를 운영할 수 있으며 사용자는 여러 릴레이에 연결할 수 있습니다.

### 핵심 기능
```javascript
// 릴레이 연결 예시
const relay = new NostrRelay('wss://relay.flash.app');

// 이벤트 구독
relay.subscribe({
  kinds: [1], // 텍스트 노트
  authors: ['pubkey1', 'pubkey2'],
  since: Math.floor(Date.now() / 1000) - 3600 // 지난 1시간
});

// 이벤트 게시
relay.publish({
  kind: 1,
  content: 'Hello NOSTR!',
  tags: [],
  created_at: Math.floor(Date.now() / 1000)
});
```

## 🏗️ 릴레이 아키텍처

### 기본 구조
```
┌─────────────────┐     WebSocket      ┌─────────────────┐
│   클라이언트 A  │ ←───────────────→ │                 │
├─────────────────┤                    │                 │
│   클라이언트 B  │ ←───────────────→ │   NOSTR 릴레이  │
├─────────────────┤                    │                 │
│   클라이언트 C  │ ←───────────────→ │                 │
└─────────────────┘                    └─────────────────┘
                                              ↓
                                        데이터베이스
```

### 릴레이 유형
1. **공개 릴레이**: 누구나 읽기/쓰기 가능
2. **유료 릴레이**: 스팸 방지를 위한 결제 필요
3. **프라이빗 릴레이**: 초대 전용 또는 인증 필요
4. **전문 릴레이**: 특정 콘텐츠 유형에 초점

## 💡 Flash 릴레이 네트워크

### 공식 Flash 릴레이
```yaml
relays:
  primary:
    - url: wss://relay.flash.app
      location: Global
      features: [nip-01, nip-04, nip-09, nip-57]
      
  regional:
    - url: wss://us.relay.flash.app
      location: United States
    - url: wss://eu.relay.flash.app
      location: Europe
    - url: wss://asia.relay.flash.app
      location: Asia
      
  specialized:
    - url: wss://media.relay.flash.app
      purpose: Media storage
    - url: wss://private.relay.flash.app
      purpose: Encrypted messages
```

### 릴레이 선택 전략
```javascript
class RelayManager {
  constructor() {
    this.relays = new Map();
    this.priorities = new Map();
  }
  
  selectRelays(purpose) {
    switch(purpose) {
      case 'broadcast':
        // 여러 릴레이에 게시
        return this.getHighAvailabilityRelays();
        
      case 'private':
        // 신뢰할 수 있는 릴레이만
        return this.getTrustedRelays();
        
      case 'media':
        // 미디어 지원 릴레이
        return this.getMediaRelays();
        
      default:
        return this.getDefaultRelays();
    }
  }
}
```

## 🔄 릴레이 프로토콜

### 메시지 형식
NOSTR는 JSON 기반 메시지를 사용합니다:

```typescript
// 클라이언트 → 릴레이
type ClientMessage = 
  | ["EVENT", Event]           // 이벤트 게시
  | ["REQ", string, ...Filter[]] // 구독 요청
  | ["CLOSE", string]          // 구독 종료

// 릴레이 → 클라이언트
type RelayMessage = 
  | ["EVENT", string, Event]   // 이벤트 전달
  | ["OK", string, boolean, string] // 게시 확인
  | ["EOSE", string]          // 구독 종료
  | ["NOTICE", string]        // 릴레이 메시지
```

### 필터링 시스템
```javascript
// 구독 필터 예시
const filter = {
  kinds: [1, 7],              // 이벤트 유형
  authors: ["pubkey1", "pubkey2"], // 특정 작성자
  since: 1234567890,          // 시간 이후
  until: 1234567999,          // 시간 이전
  limit: 100,                 // 최대 결과
  "#t": ["bitcoin", "flash"], // 태그 필터
  "#p": ["pubkey3"]          // 언급된 사용자
};

relay.subscribe("sub-id", filter);
```

## 🛡️ 릴레이 보안

### 인증 메커니즘
```javascript
// NIP-42 인증
class AuthenticatedRelay {
  async connect(url, privateKey) {
    this.ws = new WebSocket(url);
    
    this.ws.on('message', async (msg) => {
      const [type, ...params] = JSON.parse(msg);
      
      if (type === 'AUTH') {
        const challenge = params[0];
        const authEvent = await this.createAuthEvent(challenge, privateKey);
        this.ws.send(JSON.stringify(['AUTH', authEvent]));
      }
    });
  }
  
  async createAuthEvent(challenge, privateKey) {
    return {
      kind: 22242,
      content: '',
      tags: [
        ['relay', this.url],
        ['challenge', challenge]
      ],
      created_at: Math.floor(Date.now() / 1000),
      pubkey: getPublicKey(privateKey),
      sig: await signEvent(event, privateKey)
    };
  }
}
```

### 스팸 방지
1. **속도 제한**: 클라이언트당 제한
2. **작업 증명**: 계산 요구사항
3. **결제 게이트**: 라이트닝 결제
4. **콘텐츠 필터링**: 스팸 감지

## 📊 릴레이 성능

### 최적화 기술
```typescript
interface RelayOptimizations {
  // 데이터베이스 최적화
  database: {
    indexing: string[];
    caching: CacheStrategy;
    sharding: boolean;
  };
  
  // 네트워크 최적화
  network: {
    compression: boolean;
    batchRequests: boolean;
    connectionPooling: number;
  };
  
  // 콘텐츠 최적화
  content: {
    deduplication: boolean;
    archiving: ArchivePolicy;
    pruning: PruneStrategy;
  };
}
```

### 모니터링 메트릭
```javascript
// 릴레이 상태 모니터링
const relayMetrics = {
  connections: relay.getActiveConnections(),
  eventsPerSecond: relay.getEventRate(),
  storageUsed: relay.getStorageMetrics(),
  latency: relay.getAverageLatency(),
  uptime: relay.getUptime()
};

// 상태 확인 엔드포인트
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    metrics: relayMetrics,
    version: '1.0.0'
  });
});
```

## 🌟 고급 릴레이 기능

### 1. 집계 릴레이
여러 릴레이의 콘텐츠를 결합:

```javascript
class AggregatorRelay {
  constructor(upstreamRelays) {
    this.upstreams = upstreamRelays;
  }
  
  async query(filter) {
    const results = await Promise.all(
      this.upstreams.map(relay => relay.query(filter))
    );
    
    // 중복 제거 및 정렬
    return this.deduplicateAndSort(results.flat());
  }
}
```

### 2. 필터링 릴레이
콘텐츠 조정 및 필터링:

```javascript
class FilterRelay {
  async processEvent(event) {
    // 콘텐츠 검사
    if (await this.isSpam(event)) {
      return { accepted: false, reason: 'spam' };
    }
    
    if (await this.containsIllegalContent(event)) {
      return { accepted: false, reason: 'illegal' };
    }
    
    // 이벤트 수락
    return { accepted: true };
  }
}
```

### 3. 유료 릴레이
라이트닝 결제 통합:

```javascript
class PaidRelay {
  async handleConnection(ws, req) {
    const invoice = await this.createInvoice({
      amount: 1000, // 사토시
      description: 'Relay access for 30 days'
    });
    
    ws.send(JSON.stringify(['PAYMENT_REQUIRED', invoice]));
    
    // 결제 대기
    await this.waitForPayment(invoice.paymentHash);
    
    // 액세스 부여
    this.grantAccess(ws, 30 * 24 * 60 * 60);
  }
}
```

## 🔧 릴레이 운영

### 자체 릴레이 설정
```bash
# Flash 릴레이 설치
git clone https://github.com/flash/relay
cd flash-relay

# 구성
cp config.example.yaml config.yaml
# config.yaml 편집

# 실행
docker-compose up -d
```

### 구성 옵션
```yaml
relay:
  name: "My Flash Relay"
  description: "Personal NOSTR relay"
  contact: admin@example.com
  
server:
  host: 0.0.0.0
  port: 8080
  
database:
  type: postgresql
  url: postgres://user:pass@localhost/nostr
  
limits:
  messageSize: 16384
  subscriptionLimit: 10
  eventRate: 100/minute
  
features:
  nips: [1, 4, 9, 11, 12, 15, 20, 33]
  payment: true
  auth: true
```

## 🌍 릴레이 생태계

### 주요 공개 릴레이
| 릴레이 | URL | 특징 |
|--------|-----|------|
| Flash 메인 | wss://relay.flash.app | 높은 신뢰성 |
| Damus | wss://relay.damus.io | 대규모 사용자 |
| nos.lol | wss://nos.lol | 미디어 친화적 |
| Blastr | wss://blastr.f7z.xyz | 브로드캐스트 |

### 릴레이 발견
```javascript
// NIP-11 릴레이 정보
async function getRelayInfo(url) {
  const response = await fetch(url.replace('wss://', 'https://'), {
    headers: { 'Accept': 'application/nostr+json' }
  });
  
  return response.json();
  // {
  //   name: "Flash Relay",
  //   description: "High-performance NOSTR relay",
  //   supported_nips: [1, 4, 9, 11, 57],
  //   software: "flash-relay",
  //   version: "1.0.0"
  // }
}
```

## 🚀 미래 개발

### 예정된 기능
1. **릴레이 연합**: 릴레이 간 협력
2. **콘텐츠 전달 네트워크**: 미디어 최적화
3. **AI 필터링**: 스마트 콘텐츠 조정
4. **분산 저장소**: IPFS 통합

### 실험적 NIP
- **NIP-65**: 릴레이 목록 메타데이터
- **NIP-66**: 릴레이 모니터링
- **NIP-77**: 릴레이 간 동기화

<div class="relay-cta">
  <h2>릴레이 네트워크 참여</h2>
  <p>자체 릴레이를 운영하거나 Flash 네트워크에 연결하세요</p>
  <div class="cta-buttons">
    <a href="/ko/guides/relay-setup" class="btn-primary">릴레이 설정</a>
    <a href="/ko/relay-implementations" class="btn-secondary">구현 살펴보기</a>
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
  
  .relay-cta {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .relay-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .relay-cta p {
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
    color: #7c3aed;
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
  
  :global(.dark) th {
    background: #1f2937;
  }
  
  :global(.dark) th,
  :global(.dark) td {
    border-color: #374151;
  }
</style>