'use strict';
/* ═══════════════════════════════════════════════
   SkillNet — app.js
   (i18n через t() з i18n.js, завантаженого раніше)
═══════════════════════════════════════════════ */

// ── Тема ─────────────────────────────────────────────────────
const html      = document.documentElement;
const themeBtn  = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

(function initTheme() {
  const saved = localStorage.getItem('sn-theme') || 'light';
  html.setAttribute('data-theme', saved);
  themeIcon.textContent = saved === 'dark' ? '🌙' : '☀️';
})();

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  themeIcon.textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('sn-theme', next);
});

// ── Мова ─────────────────────────────────────────────────────
const langBtn = document.getElementById('lang-btn');

(function initLang() {
  applyTranslations(); // з i18n.js — ставить правильний текст і lang-btn label
})();

langBtn.addEventListener('click', () => {
  const next = getLang() === 'uk' ? 'en' : 'uk';
  setLang(next);          // з i18n.js — змінює мову, очищає кеш demo orders, перекладає DOM
  renderHome();           // перемалюємо головну
  renderOrders();         // перемалюємо замовлення (нові demo)
  renderApplications();   // перемалюємо статуси
  renderProfile();        // перемалюємо fallback тексти
});

// ── Утиліти ──────────────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function formatDate(ts) {
  const locale = getLang() === 'en' ? 'en-US' : 'uk-UA';
  return new Date(ts).toLocaleDateString(locale, { day:'numeric', month:'short', year:'numeric' });
}
function getInitials(name) {
  return name.trim().split(/\s+/).slice(0,2).map(w => w[0]?.toUpperCase() || '').join('');
}

// ── Toast ─────────────────────────────────────────────────────
const toastEl = document.getElementById('toast');
let _toastTimer;
function showToast(msg, duration = 2800) {
  toastEl.textContent = msg;
  toastEl.classList.remove('hidden');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toastEl.classList.add('hidden'), duration);
}

// ── Навігація ─────────────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const pages    = document.querySelectorAll('.page');
const burger   = document.getElementById('nav-burger');
const navList  = document.getElementById('nav-links');

function showPage(pageId) {
  pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + pageId));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.page === pageId));
  navList.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pageId === 'home')         renderHome();
  if (pageId === 'orders')       renderOrders();
  if (pageId === 'applications') renderApplications();
  if (pageId === 'profile')      renderProfile();
}

navLinks.forEach(l => l.addEventListener('click', e => { e.preventDefault(); showPage(l.dataset.page); }));

document.querySelectorAll('[data-page]').forEach(el => {
  if (!el.classList.contains('nav-link')) {
    el.addEventListener('click', e => { e.preventDefault(); showPage(el.dataset.page); });
  }
});

burger.addEventListener('click', () => navList.classList.toggle('open'));

document.addEventListener('click', e => {
  if (!navList.contains(e.target) && e.target !== burger && !burger.contains(e.target)) {
    navList.classList.remove('open');
  }
});

// ── Modal ─────────────────────────────────────────────────────
const modalOverlay = document.getElementById('modal-overlay');
const modalBody    = document.getElementById('modal-body');

function openModal(html) {
  modalBody.innerHTML = html;
  modalOverlay.classList.remove('hidden');
}
function closeModal() {
  modalOverlay.classList.add('hidden');
  modalBody.innerHTML = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// Avatar picker
document.getElementById('avatar-picker').addEventListener('click', e => {
  const btn = e.target.closest('.avatar-opt');
  if (!btn) return;
  document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('p-avatar').value     = btn.dataset.emoji;
  document.getElementById('p-avatar-img').value = '';
  const prev = document.getElementById('avatar-preview');
  prev.innerHTML = '';
  prev.textContent = btn.dataset.emoji;
});

// Upload photo
document.getElementById('avatar-file-input').addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { showToast(t('toast_photo_too_big')); return; }
  const reader = new FileReader();
  reader.onload = function (e) {
    const dataUrl = e.target.result;
    document.getElementById('p-avatar-img').value = dataUrl;
    document.getElementById('p-avatar').value     = '';
    const prev = document.getElementById('avatar-preview');
    prev.innerHTML = `<img src="${dataUrl}" alt="avatar" />`;
    document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('active'));
  };
  reader.readAsDataURL(file);
});

