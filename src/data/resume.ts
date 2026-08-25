export type Locale = "ru" | "en";

export type NavId =
  | "mandate"
  | "impact"
  | "experience"
  | "credentials"
  | "certificates";

export interface Certificate {
  id: string;
  year: string;
  title: string;
  issuer: string;
  detail?: string;
  image: string;
}

export interface Credential {
  year: string;
  title: string;
  issuer?: string;
}

export interface NavItem {
  id: NavId;
  label: string;
  shortLabel: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  hint?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  mandate: string;
  scale: string;
  result: string;
  contribution: string;
}

export interface FeaturedLink {
  label: string;
  href: string;
  type: "press" | "research";
}

export interface ContactLink {
  label: string;
  href: string;
  type: "email" | "linkedin" | "telegram" | "phone" | "other";
}

export interface ResumeCopy {
  meta: {
    pageTitle: string;
    tagline: string;
  };
  ui: {
    langRu: string;
    langEn: string;
    printPdf: string;
    share: string;
    shareCopied: string;
    printSummary: string;
    printSkills: string;
    write: string;
    swipe: string;
    certHint: string;
    closeFullscreen: string;
    prev: string;
    next: string;
    moreCreds: string;
    proofTitle: string;
    casesOverline: string;
    casesTitle: string;
    casesLead: string;
    caseMandate: string;
    caseScale: string;
    caseResult: string;
    caseRole: string;
    expOverline: string;
    expTitle: string;
    expLead: string;
    credsOverline: string;
    credsTitle: string;
    credsLead: string;
    certsOverline: string;
    certsTitle: string;
    certsLead: string;
    eduTitle: string;
    contactOverline: string;
    contactTitle: string;
  };
  profile: {
    name: string;
    nameShort: string;
    role: string;
    roleSub: string;
    location: string;
    status: string;
    avatarUrl: string;
    summary: string;
    languages: string;
    highlights: string[];
  };
  stats: Stat[];
  nav: NavItem[];
  featured: FeaturedLink[];
  cases: CaseStudy[];
  skillTags: string[];
  experience: Experience[];
  education: { period: string; title: string; note: string }[];
  certificates: Certificate[];
  otherCredentials: Credential[];
  contact: ContactLink[];
}

const contact: ContactLink[] = [
  {
    label: "bekmuhanbetov24@gmail.com",
    href: "mailto:bekmuhanbetov24@gmail.com",
    type: "email",
  },
  {
    label: "+7 (707) 131-20-44",
    href: "tel:+77071312044",
    type: "phone",
  },
  {
    label: "Telegram @Bekmuhanbetov",
    href: "https://t.me/Bekmuhanbetov",
    type: "telegram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bekmukhanbetov/",
    type: "linkedin",
  },
];

const certificateImages = {
  mba: "/certificates/mba-kbtu.png",
  pmbok: "/certificates/pmbok-pmi-upm.png",
  pmi: "/certificates/pmi-master-class.png",
  oracle: "/certificates/oracle-primavera-cloud.png",
  agile: "/certificates/agile-scrum-safe-kanban.png",
  middle: "/certificates/product-bee-middle-senior-pm.png",
  junior: "/certificates/product-bee-junior-pm.png",
};

