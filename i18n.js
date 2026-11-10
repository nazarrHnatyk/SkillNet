'use strict';
/* ═══════════════════════════════════════════════
   SkillNet — i18n (Internationalization)
   Supported: uk (Ukrainian), en (English)
═══════════════════════════════════════════════ */

const TRANSLATIONS = {

  uk: {
    // ── Navbar ──
    nav_home:         'Головна',
    nav_orders:       'Замовлення',
    nav_create:       'Створити замовлення',
    nav_applications: 'Мої заявки',
    nav_profile:      'Профіль',
    theme_toggle:     'Перемкнути тему',
    open_menu:        'Відкрити меню',

    // ── Hero ──
    hero_label:       'IT Freelance Marketplace',
    hero_title:       'Знайди своє наступне<br>IT-замовлення',
    hero_sub:         'Тисячі проєктів від українських компаній та стартапів. Відгукуйся одним кліком.',
    hero_search_placeholder: 'Пошук замовлень: React, Python, Figma...',
    hero_search_btn:  'Знайти замовлення',
    hstat_orders:     'замовлень',
    hstat_freelancers:'фрілансерів',
    hstat_clients:    'задоволених клієнтів',

    // ── Home sections ──
    how_it_works:     'Як це працює',
    feature1_title:   'Клієнт публікує замовлення',
    feature1_text:    'Опиши задачу, вкажи бюджет і необхідні навички — і знайди фрілансера вже сьогодні.',
    feature2_title:   'Фрілансер знаходить проєкт',
    feature2_text:    'Переглядай актуальні замовлення, фільтруй за категоріями та відгукуйся на цікаві.',
    feature3_title:   'Результат у строк',
    feature3_text:    'Відстежуй статус своїх заявок і будуй репутацію на платформі.',
    recent_orders:    'Останні замовлення',
    view_all:         'Переглянути всі →',

    // ── Orders page ──
    page_orders_title:  'Замовлення',
    page_orders_sub:    'Знайди свій наступний проєкт',
    search_placeholder: 'Пошук за назвою...',
    cat_all:    'Всі',
    cat_frontend: 'Frontend',
    cat_backend:  'Backend',
    cat_uiux:     'UI/UX',
    cat_python:   'Python',
    cat_mobile:   'Mobile',
    orders_empty: 'За вашим запитом нічого не знайдено',

    // ── Create order page ──
    page_create_title:  'Створити замовлення',
    page_create_sub:    'Опиши задачу — і знайди фрілансера вже сьогодні',
    label_order_title:  'Назва замовлення',
    ph_order_title:     'Наприклад: Розробка лендінгу на React',
    label_desc:         'Опис роботи',
    ph_desc:            'Детально опиши, що потрібно зробити: функціональність, вимоги, очікуваний результат...',
    label_budget:       'Бюджет (грн)',
    ph_budget:          'Наприклад: 15000',
    label_deadline:     'Термін виконання',
    ph_deadline:        'Наприклад: 2 тижні',
    label_category:     'Категорія',
    opt_category_empty: '— Оберіть категорію —',
    opt_other:          'Інше',
    label_skills:       'Необхідні навички',
    ph_skills:          'React, TypeScript, Tailwind...',
    hint_comma:         'Через кому',
    label_client:       "Ваше ім'я або назва компанії",
    ph_client:          'Наприклад: Іван Мельник або TechCorp',
    btn_publish:        'Опублікувати замовлення',
    tips_title:         '💡 Поради',
    tip1: 'Чіткий опис приваблює кращих фрілансерів',
    tip2: 'Вкажи реальний бюджет — це економить час',
    tip3: 'Перелічи всі необхідні технології',
    tip4: 'Вкажи зручний термін, з запасом на правки',

    // ── Applications page ──
    page_apps_title:  'Мої заявки',
    page_apps_sub:    'Відстежуй статус своїх відгуків',
    apps_empty:       'Ти ще не відгукувався на жодне замовлення',
    btn_browse_orders:'Переглянути замовлення',
    stat_total:       'Всього заявок',
    stat_accepted:    'Прийнято',
    stat_review:      'На розгляді',

    // ── Profile page ──
    page_profile_title: 'Профіль',
    page_profile_sub:   'Твоя картка фрілансера',
    profile_name_ph:    "Твоє ім'я",
    profile_role_ph:    'Твоя спеціалізація',
    profile_bio_ph:     'Додай короткий опис про себе...',
    section_skills:     'Навички',
    section_exp:        'Досвід',
    section_portfolio:  'Портфоліо',
    btn_edit_profile:   '✏️ Редагувати профіль',
    card_edit_title:    'Редагувати профіль',
    label_avatar:       'Аватар',
    hint_avatar:        'Обери emoji або завантаж фото 📷',
    upload_photo_title: 'Завантажити фото',
    label_name:         "Ім'я",
    ph_name:            'Іван Мельник',
    label_role:         'Спеціалізація',
    ph_role:            'Frontend Developer',
    label_bio:          'Про себе',
    ph_bio:             'Коротко про досвід, стек, підхід до роботи...',
    label_skills_p:     'Навички',
    ph_skills_p:        'React, TypeScript, Node.js...',
    label_exp:          'Досвід роботи',
    ph_exp:             '3 роки, Upwork Top Rated, 20+ проєктів',
    label_portfolio:    'Посилання на портфоліо',
    btn_save:           'Зберегти',
    btn_cancel:         'Скасувати',

    // ── Order card / modal ──
    btn_view:         'Переглянути',
    btn_apply:        'Відгукнутися',
    btn_applied:      '✓ Вже відгукнувся',
    currency:         'грн',
    modal_client:     'Клієнт',
    modal_budget:     'Бюджет',
    modal_deadline:   'Термін',
    modal_skills:     'Навички',
    modal_published:  'Опубліковано',
    modal_btn_apply:  '🙋 Відгукнутися',
    modal_btn_applied:'✓ Ти вже відгукнувся',

    // ── Application item ──
    btn_delete_app:   'Видалити заявку',
    confirm_delete:   'Видалити цю заявку?',

    // ── Status labels ──
    status_review:  'На розгляді',
    status_accept:  'Прийнято',
    status_reject:  'Відхилено',

    // ── Toast messages ──
    toast_photo_too_big:    '⚠️ Фото завелике (максимум 2 МБ)',
    toast_fill_title:       '⚠️ Введіть назву замовлення',
    toast_fill_desc:        '⚠️ Додайте опис роботи',
    toast_fill_budget:      '⚠️ Введіть коректний бюджет (від 100 грн)',
    toast_fill_deadline:    '⚠️ Вкажіть термін виконання',
    toast_fill_category:    '⚠️ Оберіть категорію',
    toast_fill_skills:      '⚠️ Вкажіть необхідні навички',
    toast_fill_client:      "⚠️ Введіть ім'я або назву компанії",
    toast_order_published:  '✅ Замовлення опубліковано!',
    toast_already_applied:  '⚠️ Ти вже відгукнувся на це замовлення',
    toast_applied:          '🙌 Заявку надіслано! Перевір «Мої заявки»',
    toast_app_deleted:      'Заявку видалено',
    toast_fill_name:        "⚠️ Введіть ім'я",
    toast_fill_role:        '⚠️ Вкажіть спеціалізацію',
    toast_profile_saved:    '✅ Профіль збережено!',
    toast_request_sent:     '📩 Запит надіслано!',

    // ── Demo orders ──
    demo_orders: [
      {
        id: 'demo-1',
        title: 'Розробка корпоративного лендінгу',
        desc: "Потрібен лендінг для SaaS-продукту: головна сторінка, блок переваг, pricing, форма зворотного зв'язку. Дизайн надамо у Figma.",
        budget: 18000, skills: ['React', 'TypeScript', 'Tailwind CSS'],
        deadline: '10 днів', category: 'Frontend', client: 'TechCorp UA',
        createdAt: Date.now() - 86400000 * 2, isDemo: true,
      },
      {
        id: 'demo-2',
        title: 'REST API для мобільного застосунку',
        desc: 'Розробка Node.js API: авторизація (JWT), CRUD для замовлень і профілів, інтеграція з PostgreSQL, документація Swagger.',
        budget: 25000, skills: ['Node.js', 'PostgreSQL', 'REST API'],
        deadline: '3 тижні', category: 'Backend', client: 'Startup.lviv',
        createdAt: Date.now() - 86400000 * 1, isDemo: true,
      },
      {
        id: 'demo-3',
        title: 'Редизайн мобільного застосунку',
        desc: 'Повний редизайн iOS/Android додатку для доставки їжі. Потрібні нові екрани, компонентна бібліотека у Figma, Auto Layout.',
        budget: 20000, skills: ['Figma', 'UI/UX', 'Mobile Design'],
        deadline: '2 тижні', category: 'UI/UX Design', client: 'FoodRocket',
        createdAt: Date.now() - 86400000 * 3, isDemo: true,
      },
      {
        id: 'demo-4',
        title: 'ML-модель класифікації тексту',
        desc: 'Навчання моделі для автоматичної класифікації відгуків клієнтів на категорії. Датасет надамо, потрібен Python + sklearn/transformers.',
        budget: 30000, skills: ['Python', 'scikit-learn', 'NLP'],
        deadline: '1 місяць', category: 'Python', client: 'DataLab Kyiv',
        createdAt: Date.now() - 86400000 * 4, isDemo: true,
      },
      {
        id: 'demo-5',
        title: 'Flutter-додаток для трекінгу задач',
        desc: 'Мобільний таск-менеджер: проєкти, дедлайни, push-сповіщення, Firebase sync. Дизайн вже готовий.',
        budget: 22000, skills: ['Flutter', 'Dart', 'Firebase'],
        deadline: '3 тижні', category: 'Mobile', client: 'ProductTeam',
        createdAt: Date.now() - 86400000 * 5, isDemo: true,
      },
      {
        id: 'demo-6',
        title: 'Dashboard аналітики на Vue 3',
        desc: 'Адмін-панель з графіками (Chart.js), таблицями та фільтрами. Підключення до вже готового REST API. Responsive layout.',
        budget: 16000, skills: ['Vue 3', 'Chart.js', 'Axios'],
        deadline: '2 тижні', category: 'Frontend', client: 'Analytics UA',
        createdAt: Date.now() - 86400000 * 6, isDemo: true,
      },
    ],
  },

  en: {
    // ── Navbar ──
    nav_home:         'Home',
    nav_orders:       'Orders',
    nav_create:       'Post an Order',
    nav_applications: 'My Applications',
    nav_profile:      'Profile',
    theme_toggle:     'Toggle theme',
    open_menu:        'Open menu',

    // ── Hero ──
    hero_label:       'IT Freelance Marketplace',
    hero_title:       'Find Your Next<br>IT Project',
    hero_sub:         'Thousands of projects from Ukrainian companies and startups. Apply with one click.',
    hero_search_placeholder: 'Search orders: React, Python, Figma...',
    hero_search_btn:  'Find Orders',
    hstat_orders:     'orders',
    hstat_freelancers:'freelancers',
    hstat_clients:    'satisfied clients',

    // ── Home sections ──
    how_it_works:     'How It Works',
    feature1_title:   'Client Posts an Order',
    feature1_text:    'Describe the task, set a budget and required skills — find a freelancer today.',
    feature2_title:   'Freelancer Finds a Project',
    feature2_text:    'Browse active orders, filter by category and apply to the ones you like.',
    feature3_title:   'Results On Time',
    feature3_text:    'Track the status of your applications and build your reputation on the platform.',
    recent_orders:    'Recent Orders',
    view_all:         'View all →',

    // ── Orders page ──
    page_orders_title:  'Orders',
    page_orders_sub:    'Find your next project',
    search_placeholder: 'Search by title...',
    cat_all:    'All',
    cat_frontend: 'Frontend',
    cat_backend:  'Backend',
    cat_uiux:     'UI/UX',
    cat_python:   'Python',
    cat_mobile:   'Mobile',
    orders_empty: 'Nothing found for your request',

    // ── Create order page ──
    page_create_title:  'Post an Order',
    page_create_sub:    'Describe the task — find a freelancer today',
    label_order_title:  'Order Title',
    ph_order_title:     'E.g.: Landing page on React',
    label_desc:         'Job Description',
    ph_desc:            'Describe what needs to be done: features, requirements, expected result...',
    label_budget:       'Budget (UAH)',
    ph_budget:          'E.g.: 15000',
    label_deadline:     'Deadline',
    ph_deadline:        'E.g.: 2 weeks',
    label_category:     'Category',
    opt_category_empty: '— Select a category —',
    opt_other:          'Other',
    label_skills:       'Required Skills',
    ph_skills:          'React, TypeScript, Tailwind...',
    hint_comma:         'Comma-separated',
    label_client:       'Your name or company name',
    ph_client:          'E.g.: John Smith or TechCorp',
    btn_publish:        'Publish Order',
    tips_title:         '💡 Tips',
    tip1: 'A clear description attracts the best freelancers',
    tip2: 'Set a realistic budget — it saves time',
    tip3: 'List all required technologies',
    tip4: 'Set a comfortable deadline with time for revisions',

    // ── Applications page ──
    page_apps_title:  'My Applications',
    page_apps_sub:    'Track the status of your applications',
    apps_empty:       "You haven't applied to any orders yet",
    btn_browse_orders:'Browse Orders',
    stat_total:       'Total Applications',
    stat_accepted:    'Accepted',
    stat_review:      'Under Review',

    // ── Profile page ──
    page_profile_title: 'Profile',
    page_profile_sub:   'Your freelancer card',
    profile_name_ph:    'Your name',
    profile_role_ph:    'Your specialization',
    profile_bio_ph:     'Add a short description about yourself...',
    section_skills:     'Skills',
    section_exp:        'Experience',
    section_portfolio:  'Portfolio',
    btn_edit_profile:   '✏️ Edit Profile',
    card_edit_title:    'Edit Profile',
    label_avatar:       'Avatar',
    hint_avatar:        'Choose an emoji or upload a photo 📷',
    upload_photo_title: 'Upload photo',
    label_name:         'Name',
    ph_name:            'John Smith',
    label_role:         'Specialization',
    ph_role:            'Frontend Developer',
    label_bio:          'About Me',
    ph_bio:             'Brief overview of your experience, stack, and work approach...',
    label_skills_p:     'Skills',
    ph_skills_p:        'React, TypeScript, Node.js...',
    label_exp:          'Work Experience',
    ph_exp:             '3 years, Upwork Top Rated, 20+ projects',
    label_portfolio:    'Portfolio Link',
    btn_save:           'Save',
    btn_cancel:         'Cancel',

    // ── Order card / modal ──
    btn_view:         'View',
    btn_apply:        'Apply',
    btn_applied:      '✓ Already Applied',
    currency:         'UAH',
    modal_client:     'Client',
    modal_budget:     'Budget',
    modal_deadline:   'Deadline',
    modal_skills:     'Skills',
    modal_published:  'Published',
    modal_btn_apply:  '🙋 Apply',
    modal_btn_applied:'✓ Already Applied',

    // ── Application item ──
    btn_delete_app:   'Delete application',
    confirm_delete:   'Delete this application?',

    // ── Status labels ──
    status_review:  'Under Review',
    status_accept:  'Accepted',
    status_reject:  'Rejected',

    // ── Toast messages ──
    toast_photo_too_big:    '⚠️ Photo is too large (max 2 MB)',
    toast_fill_title:       '⚠️ Enter order title',
    toast_fill_desc:        '⚠️ Add job description',
    toast_fill_budget:      '⚠️ Enter a valid budget (min 100 UAH)',
    toast_fill_deadline:    '⚠️ Specify the deadline',
    toast_fill_category:    '⚠️ Select a category',
    toast_fill_skills:      '⚠️ Specify required skills',
    toast_fill_client:      '⚠️ Enter your name or company name',
    toast_order_published:  '✅ Order published!',
    toast_already_applied:  '⚠️ You have already applied to this order',
    toast_applied:          '🙌 Application sent! Check "My Applications"',
    toast_app_deleted:      'Application deleted',
    toast_fill_name:        '⚠️ Enter your name',
    toast_fill_role:        '⚠️ Specify your specialization',
    toast_profile_saved:    '✅ Profile saved!',
    toast_request_sent:     '📩 Request sent!',

    // ── Demo orders ──
    demo_orders: [
      {
        id: 'demo-1',
        title: 'Corporate Landing Page Development',
        desc: 'Need a landing page for a SaaS product: hero section, benefits block, pricing, contact form. Design will be provided in Figma.',
        budget: 18000, skills: ['React', 'TypeScript', 'Tailwind CSS'],
        deadline: '10 days', category: 'Frontend', client: 'TechCorp UA',
        createdAt: Date.now() - 86400000 * 2, isDemo: true,
      },
      {
        id: 'demo-2',
        title: 'REST API for Mobile Application',
        desc: 'Build a Node.js API: JWT auth, CRUD for orders and profiles, PostgreSQL integration, Swagger docs.',
        budget: 25000, skills: ['Node.js', 'PostgreSQL', 'REST API'],
        deadline: '3 weeks', category: 'Backend', client: 'Startup.lviv',
        createdAt: Date.now() - 86400000 * 1, isDemo: true,
      },
      {
        id: 'demo-3',
        title: 'Mobile App Redesign',
        desc: 'Full redesign of an iOS/Android food delivery app. Need new screens, Figma component library, Auto Layout.',
        budget: 20000, skills: ['Figma', 'UI/UX', 'Mobile Design'],
        deadline: '2 weeks', category: 'UI/UX Design', client: 'FoodRocket',
        createdAt: Date.now() - 86400000 * 3, isDemo: true,
      },
      {
        id: 'demo-4',
        title: 'ML Text Classification Model',
        desc: 'Train a model to automatically classify customer reviews into categories. Dataset provided, need Python + sklearn/transformers.',
        budget: 30000, skills: ['Python', 'scikit-learn', 'NLP'],
        deadline: '1 month', category: 'Python', client: 'DataLab Kyiv',
        createdAt: Date.now() - 86400000 * 4, isDemo: true,
      },
      {
        id: 'demo-5',
        title: 'Flutter Task Tracking App',
        desc: 'Mobile task manager: projects, deadlines, push notifications, Firebase sync. Design is ready.',
        budget: 22000, skills: ['Flutter', 'Dart', 'Firebase'],
        deadline: '3 weeks', category: 'Mobile', client: 'ProductTeam',
        createdAt: Date.now() - 86400000 * 5, isDemo: true,
      },
      {
        id: 'demo-6',
        title: 'Vue 3 Analytics Dashboard',
        desc: 'Admin panel with charts (Chart.js), tables and filters. Connect to an existing REST API. Responsive layout.',
        budget: 16000, skills: ['Vue 3', 'Chart.js', 'Axios'],
        deadline: '2 weeks', category: 'Frontend', client: 'Analytics UA',
        createdAt: Date.now() - 86400000 * 6, isDemo: true,
      },
    ],
  },
};

