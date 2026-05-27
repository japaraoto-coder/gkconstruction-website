/* ARCHI HOLDING — main.js (ASCII only) */

document.addEventListener('DOMContentLoaded', function () {
  initLoader();
  initCursor();
  initNavigation();
  initLanguage();
  initReveal();
  if (document.getElementById('services-list')) renderServices();
  if (document.getElementById('projects-grid')) renderProjects();
  initContactForm();
  renderPartners();
  initCountUp();
  initParallax();
  initLightbox();
  if (document.body.classList.contains('service-page') && typeof initServicePage === 'function') initServicePage();
});

/* ── LOADER (animated construction scene + workers) ── */
function initLoader() {
  var loader = document.getElementById('loader');
  if (!loader) return;
  var counter  = loader.querySelector('.loader-counter');
  var cable    = loader.querySelector('.hook-cable');
  var hook     = loader.querySelector('.hook');
  var clipRect = loader.querySelector('.archi-clip-rect');
  var facade   = loader.querySelector('.facade-worker');

  var TOP = 50, BOT = 210, H = BOT - TOP;

  function paint(pct) {
    counter.textContent = Math.round(pct) + '%';
    var vh = (H * pct) / 100;
    if (clipRect) {
      clipRect.setAttribute('y', BOT - vh);
      clipRect.setAttribute('height', vh);
    }
    var vt = BOT - vh;
    var hookY = Math.max(34, vt - 10);
    if (cable) cable.setAttribute('y2', hookY);
    if (hook)  hook.setAttribute('y', hookY);

    // Facade worker (swing-stage) is at y~135. Reveal once that floor is built.
    // Visible building reaches y=135 when pct > (210-135)/160 = 47%.
    if (facade) facade.style.opacity = pct < 48 ? 0 : Math.min(1, (pct - 48) / 15);
  }

  paint(0);
  var pct = 0;
  var i = setInterval(function () {
    var step = pct < 70 ? (4 + Math.random() * 7) : (1.5 + Math.random() * 2.5);
    pct = Math.min(100, pct + step);
    paint(pct);
    if (pct >= 100) {
      clearInterval(i);
      setTimeout(function () { loader.classList.add('hidden'); }, 700);
    }
  }, 110);
}

/* ── CUSTOM CURSOR ── */
function initCursor() {
  if (window.matchMedia('(max-width: 1024px)').matches) return;
  var cursor = document.getElementById('cursor');
  var dot = document.getElementById('cursor-dot');
  if (!cursor || !dot) return;
  var mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate(' + (mx - 2) + 'px,' + (my - 2) + 'px)';
  });
  (function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = 'translate(' + (cx - 16) + 'px,' + (cy - 16) + 'px)';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button, [data-cursor="hover"], .service-card, .project-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
  });
}

/* ── NAVIGATION ── */
function initNavigation() {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('menu-toggle');
  var mobile = document.getElementById('mobile-menu');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 60); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      mobile.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        mobile.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }
}

/* ── LANGUAGE ── */
function initLanguage() {
  var saved = localStorage.getItem('archi-lang') || 'ka';
  applyLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.dataset.lang;
      applyLanguage(lang);
      localStorage.setItem('archi-lang', lang);
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  var dict = translations[lang] || translations.ka;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  if (document.getElementById('services-list')) renderServices(lang);
  if (document.getElementById('footer-services')) renderFooterServices(lang);
  if (document.getElementById('projects-grid')) renderProjects(lang);
  if (document.getElementById('partners-grid')) renderPartners(lang);
  if (document.body.classList.contains('service-page') && typeof renderServicePage === 'function') renderServicePage(lang);
}

function currentLang() { return localStorage.getItem('archi-lang') || 'ka'; }

/* ── REVEAL ON SCROLL (bulletproof) ── */
function initReveal() {
  var sel = '.section-head, .about-title, .about-text, .value, .services-title, .projects-head, .cta-band h2, .contact-grid > div, .contact-grid > form, .service-overview-grid, .capability, .service-stats, .exp-card, .partners-title, .showcase-overlay';
  var items = Array.prototype.slice.call(document.querySelectorAll(sel));
  if (!items.length) return;
  items.forEach(function (el) { el.classList.add('reveal'); });

  function revealInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    items.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('in');
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // Fallbacks: reveal on scroll/resize, and a hard safety net so content is never stuck hidden
  window.addEventListener('scroll', revealInView, { passive: true });
  window.addEventListener('resize', revealInView);
  setTimeout(revealInView, 300);
  setTimeout(revealInView, 1500);
  setTimeout(function () { items.forEach(function (el) { el.classList.add('in'); }); }, 4000);
}

/* ── SERVICES LIST ── */
function renderServices(lang) {
  lang = lang || currentLang();
  var list = document.getElementById('services-list');
  if (!list) return;
  list.innerHTML = services.map(function (s) {
    return '<div class="service-card service-static">'
      + '<span class="s-num">' + s.num + '</span>'
      + '<span class="s-title">' + s[lang].title + '</span>'
      + '<span class="s-desc">' + s[lang].shortDesc + '</span>'
      + '</div>';
  }).join('');
}

