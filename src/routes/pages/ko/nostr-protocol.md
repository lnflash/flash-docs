---
title: NOSTR 프로토콜
description: Flash의 보안 메시징과 소셜 기능을 구동하는 NOSTR 프로토콜 이해하기
---

# NOSTR 프로토콜

NOSTR (Notes and Other Stuff Transmitted by Relays)는 Flash가 보안 메시징, 소셜 기능 및 탈중앙화 통신에 사용하는 간단하고 개방적인 프로토콜입니다.

## 🌐 NOSTR란?

NOSTR는 검열 저항적인 글로벌 "소셜" 네트워크를 만들기 위한 탈중앙화 네트워크 프로토콜입니다. 블록체인이 아니며 P2P 네트워크도 아닙니다. 매우 간단하고 확장 가능한 프로토콜입니다.

### 핵심 원칙
- **단순성**: 최소한의 프로토콜 설계
- **탈중앙화**: 단일 실패 지점 없음
- **검열 저항**: 콘텐츠를 차단하기 어려움
- **사용자 소유권**: 사용자가 자신의 신원을 제어

## 🔑 작동 방식

### 기본 구조
```
사용자 (클라이언트)
    ↓
이벤트에 서명
    ↓
릴레이로 전송
    ↓
다른 사용자가 구독
    ↓
이벤트 수신
```

### 이벤트 구조
모든 NOSTR 메시지는 "이벤트"입니다:

```json
{
  "id": "이벤트 해시",
  "pubkey": "발신자의 공개 키",
  "created_at": 1234567890,
  "kind": 1,
  "tags": [
    ["p", "언급된 사용자"],
    ["e", "답글 대상 이벤트"]
  ],
  "content": "Hello, NOSTR!",
  "sig": "이벤트 서명"
}
```

## 🔐 신원과 키

### 키 쌍
NOSTR는 비트코인과 유사한 암호화를 사용합니다:

```
개인 키 (nsec...)
    ↓
공개 키 (npub...)
    ↓
사용자 신원
```

### 키 관리
- **개인 키**: 메시지 서명 및 신원 증명
- **공개 키**: 사용자 식별자 역할
- **키 백업**: 신원 복구에 필수

## 📡 릴레이

### 릴레이란?
릴레이는 이벤트를 저장하고 전달하는 서버입니다:

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│릴레이 1 │     │릴레이 2 │     │릴레이 3 │
└────┬────┘     └────┬────┘     └────┬────┘
     │               │               │
     └───────────────┴───────────────┘
                     │
                사용자 연결
```

### 릴레이 선택
사용자는 여러 릴레이에 연결할 수 있습니다:
- **중복성**: 한 릴레이가 다운되어도 메시지 유지
- **지역성**: 더 빠른 액세스를 위한 가까운 릴레이
- **전문화**: 특정 콘텐츠 유형에 초점을 맞춘 릴레이

## 💬 Flash의 NOSTR 사용

### 보안 메시징
Flash는 암호화된 P2P 메시징에 NOSTR를 사용합니다:

1. **종단간 암호화**: NIP-04 암호화 표준
2. **전방 비밀성**: 각 대화에 대한 일회용 키
3. **메타데이터 보호**: 최소한의 정보 노출
4. **다중 장치 동기화**: 여러 장치에서 메시지 액세스

### 소셜 기능
```javascript
// Flash에서 NOSTR 이벤트 예시
const post = {
  kind: 1, // 텍스트 노트
  content: "Just received my first Lightning payment! ⚡",
  tags: [
    ["t", "bitcoin"],
    ["t", "lightning"]
  ]
};
```

## 🎯 이벤트 종류

### 일반적인 이벤트 유형
| Kind | 설명 | Flash에서의 사용 |
|------|------|-----------------|
| 0 | 메타데이터 | 사용자 프로필 |
| 1 | 텍스트 노트 | 공개 메시지 |
| 4 | 암호화된 DM | 비공개 채팅 |
| 7 | 반응 | 좋아요/이모지 |
| 9734 | Zap 요청 | 비트코인 팁 |

### Flash 전용 이벤트
Flash는 NOSTR를 확장하여 다음을 지원합니다:
- 결제 알림
- 거래 메모
- 가맹점 리뷰
- 위치 체크인

## 🛡️ 개인정보 보호와 보안

### 개인정보 보호 기능
- **가명성**: 실명이 필요하지 않음
- **선택적 공개**: 공유할 내용 제어
- **암호화 옵션**: 비공개 커뮤니케이션
- **메타데이터 최소화**: 제한된 추적

### 보안 고려사항
```
✅ 해야 할 일:
- 개인 키를 안전하게 백업
- 신뢰할 수 있는 릴레이 사용
- 민감한 정보 암호화
- 정기적으로 키 회전

