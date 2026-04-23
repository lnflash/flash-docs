---
title: 릴레이 구현
description: 다양한 NOSTR 릴레이 구현과 Flash 생태계에서의 사용법 탐색
---

## 릴레이 구현

NOSTR 생태계에는 각각 고유한 기능과 최적화를 가진 여러 릴레이 구현이 있습니다. Flash는 최상의 성능과 신뢰성을 위해 여러 구현을 지원하고 통합합니다.

## 🚀 Flash Relay

Flash의 자체 고성능 릴레이 구현:

```typescript
// Flash Relay 특징
interface FlashRelayFeatures {
  performance: {
    throughput: "10,000+ events/sec",
    latency: "10ms 미만 p99",
    connections: "100,000+ concurrent"
  },
  
  features: {
    lightning: true,      // 네이티브 라이트닝 통합
    ecash: true,         // eCash 지원
    media: true,         // 미디어 저장
    analytics: true      // 실시간 분석
  },
  
  deployment: {
    docker: true,
    kubernetes: true,
    cloudNative: true
  }
}
```

### 설치
```bash
# Docker를 사용한 Flash Relay
docker run -d \
  --name flash-relay \
  -p 8080:8080 \
  -v flash-data:/data \
  -e DATABASE_URL=postgres://... \
  flash/relay:latest

# Kubernetes 배포
kubectl apply -f https://flash.app/k8s/relay.yaml
```

### 구성
```yaml
# flash-relay.yaml
relay:
  name: "My Flash Relay"
  description: "High-performance NOSTR relay"
  
performance:
  workers: 8
  maxConnections: 100000
  eventQueueSize: 50000
  
features:
  nips: [1, 4, 9, 11, 12, 15, 20, 33, 57]
  lightning:
    enabled: true
    node: "lnd://..."
  
  ecash:
    enabled: true
    mints: ["mint.flash.app"]
  
  media:
    enabled: true
    storage: "s3"
    maxSize: "100MB"
```

## 🦖 Nostream

인기 있는 오픈소스 TypeScript 구현:

```javascript
// Nostream 설정 예시
const nostreamConfig = {
  info: {
    relay_url: "wss://relay.example.com",
    name: "My Nostream Relay",
    description: "Powered by Nostream",
    pubkey: "relay-pubkey",
    contact: "admin@example.com"
  },
  
  payments: {
    enabled: true,
    processor: "lnbits",
    endpoint: "https://lnbits.example.com",
    webhook: "https://relay.example.com/webhook"
  },
  
  limits: {
    event: {
      createdAt: {
        maxPositiveDelta: 900,
        maxNegativeDelta: 0
      },
      eventId: { minLeadingZeroBits: 0 },
      kind: { whitelist: [], blacklist: [] },
      pubkey: { whitelist: [], blacklist: [] },
      content: { maxLength: 1024000 }
    }
  }
};
```

### Flash 통합
```typescript
// Flash와 Nostream 통합
class FlashNostreamAdapter {
  constructor(nostreamUrl: string) {
    this.nostream = new NostreamClient(nostreamUrl);
  }
  
  async syncEvents() {
    const events = await this.nostream.query({
      kinds: [1, 7, 9734],
      limit: 1000
    });
    
    return this.transformToFlashFormat(events);
  }
  
  async enablePayments() {
    await this.nostream.configure({
      payments: {
        processor: 'flash',
        webhook: 'https://api.flash.app/nostream-webhook'
      }
    });
  }
}
```

## 🌟 Strfry

C++로 작성된 초고성능 릴레이:

```cpp
// Strfry 구성 예시
{
  "relay": {
    "bind": "0.0.0.0:7777",
    "threads": 8,
    "maxConnections": 100000
  },
  
  "events": {
    "maxEventSize": 65536,
    "rejectOldEvents": 86400,
    "rejectFutureEvents": 900
  },
  
  "database": {
    "type": "lmdb",
    "path": "/var/lib/strfry/db",
    "mapSize": "100GB"
  },
  
  "plugins": [
    {
      "name": "flash-integration",
      "path": "/usr/lib/strfry/plugins/flash.so",
      "config": {
        "api": "https://api.flash.app",
        "features": ["payments", "analytics"]
      }
    }
  ]
}
```

