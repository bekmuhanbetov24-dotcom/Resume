"""Patch static/index.html COPY and renderers from resume.ts-aligned content."""
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "static" / "index.html"
text = path.read_text(encoding="utf-8")

# RU summary as JS string with paragraph breaks
ru_summary = (
    "IT Project Manager с продуктовым и техническим подходом к управлению. "
    "Опыт в строительстве и IT позволяет глубоко понимать бизнес-процессы, находить точки для цифровизации "
    "и превращать бизнес-задачи в работающие IT-продукты.\\n\\n"
    "Управляю полным циклом инициатив: от идеи, бизнес-кейса и формирования требований до разработки, MVP, "
    "внедрения и масштабирования. Сильные стороны — управление командами, техническое понимание систем, "
    "работа с ТОП-менеджментом, приоритизация и оценка экономического эффекта.\\n\\n"
    "Фокус — создавать продукты и IT-решения, которые дают измеримый бизнес-результат. "
    "Развиваюсь в направлении стратегического управления IT-продуктами."
)

en_summary = (
    "IT Project Manager with a product and technical approach to delivery. "
    "Experience in construction and IT enables deep understanding of business processes, spotting digitalization "
    "opportunities, and turning business goals into working IT products.\\n\\n"
    "I manage the full initiative lifecycle: from idea, business case, and requirements through development, MVP, "
    "rollout, and scale. Strengths include team leadership, technical system fluency, C-level stakeholder work, "
    "prioritization, and economic impact assessment.\\n\\n"
    "Focus: products and IT solutions with measurable business outcomes. "
    "Growing toward strategic IT product leadership."
)

