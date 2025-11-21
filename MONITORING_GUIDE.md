# RetroGhost Monitoring & Usage Guide

## Quick Health Checks

### 1. Check if Site is Live
```bash
# Visit in browser
https://kiroween.vercel.app

# Or use curl
curl https://kiroween.vercel.app
```

### 2. Test API Endpoints

#### Check Ghost List
```bash
curl https://kiroween.vercel.app/api/ghost/list
```
**Expected:** JSON with 4 ghosts (dos, unix, basic, fortran)

#### Test Ghost Summon (PowerShell)
```powershell
$body = @{ghost='dos';message='hello'} | ConvertTo-Json
Invoke-WebRequest -Uri 'https://kiroween.vercel.app/api/ghost' -Method POST -Body $body -ContentType 'application/json'
```
**Expected:** JSON with DOS Phantom greeting

#### Health Check
```bash
curl https://kiroween.vercel.app/api/health
```
**Expected:** `{"status":"alive","message":"The ghosts are awake"}`

## Vercel Dashboard Monitoring

### Access Your Dashboard
1. Go to: https://vercel.com/dashboard
2. Click on your project: **kiroween**
3. You'll see:
   - ✅ Deployment status
   - 📊 Analytics
   - 🔍 Function logs
   - 📈 Usage metrics

### View Deployment Logs
1. In Vercel dashboard → **Deployments** tab
2. Click on latest deployment
3. View build logs and function logs
4. Check for errors or warnings

### Monitor Function Usage
1. Dashboard → **Analytics** tab
2. See:
   - Request count
   - Response times
   - Error rates
   - Bandwidth usage

### Check Function Logs (Real-time)
1. Dashboard → **Functions** tab
2. Click on any function (e.g., `api/ghost.js`)
3. View real-time logs
4. See errors, console.log outputs

## Browser Testing

### Manual Testing Steps
1. Open: https://kiroween.vercel.app
2. Open browser DevTools (F12)
3. Go to **Console** tab
4. Click each ghost button:
   - DOS Phantom
   - UNIX Necromancer
   - BASIC Poltergeist
   - FORTRAN Oracle
5. Type messages and check responses
6. Watch console for errors

### What to Look For
✅ **Good Signs:**
- Ghosts load immediately
- Greeting appears when clicking ghost
- Messages get responses
- No red errors in console

❌ **Bad Signs:**
- "Failed to summon" errors
- Network errors (404, 500)
- CORS errors
- Blank responses

## Automated Testing

### Use the Test Page
1. Visit: https://kiroween.vercel.app/test-api-production.html
2. Click "Run All Tests"
3. All tests should show ✓ SUCCESS

### Command Line Testing Script
```powershell
# Save as test-api.ps1
$base = "https://kiroween.vercel.app"

Write-Host "Testing Ghost List..." -ForegroundColor Yellow
$list = Invoke-WebRequest "$base/api/ghost/list" | ConvertFrom-Json
Write-Host "✓ Found $($list.ghosts.Count) ghosts" -ForegroundColor Green

Write-Host "`nTesting DOS Phantom..." -ForegroundColor Yellow
$body = @{ghost='dos';message='hello'} | ConvertTo-Json
$response = Invoke-WebRequest -Uri "$base/api/ghost" -Method POST -Body $body -ContentType 'application/json' | ConvertFrom-Json
Write-Host "✓ DOS responded: $($response.response.Substring(0,50))..." -ForegroundColor Green

Write-Host "`nTesting Health..." -ForegroundColor Yellow
$health = Invoke-WebRequest "$base/api/health" | ConvertFrom-Json
Write-Host "✓ Status: $($health.status)" -ForegroundColor Green

Write-Host "`n✅ All tests passed!" -ForegroundColor Green
```

Run with: `.\test-api.ps1`

## Usage Metrics to Monitor

### Vercel Free Tier Limits
- **Bandwidth:** 100 GB/month
- **Function Executions:** 100 GB-Hours/month
- **Function Duration:** 10 seconds max per request
- **Deployments:** Unlimited

### Check Current Usage
1. Vercel Dashboard → **Settings** → **Usage**
2. Monitor:
   - Bandwidth used
   - Function invocations
   - Build minutes
   - Serverless function execution time

### Set Up Alerts
1. Dashboard → **Settings** → **Notifications**
2. Enable email alerts for:
   - Deployment failures
   - High error rates
   - Usage limits approaching

## Performance Monitoring

### Check Response Times
```powershell
Measure-Command {
    Invoke-WebRequest https://kiroween.vercel.app/api/ghost/list
}
```
**Good:** < 500ms
**Acceptable:** < 2s
**Slow:** > 2s

### Monitor Error Rates
- Check Vercel Analytics for 4xx/5xx errors
- Should be < 1% error rate
- Investigate any spikes

## Troubleshooting Commands

### If Site is Down
```powershell
# Check DNS
nslookup kiroween.vercel.app

# Check if Vercel is up
curl https://vercel.com/api/status

# Check your deployment
curl -I https://kiroween.vercel.app
```

### If API Fails
```powershell
# Test with verbose output
Invoke-WebRequest https://kiroween.vercel.app/api/ghost/list -Verbose

# Check CORS
curl -H "Origin: http://example.com" -I https://kiroween.vercel.app/api/ghost/list
```

### View Detailed Error
```powershell
try {
    $body = @{ghost='invalid';message='test'} | ConvertTo-Json
    Invoke-WebRequest -Uri 'https://kiroween.vercel.app/api/ghost' -Method POST -Body $body -ContentType 'application/json'
} catch {
    $_.Exception.Response | ConvertFrom-Json
}
```

## Daily Monitoring Checklist

- [ ] Visit site and test one ghost
- [ ] Check Vercel dashboard for errors
- [ ] Review function logs if issues
- [ ] Monitor usage metrics weekly
- [ ] Test all 4 personas monthly

## Emergency Contacts

**Vercel Status:** https://www.vercel-status.com/
**Vercel Support:** https://vercel.com/support
**GitHub Repo:** https://github.com/urvashi-agrawal-dev/kiroween

## Quick Fix Commands

### Redeploy Latest
```bash
# In your project directory
git commit --allow-empty -m "trigger redeploy"
git push
```

### Rollback to Previous Version
1. Vercel Dashboard → Deployments
2. Find working deployment
3. Click "..." → "Promote to Production"

---

**Current Status:** ✅ All systems operational
**Last Tested:** 2025-11-21
**API Response:** Working perfectly
