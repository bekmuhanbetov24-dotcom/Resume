/**
 * Все данные резюме — редактируйте здесь.
 * Фото: положите файл photo.jpg в public/ и static/
 */

export type NavId =
  | "overview"
  | "skills"
  | "certificates"
  | "experience"
  | "contact";

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
  link?: string;
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

export interface Skill {
  name: string;
  level: number;
  category: "pm" | "analytics" | "tools" | "tech" | "languages";
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
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

export const resume = {
  meta: {
    pageTitle: "Артур Бекмуханбетов — Senior Project Manager",
    tagline: "IT Project Manager · Product Owner · Digital Transformation",
  },

  profile: {
    name: "Бекмуханбетов Артур Мусаевич",
    nameShort: "Артур Бекмуханбетов",
    role: "Senior Project Manager",
    roleSub: "IT · Agile · Digital Transformation · BI Innovations",
    location: "Астана, Казахстан",
    status: "Открыт к предложениям · удалённо",
    avatarUrl: "/photo.jpg",
    summary:
      "Руководитель IT-проектов с фокусом на цифровизацию, автоматизацию и стратегическое развитие. 15+ лет карьеры: от инженера ПТО до ведения ключевого продукта и команды до 15 человек. Измеримые результаты: −50 млн ₸/год на IT-экосистеме, портал для 4000+ сотрудников (NPS 80+), MVP с сокращением трудозатрат отдела в 2 раза, патент на собственный продукт.",
    highlights: [
      "−50 млн ₸/год · оптимизация платформы",
      "4000+ пользователей · NPS 80+",
      "Команда 15 · Agile / Scrum",
    ],
  },

  stats: [
    { label: "Опыт", value: "15+", hint: "лет" },
    { label: "IT / PM", value: "6+", hint: "лет" },
    { label: "Команда", value: "15", hint: "чел." },
    { label: "Сертификаты", value: "5", hint: "PMI · Agile" },
  ] satisfies Stat[],

  nav: [
    { id: "overview", label: "Обзор", shortLabel: "Обзор", icon: "◈" },
    { id: "skills", label: "Навыки", shortLabel: "Навыки", icon: "◇" },
    { id: "certificates", label: "Сертификаты", shortLabel: "Серт.", icon: "◆" },
    { id: "experience", label: "Опыт", shortLabel: "Опыт", icon: "▤" },
    { id: "contact", label: "Контакты", shortLabel: "Контакты", icon: "✉" },
  ] satisfies NavItem[],

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
  ] satisfies FeaturedLink[],

  skills: [
    { name: "Управление проектами", level: 92, category: "pm" },
    { name: "Agile / Scrum / Kanban", level: 90, category: "pm" },
    { name: "PMBOK / SAFe", level: 85, category: "pm" },
    { name: "Бизнес-анализ и ТЗ", level: 88, category: "analytics" },
    { name: "Управление рисками", level: 85, category: "pm" },
    { name: "Jira / Confluence", level: 90, category: "tools" },
    { name: "MS Project / Visio", level: 82, category: "tools" },
    { name: "Figma / Miro", level: 80, category: "tools" },
    { name: "Power BI", level: 78, category: "analytics" },
    { name: "SQL", level: 70, category: "tech" },
    { name: "1С: Предприятие", level: 72, category: "tech" },
    { name: "Vibe coding · Cursor / AI", level: 75, category: "tech" },
    { name: "Английский язык", level: 23, category: "languages" },
  ] satisfies Skill[],

  experience: [
    {
      period: "янв 2022 — н.в.",
      role: "Senior Project Manager",
      company: "ТОО «BI Innovations», Астана",
      description:
        "Управление командой из 15 человек, ведение стратегически важного продукта компании.",
      highlights: [
        "Миграция на отечественную RPA-платформу — 50 млн ₸/год, ×1,5 скорость разработки",
        "Корпоративный портал: техдолг, оценка персонала 4000+ (NPS 80+)",
        "MVP единого окна планирования — −50% трудозатрат отдела",
        "Scrum-церемонии; 5+ стажёров трудоустроены; патент на продукт",
      ],
    },
    {
      period: "окт 2019 — дек 2021",
      role: "Старший системный аналитик",
      company: "ТОО «BI Innovations», Астана",
      description:
        "ТЗ, тестирование, User Stories, презентации заказчикам.",
      highlights: ["Scrum · Agile · согласование с бизнесом"],
    },
    {
      period: "мар 2018 — сен 2019",
      role: "Инженер-сметчик",
      company: "BI Group, Астана",
      description: "Сметы, объёмы работ, документация.",
      highlights: [],
    },
    {
      period: "май 2013 — мар 2018",
      role: "Инженер ПТО",
      company: "ТОО «Замандас-Темиртау»",
      description: "Акты, подрядчики, производство работ.",
      highlights: [],
    },
    {
      period: "окт 2010 — дек 2012",
      role: "Инженер ПТО",
      company: "ТОО «Градстрой 2030»",
      description: "Чертежи, ввод объектов в эксплуатацию.",
      highlights: [],
    },
  ] satisfies Experience[],

  education: [
    {
      period: "2024 — 2025",
      title: "MBA",
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
      id: "oracle-primavera",
      year: "2025",
      title: "Oracle Primavera Cloud",
      issuer: "PMI Kazakhstan · UPM RK",
      detail: "2 PDUs · 18.08.2025",
      image: "/certificates/oracle-primavera-cloud.png",
    },
    {
      id: "product-bee",
      year: "2025",
      title: "Junior Product Manager",
      issuer: "Product Bee Inc.",
      detail: "8 weeks · 11.08.2025",
      image: "/certificates/product-bee-junior-pm.png",
    },
    {
      id: "agile-scrum",
      year: "2024",
      title: "Agile · Scrum · SAFe · Kanban",
      issuer: "AgilePM.kz",
      detail: "№ APM241220",
      image: "/certificates/agile-scrum-safe-kanban.png",
    },
    {
      id: "pmi-master",
      year: "2024",
      title: "Project Management Master Class",
      issuer: "PMI Kazakhstan",
      image: "/certificates/pmi-master-class.png",
    },
    {
      id: "pmbok",
      year: "2023",
      title: "PMBOK® Guide 7th Edition",
      issuer: "СПМ РК · PMI",
      detail: "35 PDUs",
      image: "/certificates/pmbok-pmi-upm.png",
    },
  ] satisfies Certificate[],

  otherCredentials: [
    { year: "2022", title: "PreMBA", issuer: "BI University" },
  ] satisfies Credential[],

  contact: [
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
  ] satisfies ContactLink[],
};

export const skillCategories: Record<Skill["category"], string> = {
  pm: "Project Management",
  analytics: "Аналитика",
  tools: "Инструменты",
  tech: "Technology",
  languages: "Языки",
};