/* ── FOOTER SERVICES (plain text, translated) ── */
function renderFooterServices(lang) {
  lang = lang || currentLang();
  var box = document.getElementById('footer-services');
  if (!box) return;
  box.innerHTML = services.map(function (s) {
    return '<span class="foot-svc">' + s[lang].title + '</span>';
  }).join('');
}

/* ── PROJECTS GRID ── */
function renderProjects(lang) {
  lang = lang || currentLang();
  var grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(function (p) {
    return '<a href="#" class="project-card" data-gallery="' + p.id + '" data-title="' + p[lang].title + '" data-cursor="hover">'
      + '<div class="ph" style="background-image:url(\'' + p.image + '\')"></div>'
      + '<div class="overlay">'
      +   '<span class="p-title">' + p[lang].title + '</span>'
      + '</div></a>';
  }).join('');
}

/* ── CONTACT FORM ── */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(form).entries());
    var lang = currentLang();
    var t = (translations[lang] || translations.ka)['form.thanks'] || 'Thanks!';
    alert(t);
    form.reset();
    console.log('Form:', data);
  });
}


/* ── PARTNERS ── */
function renderPartners(lang) {
  lang = lang || currentLang();
  var grid = document.getElementById('partners-grid');
  if (!grid || typeof partners === 'undefined') return;
  grid.innerHTML = partners.map(function (p) {
    return '<div class="partner-cell" data-cursor="hover">'
      + '<img class="partner-logo" src="' + p.logo + '" alt="' + p.name + '" '
      +   'onload="this.classList.add(\'ok\')" onerror="this.remove()" />'
      + '<span class="partner-name">' + p.name + '</span>'
      + '</div>';
  }).join('');
}

/* ── COUNT-UP for hero stats ── */
function initCountUp() {
  var nums = document.querySelectorAll('.hero-stat .stat-num');
  if (!nums.length) return;
  nums.forEach(function (el) {
    var raw = el.textContent.trim();
    var m = raw.match(/^(\d+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[1], 10);
    var suffix = m[2] || '';
    var dur = 1400, start = null;
    el.textContent = '0' + suffix;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    // Start after the loader finishes
    setTimeout(function () { requestAnimationFrame(step); }, 1200);
  });
}

/* ── PARALLAX on scroll for [data-parallax] ── */
function initParallax() {
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (!els.length || window.matchMedia('(max-width: 768px)').matches) return;
  var ticking = false;
  function update() {
    var vh = window.innerHeight;
    els.forEach(function (el) {
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
      var rect = el.getBoundingClientRect();
      var center = rect.top + rect.height / 2;
      var offset = (center - vh / 2) * speed;
      el.style.transform = 'translateY(' + (-offset) + 'px)';
    });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}


/* ── LIGHTBOX GALLERY ── */
function initLightbox() {
  var lb = document.getElementById('lightbox');
  if (!lb || typeof galleries === 'undefined') return;
  var imgEl = document.getElementById('lb-img');
  var titleEl = document.getElementById('lb-title');
  var counterEl = document.getElementById('lb-counter');
  var thumbsEl = document.getElementById('lb-thumbs');
  var list = [], idx = 0;

  function show(i) {
    idx = (i + list.length) % list.length;
    imgEl.style.opacity = 0;
    var pre = new Image();
    pre.onload = function () { imgEl.src = list[idx]; imgEl.style.opacity = 1; };
    pre.src = list[idx];
    counterEl.textContent = (idx + 1) + ' / ' + list.length;
    Array.prototype.forEach.call(thumbsEl.children, function (t, j) {
      t.classList.toggle('active', j === idx);
    });
    var active = thumbsEl.children[idx];
    if (active && active.scrollIntoView) active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }
  function open(id, ttl) {
    if (!galleries[id] || !galleries[id].length) return;
    list = galleries[id];
    titleEl.textContent = ttl || '';
    thumbsEl.innerHTML = list.map(function (src, j) { return '<img src="' + src + '" data-i="' + j + '" alt="" />'; }).join('');
    Array.prototype.forEach.call(thumbsEl.children, function (t) {
      t.addEventListener('click', function () { show(parseInt(t.getAttribute('data-i'), 10)); });
    });
    show(0);
    lb.classList.add('open');
    document.body.classList.add('no-scroll');
  }
  function close() { lb.classList.remove('open'); document.body.classList.remove('no-scroll'); }

  // Open from any project card with a gallery
  document.addEventListener('click', function (e) {
    var card = e.target.closest ? e.target.closest('.project-card[data-gallery]') : null;
    if (card) {
      e.preventDefault();
      open(card.getAttribute('data-gallery'), card.getAttribute('data-title'));
    }
  });
  document.getElementById('lb-close').addEventListener('click', close);
  document.getElementById('lb-prev').addEventListener('click', function () { show(idx - 1); });
  document.getElementById('lb-next').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-stage')) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
  });
}

function setText(sel, val) {
  document.querySelectorAll(sel).forEach(function (el) { el.textContent = val; });
}