/* ═══════════════════════════════════════════════
   DEMO ORDERS — беруться з i18n.js
═══════════════════════════════════════════════ */
function getDemoOrders() {
  return (TRANSLATIONS[getLang()] || TRANSLATIONS['uk']).demo_orders;
}

/* ═══════════════════════════════════════════════
   STORAGE HELPERS
═══════════════════════════════════════════════ */
function loadOrders() {
  try {
    const raw = localStorage.getItem('sn-orders-v1');
    if (!raw) {
      const demo = getDemoOrders();
      localStorage.setItem('sn-orders-v1', JSON.stringify(demo));
      return [...demo];
    }
    const stored = JSON.parse(raw);
    if (!Array.isArray(stored) || stored.length === 0) {
      const demo = getDemoOrders();
      localStorage.setItem('sn-orders-v1', JSON.stringify(demo));
      return [...demo];
    }
    return stored;
  } catch {
    localStorage.removeItem('sn-orders-v1');
    return [...getDemoOrders()];
  }
}
function saveOrders(arr)        { localStorage.setItem('sn-orders-v1', JSON.stringify(arr)); }

function loadApplications() {
  try { return JSON.parse(localStorage.getItem('sn-applications-v1') || '[]'); }
  catch { return []; }
}
function saveApplications(arr)  { localStorage.setItem('sn-applications-v1', JSON.stringify(arr)); }

function loadProfile() {
  const def = { avatar:'👤', avatarImg:'', name:'', role:'', bio:'', skills:'', exp:'', portfolio:'' };
  try { return { ...def, ...JSON.parse(localStorage.getItem('sn-profile-v1') || '{}') }; }
  catch { return def; }
}
function saveProfile(obj)       { localStorage.setItem('sn-profile-v1', JSON.stringify(obj)); }

/* ═══════════════════════════════════════════════
   BUILD ORDER CARD
═══════════════════════════════════════════════ */
function buildOrderCard(order, compact = false) {
  const initials   = getInitials(order.client);
  const skillsHtml = order.skills.map(s => `<span class="skill-tag">${escHtml(s)}</span>`).join('');
  const applied    = loadApplications().some(a => a.orderId === order.id);

  const card = document.createElement('div');
  card.className = 'order-card';
  card.dataset.id = order.id;

  card.innerHTML = `
    <div class="order-card-top">
      <div class="order-logo">${escHtml(initials)}</div>
      <div class="order-title-wrap">
        <div class="order-title">${escHtml(order.title)}</div>
        <div class="order-client">${escHtml(order.client)}</div>
      </div>
      <span class="cat-badge">${escHtml(order.category)}</span>
    </div>
    <div class="order-desc">${escHtml(order.desc)}</div>
    <div class="order-skills">${skillsHtml}</div>
    <div class="order-meta">
      <div class="order-meta-item">💰 <span class="order-budget">${Number(order.budget).toLocaleString('uk-UA')} ${t('currency')}</span></div>
      <div class="order-meta-item">🕐 ${escHtml(order.deadline)}</div>
      <div class="order-meta-item">📅 ${formatDate(order.createdAt)}</div>
    </div>
    ${!compact ? `
    <div class="order-actions">
      <button class="btn btn-outline-accent btn-sm btn-view-order">${t('btn_view')}</button>
      <button class="btn btn-accent btn-sm btn-apply-order" ${applied ? 'disabled style="opacity:.55"' : ''}>
        ${applied ? t('btn_applied') : t('btn_apply')}
      </button>
    </div>` : ''}
  `;

  if (!compact) {
    card.querySelector('.btn-view-order').addEventListener('click', () => viewOrder(order));
    card.querySelector('.btn-apply-order').addEventListener('click', () => applyOrder(order));
  }

  return card;
}

