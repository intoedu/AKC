# AKC · Arise Korea Camp 홈페이지

- **사이트 주소**: https://intoedu.github.io/AKC/
- **형태**: 정적 사이트 (HTML · CSS · JS), 빌드 과정 없음
- **배포**: GitHub Pages (`main` 브랜치 / 루트). `main`에 push하면 1~2분 뒤 자동 반영
- **캠프 안내 문서**: [2027-겨울캠프-안내.md](2027-겨울캠프-안내.md)

### 두 홈페이지를 하나로 합친 버전입니다 (2026. 10.)

| 가져온 것 | 출처 |
|---|---|
| 구조 · 페이지 · 메뉴 · 문구 · 신청 경로(syuchi) · 포스터 · 로고 | 기존 AKC 홈페이지 (`intoedu/AKC`) |
| 색감 · 폰트 · 디자인 · 현장 사진 | REBUILD 홈페이지 (`intoedu/AKC-HOMEPAGE`) |

두 사이트 내용이 서로 다를 때는 **기존 AKC 홈페이지 쪽을 따랐습니다.** 캠프 장소는 **태안수양관**으로 통일합니다.

---

## 메뉴 구조

| 대메뉴 | 세부메뉴 | 세부세부메뉴 |
|---|---|---|
| **소개** | AKC 소개 · 캠프 대표 프로그램 | - |
| **캠프** | 영성 캠프 | 연합 캠프 · 청소년 캠프 · 청년 캠프 |
| **소식 · 안내** | 공지 · 소식 · 갤러리 · 오시는 길 · 자주 묻는 질문 | - |

- **홈**: 왼쪽 위 로고를 누르면 메인으로 이동 (별도 메뉴 없음)
- **신청 · 문의하기**: 오른쪽 위 노란 버튼 → 신청 · 문의 페이지
- **휴대폰**: 화면 아래에 **캠프 신청하기** 버튼이 늘 떠 있습니다 (신청 · 문의 페이지에서는 숨김)

### 숨김 처리한 메뉴
메뉴 · 링크 · 페이지 본문을 **주석으로 가려 둔** 상태입니다. 주소로 직접 들어오면 헤더와 푸터만 보입니다.

| 메뉴 | 페이지 | 다시 열 시점 |
|---|---|---|
| 캠프 → **영역 캠프** (수학 캠프 · 과학 캠프) | camp-field · camp-field-math · camp-field-science | 영역 캠프 운영 시 (문구 검토 필요) |

---

## 페이지와 주소

주소에는 `.html`을 붙이지 않습니다. (예: `/about.html` 대신 `/about`)

| 파일 | 주소 | 내용 |
|---|---|---|
| `index.html` | `/` | 메인 (캠프의 순간들 사진 띠 포함) |
| `about.html` | `/about` | AKC 소개 · 지난 캠프 기록(포스터) |
| `about-program.html` | `/about-program` | 캠프 대표 프로그램 (3가지 시그니처 · 스마트처치) |
| `camp-spirit.html` | `/camp-spirit` | 영성 캠프 |
| `camp-spirit-union.html` | `/camp-spirit-union` | 연합 캠프 |
| `camp-spirit-youth.html` | `/camp-spirit-youth` | 청소년 캠프 |
| `camp-spirit-young.html` | `/camp-spirit-young` | 청년 캠프 |
| `news.html` | `/news` | 공지 · 소식 |
| `gallery.html` | `/gallery` | 갤러리 (누르면 크게 보기) |
| `location.html` | `/location` | 오시는 길 (태안수양관 사진 · 지도) |
| `faq.html` | `/faq` | 자주 묻는 질문 |
| `contact.html` | `/contact` | 신청 · 문의하기 |
| `camp-field*.html` | - | 숨김 (위 표 참고) |

캠프 페이지 4곳(영성 · 연합 · 청소년 · 청년)에는 **더 뜨거워지는 캠프**(지난 캠프 포스터 + 현장 사진 4장)가 있습니다. 페이지마다 사진을 다르게 넣었습니다.

## 폴더 구조