❌ 하지 말아야 할 일:
- 개인 키 공유
- 신뢰할 수 없는 클라이언트 사용
- 암호화되지 않은 민감한 데이터 게시
- 키 백업 무시
```

## 🌍 네트워크 효과

### 상호 운용성
NOSTR의 개방형 프로토콜은 다음을 가능하게 합니다:
- **크로스 앱 통신**: Flash 사용자가 다른 NOSTR 앱과 상호작용
- **데이터 이동성**: 앱 간 데이터 이동
- **생태계 성장**: 공유 네트워크 효과
- **혁신**: 누구나 구축 가능

### Flash 통합
```
Flash 사용자
    ↓
NOSTR 신원
    ↓
┌────────┬────────┬────────┐
│ 메시징 │  소셜  │  결제  │
└────────┴────────┴────────┘
```

## 📊 기술 사양

### 프로토콜 세부사항
- **전송**: WebSocket 연결
- **형식**: JSON 메시지
- **서명**: Schnorr 서명 (secp256k1)
- **인코딩**: UTF-8 텍스트

### 성능 특성
- **낮은 대기 시간**: 직접 릴레이 연결
- **확장 가능**: 릴레이를 독립적으로 확장
- **효율적**: 최소한의 데이터 오버헤드
- **복원력**: 릴레이 장애 처리

## 🔄 Zaps: 비트코인과 NOSTR

### Zaps란?
Zaps는 라이트닝 결제와 NOSTR 이벤트를 결합합니다:

```
사용자 A가 사용자 B를 zap하고 싶어함
         ↓
Zap 요청 생성 (NOSTR)
         ↓
라이트닝 인보이스 수신
         ↓
결제 전송 (라이트닝)
         ↓
Zap 영수증 게시 (NOSTR)
```

### Flash에서의 Zaps
- **원활한 통합**: 한 번의 탭으로 zap
- **사용자 정의 금액**: 유연한 팁 제공
- **공개 인정**: 지원 표시
- **소셜 결제**: 돈과 메시지 결합

## 🚀 고급 기능

### NIP (NOSTR 구현 가능성)
Flash는 여러 NIP를 지원합니다:
- **NIP-01**: 기본 프로토콜
- **NIP-04**: 암호화된 메시지
- **NIP-05**: DNS 기반 확인
- **NIP-57**: 라이트닝 Zaps

### 향후 개발
- **그룹 채팅**: 다자간 대화
- **음성/비디오**: 암호화된 통화
- **파일 공유**: 탈중앙화 저장소
- **스마트 계약**: 프로그래밍 가능한 이벤트

## 🎓 개발자용

### NOSTR 통합 시작하기
```javascript
// Flash NOSTR SDK 예시
import { NostrClient } from '@flash/nostr';

const client = new NostrClient();

// 이벤트 게시
await client.publish({
  kind: 1,
  content: 'Building on NOSTR with Flash!'
});

// 이벤트 구독
client.subscribe({
  kinds: [1],
  authors: ['pubkey...'],
  since: Math.floor(Date.now() / 1000)
});
```

### 모범 사례
1. **효율적인 쿼리**: 필터를 사용하여 대역폭 줄이기
2. **릴레이 관리**: 여러 릴레이에 연결
3. **오류 처리**: 네트워크 실패 처리
4. **사용자 경험**: 복잡성 숨기기

## 🌟 NOSTR를 선택하는 이유

### Flash에 대한 이점
- **검열 저항**: 메시지를 차단할 수 없음
- **사용자 제어**: 사용자가 데이터 소유
- **글로벌 도달**: 국경 없는 통신
- **비트코인 시너지**: 결제와 메시징 결합

### 사용자에 대한 이점
- **개인정보 보호**: 원하는 만큼만 공유
- **이동성**: 신원을 어디든 가져가기
- **복원력**: 플랫폼이 사라질 수 없음
- **혁신**: 새로운 기능과 앱

<div class="nostr-cta">
  <h2>NOSTR로 연결하기</h2>
  <p>Flash로 탈중앙화 소셜 네트워크 경험하기</p>
  <a href="/ko/guides/chat" class="btn-primary">보안 메시징 시작하기</a>
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
  
  .nostr-cta {
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .nostr-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .nostr-cta p {
    margin: 0 0 2rem 0;
    font-size: 1.1rem;
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