/* ═══════════════════════════════════════════════
   VIEW ORDER (modal)
═══════════════════════════════════════════════ */
function viewOrder(order) {
  const applied    = loadApplications().some(a => a.orderId === order.id);
  const skillsHtml = order.skills.map(s => `<span class="skill-tag">${escHtml(s)}</span>`).join('');

  openModal(`
    <div class="modal-title">${escHtml(order.title)}</div>
    <span class="cat-badge" style="margin-bottom:16px;display:inline-block">${escHtml(order.category)}</span>
    <p class="modal-desc">${escHtml(order.desc)}</p>
    <div class="modal-meta">
      <div class="modal-meta-row">
        <span class="modal-meta-label">${t('modal_client')}</span>
        <span class="modal-meta-value">${escHtml(order.client)}</span>
      </div>
      <div class="modal-meta-row">
        <span class="modal-meta-label">${t('modal_budget')}</span>
        <span class="modal-meta-value"><strong>${Number(order.budget).toLocaleString('uk-UA')} ${t('currency')}</strong></span>
      </div>
      <div class="modal-meta-row">
        <span class="modal-meta-label">${t('modal_deadline')}</span>
        <span class="modal-meta-value">${escHtml(order.deadline)}</span>
      </div>
      <div class="modal-meta-row">
        <span class="modal-meta-label">${t('modal_skills')}</span>
        <span class="modal-meta-value" style="display:flex;flex-wrap:wrap;gap:6px">${skillsHtml}</span>
      </div>
      <div class="modal-meta-row">
        <span class="modal-meta-label">${t('modal_published')}</span>
        <span class="modal-meta-value">${formatDate(order.createdAt)}</span>
      </div>
    </div>
    <button class="btn btn-accent" id="modal-apply-btn" ${applied ? 'disabled style="opacity:.55"' : ''}>
      ${applied ? t('modal_btn_applied') : t('modal_btn_apply')}
    </button>
  `);

  if (!applied) {
    document.getElementById('modal-apply-btn').addEventListener('click', () => {
      applyOrder(order);
      closeModal();
    });
  }
}

/* ═══════════════════════════════════════════════
   APPLY ORDER
═══════════════════════════════════════════════ */
function applyOrder(order) {
  const apps = loadApplications();
  if (apps.some(a => a.orderId === order.id)) {
    showToast(t('toast_already_applied'));
    return;
  }

  const statuses = ['review', 'review', 'review', 'accept', 'reject'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  apps.push({
    id: uid(), orderId: order.id,
    title: order.title, client: order.client,
    appliedAt: Date.now(), status: randomStatus,
  });

  saveApplications(apps);
  showToast(t('toast_applied'));

  document.querySelectorAll(`.order-card[data-id="${order.id}"] .btn-apply-order`).forEach(btn => {
    btn.disabled = true;
    btn.textContent = t('btn_applied');
    btn.style.opacity = '.55';
  });
}

/* ═══════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════ */
function renderHome() {
  const orders = loadOrders();
  const statEl = document.getElementById('hstat-orders');
  if (statEl) statEl.textContent = orders.length + '+';

  const container = document.getElementById('home-recent-orders');
  if (!container) return;
  container.innerHTML = '';

  orders.slice().sort((a, b) => b.createdAt - a.createdAt).slice(0, 3)
    .forEach(o => container.appendChild(buildOrderCard(o)));
}

document.getElementById('hero-search-btn').addEventListener('click', () => {
  const q = document.getElementById('hero-search-input').value.trim();
  showPage('orders');
  if (q) {
    const searchInput = document.getElementById('orders-search');
    if (searchInput) { searchInput.value = q; filterOrders(); }
  }
});
document.getElementById('hero-search-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('hero-search-btn').click();
});

document.querySelectorAll('.link-all[data-page]').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); showPage(a.dataset.page); });
});

/* ═══════════════════════════════════════════════
   ORDERS PAGE
═══════════════════════════════════════════════ */
let _currentCat = 'all';