/* ── Поточна мова ── */
let _lang = localStorage.getItem('sn-lang') || 'uk';

/** Повертає рядок перекладу */
function t(key) {
  return (TRANSLATIONS[_lang] || TRANSLATIONS['uk'])[key] ?? key;
}

/** Змінює мову і перемальовує сторінку */
function setLang(lang) {
  _lang = lang;
  localStorage.setItem('sn-lang', lang);
  applyTranslations();
  // Скинути кеш замовлень щоб demo-дані підтягнулись у новій мові
  localStorage.removeItem('sn-orders-v1');
}

/** Повертає поточну мову */
function getLang() { return _lang; }

/** Застосовує переклади до всіх статичних елементів DOM */
function applyTranslations() {
  const L = TRANSLATIONS[_lang] || TRANSLATIONS['uk'];

  // ── Navbar ──
  _setText('[data-page="home"].nav-link',         L.nav_home);
  _setText('[data-page="orders"].nav-link',        L.nav_orders);
  _setText('[data-page="create"].nav-link',        L.nav_create);
  _setText('[data-page="applications"].nav-link',  L.nav_applications);
  _setText('[data-page="profile"].nav-link',       L.nav_profile);
  _setAttr('#theme-btn',   'aria-label', L.theme_toggle);
  _setAttr('#nav-burger',  'aria-label', L.open_menu);

  // ── Hero ──
  _setText('.hero-label',              L.hero_label);
  _setHtml('.hero-title',              L.hero_title);
  _setText('.hero-sub',                L.hero_sub);
  _setAttr('#hero-search-input', 'placeholder', L.hero_search_placeholder);
  _setText('#hero-search-btn',         L.hero_search_btn);
  _setText('#hstat-orders + .hstat-label',   L.hstat_orders);

  // hstat labels (всі три)
  const hstatLabels = document.querySelectorAll('.hstat-label');
  if (hstatLabels[0]) hstatLabels[0].textContent = L.hstat_orders;
  if (hstatLabels[1]) hstatLabels[1].textContent = L.hstat_freelancers;
  if (hstatLabels[2]) hstatLabels[2].textContent = L.hstat_clients;

  // ── Home sections ──
  const sectionTitles = document.querySelectorAll('#page-home .section-title');
  if (sectionTitles[0]) sectionTitles[0].textContent = L.how_it_works;
  if (sectionTitles[1]) sectionTitles[1].textContent = L.recent_orders;

  const featureBoxes = document.querySelectorAll('.feature-box');
  if (featureBoxes[0]) {
    featureBoxes[0].querySelector('h3').textContent = L.feature1_title;
    featureBoxes[0].querySelector('p').textContent  = L.feature1_text;
  }
  if (featureBoxes[1]) {
    featureBoxes[1].querySelector('h3').textContent = L.feature2_title;
    featureBoxes[1].querySelector('p').textContent  = L.feature2_text;
  }
  if (featureBoxes[2]) {
    featureBoxes[2].querySelector('h3').textContent = L.feature3_title;
    featureBoxes[2].querySelector('p').textContent  = L.feature3_text;
  }

  _setText('.link-all[data-page="orders"]', L.view_all);

  // ── Orders page ──
  _setText('#page-orders .page-title', L.page_orders_title);
  _setText('#page-orders .page-sub',   L.page_orders_sub);
  _setAttr('#orders-search', 'placeholder', L.search_placeholder);
  _setText('.cat-btn[data-cat="all"]',      L.cat_all);
  _setText('#orders-empty p',               L.orders_empty);

  // ── Create order page ──
  _setText('#page-create .page-title', L.page_create_title);
  _setText('#page-create .page-sub',   L.page_create_sub);
  _setLabelText('c-title',    L.label_order_title);
  _setAttr('#c-title',   'placeholder', L.ph_order_title);
  _setLabelText('c-desc',     L.label_desc);
  _setAttr('#c-desc',    'placeholder', L.ph_desc);
  _setLabelText('c-budget',   L.label_budget);
  _setAttr('#c-budget',  'placeholder', L.ph_budget);
  _setLabelText('c-deadline', L.label_deadline);
  _setAttr('#c-deadline','placeholder', L.ph_deadline);
  _setLabelText('c-category', L.label_category);
  _setLabelText('c-skills',   L.label_skills);
  _setAttr('#c-skills',  'placeholder', L.ph_skills);
  _setLabelText('c-client',   L.label_client);
  _setAttr('#c-client',  'placeholder', L.ph_client);

  // Select options
  const catSelect = document.getElementById('c-category');
  if (catSelect) {
    catSelect.options[0].text = L.opt_category_empty;
    catSelect.options[6] && (catSelect.options[6].text = L.opt_other);
  }

  _setText('#create-form .btn-full', L.btn_publish);
  _setText('.tips-title', L.tips_title);
  const tips = document.querySelectorAll('.tips-list li');
  const tipKeys = ['tip1','tip2','tip3','tip4'];
  tips.forEach((li, i) => { if (tipKeys[i]) li.textContent = L[tipKeys[i]]; });

  const hintComma = document.querySelectorAll('.field-hint:not(.avatar-hint)');
  hintComma.forEach(h => {
    if (h.textContent.includes('кому') || h.textContent.includes('Comma')) {
      h.textContent = L.hint_comma;
    }
  });

  // ── Applications page ──
  _setText('#page-applications .page-title', L.page_apps_title);
  _setText('#page-applications .page-sub',   L.page_apps_sub);
  _setText('#applications-empty p',          L.apps_empty);
  _setText('#applications-empty .btn-accent',L.btn_browse_orders);

  // ── Profile page ──
  _setText('#page-profile .page-title', L.page_profile_title);
  _setText('#page-profile .page-sub',   L.page_profile_sub);
  _setText('#btn-edit-profile',         L.btn_edit_profile);

  const profileSectionTitles = document.querySelectorAll('.profile-section-title');
  if (profileSectionTitles[0]) profileSectionTitles[0].textContent = L.section_skills;
  if (profileSectionTitles[1]) profileSectionTitles[1].textContent = L.section_exp;
  if (profileSectionTitles[2]) profileSectionTitles[2].textContent = L.section_portfolio;

  _setText('.card-title', L.card_edit_title);
  const avatarLabel = document.querySelector('#profile-form .field:first-child label');
  if (avatarLabel) avatarLabel.textContent = L.label_avatar;

  const avatarHint = document.querySelector('.avatar-editor .field-hint');
  if (avatarHint) avatarHint.textContent = L.hint_avatar;

  const uploadBtn = document.querySelector('.avatar-upload-btn');
  if (uploadBtn) uploadBtn.title = L.upload_photo_title;

  _setLabelText('p-name',      L.label_name);
  _setAttr('#p-name',      'placeholder', L.ph_name);
  _setLabelText('p-role',      L.label_role);
  _setAttr('#p-role',      'placeholder', L.ph_role);
  _setLabelText('p-bio',       L.label_bio);
  _setAttr('#p-bio',       'placeholder', L.ph_bio);
  _setLabelText('p-skills',    L.label_skills_p);
  _setAttr('#p-skills',    'placeholder', L.ph_skills_p);
  _setLabelText('p-exp',       L.label_exp);
  _setAttr('#p-exp',       'placeholder', L.ph_exp);
  _setLabelText('p-portfolio', L.label_portfolio);

  _setText('#profile-form button[type="submit"]', L.btn_save);
  _setText('#btn-cancel-profile',                 L.btn_cancel);

  // ── Lang switcher ──
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = _lang === 'uk' ? 'EN' : 'UA';
  document.documentElement.lang = _lang === 'uk' ? 'uk' : 'en';
}

/* ── Helpers ── */
function _setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}
function _setHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}
function _setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}
function _setLabelText(inputId, text) {
  const label = document.querySelector(`label[for="${inputId}"]`);
  if (!label) return;
  // Зберігаємо <span class="req">
  const req = label.querySelector('.req');
  label.textContent = text + ' ';
  if (req) label.appendChild(req);
}
