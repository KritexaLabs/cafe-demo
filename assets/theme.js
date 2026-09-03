/* ============================================
   MEGAN THE RESTAURANT — THEME JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initStickyHeader();
  initMobileMenu();
  initGalleryLightbox();
  initMenuFilter();
  initForms();
});

/* ---- Scroll Animations ---- */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('.fade-up, .fade-in');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ---- Sticky Header ---- */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const close = document.getElementById('drawer-close');
  if (!toggle || !drawer) return;

  const open = () => {
    drawer.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    close?.focus();
  };
  const closeMenu = () => {
    drawer.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  };

  toggle.addEventListener('click', open);
  close?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

/* ---- Gallery Lightbox ---- */
function initGalleryLightbox() {
  const gallery = document.querySelector('.gallery-grid');
  if (!gallery) return;

  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-content">
      <button class="lb-close" aria-label="Close">&times;</button>
      <button class="lb-prev" aria-label="Previous">&#8592;</button>
      <img class="lb-img" src="" alt="">
      <p class="lb-caption"></p>
      <button class="lb-next" aria-label="Next">&#8594;</button>
    </div>`;
  document.body.appendChild(lb);

  const items = () => [...gallery.querySelectorAll('.gallery-item[data-src]')];
  let current = 0;

  const show = (idx) => {
    const all = items();
    if (!all.length) return;
    current = (idx + all.length) % all.length;
    lb.querySelector('.lb-img').src = all[current].dataset.src;
    lb.querySelector('.lb-img').alt = all[current].dataset.alt || '';
    lb.querySelector('.lb-caption').textContent = all[current].dataset.caption || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const hide = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };

  gallery.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item[data-src]');
    if (item) show(items().indexOf(item));
  });
  lb.querySelector('.lb-backdrop').addEventListener('click', hide);
  lb.querySelector('.lb-close').addEventListener('click', hide);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

/* ---- Menu Category Filter ---- */
function initMenuFilter() {
  const filters = document.querySelectorAll('.menu-filter-btn');
  const items = document.querySelectorAll('.menu-card');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const cat = btn.dataset.category;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ---- Form Validation ---- */
function initForms() {
  document.querySelectorAll('[data-validate-wrap] form, form[data-validate]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        const err = field.parentElement.querySelector('.form-error');
        const empty = !field.value.trim();
        const emailFail = field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        const phoneFail = field.type === 'tel' && field.value && !/^[\d\s\+\-\(\)]{7,}$/.test(field.value);
        const fail = empty || emailFail || phoneFail;
        field.classList.toggle('error', fail);
        if (err) err.classList.toggle('visible', fail);
        if (fail) valid = false;
      });
      if (valid) {
        const success = form.querySelector('.form-success');
        if (success) { success.classList.add('visible'); form.reset(); }
      }
    });
  });
}