### 성능 최적화
```bash
# Strfry 성능 튜닝
sysctl -w net.core.somaxconn=65535
sysctl -w net.ipv4.tcp_max_syn_backlog=65535
sysctl -w net.core.netdev_max_backlog=65536

# Strfry 시작
strfry --config /etc/strfry/config.json
```

## 🔷 Relay.tools

기업용 릴레이 솔루션:

```javascript
// Relay.tools 구성
const relayToolsConfig = {
  // 기본 설정
  server: {
    host: '0.0.0.0',
    port: 8080,
    ssl: {
      enabled: true,
      cert: '/path/to/cert.pem',
      key: '/path/to/key.pem'
    }
  },
  
  // 엔터프라이즈 기능
  enterprise: {
    clustering: true,
    loadBalancing: 'round-robin',
    failover: true,
    monitoring: {
      prometheus: true,
      grafana: true
    }
  },
  
  // Flash 통합
  integrations: {
    flash: {
      enabled: true,
      apiKey: process.env.FLASH_API_KEY,
      features: ['analytics', 'payments', 'moderation']
    }
  }
};
```

### 고가용성 설정
```yaml
# Docker Compose로 HA 설정
version: '3.8'
services:
  relay1:
    image: relaytools/relay:latest
    environment:
      - CLUSTER_MODE=true
      - NODE_ID=1
      
  relay2:
    image: relaytools/relay:latest
    environment:
      - CLUSTER_MODE=true
      - NODE_ID=2
      
  loadbalancer:
    image: nginx:latest
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - relay1
      - relay2
```

## 🎯 특수 목적 구현

### 1. Media Relay
미디어 콘텐츠에 최적화:

```python
# Python 기반 미디어 릴레이
class MediaRelay:
    def __init__(self):
        self.storage = S3Storage()
        self.cdn = CloudflareCDN()
        
    async def handle_event(self, event):
        if event.kind == 1063:  # 파일 메타데이터
            # 미디어 처리
            media_url = await self.process_media(event)
            
            # CDN 업로드
            cdn_url = await self.cdn.upload(media_url)
            
            # 이벤트 업데이트
            event.tags.append(['url', cdn_url])
            
        return event
```

### 2. Private Relay
향상된 개인정보 보호:

```rust
// Rust 프라이빗 릴레이
struct PrivateRelay {
    auth_required: bool,
    encryption: EncryptionType,
    access_list: HashSet<PublicKey>,
}

impl PrivateRelay {
    async fn authenticate(&self, ws: WebSocket) -> Result<(), Error> {
        let challenge = self.generate_challenge();
        ws.send(Message::Auth(challenge)).await?;
        
        let response = ws.recv().await?;
        self.verify_auth(response, challenge)
    }
    
    async fn handle_event(&self, event: Event) -> Result<(), Error> {
        // 암호화된 이벤트만 허용
        if event.kind != 4 && event.kind != 1059 {
            return Err(Error::Forbidden);
        }
        
        self.store_encrypted(event).await
    }
}
```

### 3. Analytics Relay
데이터 분석 특화:

```typescript
// 분석 릴레이
class AnalyticsRelay extends BaseRelay {
  private analytics: AnalyticsEngine;
  
  async processEvent(event: NostrEvent) {
    // 이벤트 저장
    await super.processEvent(event);
    
    // 실시간 분석
    await this.analytics.track({
      eventId: event.id,
      kind: event.kind,
      author: event.pubkey,
      timestamp: event.created_at,
      tags: event.tags,
      contentLength: event.content.length
    });
    
    // 집계 업데이트
    await this.updateAggregates(event);
  }
  
  async getStats(filter: StatsFilter) {
    return this.analytics.query({
      metrics: ['events', 'users', 'engagement'],
      dimensions: ['time', 'kind', 'tag'],
      filters: filter
    });
  }
}
```

