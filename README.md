# AKC · Arise Korea Camp 홈페이지

- **사이트 주소**: https://intoedu.github.io/AKC/
- **형태**: 정적 사이트 (HTML · CSS · JS), 빌드 과정 없음
- **배포**: GitHub Pages (`main` 브랜치 / 루트). `main`에 push하면 1~2분 뒤 자동 반영
- **캠프 안내 문서**: [2027-겨울캠프-안내.md](2027-겨울캠프-안내.md)

---

## 메뉴 구조

| 대메뉴 | 세부메뉴 | 세부세부메뉴 |
|---|---|---|
| **소개** | AKC 소개 · 캠프 대표 프로그램 | - |
| **캠프** | 영성 캠프 | 연합 캠프 · 청소년 캠프 · 청년 캠프 |
| **소식 · 안내** | 공지 · 소식 · 오시는 길 · 자주 묻는 질문 | - |

- **홈**: 왼쪽 위 로고를 누르면 메인으로 이동 (별도 메뉴 없음)
- **신청 · 문의하기**: 오른쪽 위 노란 버튼 → 신청 · 문의 페이지

### 숨김 처리한 메뉴
메뉴 · 링크 · 페이지 본문을 **주석으로 가려 둔** 상태입니다. 주소로 직접 들어오면 헤더와 푸터만 보입니다.

| 메뉴 | 페이지 | 다시 열 시점 |
|---|---|---|
| 캠프 → **영역 캠프** (수학 캠프 · 과학 캠프) | camp-field · camp-field-math · camp-field-science | 영역 캠프 운영 시 (문구 검토 필요) |
| 소식 · 안내 → **갤러리** | gallery | 2027 겨울 5~7차 캠프 사진 게시 시 |

---

## 페이지와 주소

주소에는 `.html`을 붙이지 않습니다. (예: `/about.html` 대신 `/about`)

| 파일 | 주소 | 내용 |
|---|---|---|
| `index.html` | `/` | 메인 |
| `about.html` | `/about` | AKC 소개 |
| `about-program.html` | `/about-program` | 캠프 대표 프로그램 (3가지 시그니처 · 스마트처치) |
| `camp-spirit.html` | `/camp-spirit` | 영성 캠프 |
| `camp-spirit-union.html` | `/camp-spirit-union` | 연합 캠프 |
| `camp-spirit-youth.html` | `/camp-spirit-youth` | 청소년 캠프 |
| `camp-spirit-young.html` | `/camp-spirit-young` | 청년 캠프 |
| `news.html` | `/news` | 공지 · 소식 |
| `location.html` | `/location` | 오시는 길 |
| `faq.html` | `/faq` | 자주 묻는 질문 |
| `contact.html` | `/contact` | 신청 · 문의하기 |
| `camp-field*.html` · `gallery.html` | - | 숨김 (위 표 참고) |

## 폴더 구조

```
assets/
  css/style.css          전체 디자인
  js/site.js             공통 헤더 · 푸터 · 메뉴(MENU), 스크롤 효과, 하단 사진 지연 로딩
  img/
    logo-mark.png        헤더 · 푸터 로고 (투명 배경, 219x78)
    logo.png             로고 원본 (1250x1250)
    favicon.png          파비콘 (180x180)
    og.png               공유 미리보기 이미지 (1200x630)
    posters/             포스터 (poster-5-7 · past-1-3 · past-math)
    site/                사이트 사진 (데스크톱용 / 파일명 끝 -m 은 휴대폰용)
2027-겨울캠프-안내.md    캠프 안내 문서
```

**저장소에 올리지 않는 파일** (`.gitignore`)
- `assets/img/photos/` — 현장 사진 원본
- `assets/img/posters/AKC 홈페이지 포스터/` — 포스터 원본 PNG
- `assets/img/favicon-original.png` — 파비콘 원본
- `.claude/` — 로컬 작업 도구

---

## 자주 하는 수정

### 메뉴
`assets/js/site.js` 맨 위 `MENU` 배열만 고치면 모든 페이지의 상단 메뉴와 모바일 메뉴에 반영됩니다.
푸터 링크는 같은 파일의 `footerHTML`에 있습니다.

### 숨긴 메뉴 다시 열기
1. 파일에서 `[숨김]`을 검색해 주석을 풀어 주세요. (`site.js`의 메뉴 · 푸터, 해당 페이지의 본문)
2. **영역 캠프 페이지**는 주석이 겹치지 않도록 본문 안의 주석 기호를 `<!~~ ~~>`로 바꿔 두었습니다. 주석을 풀 때 원래 HTML 주석 기호로 되돌려 주세요.

### 신청 버튼
- 사이트의 신청 버튼(헤더의 **신청 · 문의하기**, 각 페이지의 **신청서 작성**)은 모두 `/contact`로 연결됩니다.
- 실제 신청서(syuchi)로 가는 버튼은 `contact.html`의 `id="applyBtn"` 하나입니다.