```
assets/
  css/style.css          전체 디자인 (색 · 폰트 · 레이아웃)
  js/site.js             공통 헤더 · 푸터 · 메뉴(MENU), 휴대폰 하단 신청 버튼,
                         사진 크게 보기, 사진 띠 끌어 넘기기, 스크롤 효과
  img/
    logo-mark.png        헤더 · 푸터 로고 (투명 배경, 219x78)
    logo.png             로고 원본 (1250x1250)
    favicon.png          파비콘 · 홈 화면 아이콘 (180x180)
    og.png               공유 미리보기 이미지 (1200x630)
    posters/             포스터 (poster-5-7 · past-1-3 · past-math)
    site/                배경 · 카드 사진 (데스크톱용 / 파일명 끝 -m 은 휴대폰용)
    gallery/             갤러리 사진 (이름-600.jpg 작은 것 / 이름-1200.jpg 큰 것)
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
- 사이트의 신청 버튼(헤더의 **신청 · 문의하기**, 휴대폰 하단 **캠프 신청하기**, 각 페이지의 **신청서 작성**)은 모두 `/contact`로 연결됩니다.
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

### 갤러리 사진 추가
1. 사진을 가로 **600px**(목록용)과 **1200px**(크게 보기용) 두 장의 JPG로 만들어 `assets/img/gallery/`에 넣습니다. (예: `camp5-worship-600.jpg`, `camp5-worship-1200.jpg`)
2. `gallery.html`의 `<figure ...>` 한 줄을 복사해 파일 이름과 이름표(`figcaption`)만 바꿉니다.
3. 세로 사진은 `class="rv tall"`로 두면 두 칸 높이로 보입니다.

메인의 **캠프의 순간들** 사진 띠(`index.html`)도 같은 방식입니다. (`hitem w` 가로 사진 / `hitem t` 세로 사진)

### 사이트 사진
- **사진 고르는 기준** (REBUILD 홈페이지 기준을 그대로 따릅니다)
  - **쓰는 것**: 정면을 보는 얼굴, 웃는 표정, 활동 중인 모습, 평범한 옷차림
  - **쓰지 않는 것**: 우는 사진, 고개 숙인 사진, 감정을 자극하려는 구도
  - **명찰 · 이름표**: 이름과 나이가 읽히는 사진은 올리지 않습니다. 미성년자의 실명이 검색엔진에 색인됩니다. 가리거나 잘라서 쓰세요.
  - **얼굴이 크게 나온 사진**: 본인 · 보호자 동의를 받은 사진인지 확인해 주세요.
  - **포스터**: 계좌번호 · 담당자 개인 연락처 · 스태프 참가비가 인쇄된 포스터는 공개해도 되는 정보인지 먼저 확인해 주세요. (현재 5~7차 포스터에는 입금 계좌와 대표 연락처가 인쇄되어 있습니다)
  - 공개 저장소이고 검색엔진에 그대로 색인됩니다.
- **처리**: 사진은 **컬러 그대로** 씁니다. 글자가 올라가는 배경 사진은 CSS로 차콜 막을 덮어 읽기 쉽게 합니다. 사진 파일에는 위치 정보(EXIF)를 남기지 않습니다.
- **크기** (배경 사진은 데스크톱용과 휴대폰용 두 가지가 필요합니다)

| 위치 | 데스크톱용 | 휴대폰용 |
|---|---|---|
| 메인 첫 화면 | `site/hero.jpg` 가로 1600 이하 | `site/hero-m.jpg` 720x960 안팎 |
| 메인 하단 | `site/band-together.jpg` 1600x760 | `site/band-together-m.jpg` 720x780 |
| 페이지 상단 (11곳) | `site/ph-이름.jpg` 1600x640 | `site/ph-이름-m.jpg` 780x520 |
| 시그니처 · 캠프 카드 | `site/sig-이름.jpg` · `site/card-이름.jpg` 900x563 | (한 크기) |
| 오시는 길 | `site/location.jpg` 1200x900 | (한 크기) |
| 갤러리 · 사진 띠 | `gallery/이름-600.jpg` | `gallery/이름-1200.jpg` (크게 보기) |

- 페이지 상단 사진: `about` `program` `spirit` `union` `youth` `young` `news` `gallery` `location` `faq` `contact`
- 파일 이름을 바꾸면 `style.css`의 배경 사진 경로와, 각 페이지 `<head>`의 `rel="preload"` 경로도 함께 바꿔야 합니다.

### OG 공유 이미지
1. `assets/img/og.png`를 교체합니다. (1200x630)
2. 모든 페이지의 `og:image` · `twitter:image` 주소 끝 `?v=` 숫자를 하나 올립니다. (예: `og.png?v=2` → `og.png?v=3`)
3. 카카오톡은 https://developers.kakao.com/tool/clear/og 에서 사이트 주소를 초기화해야 새 이미지가 보입니다.

### 색상
`assets/css/style.css` 맨 위 `:root`에서 바꿉니다. 색은 `--*-rgb` 채널 한 곳에서만 정합니다.

| 이름 | 색 | 쓰는 곳 |
|---|---|---|
| `--ink-rgb` | #1A1A1A 차콜 | 전체 배경 |
| `--ink-2-rgb` · `--ink-3-rgb` | #242424 · #2E2E2E | 카드 · 패널 · hover |
| `--accent-hot-rgb` | #F4E04D 형광 옐로우 | 신청 버튼 · 강조 |
| `--accent-hot-2-rgb` | #3ED9B4 민트 | 보조 강조 · 번호 |
| `--accent-calm-rgb` · `--accent-calm-2-rgb` | #C9A961 골드 · #6FA89A 세이지 | 부모님이 보시는 구역(후기 · 오시는 길 · 자주 묻는 질문)의 차분한 강조 — 섹션에 `tone-calm` 클래스 |

강조색 위 글자는 차콜만 씁니다. (흰 글자는 대비가 부족합니다)

### 폰트
- **제목**: Do Hyeon / **본문**: Noto Sans KR (둘 다 Google Fonts, SIL Open Font License)
- 각 페이지 `<head>`의 `<link>`로 불러옵니다. CSS 안에서 `@import`로 불러오지 마세요.

---

## 속도 관련 규칙
처음 방문하는 휴대폰(4G) 기준으로 맞춘 구조입니다. 수정할 때 아래를 유지해 주세요.

- **첫 화면 사진**: 각 페이지 `<head>`의 `rel="preload"`로 먼저 받고, 휴대폰에는 `-m` 사진을 씁니다.
- **메인 하단 사진**: 스크롤해서 가까이 왔을 때 받습니다. (`site.js`가 `bg-in` 클래스를 붙임)
- **카드 · 갤러리 사진**: `loading="lazy"`로 화면 가까이 왔을 때 받고, `srcset`으로 화면에 맞는 크기만 받습니다.
- **헤더 · 푸터**: `site.js`가 페이지 맨 아래에서 바로 그립니다. 스크립트 위치를 `<head>`로 옮기지 마세요.
- **등장 효과**: `<head>`의 한 줄 스크립트가 `<html>`에 `js` 클래스를 붙일 때만 숨겼다가 보여 줍니다. 스크립트가 막혀도 글은 모두 보입니다.

---

## 로컬에서 미리 보기

`.html` 없는 주소(`/about` 등)를 지원하는 정적 서버가 필요합니다.

```bash
npx serve .
```

브라우저에서 표시되는 주소(기본 http://localhost:3000)로 접속합니다.
