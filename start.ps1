# Запуск без Node.js и без прав администратора (нужен только Python).
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$static = Join-Path $root "static"
$port = 5173

if (-not (Test-Path $static)) {
    Write-Error "Папка static не найдена: $static"
}

Write-Host ""
Write-Host "  Resume Dashboard (без Node.js)" -ForegroundColor Cyan
Write-Host "  Откройте в браузере: http://127.0.0.1:$port" -ForegroundColor Green
Write-Host "  Остановка: Ctrl+C" -ForegroundColor DarkGray
Write-Host ""

Set-Location $static
python -m http.server $port --bind 127.0.0.1
