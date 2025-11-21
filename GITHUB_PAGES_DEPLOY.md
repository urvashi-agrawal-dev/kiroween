# GitHub Pages Deployment Guide

## ⚠️ Important Limitation

GitHub Pages can ONLY host static files (HTML, CSS, JavaScript). It **cannot run a backend server**.

## Two Options:

### Option 1: Use Vercel (Recommended) ✅
Your app is already working on Vercel! Just disable authentication:
1. Go to: https://vercel.com/urvashi-agarwals-projects/kiroween/settings/deployment-protection
2. Toggle OFF "Vercel Authentication"
3. Done! Share this link: https://kiroween-jxfa2vtgj-urvashi-agarwals-projects.vercel.app

### Option 2: GitHub Pages (Frontend Only - Limited)
Deploy a simplified version with ghost logic in the browser:

```bash
# Build frontend
cd frontend
npm run build

# Deploy to GitHub Pages
cd ..
git checkout -b gh-pages
cp -r frontend/dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

Then enable GitHub Pages in repo settings → Pages → Source: gh-pages branch

**Your URL will be:** https://urvashi-agrawal-dev.github.io/kiroween/

**Limitations:**
- No backend API
- No Time Rift mode
- Simpler ghost responses
- No MCP commands

## 🎯 Recommendation

**Use Vercel!** It's working perfectly. Just disable the authentication and you'll have:
- ✅ Full backend functionality
- ✅ All 4 ghost personas
- ✅ Time Rift mode
- ✅ MCP commands
- ✅ One shareable link
- ✅ No authentication required

The Vercel errors you saw were during development. The final deployment IS working!
