const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

function observeReveals() {
  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

// ========== NAVIGATION ==========

function initNavigation() {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link, .nav-overlay-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  function closeMenu() {
    toggle.classList.remove('active');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    toggle.classList.add('active');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (overlay.classList.contains('open') && !overlay.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeMenu();
    }
  });
}

// ========== LANGUAGE SWITCHER ==========

const langMetas = {
  es: { name: 'Español', code: 'ES' },
  en: { name: 'English', code: 'EN' },
  pt: { name: 'Português', code: 'PT' },
  zh: { name: '中文', code: 'ZH' },
  hi: { name: 'हिन्दी', code: 'HI' },
  ar: { name: 'العربية', code: 'AR' },
  fr: { name: 'Français', code: 'FR' },
  bn: { name: 'বাংলা', code: 'BN' },
  ru: { name: 'Русский', code: 'RU' },
  ur: { name: 'اردو', code: 'UR' },
  id: { name: 'Indonesia', code: 'ID' },
  de: { name: 'Deutsch', code: 'DE' },
  ja: { name: '日本語', code: 'JA' },
  tr: { name: 'Türkçe', code: 'TR' },
  ko: { name: '한국어', code: 'KO' },
  vi: { name: 'Tiếng Việt', code: 'VI' },
  it: { name: 'Italiano', code: 'IT' },
  th: { name: 'ไทย', code: 'TH' },
  pl: { name: 'Polski', code: 'PL' },
  nl: { name: 'Nederlands', code: 'NL' }
};

const flagMap = {
  es: '<rect width="512" height="512" fill="#c60b1e"/><rect y="85.33" width="512" height="341.33" fill="#ffc400"/><rect x="170.67" y="170.67" width="170.67" height="170.67" fill="#c60b1e"/>',
  en: '<rect width="512" height="512" fill="#b22234"/><rect width="512" height="38.15" y="0" fill="#fff"/><rect width="512" height="38.15" y="76.3" fill="#fff"/><rect width="512" height="38.15" y="152.6" fill="#fff"/><rect width="512" height="38.15" y="228.9" fill="#fff"/><rect width="512" height="38.15" y="305.2" fill="#fff"/><rect width="512" height="38.15" y="381.5" fill="#fff"/><rect width="197.33" height="228.9" fill="#3c3b6e"/>',
  pt: '<rect width="512" height="512" fill="#009739"/><polygon points="256,85.33 426.67,256 256,426.67 85.33,256" fill="#fedd00"/><circle cx="256" cy="256" r="85.33" fill="#012169"/><polygon points="256,199.11 284.44,256 256,312.89 227.56,256" fill="#fff"/><rect x="243.2" y="199.11" width="25.6" height="113.78" fill="#012169"/><polygon points="199.11,256 256,284.44 312.89,256" fill="#fff"/>',
  zh: '<rect width="512" height="512" fill="#de2910"/><polygon points="102.4,85.33 115.41,124.59 154.67,124.59 122.03,148.97 135.04,188.23 102.4,163.85 69.76,188.23 82.77,148.97 50.13,124.59 89.39,124.59" fill="#ffde00"/><polygon points="204.8,136.53 209.28,149.76 221.87,149.76 211.63,157.65 216.32,170.88 204.8,163.2 193.28,170.88 197.97,157.65 187.73,149.76 200.32,149.76" fill="#ffde00"/><polygon points="230.4,102.4 234.88,115.63 247.47,115.63 237.23,123.52 241.92,136.75 230.4,129.07 218.88,136.75 223.57,123.52 213.33,115.63 225.92,115.63" fill="#ffde00"/><polygon points="243.2,68.27 247.68,81.49 260.27,81.49 250.03,89.39 254.72,102.61 243.2,94.93 231.68,102.61 236.37,89.39 226.13,81.49 238.72,81.49" fill="#ffde00"/><polygon points="217.6,59.73 213.12,64.85 215.36,74.88 207.36,68.69 199.36,74.88 201.6,64.85 197.12,59.73 207.36,60.63 213.12,53.33 218.88,60.63" fill="#ffde00"/>',
  hi: '<rect width="512" height="512" fill="#ff9933"/><rect y="170.67" width="512" height="170.67" fill="#fff"/><rect y="341.33" width="512" height="170.67" fill="#138808"/><circle cx="256" cy="256" r="42.67" fill="#000080" opacity="0"/><circle cx="256" cy="256" r="36" fill="none" stroke="#000080" stroke-width="3"/><circle cx="256" cy="256" r="3" fill="#000080"/>',
  ar: '<rect width="512" height="512" fill="#006c35"/><rect x="341.33" width="170.67" height="512" fill="#fff"/>',
  fr: '<rect width="170.67" height="512" fill="#0055a4"/><rect x="170.67" width="170.67" height="512" fill="#fff"/><rect x="341.33" width="170.67" height="512" fill="#ef4135"/>',
  bn: '<rect width="512" height="512" fill="#006a4e"/><circle cx="213.33" cy="256" r="119.47" fill="#f42a41"/>',
  ru: '<rect width="512" height="170.67" fill="#fff"/><rect y="170.67" width="512" height="170.67" fill="#0039a6"/><rect y="341.33" width="512" height="170.67" fill="#d52b1e"/>',
  ur: '<rect width="512" height="512" fill="#01411c"/><rect x="341.33" width="170.67" height="512" fill="#fff"/>',
  id: '<rect width="512" height="256" fill="#ff0000"/><rect y="256" width="512" height="256" fill="#fff"/>',
  de: '<rect width="512" height="170.67" fill="#000"/><rect y="170.67" width="512" height="170.67" fill="#dd0000"/><rect y="341.33" width="512" height="170.67" fill="#ffce00"/>',
  ja: '<rect width="512" height="512" fill="#fff"/><circle cx="256" cy="256" r="119.47" fill="#bc002d"/>',
  tr: '<rect width="512" height="512" fill="#e30a17"/><circle cx="204.8" cy="256" r="85.33" fill="#fff"/><circle cx="221.87" cy="256" r="68.27" fill="#e30a17"/><polygon points="256,256 221.87,273.07 230.4,238.93 230.4,273.07 256,256"/>',
  ko: '<rect width="512" height="512" fill="#fff"/><circle cx="256" cy="256" r="68.27" fill="#e30a17"/><circle cx="256" cy="256" r="51.2" fill="#003478"/>',
  vi: '<rect width="512" height="512" fill="#da251d"/><polygon points="256,85.33 273.07,138.24 325.98,138.24 283.31,171.52 300.38,224.43 256,191.15 211.62,224.43 228.69,171.52 186.02,138.24 238.93,138.24" fill="#ffff00"/>',
  it: '<rect width="170.67" height="512" fill="#009246"/><rect x="170.67" width="170.67" height="512" fill="#fff"/><rect x="341.33" width="170.67" height="512" fill="#ce2b37"/>',
  th: '<rect width="512" height="512" fill="#a51931"/><rect y="85.33" width="512" height="85.33" fill="#fff"/><rect y="170.67" width="512" height="170.67" fill="#00247d"/><rect y="341.33" width="512" height="85.33" fill="#fff"/>',
  pl: '<rect width="512" height="256" fill="#fff"/><rect y="256" width="512" height="256" fill="#dc143c"/>',
  nl: '<rect width="512" height="170.67" fill="#ae1c28"/><rect y="170.67" width="512" height="170.67" fill="#fff"/><rect y="341.33" width="512" height="170.67" fill="#21468b"/>'
};

