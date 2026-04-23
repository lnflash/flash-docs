---
title: Breez SDK
description: 개발자가 라이트닝 기반 앱을 쉽게 구축할 수 있도록 하는 Breez SDK와의 통합
---

## Breez SDK

Breez SDK는 개발자가 라이트닝 네트워크 기능을 애플리케이션에 쉽게 통합할 수 있도록 하는 오픈 소스 라이브러리입니다. Flash는 Breez SDK를 활용하여 원활하고 신뢰할 수 있는 라이트닝 경험을 제공합니다.

## ⚡ Breez SDK란?

Breez SDK는 라이트닝 네트워크의 복잡성을 추상화하여 개발자가 라이트닝 노드 관리의 세부 사항을 걱정하지 않고 훌륭한 사용자 경험을 구축하는 데 집중할 수 있도록 합니다.

### 주요 기능
- **비수탁형 라이트닝**: 사용자가 키를 제어
- **자동 채널 관리**: 복잡한 수동 설정 없음
- **내장 LSP**: 유동성 서비스 제공자 통합
- **크로스 플랫폼**: iOS, Android, 웹 지원

## 🏗️ 아키텍처

### SDK 구성 요소
```
┌─────────────────────────────┐
│      애플리케이션 계층       │
├─────────────────────────────┤
│        Breez SDK            │
├──────────┬─────────┬────────┤
│ Greenlight│   LSP   │ 백업  │
├──────────┴─────────┴────────┤
│     라이트닝 네트워크        │
└─────────────────────────────┘
```

### 핵심 모듈
1. **Greenlight**: 클라우드 기반 라이트닝 노드
2. **LSP (유동성 서비스 제공자)**: 자동 채널 개설
3. **백업 서비스**: 암호화된 상태 백업
4. **결제 처리**: 송수신 관리

## 💻 Flash 통합

### SDK 초기화
```kotlin
// Breez SDK 초기화
val config = BreezConfig(
    apiKey = "flash-api-key",
    network = Network.MAINNET,
    workingDir = context.filesDir.absolutePath
)

val sdk = BreezSDK.init(config)

// 노드 시작
sdk.start()
```

### 결제 수신
```kotlin
// 라이트닝 인보이스 생성
val invoice = sdk.receivePayment(
    amount = 10000, // 사토시
    description = "Coffee payment",
    expiry = 3600 // 초
)

// QR 코드 표시
displayQRCode(invoice.bolt11)
```

### 결제 전송
```kotlin
// 라이트닝 결제 전송
try {
    val payment = sdk.sendPayment(
        bolt11 = "lnbc...",
        amount = null // 인보이스의 금액 사용
    )
    println("Payment sent: ${payment.paymentHash}")
} catch (e: Exception) {
    println("Payment failed: ${e.message}")
}
```

## 🔧 고급 기능

### 1. 자동 채널 관리
Breez SDK는 채널을 자동으로 처리합니다:

```kotlin
// 채널 상태 모니터링
sdk.nodeInfo.observe { nodeInfo ->
    println("Channels: ${nodeInfo.channels.size}")
    println("Balance: ${nodeInfo.balance} sats")
    
    nodeInfo.channels.forEach { channel ->
        println("Channel ${channel.id}: ${channel.localBalance} sats")
    }
}
```

### 2. 온체인 스왑
라이트닝과 온체인 비트코인 간 전환:

```kotlin
// 온체인으로 스왑
val swapInfo = sdk.sendOnchain(
    amount = 100000,
    address = "bc1q...",
    feeRate = FeeRate.NORMAL
)

// 온체인에서 수신
val swapAddress = sdk.receiveOnchain()
println("Send BTC to: ${swapAddress.address}")
```

### 3. LNURL 지원
```kotlin
// LNURL 구문 분석 및 처리
when (val result = sdk.parseLNURL(lnurl)) {
    is LNURLPay -> {
        // 결제 처리
        sdk.payLNURL(
            data = result,
            amount = 1000,
            comment = "Great service!"
        )
    }
    is LNURLWithdraw -> {
        // 인출 처리
        sdk.withdrawLNURL(result)
    }
}
```

## 🌟 Flash의 혜택

### 신뢰성 향상
- **자동 재연결**: 네트워크 문제 처리
- **상태 복구**: 충돌 후 자동 복구
- **백업**: 암호화된 클라우드 백업
- **모니터링**: 실시간 상태 업데이트

### 사용자 경험
```javascript
// Flash의 Breez 통합
class FlashLightningService {
    constructor() {
        this.breez = new BreezSDK({
            config: flashConfig
        });
    }
    
    async quickPay(invoice) {
        // 단순화된 결제 플로우
        const result = await this.breez.pay(invoice);
        
        if (result.success) {
            this.showSuccessAnimation();
            this.updateBalance();
        }
        
        return result;
    }
}
```