## 📊 구현 비교

### 기능 매트릭스
| 구현 | 언어 | 성능 | 기능 | Flash 통합 |
|------|------|------|------|------------|
| Flash Relay | Go | 매우 높음 | 전체 | 네이티브 |
| Nostream | TypeScript | 높음 | 대부분 | 플러그인 |
| Strfry | C++ | 최고 | 기본 | API |
| Relay.tools | Go | 높음 | 엔터프라이즈 | 전체 |

### 성능 벤치마크
```javascript
// 벤치마크 결과 (초당 이벤트)
const benchmarks = {
  'Flash Relay': {
    write: 10000,
    read: 50000,
    concurrent: 100000
  },
  'Strfry': {
    write: 15000,
    read: 60000,
    concurrent: 150000
  },
  'Nostream': {
    write: 5000,
    read: 25000,
    concurrent: 50000
  },
  'Relay.tools': {
    write: 8000,
    read: 40000,
    concurrent: 80000
  }
};
```

## 🔧 맞춤형 구현

### 자체 릴레이 구축
```go
// Go로 간단한 릴레이 구현
package main

import (
    "github.com/gorilla/websocket"
    "github.com/flash/nostr-go"
)

type CustomRelay struct {
    store EventStore
    subs  map[string]*Subscription
}

func (r *CustomRelay) HandleConnection(ws *websocket.Conn) {
    for {
        var msg []interface{}
        err := ws.ReadJSON(&msg)
        if err != nil {
            break
        }
        
        switch msg[0].(string) {
        case "EVENT":
            r.handleEvent(ws, msg[1])
        case "REQ":
            r.handleRequest(ws, msg[1:])
        case "CLOSE":
            r.handleClose(ws, msg[1])
        }
    }
}
```

### Flash SDK 통합
```javascript
// Flash SDK로 맞춤형 릴레이 통합
import { FlashRelay } from '@flash/relay-sdk';

class MyCustomRelay extends FlashRelay {
  constructor(config) {
    super(config);
    
    // Flash 기능 추가
    this.enableLightning();
    this.enableAnalytics();
    this.enableEcash();
  }
  
  async onEvent(event) {
    // 맞춤형 이벤트 처리
    if (event.kind === 9734) {
      // Zap 처리
      await this.processZap(event);
    }
    
    return super.onEvent(event);
  }
}

// 배포
const relay = new MyCustomRelay({
  port: 8080,
  database: 'postgres://...',
  flash: {
    apiKey: process.env.FLASH_API_KEY
  }
});

relay.start();
```

## 🚀 배포 가이드

### 프로덕션 체크리스트
1. **인프라**
   - [ ] SSL/TLS 구성
   - [ ] DDoS 보호
   - [ ] 로드 밸런싱
   - [ ] 자동 확장

2. **모니터링**
   - [ ] 메트릭 수집
   - [ ] 로그 집계
   - [ ] 알림 설정
   - [ ] 대시보드

3. **백업**
   - [ ] 데이터베이스 백업
   - [ ] 재해 복구 계획
   - [ ] 데이터 복제

4. **보안**
   - [ ] 접근 제어
   - [ ] 속도 제한
   - [ ] 콘텐츠 필터링
   - [ ] 감사 로깅

<div class="impl-cta">
  <h2>릴레이 구현 시작하기</h2>
  <p>필요에 맞는 완벽한 릴레이 솔루션 선택</p>
  <div class="cta-buttons">
    <a href="https://github.com/flash/relay" class="btn-primary">Flash Relay 받기</a>
    <a href="/ko/guides/relay-setup" class="btn-secondary">설정 가이드</a>
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
  
  .impl-cta {
    background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .impl-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .impl-cta p {
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
    color: #ec4899;
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