function buildLangOption(lang) {
  const meta = langMetas[lang];
  if (!meta) return '';
  const flagSvg = flagMap[lang] || '<rect width="512" height="512" fill="#ccc"/>';
  return `<button class="lang-option" data-lang="${lang}" role="option" aria-selected="${lang === i18n.lang}" title="${meta.name}">
    <svg class="flag-icon" width="18" height="18" viewBox="0 0 512 512" aria-hidden="true">${flagSvg}</svg>
    <span class="lang-option-name">${meta.name}</span>
  </button>`;
}

function updateDropdownUI() {
  const triggerFlag = document.querySelector('#langTrigger .flag-icon');
  const triggerCode = document.querySelector('.lang-trigger-code');
  const meta = langMetas[i18n.lang];
  if (meta) {
    const flagHtml = flagMap[i18n.lang] || '<rect width="512" height="512" fill="#ccc"/>';
    if (triggerFlag) triggerFlag.innerHTML = flagHtml;
    if (triggerCode) {
      triggerCode.textContent = meta.code;
      triggerCode.dataset.langCode = i18n.lang;
    }
  }
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === i18n.lang);
    el.setAttribute('aria-selected', el.dataset.lang === i18n.lang);
  });
  document.querySelectorAll('.nav-overlay-lang .overlay-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === i18n.lang);
  });
}

function buildLangPanel() {
  const panel = document.getElementById('langPanel');
  if (!panel) return;
  panel.innerHTML = Object.keys(translations).map(lang => buildLangOption(lang)).join('');
}

function buildOverlayLangList() {
  const container = document.getElementById('overlayLangList');
  if (!container) return;
  container.innerHTML = Object.keys(translations).map(lang => {
    const meta = langMetas[lang];
    if (!meta) return '';
    const flagSvg = flagMap[lang] || '<rect width="512" height="512" fill="#ccc"/>';
    return `<button class="overlay-btn" data-lang="${lang}">
      <svg class="flag-icon flag-icon-lg" width="22" height="22" viewBox="0 0 512 512" aria-hidden="true">${flagSvg}</svg>
      <span>${meta.name}</span>
    </button>`;
  }).join('');
}