const ru: ResumeCopy = {
  meta: {
    pageTitle: "Артур Бекмуханбетов — Product Owner · CTO · CIO",
    tagline: "Цифровизация девелопмента",
  },
  ui: {
    langRu: "RU",
    langEn: "EN",
    printPdf: "PDF / печать",
    share: "Поделиться",
    shareCopied: "Ссылка скопирована",
    printSummary: "О себе",
    printSkills: "Навыки",
    write: "Написать",
    swipe: "Стрелки или свайп · нажмите для полноэкранного просмотра",
    certHint: "Сертификаты · нажмите для просмотра на весь экран",
    closeFullscreen: "Закрыть",
    prev: "Предыдущий",
    next: "Следующий",
    moreCreds: "Дополнительно",
    proofTitle: "В СМИ и науке",
    casesOverline: "Impact",
    casesTitle: "Кейсы",
    casesLead: "Инициативы, где цифра меняет девелопмент: задача, масштаб, эффект.",
    caseMandate: "Задача",
    caseScale: "Масштаб",
    caseResult: "Результат",
    caseRole: "Роль",
    expOverline: "Карьера",
    expTitle: "Опыт",
    expLead: "Шесть лет в IT и управлении продуктами. Девять лет в строительстве — отраслевой контекст для цифровизации девелопмента.",
    credsOverline: "Профиль",
    credsTitle: "Образование и достижения",
    credsLead: "Образование, публикации и подтверждённая экспертиза в цифровизации девелопмента.",
    certsOverline: "Обучение",
    certsTitle: "Сертификаты",
    certsLead: "PMI, product management и agile — подтверждённые программы профессионального развития.",
    eduTitle: "Образование",
    contactOverline: "Contact",
    contactTitle: "Контакт",
  },
  profile: {
    name: "Бекмуханбетов Артур Мусаевич",
    nameShort: "Артур Бекмуханбетов",
    role: "Product Owner · CTO · CIO",
    roleSub: "Цифровизация девелопмента · продукты и платформы",
    location: "Астана, Казахстан",
    status: "Открыт к предложениям",
    avatarUrl: "/photo.jpg",
    summary:
      "IT Project Manager с продуктовым и техническим подходом к управлению. Опыт в строительстве и IT позволяет глубоко понимать бизнес-процессы, находить точки для цифровизации и превращать бизнес-задачи в работающие IT-продукты.\n\nУправляю полным циклом инициатив: от идеи, бизнес-кейса и формирования требований до разработки, MVP, внедрения и масштабирования. Сильные стороны — управление командами, техническое понимание систем, работа с ТОП-менеджментом, приоритизация и оценка экономического эффекта.\n\nФокус — создавать продукты и IT-решения, которые дают измеримый бизнес-результат. Развиваюсь в направлении стратегического управления IT-продуктами.",
    languages: "Русский — рабочий · English — базовый",
    highlights: [
      "Девелопмент · digital",
      "6000+ пользователей · NPS 80+",
      "Продукт под ключ · до prod",
    ],
  },
  stats: [
    { label: "Девелопмент", value: "15+", hint: "лет в отрасли" },
    { label: "IT / продукт", value: "6+", hint: "лет" },
    { label: "Команды", value: "до 20", hint: "человек" },
    { label: "RPA", value: "−50 млн", hint: "₸/год · одно решение" },
  ],
  nav: [
    { id: "mandate", label: "Обо мне", shortLabel: "Обо мне", icon: "◈" },
    { id: "impact", label: "Кейсы", shortLabel: "Кейсы", icon: "◇" },
    { id: "experience", label: "Опыт", shortLabel: "Опыт", icon: "▤" },
    { id: "credentials", label: "Достижения", shortLabel: "Достиж.", icon: "◆" },
    { id: "certificates", label: "Сертификаты", shortLabel: "Серт.", icon: "◎" },
  ],
  featured: [
    {
      label: "Forbes — переход на отечественную RPA-платформу",
      href: "https://forbes.kz/articles/kak-kazahstanskiy-stroitelnyy-holding-perehodil-na-otechestvennuyu-rpa-platformu",
      type: "press",
    },
    {
      label: "Научная публикация — цифровизация в строительстве",
      href: "https://ojs.publisher.agency/index.php/MSC/issue/view/122",
      type: "research",
    },
  ],
  cases: [
    {
      id: "portfolio",
      title: "Портфель IT-проектов",
      mandate:
        "Объединить инициативы цифровизации — внутренние платформы и продукты для внешних пользователей — в единый контур: приоритеты, статус, прозрачность для руководства.",
      scale: "Девелоперский холдинг · команды до 20 человек · внутренние сервисы и B2B-контуры",
      result:
        "Управляемый портфель вместо разрозненных заказов. В числе потоков — продукты для партнёров за периметром: цифровая связка девелопера, строительных контрагентов и сервисных компаний на сданных объектах.",
      contribution:
        "Портфельное управление: приоритизация, status review, баланс внутренних платформ и внешних B2B-продуктов экосистемы.",
    },
    {
      id: "land-planner",
      title: "Платформа управления земельными активами девелопера",
      mandate:
        "Собрать в одном продукте все процессы работы с земельными участками девелопера — вместо разрозненных Excel-таблиц, файлов и цепочек согласований.",
      scale:
        "Менеджеры отдела развития · карта и единая витрина · продукт в проде, масштабируется на международный контур внутри компании",
      result:
        "За год — продукт «Land Planner» в эксплуатации: участки на карте, процессы в одном месте, −50% трудозатрат менеджеров. Сейчас развивается как международный контур.",
      contribution:
        "От инициации и проектирования архитектуры до утверждения дизайна и передачи в prod. Product ownership end-to-end; зарегистрировал авторское право на «Land Planner».",
    },
    {
      id: "rpa",
      title: "Переход на отечественную RPA-платформу",
      mandate:
        "Снизить зависимость от зарубежного стека и стоимость автоматизации строительных и корпоративных процессов — без остановки операций.",
      scale: "IT-экосистема холдинга · внутренние команды и внешние бизнес-партнёры",
      result: "50 млн ₸/год экономии с одного решения, рост скорости разработки в 1,5 раза. Материал Forbes.",
      contribution:
        "Выбор платформы, управление вендорами, защита решения перед бизнесом и правлением.",
    },
    {
      id: "portal",
      title: "Корпоративный портал",
      mandate:
        "Закрыть техдолг и превратить портал в сервис, которым пользуются 6000+ сотрудников, а не «витрину ради галочки».",
      scale: "Весь холдинг · HR и бизнес-функции",
      result: "NPS 80+ на контуре оценки персонала.",
      contribution:
        "Приоритизация бэклога, работа со стейкхолдерами, итеративная поставка, контроль качества сервиса.",
    },
  ],
  skillTags: [
    "Цифровизация девелопмента",
    "Product ownership",
    "IT-стратегия",
    "Управление командами",
    "Портфель проектов",
    "Бизнес-кейс и ROI",
    "CTO / платформы",
    "RPA и автоматизация",
    "Agile · Scrum · SAFe",
    "Стейкхолдеры · C-level",
    "Power BI · 1С",
    "AI / Cursor",
  ],
  experience: [
    {
      period: "2022 — н.в.",
      role: "Руководитель проекта IT · Product Owner",
      company: "ТОО «BI Innovations», Астана",
      description:
        "Цифровизация девелоперского контура холдинга: ключевые продукты и платформы, портфель инициатив, команды и работа с внешними бизнес-партнёрами, взаимодействие с CEO и правлением.",
      highlights: [
        "Портфель IT-проектов: единые приоритеты и прозрачный статус",
        "Команды до 20 человек, работа с внешними бизнес-партнёрами",
        "Платформа земельных активов («Land Planner»): Excel → карта, −50% трудозатрат менеджеров; авторское право; международный контур",
        "RPA-платформа: −50 млн ₸/год с одного решения, ×1,5 скорость разработки",
        "Корпоративный портал: 6000+ пользователей, NPS 80+",
        "Цифровая повестка для CEO / правления",
      ],
    },
    {
      period: "2019 — 2021",
      role: "Старший системный аналитик",
      company: "ТОО «BI Innovations», Астана",
      description:
        "Переход в IT: требования, user stories, согласование с бизнесом девелопмента. Фундамент для product-роли.",
      highlights: ["Scrum / Agile · работа с заказчиками из бизнеса"],
    },
    {
      period: "2010 — 2019",
      role: "Инженер ПТО · сметчик",
      company: "BI Group · Замандас-Темиртау · Градстрой 2030",
      description:
        "Производство, подрядчики, сметы, ввод объектов. Отраслевой контекст строительства и девелопмента — основа для цифровизации.",
      highlights: [],
    },
  ],
  education: [
    {
      period: "2024 — 2026",
      title: "MBA — Менеджмент и экономика бизнеса",
      note: "KBTU Business School, Алматы",
    },
    {
      period: "2014",
      title: "Магистр, ПГС",
      note: "КазАДИ им. Л.Б. Гончарова",
    },
    {
      period: "2012",
      title: "Бакалавр, финансы",
      note: "Колледж инновационных технологий",
    },
  ],
  certificates: [
    {
      id: "pmbok",
      year: "2023",
      title: "PMBOK® Guide 7th Edition",
      issuer: "СПМ РК · PMI",
      detail: "35 PDUs",
      image: certificateImages.pmbok,
    },
    {
      id: "pmi-master",
      year: "2024",
      title: "Project Management Master Class",
      issuer: "PMI Kazakhstan",
      detail: "Master Class · 2024 · Сертификат PMI Kazakhstan",
      image: certificateImages.pmi,
    },
    {
      id: "oracle-primavera",
      year: "2025",
      title: "Oracle Primavera Cloud",
      issuer: "PMI Kazakhstan · UPM RK",
      detail: "2 PDUs · 18.08.2025",
      image: certificateImages.oracle,
    },
    {
      id: "agile-scrum",
      year: "2024",
      title: "Agile · Scrum · SAFe · Kanban",
      issuer: "AgilePM.kz",
      detail: "№ APM241220",
      image: certificateImages.agile,
    },
    {
      id: "product-bee-middle",
      year: "2026",
      title: "Middle & Senior Product Manager",
      issuer: "Product Bee Inc.",
      detail: "8 weeks · 12.05.2026",
      image: certificateImages.middle,
    },
    {
      id: "product-bee",
      year: "2025",
      title: "Junior Product Manager",
      issuer: "Product Bee Inc.",
      detail: "8 weeks · 11.08.2025",
      image: certificateImages.junior,
    },
  ],
  otherCredentials: [],
  contact,
};

