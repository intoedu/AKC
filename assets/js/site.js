/* ===== AKC · 공통 스크립트 (헤더/푸터 생성, 모바일 메뉴, 스크롤 효과) ===== */
(function () {
  'use strict';

  /* 메뉴 구조: 대메뉴 3개 + 세부메뉴 + 세부세부메뉴 (홈은 좌측 로고로 이동) */
  var MENU = [
    {
      name: '소개', href: 'about.html',
      children: [
        { name: '소개 · 인사말', href: 'about.html' },
        { name: '캠프 대표 프로그램', href: 'about-program.html' }
      ]
    },
    {
      name: '캠프', href: 'camp-spirit.html',
      children: [
        {
          name: '영성 캠프', href: 'camp-spirit.html',
          children: [
            { name: '연합 캠프', href: 'camp-spirit-union.html' },
            { name: '청소년 캠프', href: 'camp-spirit-youth.html' },
            { name: '청년 캠프', href: 'camp-spirit-young.html' }
          ]
        },
        {
          name: '영역 캠프', href: 'camp-field.html',
          children: [
            { name: '수학 캠프', href: 'camp-field-math.html' },
            { name: '과학 캠프', href: 'camp-field-science.html' }
          ]
        }
      ]
    },
    {
      name: '소식 · 안내', href: 'news.html',
      children: [
        { name: '공지 · 소식', href: 'news.html' },
        { name: '갤러리', href: 'gallery.html' },
        { name: '오시는 길', href: 'location.html' },
        { name: '자주 묻는 질문', href: 'faq.html' }
      ]
    }
  ];

  var CTA = { name: '신청 · 문의하기', href: 'contact.html' };

  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function isCur(item) {
    if (item.href.toLowerCase() === here) return true;
    return (item.children || []).some(isCur);
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ---------- 데스크톱 GNB (전체 폭 메가 메뉴) ---------- */
  function megaCol(title, href, items) {
    return '<div class="mg-col">' +
      '<a class="mg-ttl" href="' + href + '">' + esc(title) + '</a>' +
      (items.length ? '<ul class="mg-list">' + items.map(function (d) {
        return '<li><a class="' + (d.href.toLowerCase() === here ? 'cur' : '') + '" href="' + d.href + '">' +
          esc(d.name) + '</a></li>';
      }).join('') + '</ul>' : '') +
      '</div>';
  }

  function gnbHTML() {
    return MENU.map(function (m) {
      var mega = '';
      if (m.children && m.children.length) {
        var hasDeep = m.children.some(function (c) { return c.children && c.children.length; });
        var cols = hasDeep
          /* 세부세부메뉴가 있으면 세부메뉴마다 한 칸씩 */
          ? m.children.map(function (c) { return megaCol(c.name, c.href, c.children || []); }).join('')
          /* 없으면 대메뉴 이름 아래에 한 칸으로 모아서 */
          : megaCol(m.name, m.href, m.children);
        mega = '<div class="mega"><div class="wrap"><div class="mg-inner">' + cols + '</div></div></div>';
      }
      return '<li class="' + (isCur(m) ? 'on' : '') + '"><a href="' + m.href + '">' + esc(m.name) + '</a>' + mega + '</li>';
    }).join('');
  }

  /* ---------- 모바일 메뉴 ---------- */
  function mnavHTML() {
    var html = '<ul>' + MENU.map(function (m) {
      var s = '';
      if (m.children) {
        s = '<ul class="m-sub">' + m.children.map(function (c) {
          var d = c.children ? '<ul class="m-sub">' + c.children.map(function (x) {
            return '<li><a href="' + x.href + '">' + esc(x.name) + '</a></li>';
          }).join('') + '</ul>' : '';
          return '<li><a href="' + c.href + '">' + esc(c.name) + '</a>' + d + '</li>';
        }).join('') + '</ul>';
      }
      return '<li><a href="' + m.href + '">' + esc(m.name) + '</a>' + s + '</li>';
    }).join('') + '</ul>';
    return html + '<a class="m-cta" href="' + CTA.href + '">' + esc(CTA.name) + '</a>';
  }

  var headerHTML =
    '<header class="hdr" id="hdr"><div class="wrap">' +
      '<a class="logo" href="index.html">' +
        '<span class="lt">' +
          '<span class="logo-mark"><img src="assets/img/logo.png" alt="AKC"></span>' +
          '<small>ARISE KOREA CAMP</small>' +
        '</span>' +
      '</a>' +
      '<nav aria-label="주요 메뉴"><ul class="gnb">' + gnbHTML() + '</ul></nav>' +
      '<a class="hdr-cta" href="' + CTA.href + '">' + CTA.name + '</a>' +
      '<button class="burger" id="burger" aria-label="메뉴 열기" aria-expanded="false">' +
        '<span></span><span></span><span></span></button>' +
    '</div></header>' +
    '<div class="mnav" id="mnav">' + mnavHTML() + '</div>';

  var footerHTML =
    '<footer class="ftr"><div class="wrap">' +
      '<div class="ftr-top">' +
        '<div style="max-width:340px">' +
          '<div class="logo" style="margin-bottom:14px"><span class="lt">' +
          '<span class="logo-mark"><img src="assets/img/logo.png" alt="AKC"></span>' +
          '<small>ARISE KOREA CAMP</small></span></div>' +
          '<p>캠프보다 캠프 이후가 더 뜨거운 캠프.<br>전국의 지역교회와 공동체가 함께 주도하는 연합 캠프입니다.</p>' +
        '</div>' +
        '<div><h4>바로가기</h4><ul>' +
          '<li><a href="about.html">소개 · 인사말</a></li>' +
          '<li><a href="about-program.html">캠프 대표 프로그램</a></li>' +
          '<li><a href="camp-spirit.html">영성 캠프</a></li>' +
          '<li><a href="camp-field.html">영역 캠프</a></li>' +
        '</ul></div>' +
        '<div><h4>안내</h4><ul>' +
          '<li><a href="news.html">공지 · 소식</a></li>' +
          '<li><a href="gallery.html">갤러리</a></li>' +
          '<li><a href="location.html">오시는 길</a></li>' +
          '<li><a href="faq.html">자주 묻는 질문</a></li>' +
        '</ul></div>' +
        '<div><h4>문의</h4><ul>' +
          '<li>대표 연락처 · <a href="tel:01029779586">010-2977-9586</a></li>' +
          '<li><a href="mailto:AriseKoreaCamp@gmail.com">AriseKoreaCamp@gmail.com</a></li>' +
          '<li>주소 · 운영 시간은 캠프마다 다릅니다</li>' +
          '<li><a href="contact.html">신청 · 문의하기</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="ftr-bot"><span>&copy; ' + new Date().getFullYear() + ' AKC (Arise Korea Camp). All rights reserved.</span>' +
      '<span>대표 박지민</span></div>' +
    '</div></footer>';

  function mount() {
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if (h) h.outerHTML = headerHTML;
    if (f) f.outerHTML = footerHTML;

    var burger = document.getElementById('burger');
    var mnav = document.getElementById('mnav');
    if (burger && mnav) {
      burger.addEventListener('click', function () {
        var open = mnav.classList.toggle('open');
        burger.classList.toggle('x', open);
        burger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }

    var hdr = document.getElementById('hdr');
    function onScroll() {
      if (hdr) hdr.classList.toggle('solid', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* 스크롤 등장 효과 */
    var items = document.querySelectorAll('.rv');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      items.forEach(function (el) { io.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('in'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else { mount(); }
})();
