---
title: 기여하기
description: Flash 생태계에 기여하고 비트코인 결제의 미래를 함께 만들어가는 방법을 알아보세요
---

# Flash에 기여하기

Flash는 오픈 소스와 커뮤니티 주도 개발의 힘을 믿습니다. 개발자, 디자이너, 작가, 비트코인 애호가 등 누구든지 Flash를 개선하는 데 도움을 줄 수 있는 방법이 있습니다.

## 🤝 기여가 중요한 이유

오픈 소스 프로젝트는 다음과 같은 커뮤니티의 기여로 번창합니다:
- **다양한 관점**: 다른 배경이 더 나은 솔루션으로 이어집니다
- **빠른 혁신**: 더 많은 기여자가 더 빠른 개발을 의미합니다
- **품질 향상**: 더 많은 검토자가 더 나은 코드를 만듭니다
- **커뮤니티 소유권**: 사용자가 제품을 형성하는 데 도움을 줍니다

## 📝 기여 방법

### 1. 코드 기여

#### 시작하기
```bash
# 저장소 포크
git clone https://github.com/YOUR_USERNAME/flash
cd flash

# 의존성 설치
npm install

# 기능 브랜치 생성
git checkout -b feature/your-feature-name

# 변경 사항 만들기
# ... 코드 편집 ...

# 테스트 실행
npm test

# 변경 사항 커밋
git add .
git commit -m "feat: 설명적인 커밋 메시지 추가"

# 포크에 푸시
git push origin feature/your-feature-name
```

#### 코드 표준
- **TypeScript**: 모든 새 코드에 타입 안전성 사용
- **테스트**: 모든 새 기능에 대한 단위 테스트 작성
- **린팅**: ESLint 규칙 따르기
- **문서화**: 코드 주석 및 README 업데이트

#### Pull Request 프로세스
1. 명확한 설명과 함께 PR 생성
2. 변경 사항이 해결하는 문제 참조
3. 모든 테스트가 통과하는지 확인
4. 코드 검토 피드백에 응답
5. 유지 관리자가 병합 처리

### 2. 문서 개선

좋은 문서는 성공적인 프로젝트에 필수적입니다:

#### 문서가 필요한 영역
- **사용자 가이드**: 단계별 튜토리얼
- **API 참조**: 상세한 기술 문서
- **예제**: 실제 사용 사례
- **번역**: 다른 언어로 문서 작성

#### 문서 작성 팁
- **명확하고 간결하게**: 간단한 언어 사용
- **예제 포함**: 코드 샘플과 스크린샷 표시
- **구조화**: 논리적인 제목과 섹션 사용
- **정확성**: 모든 정보가 최신인지 확인

### 3. 버그 보고

버그를 발견하셨나요? 보고해 주세요!

#### 좋은 버그 보고서 작성 방법
```markdown
## 버그 설명
버그에 대한 명확하고 간결한 설명

## 재현 단계
1. '...'로 이동
2. '...'를 클릭
3. '...'까지 스크롤
4. 오류 확인

## 예상 동작
예상했던 일에 대한 명확하고 간결한 설명

## 스크린샷
해당하는 경우 문제 설명에 도움이 되는 스크린샷 추가

## 환경
- OS: [예: iOS]
- 브라우저: [예: chrome, safari]
- 버전: [예: 22]

## 추가 컨텍스트
여기에 문제에 대한 다른 컨텍스트 추가
```

### 4. 기능 제안

Flash를 개선하기 위한 아이디어가 있으신가요?

#### 기능 제안 템플릿
```markdown
## 문제
해결하려는 문제에 대한 명확한 설명

## 제안된 솔루션
원하는 일에 대한 명확하고 간결한 설명

## 대안
고려한 대체 솔루션이나 기능 설명

## 추가 컨텍스트
기능 요청에 대한 컨텍스트나 스크린샷 추가
```

### 5. 커뮤니티 지원

#### 다른 사용자 돕기
- 포럼에서 질문 답변
- Discord에서 지원 제공
- 지식과 경험 공유
- 신규 사용자 환영

#### 콘텐츠 생성
- 튜토리얼 비디오 작성
- 블로그 게시물 작성
- 인포그래픽 디자인
- 팟캐스트 에피소드 녹음

### 6. 테스트

#### 베타 테스트
- 새로운 기능 테스트
- 다양한 환경에서 피드백 제공
- 엣지 케이스 보고
- 사용성 개선 제안

#### 자동화된 테스트
- 단위 테스트 작성
- 통합 테스트 추가
- 테스트 커버리지 개선
- CI/CD 파이프라인 유지

### 7. 디자인 기여

#### UI/UX 개선
- 사용자 인터페이스 모형 생성
- 사용자 경험 개선 제안
- 접근성 향상
- 모바일 반응성 최적화

