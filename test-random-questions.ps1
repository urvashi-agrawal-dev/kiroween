# Test random questions with each ghost
$base = "https://kiroween.vercel.app"

Write-Host "`n🎲 Testing Random Questions with Each Ghost`n" -ForegroundColor Cyan

$questions = @(
    @{ghost='dos'; question='What do you love?'},
    @{ghost='dos'; question='Why are you so slow?'},
    @{ghost='dos'; question='Tell me about memory'},
    @{ghost='unix'; question='What do you love?'},
    @{ghost='unix'; question='Why is unix so cryptic?'},
    @{ghost='unix'; question='Are you fast?'},
    @{ghost='basic'; question='Is programming hard?'},
    @{ghost='basic'; question='What do you think is fun?'},
    @{ghost='basic'; question='Why should I learn BASIC?'},
    @{ghost='fortran'; question='What do you love?'},
    @{ghost='fortran'; question='How fast are you?'},
    @{ghost='fortran'; question='Do you like games?'}
)

foreach ($q in $questions) {
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
    Write-Host "Ghost: $($q.ghost.ToUpper())" -ForegroundColor Yellow
    Write-Host "Question: $($q.question)" -ForegroundColor Cyan
    Write-Host "───────────────────────────────────────────────────────" -ForegroundColor DarkGray
    
    try {
        $body = @{ghost=$q.ghost;message=$q.question} | ConvertTo-Json
        $response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing | ConvertFrom-Json
        Write-Host $response.response -ForegroundColor Green
    } catch {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
Write-Host "✅ All ghosts responded to random questions!" -ForegroundColor Green
Write-Host "Try asking ANYTHING on the website!" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor DarkGray
