# RetroGhost Production Test Script
# Run this to verify your deployment is working

$base = "https://kiroween.vercel.app"
$allPassed = $true

Write-Host "`n🎃 RetroGhost Production Test`n" -ForegroundColor Cyan
Write-Host "Testing: $base`n" -ForegroundColor Gray

# Test 1: Ghost List
Write-Host "[1/6] Testing Ghost List..." -ForegroundColor Yellow -NoNewline
try {
    $list = Invoke-WebRequest "$base/api/ghost/list" -UseBasicParsing | ConvertFrom-Json
    if ($list.ghosts.Count -eq 4) {
        Write-Host " ✓ PASS" -ForegroundColor Green
        Write-Host "      Found: $($list.ghosts.name -join ', ')" -ForegroundColor Gray
    } else {
        Write-Host " ✗ FAIL" -ForegroundColor Red
        $allPassed = $false
    }
} catch {
    Write-Host " ✗ FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $allPassed = $false
}

# Test 2-5: Each Ghost
$ghosts = @('dos', 'unix', 'basic', 'fortran')
$testNum = 2

foreach ($ghost in $ghosts) {
    Write-Host "[$testNum/6] Testing $ghost ghost..." -ForegroundColor Yellow -NoNewline
    try {
        $body = @{ghost=$ghost;message='hello'} | ConvertTo-Json
        $response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
        
        if ($response.response -and $response.ghost -eq $ghost) {
            Write-Host " ✓ PASS" -ForegroundColor Green
            $preview = $response.response.Substring(0, [Math]::Min(50, $response.response.Length))
            Write-Host "      Response: $preview..." -ForegroundColor Gray
        } else {
            Write-Host " ✗ FAIL" -ForegroundColor Red
            $allPassed = $false
        }
    } catch {
        Write-Host " ✗ FAIL - $($_.Exception.Message)" -ForegroundColor Red
        $allPassed = $false
    }
    $testNum++
}

# Test 6: Health Check
Write-Host "[6/6] Testing Health Endpoint..." -ForegroundColor Yellow -NoNewline
try {
    $health = Invoke-WebRequest "$base/api/health" -UseBasicParsing | ConvertFrom-Json
    if ($health.status -eq 'alive') {
        Write-Host " ✓ PASS" -ForegroundColor Green
        Write-Host "      Status: $($health.message)" -ForegroundColor Gray
    } else {
        Write-Host " ✗ FAIL" -ForegroundColor Red
        $allPassed = $false
    }
} catch {
    Write-Host " ✗ FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $allPassed = $false
}

# Summary
Write-Host "`n" -NoNewline
if ($allPassed) {
    Write-Host "✅ All tests passed! Your application is running perfectly." -ForegroundColor Green
    Write-Host "`nYou can now visit: $base" -ForegroundColor Cyan
} else {
    Write-Host "❌ Some tests failed. Check the errors above." -ForegroundColor Red
    Write-Host "`nTroubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Check Vercel dashboard: https://vercel.com/dashboard" -ForegroundColor Gray
    Write-Host "2. View function logs for errors" -ForegroundColor Gray
    Write-Host "3. Try redeploying with git" -ForegroundColor Gray
}

Write-Host ""
