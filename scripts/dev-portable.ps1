$root = Split-Path $PSScriptRoot -Parent
$nodeDir = Join-Path $root ".tools\node"
$npmCmd = Join-Path $nodeDir "npm.cmd"

if (-not (Test-Path $npmCmd)) {
    Write-Host "Сначала запустите: .\scripts\setup-portable-node.ps1" -ForegroundColor Red
    exit 1
}

Set-Location $root
& $npmCmd run dev