replacements = [
    ('casesLead: "Четыре инициативы, где цифра меняет девелопмент: задача, масштаб, эффект."',
     'casesLead: "Инициативы, где цифра меняет девелопмент: задача, масштаб, эффект."'),
    ('expLead: "IT и продукт — подробно. Девять лет в строительстве — как понимание отрасли, не как основной фокус."',
     'expLead: "Шесть лет в IT и управлении продуктами. Девять лет в строительстве — отраслевой контекст для цифровизации девелопмента."'),
    ('credsTitle: "Образование и сертификаты", credsLead: "MBA и PMI — в карусели первыми. Навыки — тегами, без самооценки в процентах."',
     'credsTitle: "Достижения", credsLead: "Образование, профессиональное обучение и подтверждённая экспертиза — от MBA и PMI до product и agile-компетенций."'),
    ('swipe: "Стрелки или свайп",',
     'swipe: "Стрелки или свайп", certHint: "Сертификаты · нажмите для просмотра на весь экран", closeFullscreen: "Закрыть",'),
    ('{ label: "Команды", value: "3–20", hint: "человек" }',
     '{ label: "Команды", value: "до 20", hint: "человек" }'),
    ('{ id: "credentials", label: "Creds", short: "Creds", icon: "◆" },\n          { id: "contact", label: "Контакт", short: "Контакт", icon: "✉" }',
     '{ id: "credentials", label: "Достижения", short: "Достиж.", icon: "◆" }'),
    ('scale: "Девелоперский холдинг · команды 3–20 и подрядчики · внутренние сервисы и B2B-контуры"',
     'scale: "Девелоперский холдинг · команды до 20 человек · внутренние сервисы и B2B-контуры"'),
    ('mandate: "Объединить инициативы цифровизации — внутренние платформы и продукты для внешних пользователей — в единый контур: приоритеты, статус, эскалация для руководства."',
     'mandate: "Объединить инициативы цифровизации — внутренние платформы и продукты для внешних пользователей — в единый контур: приоритеты, статус, прозрачность для руководства."'),
    ('scale: "IT-экосистема холдинга · внутренние команды и подрядчики"',
     'scale: "IT-экосистема холдинга · внутренние команды и внешние бизнес-партнёры"'),
    ('skillTags: ["Цифровизация девелопмента", "Product ownership", "Портфель проектов", "Команды 3–20", "CTO / платформы", "RPA и автоматизация", "Agile · Scrum · SAFe", "Стейкхолдеры · правление", "Power BI · 1С", "AI / Cursor"]',
     'skillTags: ["Цифровизация девелопмента", "Product ownership", "IT-стратегия", "Управление командами", "Портфель проектов", "Бизнес-кейс и ROI", "CTO / платформы", "RPA и автоматизация", "Agile · Scrum · SAFe", "Стейкхолдеры · C-level", "Power BI · 1С", "AI / Cursor"]'),
    ('{ period: "янв 2022 — н.в."',
     '{ period: "2022 — н.в."'),
    ('description: "Цифровизация девелоперского контура холдинга: ключевые продукты и платформы, портфель инициатив, команды и подрядчики, эскалация на CEO и правление."',
     'description: "Цифровизация девелоперского контура холдинга: ключевые продукты и платформы, портфель инициатив, команды и работа с внешними бизнес-партнёрами, взаимодействие с CEO и правлением."'),
    ('highlights: ["Портфель IT-проектов: единые приоритеты, статус и эскалация", "Команды от 3 до 20 человек + подрядчики"',
     'highlights: ["Портфель IT-проектов: единые приоритеты и прозрачный статус", "Команды до 20 человек, работа с внешними бизнес-партнёрами"'),
    ('{ period: "окт 2019 — дек 2021"',
     '{ period: "2019 — 2021"'),
    ('{ id: "pmi", year: "2024", title: "Project Management Master Class", issuer: "PMI Kazakhstan", detail: "", image: "certificates/pmi-master-class.png" }',
     '{ id: "pmi", year: "2024", title: "Project Management Master Class", issuer: "PMI Kazakhstan", detail: "Master Class · 2024", image: "certificates/pmi-master-class.png" }'),
    ('casesLead: "Four initiatives where digital changed real estate development: goal, scale, outcome."',
     'casesLead: "Initiatives where digital changed real estate development: goal, scale, outcome."'),
    ('expLead: "IT and product in depth. Nine years in construction — industry context, not the main headline."',
     'expLead: "Six years in IT and product leadership. Nine years in construction — industry context for development digitalization."'),
    ('credsTitle: "Education and certificates", credsLead: "MBA and PMI lead the carousel. Skills as tags — no self-rated percentages."',
     'credsTitle: "Achievements", credsLead: "Education, professional training, and verified expertise — from MBA and PMI to product and agile competencies."'),
    ('{ label: "Teams", value: "3–20", hint: "people" }',
     '{ label: "Teams", value: "up to 20", hint: "people" }'),
    ('{ id: "credentials", label: "Creds", short: "Creds", icon: "◆" },\n          { id: "contact", label: "Contact", short: "Contact", icon: "✉" }',
     '{ id: "credentials", label: "Achievements", short: "Achiev.", icon: "◆" }'),
    ('scale: "Development holding · teams of 3–20 plus vendors · internal services and B2B streams"',
     'scale: "Development holding · teams up to 20 people · internal services and B2B streams"'),
    ('mandate: "Unify digitalization initiatives — internal platforms and products for external users — into one view of priorities, status, and escalation."',
     'mandate: "Unify digitalization initiatives — internal platforms and products for external users — into one view of priorities, status, and transparency for leadership."'),
    ('scale: "Holding IT ecosystem · internal teams and vendors"',
     'scale: "Holding IT ecosystem · internal teams and external business partners"'),
    ('skillTags: ["Real estate development digitalization", "Product ownership", "Project portfolio", "Teams of 3–20", "CTO / platforms", "RPA & automation", "Agile · Scrum · SAFe", "Stakeholders · board", "Power BI · 1C", "AI / Cursor"]',
     'skillTags: ["Real estate development digitalization", "Product ownership", "IT strategy", "Team leadership", "Project portfolio", "Business case & ROI", "CTO / platforms", "RPA & automation", "Agile · Scrum · SAFe", "Stakeholders · C-level", "Power BI · 1C", "AI / Cursor"]'),
    ('{ period: "Jan 2022 — present"',
     '{ period: "2022 — present"'),
    ('description: "Digitalization of the holding\'s development stream: key products and platforms, initiative portfolio, teams and vendors, escalation to the CEO and the board."',
     'description: "Digitalization of the holding\'s development stream: key products and platforms, initiative portfolio, teams, and external business partners; engagement with the CEO and the board."'),
    ('highlights: ["IT project portfolio: shared priorities, status and escalation", "Teams of 3 to 20 plus vendors"',
     'highlights: ["IT project portfolio: shared priorities and transparent status", "Teams up to 20 people; external business partners"'),
    ('{ period: "Oct 2019 — Dec 2021"',
     '{ period: "2019 — 2021"'),
]

import re
# summary replacements
text = re.sub(
    r'summary: "Product Owner и руководитель IT-проектов[^"]*"',
    f'summary: "{ru_summary}"',
    text,
    count=1,
)
text = re.sub(
    r'summary: "Product Owner and IT project lead[^"]*"',
    f'summary: "{en_summary}"',
    text,
    count=1,
)

for old, new in replacements:
    if old not in text:
        print("WARN:", old[:50])
    text = text.replace(old, new)

path.write_text(text, encoding="utf-8")
print("patched COPY data")
