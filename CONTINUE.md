# Продолжение работы

Проект: **my-product** — лендинг-резюме (Senior PM).

## Запуск (без Node.js)

```powershell
cd d:\Cursor\my-product
.\start.ps1
```

Браузер: http://127.0.0.1:5173

## Что править

| Задача | Файл |
|--------|------|
| Тексты, опыт, контакты | `src/data/resume.ts` |
| То же для Python-версии | `static/index.html` → объект `RESUME` |
| Фото | `static/photo.jpg` и `public/photo.jpg` |
| Сертификаты (картинки) | `static/certificates/` |

## Следующие шаги (когда вернётесь)

- [ ] Добавить `photo.jpg`
- [ ] Сверить тексты с актуальным резюме
- [ ] При желании: деплой `static/` на GitHub Pages / Netlify
- [ ] React-версия: `npm run dev` (нужен Node или `scripts/setup-portable-node.ps1`)

## Структура

- `static/` — работает через Python (`start.ps1`)
- `src/` — React + Vite (полная версия)
- `public/certificates/` — сканы сертификатов
