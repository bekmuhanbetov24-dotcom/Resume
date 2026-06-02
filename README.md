# my-product — Resume Dashboard

Интерактивное резюме в формате mini-dashboard. Mobile-first, тёмная тема.

---

## Запуск БЕЗ Node.js и БЕЗ прав администратора

У вас уже есть **Python** (как для biservice-backend). Этого достаточно.

```powershell
cd d:\Cursor\my-product
.\start.ps1
```

Откройте в браузере: **http://127.0.0.1:5173**

Редактирование резюме в статической версии: файл **`static/index.html`** — объект `RESUME` внизу файла (в `<script>`).

---

## Полная версия (React) — тоже без админа

Node можно поставить **portable** в папку проекта (скачивание zip, не установщик):

```powershell
cd d:\Cursor\my-product
.\scripts\setup-portable-node.ps1
.\scripts\dev-portable.ps1
```

Редактирование: **`src/data/resume.ts`**

---

## Если есть Node.js в системе

```powershell
npm install
npm run dev
```

---

## Публикация в интернете (GitHub Pages)

Сайт публикуется автоматически из папки **`static/`** при push в `main`.

**Адрес:** https://bekmuhanbetov24-dotcom.github.io/Resume/

Один раз включите в репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

---

## Стек

- **static/** — HTML + CSS + JS (Python для локального сервера)
- **src/** — React 19 + TypeScript + Vite + Tailwind 4