function initLanguageSwitcher() {
  const trigger = document.getElementById('langTrigger');
  const panel = document.getElementById('langPanel');

  buildLangPanel();
  buildOverlayLangList();
  updateDropdownUI();

  function closePanel() {
    if (!trigger || !panel) return;
    trigger.classList.remove('open');
    panel.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  function togglePanel(e) {
    e.stopPropagation();
    const isOpen = panel.classList.contains('open');
    if (isOpen) {
      closePanel();
    } else {
      trigger.classList.add('open');
      panel.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }

  if (trigger) {
    trigger.addEventListener('click', togglePanel);

    document.addEventListener('click', (e) => {
      if (panel && panel.classList.contains('open') && !panel.contains(e.target) && !trigger.contains(e.target)) {
        closePanel();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel && panel.classList.contains('open')) {
        closePanel();
      }
    });
  }

  document.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (option && option.dataset.lang) {
      const lang = option.dataset.lang;
      i18n.setLang(lang);
      closePanel();
    }
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-overlay-lang .overlay-btn');
    if (btn && btn.dataset.lang) {
      i18n.setLang(btn.dataset.lang);
      const overlay = document.getElementById('navOverlay');
      if (overlay && overlay.classList.contains('open')) {
        document.getElementById('navToggle')?.click();
      }
    }
  });
}

// ========== RENDER FUNCTIONS ==========

function renderNav() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n;
    el.textContent = i18n.t(path);
  });
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  const cats = i18n.t('skills.categories');

  grid.innerHTML = cats.map(cat => `
    <div class="skill-card reveal-up">
      <div class="skill-card-title">${cat.name}</div>
      <div class="skill-card-items">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  const jobs = i18n.t('experience.jobs');

  container.innerHTML = jobs.map((job, i) => `
    <div class="timeline-item reveal-up">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-card-header">
          <div class="timeline-card-title">${job.title}</div>
          <div class="timeline-card-period">${job.period}</div>
        </div>
        <div class="timeline-card-company">${job.company}</div>
        <div class="timeline-card-location">${job.location}</div>
        <ul class="timeline-card-details">
          ${job.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
        <div class="timeline-card-stack">
          ${job.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const projects = i18n.t('projects.list');

  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal-up">
      <div class="project-card-title">${p.title}</div>
      <div class="project-card-subtitle">${p.subtitle}</div>
      <div class="project-card-period">${p.period}</div>
      <p class="project-card-desc">${p.description}</p>
      <ul class="project-card-highlights">
        ${p.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="project-card-stack">
        ${p.stack.map(s => `<span>${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('educationContent');
  const edu = i18n.t('education');

  container.innerHTML = `
    <div class="education-card reveal-up">
      <div class="education-card-title">${edu.degree.title}</div>
      <div class="education-card-institution">${edu.degree.institution}</div>
      <div class="education-card-period">${edu.degree.period}</div>
      <div class="education-card-detail">${edu.degree.detail}</div>
      <div class="education-card-detail" style="margin-top:8px">${edu.degree.focus}</div>
    </div>

    <div class="education-card reveal-up">
      <div class="complementary-title">${edu.complementary.title}</div>
      <ul class="complementary-list">
        ${edu.complementary.courses.map(c => `
          <li>
            <div class="comp-item-name">${c.name}</div>
            ${c.period ? `<div class="comp-item-period">${c.period}</div>` : ''}
            <div class="comp-item-detail">${c.detail}</div>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="languages-section reveal-up">
      <div class="languages-section-title">${edu.languages.title}</div>
      <div class="languages-grid">
        ${edu.languages.items.map(l => `
          <div class="language-item">
            <div class="language-name">${l.name}</div>
            <div class="language-level">${l.level}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderContact() {
  const c = i18n.t('contact');
  const emailCard = document.querySelector('.contact-card[href^="mailto"] .contact-card-label');
  const phoneCard = document.querySelector('.contact-card[href^="tel"] .contact-card-label');
  const locationCard = document.querySelector('.contact-card:last-child .contact-card-label');

  if (emailCard) emailCard.textContent = c.email;
  if (phoneCard) phoneCard.textContent = c.phone;
  if (locationCard) locationCard.textContent = c.location;

  document.querySelector('.contact-subtitle').textContent = c.subtitle;
}

function renderFooter() {
  document.querySelector('.footer-copy').textContent = i18n.t('footer.copyright');
  const builtSpan = document.querySelector('.footer-built span:first-child');
  if (builtSpan) builtSpan.textContent = i18n.t('footer.built');
}

function renderAll() {
  renderNav();
  renderSkills();
  renderTimeline();
  renderProjects();
  renderEducation();
  renderContact();
  renderFooter();

  document.documentElement.lang = i18n.lang;

  observeReveals();
}

// ========== INIT ==========

function init() {
  initNavigation();
  initLanguageSwitcher();

  renderAll();

  i18n.onChange(() => {
    renderAll();
    updateDropdownUI();
  });

  updateDropdownUI();
}

document.addEventListener('DOMContentLoaded', init);
