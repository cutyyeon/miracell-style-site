# 작업 현황 (2026-09-23 기준)

미라셀(miracell.co.kr) 스타일을 참고해 만드는 정적 사이트. 이 저장소를 여는 어떤 Claude 세션이든
이 파일부터 읽으면 대화 기록 없이도 바로 이어서 작업할 수 있습니다.

## 참고 자료
- 원본 참고 사이트: https://www.miracell.co.kr/kr/
- 레이아웃 설계 문서(Claude Docs): "미라셀 스타일 사이트 레이아웃 설계" — 8개 섹션 명세 + 디자인 토큰
- Figma 데스크톱 목업: https://www.figma.com/design/4eu3EumvfBoo1ouvlVg2AH/Untitled?node-id=0-1
  - 파일 내 `main` 프레임(1920px)에 8개 섹션 전부 구현 완료
  - 컬러 변수 컬렉션 "Miracell Colors" 생성됨 (primary/black/white/text/gray/border/surface)
  - **폰트 대체**: 원래 한글 폰트는 Pretendard인데 이 Figma 환경에 설치되어 있지 않아 **Noto Sans KR로 대체**함.
    영문/숫자는 원래 계획대로 Outfit 사용. 나중에 Pretendard 설치되면 일괄 교체 필요.
  - 같은 파일에 iPad Pro / Android Compact 프레임이 있으나 **아직 비어있음** (반응형 작업 안 함)

## 코드 구현 상태 (index.html / css/style.css / js/main.js)
8개 섹션(헤더/히어로/About/Service/Product/News/Contact/푸터) 구조는 HTML+CSS로 거의 다 구현됨.
실제 CSS 수치(root font-size 12px 기준 rem→px 환산값)는 `css/style.css` 상단 `:root` 변수 참고.

### 지금 바로 처리 가능한 것 (실제 콘텐츠 없어도 됨)
- [ ] About 통계 숫자 카운트업 애니메이션 (JS 미구현, `js/main.js`는 헤더 스크롤 토글만 있음)
- [ ] 푸터 Family Site 드롭다운 열고 닫기 (버튼만 있고 JS 없음)
- [ ] Product 캐러셀 드래그 스크롤 개선 (현재 기본 가로 스크롤만)
- [ ] Figma 파일의 iPad/Android 프레임에 반응형 레이아웃 채우기

### 실제 콘텐츠 필요 (사용자 확인 필요)
- [ ] 회사명 확정 ("CELLBIO"는 임시 placeholder)
- [ ] 로고 파일, 회사 소개 문구
- [ ] 히어로 두 번째 배경 이미지 (`img/hero-02.jpg` 없어서 크로스페이드 비활성 상태 — `css/style.css` 226번 줄 주석 참고)
- [ ] Service 카드 3개 배경 이미지, Product 제품 이미지 6개+
- [ ] 실제 뉴스/공지 항목, 통계 수치(창립일/제휴 병원/특허 등 현재는 예시값)

## 배포
GitHub Pages로 서빙 중: https://cutyyeon.github.io/miracell-style-site/
(레포: `cutyyeon/miracell-style-site`, main 브랜치)
