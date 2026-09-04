# AKC · Arise Korea Camp 홈페이지

정적(HTML/CSS/JS) 사이트입니다. 별도 빌드 없이 파일을 그대로 웹서버에 올리면 됩니다.
(GitHub Pages, Netlify, 카페24 등 어디든 업로드만 하면 동작합니다.)

## 메뉴 구조 (대메뉴 4개, 각각 별도 페이지 = 별도 탭)

| 대메뉴 | 세부메뉴 | 세부세부메뉴 |
|---|---|---|
| 홈 | - | - |
| 소개 | 소개 · 인사말 / 캠프 대표 프로그램 | - |
| 캠프 | 영성 캠프 | (청소년 · 청년) 연합 캠프 / 청소년 캠프 / 청년 캠프 |
| 캠프 | 영역 캠프 | 수학 캠프 / 과학 캠프 |
| 소식 · 안내 | 공지 · 소식 / 갤러리 / 오시는 길 / 자주 묻는 질문 | - |

우측 상단 **신청 · 문의하기** 버튼(노란색)이 신청서로 가는 주 동선입니다.

## 파일

```
index.html                 메인(홈)
about.html                 소개 · 인사말
about-program.html         캠프 대표 프로그램
camp-spirit.html           영성 캠프
camp-spirit-union.html       (청소년 · 청년) 연합 캠프
camp-spirit-youth.html       청소년 캠프
camp-spirit-young.html       청년 캠프
camp-field.html            영역 캠프
camp-field-math.html         수학 캠프
camp-field-science.html      과학 캠프
news.html                  공지 · 소식
gallery.html               갤러리
location.html              오시는 길
faq.html                   자주 묻는 질문
contact.html               신청 · 문의하기 (신청서 양식)
assets/css/style.css       전체 디자인
assets/js/site.js          공통 헤더/푸터, 메뉴, 스크롤 효과
assets/img/                사진 넣는 폴더
```

## 자주 하는 수정

- **메뉴 추가 · 이름 변경** : `assets/js/site.js` 맨 위 `MENU` 배열만 고치면 전 페이지에 반영됩니다.
- **색상 변경** : `assets/css/style.css` 맨 위 `:root` 의 `--yellow`(#ffff55), `--mint`(#33ebb5) 등.
- **로고 이미지 적용** : `assets/img/logo.png` 를 넣고 `site.js` 의 `.logo` 부분을
  `<img src="assets/img/logo.png" alt="AKC" style="height:34px">` 로 교체.
- **갤러리 사진** : `gallery.html` 의 `<div class="ph">...</div>` 를
  `<img src="assets/img/파일명.jpg" alt="설명">` 로 바꾸면 됩니다.
- **공지 글 추가** : `news.html` 의 `.nlist` 안에 `<li>` 한 줄을 복사해 넣으세요.

## 신청서 동작 방식

`contact.html` 의 신청서는 현재 **메일 발송 방식**입니다.
작성 후 버튼을 누르면 내용이 정리된 메일 창이 열리고, 그대로 보내면 `AriseKoreaCamp@gmail.com` 으로 접수됩니다.
서버에 자동 저장(DB·구글폼 연동 등)이 필요하시면 알려 주세요 — 양식은 그대로 두고 전송 부분만 바꾸면 됩니다.

## 로컬에서 미리 보기

```bash
node .claude/server.js
```
브라우저에서 http://localhost:4321 접속.