const en: ResumeCopy = {
  meta: {
    pageTitle: "Artur Bekmukhanbetov — Product Owner · CTO · CIO",
    tagline: "Real estate development digitalization",
  },
  ui: {
    langRu: "RU",
    langEn: "EN",
    printPdf: "PDF / print",
    share: "Share",
    shareCopied: "Link copied",
    printSummary: "Summary",
    printSkills: "Skills",
    write: "Email",
    swipe: "Arrows or swipe · tap for fullscreen",
    certHint: "Certificates · tap to view fullscreen",
    closeFullscreen: "Close",
    prev: "Previous",
    next: "Next",
    moreCreds: "Additional",
    proofTitle: "Press and research",
    casesOverline: "Impact",
    casesTitle: "Cases",
    casesLead: "Initiatives where digital changed real estate development: goal, scale, outcome.",
    caseMandate: "Goal",
    caseScale: "Scale",
    caseResult: "Outcome",
    caseRole: "Role",
    expOverline: "Career",
    expTitle: "Experience",
    expLead: "Six years in IT and product leadership. Nine years in construction — industry context for development digitalization.",
    credsOverline: "Profile",
    credsTitle: "Education & achievements",
    credsLead: "Education, publications, and verified expertise in real estate development digitalization.",
    certsOverline: "Training",
    certsTitle: "Certificates",
    certsLead: "PMI, product management, and agile — verified professional development programs.",
    eduTitle: "Education",
    contactOverline: "Contact",
    contactTitle: "Contact",
  },
  profile: {
    name: "Bekmukhanbetov Artur Musayevich",
    nameShort: "Artur Bekmukhanbetov",
    role: "Product Owner · CTO · CIO",
    roleSub: "Real estate development digitalization · products and platforms",
    location: "Astana, Kazakhstan",
    status: "Open to opportunities",
    avatarUrl: "/photo.jpg",
    summary:
      "IT Project Manager with a product and technical approach to delivery. Experience in construction and IT enables deep understanding of business processes, spotting digitalization opportunities, and turning business goals into working IT products.\n\nI manage the full initiative lifecycle: from idea, business case, and requirements through development, MVP, rollout, and scale. Strengths include team leadership, technical system fluency, C-level stakeholder work, prioritization, and economic impact assessment.\n\nFocus: products and IT solutions with measurable business outcomes. Growing toward strategic IT product leadership.",
    languages: "Russian — working · English — basic",
    highlights: [
      "Development · digital",
      "6,000+ users · NPS 80+",
      "End-to-end · to production",
    ],
  },
  stats: [
    { label: "Development", value: "15+", hint: "years in industry" },
    { label: "IT / product", value: "6+", hint: "years" },
    { label: "Teams", value: "up to 20", hint: "people" },
    { label: "RPA", value: "−50m", hint: "₸/year · one solution" },
  ],
  nav: [
    { id: "mandate", label: "About", shortLabel: "About", icon: "◈" },
    { id: "impact", label: "Impact", shortLabel: "Impact", icon: "◇" },
    { id: "experience", label: "Experience", shortLabel: "Career", icon: "▤" },
    { id: "credentials", label: "Achievements", shortLabel: "Achiev.", icon: "◆" },
    { id: "certificates", label: "Certificates", shortLabel: "Certs", icon: "◎" },
  ],
  featured: [
    {
      label: "Forbes — migrating a holding to a domestic RPA platform",
      href: "https://forbes.kz/articles/kak-kazahstanskiy-stroitelnyy-holding-perehodil-na-otechestvennuyu-rpa-platformu",
      type: "press",
    },
    {
      label: "Research paper — digitalization in construction",
      href: "https://ojs.publisher.agency/index.php/MSC/issue/view/122",
      type: "research",
    },
  ],
  cases: [
    {
      id: "portfolio",
      title: "IT project portfolio",
      mandate:
        "Unify digitalization initiatives — internal platforms and products for external users — into one view of priorities, status, and transparency for leadership.",
      scale: "Development holding · teams up to 20 people · internal services and B2B streams",
      result:
        "A managed portfolio instead of ad-hoc IT requests. Includes partner-facing products: digital workflows linking the developer, construction contractors, and post-handover service companies.",
      contribution:
        "Portfolio governance: prioritization, status reviews, balance between internal platforms and external B2B products in the ecosystem.",
    },
    {
      id: "land-planner",
      title: "Developer land asset management platform",
      mandate:
        "Unify every land-plot workflow for the developer in one product — replacing scattered Excel files, spreadsheets, and approval chains.",
      scale:
        "Development department managers · map-based single console · live product, scaling to the international stream inside the company",
      result:
        "Shipped in one year: the Land Planner product in production — plots on a map, all processes in one place, −50% manager effort. Now evolving as the international stream.",
      contribution:
        "From initiation and solution architecture through design sign-off and production handover. End-to-end product ownership; registered copyright for Land Planner.",
    },
    {
      id: "rpa",
      title: "Domestic RPA platform",
      mandate:
        "Reduce foreign-stack lock-in and automation cost for construction and corporate processes — without stopping operations.",
      scale: "Holding IT ecosystem · internal teams and external business partners",
      result: "−50m ₸/year saved from a single solution, 1.5× delivery speed. Covered by Forbes.",
      contribution:
        "Platform selection, vendor management, business case to leadership and the board.",
    },
    {
      id: "portal",
      title: "Corporate portal",
      mandate:
        "Clear tech debt and turn the portal into a service 6,000+ employees actually use.",
      scale: "Entire holding · HR and business functions",
      result: "NPS 80+ on the people-review loop.",
      contribution:
        "Backlog prioritization, stakeholder management, iterative delivery, service quality.",
    },
  ],
  skillTags: [
    "Real estate development digitalization",
    "Product ownership",
    "IT strategy",
    "Team leadership",
    "Project portfolio",
    "Business case & ROI",
    "CTO / platforms",
    "RPA & automation",
    "Agile · Scrum · SAFe",
    "Stakeholders · C-level",
    "Power BI · 1C",
    "AI / Cursor",
  ],
  experience: [
    {
      period: "2022 — present",
      role: "IT Project Lead · Product Owner",
      company: "BI Innovations LLP, Astana",
      description:
        "Digitalization of the holding's development stream: key products and platforms, initiative portfolio, teams, and external business partners; engagement with the CEO and the board.",
      highlights: [
        "IT project portfolio: shared priorities and transparent status",
        "Teams up to 20 people; external business partners",
        "Land asset platform (Land Planner): Excel → map, −50% manager effort; copyright holder; international stream",
        "RPA platform: −50m ₸/year from a single solution, 1.5× delivery speed",
        "Corporate portal: 6,000+ users, NPS 80+",
        "Digital agenda for the CEO / board",
      ],
    },
    {
      period: "2019 — 2021",
      role: "Senior systems analyst",
      company: "BI Innovations LLP, Astana",
      description:
        "Move into IT: requirements, user stories, alignment with development business owners. Foundation for the product role.",
      highlights: ["Scrum / Agile · business stakeholder work"],
    },
    {
      period: "2010 — 2019",
      role: "Site engineer · estimator",
      company: "BI Group · Zamandas-Temirtau · Gradstroy 2030",
      description:
        "Production, contractors, estimates, commissioning. Construction and development industry context — the foundation for digitalization work.",
      highlights: [],
    },
  ],
  education: [
    {
      period: "2024 — 2026",
      title: "MBA — Management and Business Economics",
      note: "KBTU Business School, Almaty",
    },
    {
      period: "2014",
      title: "MSc, Civil Engineering",
      note: "KazADI named after L.B. Goncharov",
    },
    {
      period: "2012",
      title: "Bachelor, Finance",
      note: "College of Innovative Technologies",
    },
  ],
  certificates: [
    {
      id: "pmbok",
      year: "2023",
      title: "PMBOK® Guide 7th Edition",
      issuer: "UPM RK · PMI",
      detail: "35 PDUs",
      image: certificateImages.pmbok,
    },
    {
      id: "pmi-master",
      year: "2024",
      title: "Project Management Master Class",
      issuer: "PMI Kazakhstan",
      detail: "Master Class · 2024 · PMI Kazakhstan certificate",
      image: certificateImages.pmi,
    },
    {
      id: "oracle-primavera",
      year: "2025",
      title: "Oracle Primavera Cloud",
      issuer: "PMI Kazakhstan · UPM RK",
      detail: "2 PDUs · 18.08.2025",
      image: certificateImages.oracle,
    },
    {
      id: "agile-scrum",
      year: "2024",
      title: "Agile · Scrum · SAFe · Kanban",
      issuer: "AgilePM.kz",
      detail: "No. APM241220",
      image: certificateImages.agile,
    },
    {
      id: "product-bee-middle",
      year: "2026",
      title: "Middle & Senior Product Manager",
      issuer: "Product Bee Inc.",
      detail: "8 weeks · 12.05.2026",
      image: certificateImages.middle,
    },
    {
      id: "product-bee",
      year: "2025",
      title: "Junior Product Manager",
      issuer: "Product Bee Inc.",
      detail: "8 weeks · 11.08.2025",
      image: certificateImages.junior,
    },
  ],
  otherCredentials: [],
  contact,
};

export const resumeByLocale: Record<Locale, ResumeCopy> = { ru, en };

/** Default locale copy — use `useLocale()` in UI. */
export const resume = ru;
