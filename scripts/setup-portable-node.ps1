# Portable Node.js в папку проекта — БЕЗ прав администратора.
# Скачивает официальный zip с nodejs.org в .tools/

$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent

$nodeVersion = "22.16.0"
$zipName = "node-v$nodeVersion-win-x64.zip"
$url = "https://nodejs.org/dist/v$nodeVersion/$zipName"
$toolsDir = Join-Path $root ".tools"
$zipPath = Join-Path $toolsDir $zipName
$extractDir = Join-Path $toolsDir "node"
$nodeExe = Join-Path $extractDir "node.exe"
$npmCmd = Join-Path $extractDir "npm.cmd"

New-Item -ItemType Directory -Force -Path $toolsDir | Out-Null

if (-not (Test-Path $nodeExe)) {
    Write-Host "Скачиваю Node.js $nodeVersion (portable)..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri $url -OutFile $zipPath -UseBasicParsing
    if (Test-Path $extractDir) { Remove-Item $extractDir -Recurse -Force }
  Expand-Archive -Path $zipPath -DestinationPath $toolsDir -Force
    $inner = Get-ChildItem $toolsDir -Directory | Where-Object { $_.Name -like "node-v*" } | Select-Object -First 1
    Rename-Item $inner.FullName "node"
    Remove-Item $zipPath -Force -ErrorAction SilentlyContinue
    Write-Host "Node установлен в: $extractDir" -ForegroundColor Green
} else {
    Write-Host "Portable Node уже есть: $extractDir" -ForegroundColor DarkGray
}

Write-Host "Устанавливаю зависимости npm..." -ForegroundColor Cyan
Set-Location $root
& $npmCmd install

Write-Host ""
Write-Host "Готово. Запуск dev-сервера:" -ForegroundColor Green
Write-Host "  .\scripts\dev-portable.ps1" -ForegroundColor Yellow
