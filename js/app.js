const state = {
  lang: (() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const urlLang = q.get('lang');
      if (urlLang === 'en' || urlLang === 'es') return urlLang;
      const stored = localStorage.getItem('camara-lang');
      if (stored === 'en' || stored === 'es') return stored;
    } catch (e) {
      // localStorage may fail, fallback to default
    }
    return 'es';
  })(),
  open: (() => {
    try {
      const q = new URLSearchParams(window.location.search);
      if (q.get('open') === 'all') {
        return CONFIG.SECTIONS.map((s) => s.id);
      }
    } catch (e) {
      // ignore
    }
    return [1, 2];
  })(),
  active: 1,
  marker: (() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const m = parseInt(q.get('marker'), 10);
      return m >= 1 && m <= 8 ? m : null;
    } catch (e) {
      return null;
    }
  })()
};

function updateLangButtonsUI() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === state.lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function updateMarkerUI() {
  const current = state.marker;
  document.querySelectorAll('.marker').forEach((el) => {
    const n = parseInt(el.dataset.marker, 10);
    const active = n === current;
    el.classList.toggle('is-active', active);
    el.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  document.querySelectorAll('.comp-item').forEach((el) => {
    const n = parseInt(el.dataset.marker, 10);
    const active = n === current;
    el.classList.toggle('is-active', active);
    el.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function setMarker(n) {
  state.marker = state.marker === n ? null : n;
  updateMarkerUI();
}

function updateNavAllButton() {
  const navAllBtn = document.querySelector('.nav-all');
  if (!navAllBtn) return;
  const data = getData(state.lang);
  const allCount = CONFIG.SECTIONS.length;
  const allOpen = state.open.length === allCount;
  navAllBtn.textContent = allOpen ? data.ui.closeAll : data.ui.openAll;
}

function updateActiveChip(id) {
  document.querySelectorAll('.nav-chip').forEach((chip) => {
    chip.classList.toggle('is-active', chip.id === 'chip-' + id);
  });
  centerChip(id);
}

function centerChip(id) {
  const nav = document.querySelector('.nav-chips');
  const chip = document.getElementById('chip-' + id);
  if (nav && chip) {
    nav.scrollTo({
      left: chip.offsetLeft - nav.offsetLeft - nav.clientWidth / 2 + chip.offsetWidth / 2,
      behavior: 'smooth'
    });
  }
}

function toggleSection(id) {
  const index = state.open.indexOf(id);
  const isOpen = index !== -1;

  if (isOpen) {
    state.open.splice(index, 1);
  } else {
    state.open.push(id);
  }

  const newState = !isOpen;
  const secEl = document.getElementById(`sec-${id}`);
  const btn = secEl ? secEl.querySelector('.sec-head') : null;
  const body = document.getElementById(`body-${id}`);

  if (secEl) secEl.classList.toggle('is-open', newState);
  if (btn) btn.setAttribute('aria-expanded', newState ? 'true' : 'false');
  if (body) {
    body.inert = !newState;
  }

  updateNavAllButton();
}

function goToSection(id) {
  state.active = id;

  const target = document.getElementById('sec-' + id);
  const nav = document.querySelector('.site-nav');
  const navHeight = nav ? nav.offsetHeight : 0;
  const targetTop = target ? (target.getBoundingClientRect().top + window.scrollY - navHeight - 10) : 0;

  if (!state.open.includes(id)) {
    state.open.push(id);
    const secEl = target;
    const btn = secEl ? secEl.querySelector('.sec-head') : null;
    const body = document.getElementById(`body-${id}`);
    if (secEl) secEl.classList.add('is-open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (body) body.inert = false;
    updateNavAllButton();
  }

  updateActiveChip(id);

  if (target) {
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  }
}

function toggleAllSections() {
  const allCount = CONFIG.SECTIONS.length;
  const allOpen = state.open.length === allCount;

  if (allOpen) {
    state.open = [];
  } else {
    state.open = CONFIG.SECTIONS.map((s) => s.id);
  }

  const newState = !allOpen;
  CONFIG.SECTIONS.forEach((s) => {
    const id = s.id;
    const secEl = document.getElementById(`sec-${id}`);
    const btn = secEl ? secEl.querySelector('.sec-head') : null;
    const body = document.getElementById(`body-${id}`);
    if (secEl) secEl.classList.toggle('is-open', newState);
    if (btn) btn.setAttribute('aria-expanded', newState ? 'true' : 'false');
    if (body) {
      body.inert = !newState;
    }
  });

  updateNavAllButton();
}

function setLanguage(lang) {
  if (state.lang === lang) return;
  state.lang = lang;

  try {
    localStorage.setItem('camara-lang', lang);
  } catch (e) {
    // localStorage may fail, proceed gracefully
  }

  const fadeTargets = [
    document.getElementById('sections'),
    document.querySelector('.site-title'),
    document.querySelector('.site-lead')
  ].filter(Boolean);

  fadeTargets.forEach((el) => {
    el.style.transition = 'opacity 120ms ease';
    el.style.opacity = '0';
  });

  setTimeout(() => {
    const data = getData(state.lang);

    // 1. Textos fijos
    renderUI(state.lang);

    // 2. Chips del indice
    renderNav(state.lang, state);

    // 3. Titulos de TODAS las secciones
    CONFIG.SECTIONS.forEach((sec) => {
      const n = sec.id;
      const secData = data['s' + n] || {};
      const titleSpan = document.querySelector(`#sec-${n} .sec-title`);
      if (titleSpan) {
        titleSpan.textContent = secData.t || '';
        if (secData.sub) {
          const subSpan = document.createElement('span');
          subSpan.className = 'sec-sub';
          subSpan.textContent = ' ' + secData.sub;
          titleSpan.appendChild(subSpan);
        }
      }
    });

    // 4. Cuerpos de TODAS las secciones (abiertas y cerradas)
    CONFIG.SECTIONS.forEach((sec) => {
      renderBody(sec, data);
    });

    // 5. Boton .nav-all
    updateNavAllButton();

    // 6. Botones de idioma
    updateLangButtonsUI();

    // 7. Marcador activo
    updateMarkerUI();

    // Fade in
    fadeTargets.forEach((el) => {
      el.style.opacity = '1';
    });

    setTimeout(() => {
      fadeTargets.forEach((el) => {
        el.style.transition = '';
      });
    }, 120);
  }, 120);
}

function setupScrollSpy() {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let activeId = state.active;
        CONFIG.SECTIONS.forEach((sec) => {
          const el = document.getElementById('sec-' + sec.id);
          if (el && el.getBoundingClientRect().top <= 110) {
            activeId = sec.id;
          }
        });

        if (activeId !== state.active) {
          state.active = activeId;
          updateActiveChip(activeId);
        }

        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupEventListeners() {
  const sectionsContainer = document.getElementById('sections');
  if (sectionsContainer) {
    sectionsContainer.addEventListener('click', (e) => {
      const markerBtn = e.target.closest('.marker');
      if (markerBtn) {
        const n = parseInt(markerBtn.dataset.marker, 10);
        if (!isNaN(n)) setMarker(n);
        return;
      }

      const compItemBtn = e.target.closest('.comp-item');
      if (compItemBtn) {
        const n = parseInt(compItemBtn.dataset.marker, 10);
        if (!isNaN(n)) setMarker(n);
        return;
      }

      const headBtn = e.target.closest('.sec-head');
      if (!headBtn) return;
      const sec = headBtn.closest('.sec');
      if (!sec) return;
      const id = parseInt(sec.id.replace('sec-', ''), 10);
      if (!isNaN(id)) toggleSection(id);
    });
  }

  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (lang) setLanguage(lang);
    });
  }

  const navChipsContainer = document.getElementById('nav-chips');
  if (navChipsContainer) {
    navChipsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.nav-chip');
      if (!chip) return;
      const id = parseInt(chip.id.replace('chip-', ''), 10);
      if (!isNaN(id)) goToSection(id);
    });
  }

  const navAllBtn = document.querySelector('.nav-all');
  if (navAllBtn) {
    navAllBtn.addEventListener('click', toggleAllSections);
  }

  setupScrollSpy();
}

function init() {
  renderUI(state.lang);
  renderNav(state.lang, state);
  renderSections(state.lang, state);
  updateNavAllButton();
  updateLangButtonsUI();
  updateMarkerUI();
  setupEventListeners();

  setTimeout(() => {
    document.body.classList.remove('page-entering');
  }, 600);
}

document.addEventListener('DOMContentLoaded', init);