```html
<a class="btn btn-y" id="applyBtn" href="(syuchi 행사 페이지 주소)" target="_blank" rel="noopener"
   data-open="2026-09-18T08:00:00+09:00" data-close="2026-12-28T23:59:59+09:00">신청서 작성하기</a>
```

- `data-open` ~ `data-close`(한국 시간) 사이에만 syuchi로 이동합니다.
  - 기간 전: 버튼이 흐려지고 "신청서는 9월 18일(금) 오전 8시에 열립니다" 안내
  - 기간 후: "신청 마감"으로 바뀌고 이동하지 않음
- 신청 기간이 바뀌면 이 두 값과 아래 문구들을 함께 고쳐 주세요.

### 일정 · 신청 기간 · 모집 인원 · 참가비 문구 위치
정보가 바뀌면 아래 페이지를 모두 확인해 주세요.
`index.html`(첫 화면 · 일정 표) · `camp-spirit.html` · `camp-spirit-union.html` · `camp-spirit-youth.html` · `camp-spirit-young.html` · `news.html`(공지) · `faq.html` · `contact.html` · `location.html` · `2027-겨울캠프-안내.md`

### 공지 추가
`news.html`의 목록(`class="nlist"`)에 `<li>` 한 줄을 복사해 넣고, 필요하면 위쪽 공지 카드를 고쳐 주세요.

### 포스터
`assets/img/posters/`에 **같은 파일 이름**으로 덮어쓰면 바로 바뀝니다. 웹용으로 가로 1000px 안팎의 JPG를 권장합니다.

### 사이트 사진
- **초상권 기준**: 얼굴이 드러나지 않는 뒷모습 · 실루엣 · 손 사진만 사용하고, 사진에 시기나 회차를 적지 않습니다.
- **처리**: 흑백 + 어두운 막. 페이지 상단 · 메인 하단 배경은 흐림을 **사진 파일에 미리** 적용합니다. (CSS 흐림 효과는 느려져서 사용하지 않음)
- **두 가지 크기가 필요합니다.**

| 위치 | 데스크톱용 | 휴대폰용 |
|---|---|---|
| 메인 첫 화면 | `site/hero.jpg` 1600x1067 | `site/hero-m.jpg` 720x960 |
| 메인 하단 | `site/band-together.jpg` 1600x760 | `site/band-together-m.jpg` 720x780 |
| 페이지 상단 (6곳) | `site/ph-이름.jpg` 1600x640 | `site/ph-이름-m.jpg` 780x520 |
| 시그니처 카드 | `site/sig-이름.jpg` 900x563 | (한 크기) |

- 파일 이름을 바꾸면 `style.css`의 배경 사진 경로와, 각 페이지 `<head>`의 `rel="preload"` 경로도 함께 바꿔야 합니다.

### OG 공유 이미지
1. `assets/img/og.png`를 교체합니다. (1200x630)
2. 모든 페이지의 `og:image` · `twitter:image` 주소 끝 `?v=` 숫자를 하나 올립니다. (예: `og.png?v=2` → `og.png?v=3`)
3. 카카오톡은 https://developers.kakao.com/tool/clear/og 에서 사이트 주소를 초기화해야 새 이미지가 보입니다.

### 색상
`assets/css/style.css` 맨 위 `:root`의 `--yellow`(#ffff55), `--mint`(#33ebb5), `--black`(#000000) 등.

---

## 속도 관련 규칙
처음 방문하는 휴대폰(4G) 기준으로 측정해 개선한 구조입니다. 수정할 때 아래를 유지해 주세요.

- **폰트**: 프리텐다드는 각 페이지 `<head>`의 `<link>`로 불러옵니다. CSS 안에서 `@import`로 불러오지 마세요.
  - 폰트에서 필요한 글자만 잘라 쓰는 방식은 Pretendard 라이선스(예약된 글꼴 이름 조항) 때문에 사용하지 않습니다.
- **첫 화면 사진**: 각 페이지 `<head>`의 `rel="preload"`로 먼저 받고, 휴대폰에는 `-m` 사진을 씁니다.
- **메인 하단 사진**: 스크롤해서 가까이 왔을 때 받습니다. (`site.js`가 `bg-in` 클래스를 붙임)
- **헤더 · 푸터**: `site.js`가 페이지 맨 아래에서 바로 그립니다. 스크립트 위치를 `<head>`로 옮기지 마세요.

---

## 로컬에서 미리 보기

`.html` 없는 주소(`/about` 등)를 지원하는 정적 서버가 필요합니다.

```bash
npx serve .
```

브라우저에서 표시되는 주소(기본 http://localhost:3000)로 접속합니다.