function filterOrders() {
  const q      = (document.getElementById('orders-search')?.value || '').toLowerCase();
  const orders = loadOrders();
  const list   = document.getElementById('orders-list');
  const empty  = document.getElementById('orders-empty');

  const filtered = orders.filter(o => {
    const matchCat  = _currentCat === 'all' || o.category === _currentCat;
    const matchText = !q
      || o.title.toLowerCase().includes(q)
      || o.desc.toLowerCase().includes(q)
      || o.skills.join(' ').toLowerCase().includes(q)
      || o.client.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  list.innerHTML = '';
  if (filtered.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  filtered.slice().sort((a,b) => b.createdAt - a.createdAt)
    .forEach(o => list.appendChild(buildOrderCard(o)));
}

function renderOrders() { filterOrders(); }

document.getElementById('orders-search').addEventListener('input', filterOrders);

document.getElementById('filter-cats').addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _currentCat = btn.dataset.cat;
  filterOrders();
});

/* ═══════════════════════════════════════════════
   CREATE ORDER
═══════════════════════════════════════════════ */
document.getElementById('create-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title    = document.getElementById('c-title').value.trim();
  const desc     = document.getElementById('c-desc').value.trim();
  const budget   = Number(document.getElementById('c-budget').value);
  const deadline = document.getElementById('c-deadline').value.trim();
  const category = document.getElementById('c-category').value;
  const skillsRaw= document.getElementById('c-skills').value.trim();
  const client   = document.getElementById('c-client').value.trim();

  if (!title)              { showToast(t('toast_fill_title'));    return; }
  if (!desc)               { showToast(t('toast_fill_desc'));     return; }
  if (!budget||budget<100) { showToast(t('toast_fill_budget'));   return; }
  if (!deadline)           { showToast(t('toast_fill_deadline')); return; }
  if (!category)           { showToast(t('toast_fill_category')); return; }
  if (!skillsRaw)          { showToast(t('toast_fill_skills'));   return; }
  if (!client)             { showToast(t('toast_fill_client'));   return; }

  const skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);
  const orders = loadOrders();
  orders.push({ id: uid(), title, desc, budget, deadline, category, skills, client, createdAt: Date.now(), isDemo: false });
  saveOrders(orders);
  this.reset();
  showToast(t('toast_order_published'), 3000);
  showPage('orders');
});

/* ═══════════════════════════════════════════════
   APPLICATIONS PAGE
═══════════════════════════════════════════════ */
const STATUS_CLASS = { review: 'status-review', accept: 'status-accept', reject: 'status-reject' };

function renderApplications() {
  const apps  = loadApplications();
  const list  = document.getElementById('applications-list');
  const empty = document.getElementById('applications-empty');
  const stats = document.getElementById('applications-stats');

  list.innerHTML = '';

  const counts = { review: 0, accept: 0, reject: 0 };
  apps.forEach(a => counts[a.status] = (counts[a.status] || 0) + 1);

  stats.innerHTML = `
    <div class="app-stat">
      <div class="app-stat-num">${apps.length}</div>
      <div class="app-stat-label">${t('stat_total')}</div>
    </div>
    <div class="app-stat">
      <div class="app-stat-num">${counts.accept}</div>
      <div class="app-stat-label">${t('stat_accepted')}</div>
    </div>
    <div class="app-stat">
      <div class="app-stat-num">${counts.review}</div>
      <div class="app-stat-label">${t('stat_review')}</div>
    </div>
  `;

  if (apps.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');

  apps.slice().sort((a,b) => b.appliedAt - a.appliedAt).forEach(app => {
    const initials = getInitials(app.client);
    const item = document.createElement('div');
    item.className = 'app-item';
    item.innerHTML = `
      <div class="app-logo">${escHtml(initials)}</div>
      <div class="app-info">
        <div class="app-title">${escHtml(app.title)}</div>
        <div class="app-client">${escHtml(app.client)}</div>
      </div>
      <div class="app-date">${formatDate(app.appliedAt)}</div>
      <span class="status-badge ${STATUS_CLASS[app.status] || 'status-review'}">
        ${t('status_' + (app.status === 'accept' ? 'accept' : app.status === 'reject' ? 'reject' : 'review'))}
      </span>
      <button class="btn btn-danger btn-sm btn-remove-app" title="${t('btn_delete_app')}">✕</button>
    `;

    item.querySelector('.btn-remove-app').addEventListener('click', () => {
      if (!confirm(t('confirm_delete'))) return;
      const updated = loadApplications().filter(a => a.id !== app.id);
      saveApplications(updated);
      renderApplications();
      showToast(t('toast_app_deleted'));
    });

    list.appendChild(item);
  });
}

/* ═══════════════════════════════════════════════
   PROFILE PAGE
═══════════════════════════════════════════════ */
function renderProfile() {
  const p = loadProfile();

  const avatarEl = document.getElementById('profile-avatar-view');
  if (p.avatarImg) {
    avatarEl.innerHTML = `<img src="${p.avatarImg}" alt="avatar" />`;
  } else {
    avatarEl.innerHTML = '';
    avatarEl.textContent = p.avatar || '👤';
  }

  document.getElementById('profile-name-view').textContent = p.name || t('profile_name_ph');
  document.getElementById('profile-role-view').textContent = p.role || t('profile_role_ph');
  document.getElementById('profile-bio-view').textContent  = p.bio  || t('profile_bio_ph');
  document.getElementById('profile-exp-view').textContent  = p.exp  || '—';

  const portfolio = document.getElementById('profile-portfolio-view');
  if (p.portfolio) {
    portfolio.textContent = p.portfolio;
    portfolio.href = p.portfolio;
  } else {
    portfolio.textContent = '—';
    portfolio.removeAttribute('href');
  }

  const skillsRow = document.getElementById('profile-skills-view');
  skillsRow.innerHTML = '';
  if (p.skills) {
    p.skills.split(',').map(s => s.trim()).filter(Boolean).forEach(s => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = s;
      skillsRow.appendChild(tag);
    });
  }
  if (!skillsRow.children.length) {
    skillsRow.innerHTML = '<span style="color:var(--text-muted);font-size:.85rem">—</span>';
  }

  document.getElementById('profile-view').classList.remove('hidden');
  document.getElementById('profile-edit').classList.add('hidden');
}

