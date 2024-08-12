<h1 align="center">
  반응형 웹 포트폴리오
</h1>
  
<h2 align="center">
  <img src="https://github.com/user-attachments/assets/9cd99301-ce86-4cec-9cb2-81a227985e0f" alt="logo" width="300"/>
  <br>
  <br>
</h2>

<h3 align="center">• 배포 URL: <a href="https://www.kmscv.dev" target="_blank">https://www.kmscv.dev</a></h3>

<br>

## 프로젝트 소개
- 1인 프로젝트로, 기획부터 디자인, 개발, 배포까지 모든 과정을 직접 수행했습니다.
- 평소 배우고 싶었던 웹 기술을 활용해 만든 반응형 웹 포트폴리오입니다.
  
<br>

## 주요 개발 기능
- Next.js, TypeScript, Tailwind CSS 등을 활용한 다크 모드 및 반응형 사이트 구현
- 한국어와 영어 국제화 적용, SSR 적용 및 SEO 최적화, Three.js (R3F)와 GSAP를 활용한 스크롤 애니메이션 구현
- 커스텀 마우스 효과와 다양한 UI 상호작용을 Zustand를 활용해 전역 상태로 관리
- React-Hook-Form과 reCAPTCHA를 이용한 폼 데이터 검증 및 스팸 방지 기능 구현
- React Error Boundary를 통해 선언적으로 에러를 통제하고 Sentry에 오류를 보고하도록 구현
- nodemailer 이용한 메일 전송 기능
- 빠른 연락을 위한 채널톡 추가

  <br>

## 개발 내용
#### 개발 기간: 2024.07 - 2024.-08
#### 사용한 기술 스택
  - **코어**: Next.js, TypeScript
  - **스타일링 및 애니메이션**: Tailwind CSS, GSAP
  - **3D 그래픽**: Three.js (R3F)
  - **패키지 매니저**: Bun
  - **빌드 도구**: SWC
  - **배포**: Vercel
  - **에러 추적 및 분석**: Sentry, GA4
  - **폼 관리 및 유효성 검사**: React-Hook-Form
  - **보안 및 스팸 방지**: reCAPTCHA
  - **전역 상태 관리**: Zustand
  - **국제화(i18n)**: next-international
  - **검색 엔진 최적화(SEO)**
    
#### 브랜치 전략
  - Git Flow 전략을 기반으로 `main`, `develop` 브랜치 운용
  - 기능 개발은 `develop` 브랜치에서 진행하며, 충분히 테스트된 후 `main` 브랜치로 병합하여 배포

#### 트러블슈팅(troubleshooting)
웹 접근성 및 Lighthouse 점수를 60점에서 90점 이상 향상

- next/image 컴포넌트를 활용하여 이미지 최적화 및 지연 로딩 적용, 적절한 이미지 포맷을 사용하여 초기 로딩 속도 개선
- Vercel CDN을 사용해 네트워크 지연 시간 최소화
- react-three-fiber(R3F)와 Suspense, useLoader, @react-three/drei의 useProgress 훅을 활용해 3D 모델의 지연 로딩 구현, 초기 렌더링 성능 향상 및 사용자 경험 개선

| Lighthouse 개선 전 |
|----------|
| <img src="https://github.com/user-attachments/assets/449b181f-f4a3-46fc-b1ad-84e0db7d5826" alt="Lighthouse 개선 전"> |

| Lighthouse 개선 후 |
|----------|
| <img src="https://github.com/user-attachments/assets/1245a3e9-5ad5-4b35-a1ef-f826a1f0b8c5" alt="Lighthouse 개선 후"> |

<br>
<br>

## 기능 설명


| 국제화(i18n), 반응형 디자인, 다크 모드(테마 선택) 기능 |
|----------|
| <img src="https://github.com/user-attachments/assets/b6f1fa94-ce21-4418-8735-7e11da17d5e3" alt="국제화(i18n), 반응형 디자인, 다크 모드(테마 선택) 기능"> |

| 3D 애니메이션 및 메인페이지 |
|----------|
| <img src="https://github.com/user-attachments/assets/cf9d8936-8a3b-4a21-b479-a365941e7bb1" alt="3D 애니메이션 및 메인페이지"> |

| 이메일 폼 데이터 검증 및 메일 주소 복사 애니메이션 |
|----------|
| <img src="https://github.com/user-attachments/assets/890fdaf4-d57e-4e4f-baa3-0c1e553d736d" alt="이메일 폼 데이터 검증 및 메일 주소 복사 애니메이션"> |

| 채널톡 및 스크롤 버튼 |
|----------|
| <img src="https://github.com/user-attachments/assets/8717f686-372b-43a1-a151-0b58b3a5e4d8" alt="채널톡 및 스크롤 버튼"> |
