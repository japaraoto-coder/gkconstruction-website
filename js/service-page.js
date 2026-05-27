/* ARCHI HOLDING — service detail page renderer */

function initServicePage() { renderServicePage(currentLang()); }

function renderServicePage(lang) {
  lang = lang || currentLang();
  var id = new URLSearchParams(window.location.search).get('id') || services[0].id;
  var svc = services.find(function (s) { return s.id === id; });
  if (!svc) return;
  var T = translations[lang] || translations.ka;

  document.title = svc[lang].title + ' — ARCHI HOLDING';

  setText('.breadcrumb .home', T['breadcrumb.home'] || 'Home');
  setText('.service-num-big', (T['service.detailLabel'] || 'Discipline') + ' / ' + svc.num);
  setText('.service-title-big', svc[lang].title);
  setText('.service-tagline', svc[lang].tagline);
  setText('.breadcrumb .current', svc[lang].title);
  setText('.overview-label', T['service.overview'] || 'Overview');
  setText('.about-label', T['service.about'] || 'About');
  setText('.capabilities-label', T['service.capabilities'] || 'Capabilities');
  setText('.experience-label', T['service.experience'] || 'Experience');
  setText('.service-projects-title', T['service.projectsTitle'] || 'Completed projects');

  var overviewEl = document.querySelector('.service-overview-text');
  if (overviewEl) overviewEl.innerHTML = '<p>' + svc[lang].overview + '</p>';

  var capList = document.querySelector('.service-capabilities');
  if (capList) {
    capList.innerHTML = svc[lang].capabilities.map(function (c, i) {
      return '<div class="capability reveal in">'
        + '<span class="capability-num">' + String(i + 1).padStart(2, '0') + '</span>'
        + '<div><h4>' + c.t + '</h4><p>' + c.d + '</p></div></div>';
    }).join('');
  }

  var statsEl = document.querySelector('.service-stats');
  if (statsEl) {
    statsEl.innerHTML = svc.stats.map(function (st) {
      return '<div class="stat"><div class="n">' + st.n + '</div><div class="l">' + st[lang] + '</div></div>';
    }).join('');
  }

  var exp = (typeof experience !== 'undefined' && experience[id]) ? experience[id] : [];
  var expEl = document.querySelector('.experience-list');
  if (expEl) {
    if (exp.length) {
      expEl.innerHTML = exp.map(function (e) {
        return '<div class="exp-card reveal in">'
          + '<span class="year">' + e.year + '</span>'
          + '<h4>' + e[lang].t + '</h4>'
          + '<div class="loc">' + e[lang].l + '</div>'
          + '<p>' + e[lang].d + '</p></div>';
      }).join('');
    } else {
      expEl.innerHTML = '<div style="color:var(--text-dim)">' + (T['service.soon'] || 'Coming soon.') + '</div>';
    }
  }

  var grid = document.getElementById('service-projects-grid');
  if (grid) {
    var matching = projects.filter(function (p) { return p.serviceId === id; });
    grid.innerHTML = matching.map(function (p) {
      return '<a href="#" class="project-card" data-gallery="' + p.id + '" data-title="' + p[lang].title + '" data-cursor="hover">'
        + '<div class="ph" style="background-image:url(\'' + p.image + '\')"></div>'
        + '<div class="overlay">'
        +   '<span class="p-title">' + p[lang].title + '</span>'
        + '</div></a>';
    }).join('');
  }

  var otherList = document.getElementById('other-services');
  if (otherList) {
    var others = services.filter(function (s) { return s.id !== id; });
    otherList.innerHTML = others.map(function (s) {
      return '<a href="service.html?id=' + s.id + '" class="service-card" data-cursor="hover">'
        + '<span class="s-num">' + s.num + '</span>'
        + '<span class="s-title">' + s[lang].title + '</span>'
        + '<span class="s-desc">' + s[lang].shortDesc + '</span>'
        + '<span class="s-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>'
        + '</a>';
    }).join('');
  }
}
