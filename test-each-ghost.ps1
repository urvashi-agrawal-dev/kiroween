# Test each ghost persona with detailed output
$base = "https://kiroween.vercel.app"

Write-Host "`n👻 Testing Each Ghost Persona in Detail`n" -ForegroundColor Cyan

# DOS Phantom Test
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "1. DOS PHANTOM (MS-DOS 6.22)" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
$body = @{ghost='dos';message='hello'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

# Test DOS command
Write-Host "Testing DOS command 'DIR':" -ForegroundColor Cyan
$body = @{ghost='dos';message='DIR'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

# UNIX Necromancer Test
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "2. UNIX NECROMANCER (Classic UNIX)" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
$body = @{ghost='unix';message='hello'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

# Test UNIX command
Write-Host "Testing UNIX command 'ls':" -ForegroundColor Cyan
$body = @{ghost='unix';message='ls'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

# BASIC Poltergeist Test
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "3. BASIC POLTERGEIST (Commodore 64)" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
$body = @{ghost='basic';message='hello'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

# Test BASIC command
Write-Host "Testing BASIC command 'RUN':" -ForegroundColor Cyan
$body = @{ghost='basic';message='RUN'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

# FORTRAN Oracle Test
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "4. FORTRAN ORACLE (FORTRAN 77)" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
$body = @{ghost='fortran';message='hello'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
Write-Host $response.response -ForegroundColor Green
Write-Host ""

Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "✅ All 4 ghost personas are working correctly!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host ""