#### 그래픽 자산
- 아이콘과 일러스트레이션 디자인
- 마케팅 자료 생성
- 브랜드 가이드라인 개선
- 애니메이션과 상호작용 생성

## 🛠️ 개발 설정

### 전제 조건
- Node.js 16+
- Git
- TypeScript 지식
- 비트코인/라이트닝 기본 이해

### 로컬 환경
```bash
# 저장소 클론
git clone https://github.com/flash/flash
cd flash

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env를 편집하여 설정 추가

# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 프로덕션 빌드
npm run build
```

## 📋 기여 가이드라인

### 행동 강령
- **존중하기**: 모든 기여자를 존중으로 대하기
- **포용적이기**: 모두를 환영하는 환경 만들기
- **건설적이기**: 유용한 피드백 제공
- **전문적이기**: 높은 표준 유지

### 커밋 규칙
Conventional Commits를 따릅니다:
- `feat:` 새로운 기능
- `fix:` 버그 수정
- `docs:` 문서 변경
- `style:` 포맷팅, 세미콜론 누락 등
- `refactor:` 버그를 수정하거나 기능을 추가하지 않는 코드 변경
- `test:` 테스트 추가
- `chore:` 빌드 프로세스 변경 등

### 코드 검토
모든 기여는 검토됩니다:
- **품질**: 코드가 표준을 충족하는가?
- **테스트**: 변경 사항이 테스트되었는가?
- **문서**: 업데이트가 문서화되었는가?
- **영향**: 변경이 기존 기능을 깨뜨리는가?

## 🎯 우선순위 영역

### 현재 집중 분야
1. **라이트닝 통합**: 라이트닝 네트워크 지원 개선
2. **모바일 최적화**: 모바일 경험 향상
3. **API 확장**: 더 많은 API 엔드포인트 추가
4. **보안 강화**: 보안 기능 강화
5. **성능**: 속도와 효율성 최적화

### 도움이 필요한 곳
- **번역**: 더 많은 언어 지원
- **문서**: 개선된 가이드와 튜토리얼
- **테스트**: 더 나은 테스트 커버리지
- **접근성**: WCAG 준수
- **통합**: 타사 서비스 연결

## 🏆 기여자 인정

우리는 기여자를 인정합니다:
- **기여자 명예의 전당**: 웹사이트에 표시
- **특별 배지**: Discord와 포럼에서
- **조기 접근**: 새로운 기능에
- **의사 결정**: 프로젝트 방향에 대한 의견
- **상품**: 주요 기여자를 위한

## 📚 리소스

### 학습 자료
- [Flash 아키텍처 가이드](https://docs.flash.xyz/architecture)
- [비트코인 개발자 가이드](https://developer.bitcoin.org)
- [라이트닝 네트워크 문서](https://docs.lightning.engineering)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs)

### 커뮤니티 채널
- **GitHub 토론**: 기술적 논의
- **Discord**: 실시간 채팅과 지원
- **포럼**: 심층 논의
- **Twitter**: 업데이트와 공지

### 유용한 도구
- **개발 도구**: VS Code, Git, Docker
- **테스트 도구**: Jest, Cypress, Postman
- **디자인 도구**: Figma, Sketch, Adobe XD
- **커뮤니케이션**: Discord, Slack, Telegram

## 🤔 자주 묻는 질문

### 프로그래밍을 모르는데 기여할 수 있나요?
물론입니다! 문서 작성, 디자인, 테스트, 커뮤니티 지원, 번역 등 코딩이 아닌 많은 방법으로 기여할 수 있습니다.

### 어디서부터 시작해야 하나요?
GitHub 이슈에서 "good first issue" 태그가 있는 것을 찾아보세요. 이는 새로운 기여자에게 적합한 작업입니다.

### 도움이 필요하면 어떻게 하나요?
Discord에 참여하거나 GitHub 토론에 질문을 게시하세요. 커뮤니티가 기꺼이 도와드립니다!

### 내 기여가 수락될까요?
품질 가이드라인을 따르고 건설적인 피드백에 대응한다면 기여가 고려될 것입니다. 주요 변경 사항은 작업을 시작하기 전에 먼저 논의하세요.

<div class="contribute-cta">
  <h2>오늘 기여를 시작하세요!</h2>
  <p>모든 기여는 작든 크든 차이를 만듭니다</p>
  <div class="cta-buttons">
    <a href="https://github.com/flash/flash" class="btn-primary">GitHub 보기</a>
    <a href="https://discord.gg/flash" class="btn-secondary">Discord 참여</a>
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
  
  pre code {
    background: none;
    color: inherit;
    padding: 0;
  }
  
  .contribute-cta {
    background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  
  .contribute-cta h2 {
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  .contribute-cta p {
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
    color: #8b5cf6;
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