document.getElementById('btn-edit-profile').addEventListener('click', () => {
  const p = loadProfile();
  const currentAvatar = p.avatar || '👤';

  const prev = document.getElementById('avatar-preview');
  if (p.avatarImg) {
    prev.innerHTML = `<img src="${p.avatarImg}" alt="avatar" />`;
    document.getElementById('p-avatar-img').value = p.avatarImg;
    document.getElementById('p-avatar').value     = '';
    document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('active'));
  } else {
    prev.innerHTML = '';
    prev.textContent = currentAvatar;
    document.getElementById('p-avatar-img').value = '';
    document.getElementById('p-avatar').value     = currentAvatar;
    document.querySelectorAll('.avatar-opt').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.emoji === currentAvatar);
    });
  }

  document.getElementById('p-name').value      = p.name      || '';
  document.getElementById('p-role').value      = p.role      || '';
  document.getElementById('p-bio').value       = p.bio       || '';
  document.getElementById('p-skills').value    = p.skills    || '';
  document.getElementById('p-exp').value       = p.exp       || '';
  document.getElementById('p-portfolio').value = p.portfolio || '';

  document.getElementById('profile-view').classList.add('hidden');
  document.getElementById('profile-edit').classList.remove('hidden');
});

document.getElementById('btn-cancel-profile').addEventListener('click', () => {
  document.getElementById('profile-view').classList.remove('hidden');
  document.getElementById('profile-edit').classList.add('hidden');
});

document.getElementById('profile-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('p-name').value.trim();
  const role = document.getElementById('p-role').value.trim();
  if (!name) { showToast(t('toast_fill_name')); return; }
  if (!role) { showToast(t('toast_fill_role')); return; }

  saveProfile({
    avatar:    document.getElementById('p-avatar').value.trim() || '👤',
    avatarImg: document.getElementById('p-avatar-img').value    || '',
    name, role,
    bio:       document.getElementById('p-bio').value.trim(),
    skills:    document.getElementById('p-skills').value.trim(),
    exp:       document.getElementById('p-exp').value.trim(),
    portfolio: document.getElementById('p-portfolio').value.trim(),
  });

  renderProfile();
  showToast(t('toast_profile_saved'));
});

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
renderHome();