## 📊 성능 메트릭

### 통합 결과
```
메트릭              Breez 이전   Breez 이후
-----------------  -----------  -----------
결제 성공률         85%          98%
평균 결제 시간      3.2초        1.1초
채널 실패          15%          2%
사용자 만족도      3.5/5        4.7/5
```

### 확장성
- **동시 사용자**: 노드당 10,000+
- **초당 거래**: 1,000+
- **채널 용량**: 자동 최적화
- **글로벌 도달**: 전 세계 LSP

## 🛠️ 개발자 도구

### 디버깅
```kotlin
// 로깅 활성화
BreezSDK.setLogLevel(LogLevel.DEBUG)

// 이벤트 모니터링
sdk.addEventListener { event ->
    when (event) {
        is PaymentSucceed -> log("Payment success: ${event.payment}")
        is PaymentFailed -> log("Payment failed: ${event.error}")
        is ChannelOpened -> log("Channel opened: ${event.channel}")
    }
}
```

### 테스팅
```kotlin
// 테스트 환경
val testConfig = BreezConfig(
    network = Network.TESTNET,
    apiKey = "test-key"
)

// 모의 결제
val mockPayment = MockBreezSDK.createPayment(
    amount = 1000,
    status = PaymentStatus.COMPLETE
)
```

## 🔐 보안 기능

### 키 관리
- **니모닉 생성**: BIP39 시드 문구
- **안전한 저장**: 장치 키체인 사용
- **키 파생**: BIP32 HD 지갑
- **백업 암호화**: 클라우드 백업용 AES

### 개인정보 보호
```kotlin
// 개인정보 보호 설정
val privacyConfig = PrivacyConfig(
    // 경로 찾기에서 IP 숨기기
    useTor = true,
    // 프라이빗 채널 사용
    privateChannels = true,
    // 분석 비활성화
    analytics = false
)

sdk.setPrivacyConfig(privacyConfig)
```

## 🌐 LSP 통합

### Breez LSP
Flash는 Breez의 LSP를 활용합니다:

1. **제로 구성 채널**: 자동 개설
2. **인바운드 유동성**: 즉시 수신
3. **동적 수수료**: 시장 기반 가격
4. **신뢰할 수 있는 라우팅**: 높은 성공률

### 맞춤형 LSP
```kotlin
// 맞춤형 LSP 구성
val lspConfig = LSPConfig(
    lspId = "flash-lsp",
    endpoint = "https://lsp.flash.app",
    token = "auth-token"
)

sdk.connectLSP(lspConfig)
```

## 📈 미래 개발

### 로드맵
Breez SDK와 Flash의 계획된 개선 사항:

1. **오프라인 수신**: 오프라인 상태에서 결제 수신
2. **다중 LSP**: 중복성을 위한 여러 LSP
3. **향상된 라우팅**: ML 기반 경로 최적화
4. **웹 어셈블리**: 브라우저 지원

### 실험적 기능
```kotlin
// 베타 기능 활성화
sdk.enableExperimentalFeatures(
    features = listOf(
        ExperimentalFeature.TRAMPOLINE_ROUTING,
        ExperimentalFeature.ASYNC_PAYMENTS,
        ExperimentalFeature.HOLD_INVOICES
    )
)
```

## 🎯 사용 사례

### 모바일 지갑
- **Flash 앱**: 메인 라이트닝 구현
- **즉시 온보딩**: 설정 없음
- **원활한 결제**: 기술적 세부 사항 숨김
- **자동 백업**: 사용자 자금 보호

### POS 시스템
```kotlin
// POS 통합
class FlashPOS(private val breezSDK: BreezSDK) {
    suspend fun createInvoice(amount: Long, item: String): Invoice {
        return breezSDK.receivePayment(
            amount = amount,
            description = "Purchase: $item",
            expiry = 600 // 10분
        )
    }
    
    fun monitorPayment(invoice: Invoice, onPaid: () -> Unit) {
        breezSDK.addEventListener { event ->
            if (event is PaymentReceived && 
                event.invoice.paymentHash == invoice.paymentHash) {
                onPaid()
            }
        }
    }
}
```

<div class="breez-cta">
  <h2>Breez SDK로 구축 시작</h2>
  <p>강력한 라이트닝 애플리케이션을 쉽게 만드세요</p>
  <div class="cta-buttons">
    <a href="https://sdk.breez.technology" class="btn-primary">문서 보기</a>
    <a href="/ko/development" class="btn-secondary">통합 가이드</a>
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
  
  .breez-cta {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .breez-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .breez-cta p {
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
    color: #06b6d4;
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
</style>