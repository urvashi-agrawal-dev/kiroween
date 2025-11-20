# Vercel Deployment Guide - RetroGhost

## 🚀 Industry-Level Deployment Setup

Your RetroGhost project is configured for production deployment on Vercel with both frontend and backend (serverless functions).

## 📋 Pre-Deployment Checklist

✅ vercel.json configured for monorepo  
✅ Frontend build script ready  
✅ Backend serverless function entry point created  
✅ Environment variables configured  
✅ API routes properly mapped  
✅ CORS configured for production  

## 🔧 Configuration Files Created

1. **Root `vercel.json`** - Monorepo configuration
2. **`api/index.js`** - Serverless function entry point
3. **`frontend/.env.production`** - Production environment variables
4. **`.vercelignore`** - Files to exclude from deployment

## 📦 Deployment Options

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository: `urvashi-agrawal-dev/kiroween`
3. Configure project settings (see below)
4. Click "Deploy"

## ⚙️ Vercel Project Settings

### Framework Preset
- **Framework**: Other

### Build & Development Settings
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/dist`
- **Install Command**: `npm install`

### Root Directory
- Leave as `.` (root)

### Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NODE_ENV=production
CORS_ORIGIN=https://your-project.vercel.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Important**: After first deployment, update `CORS_ORIGIN` with your actual Vercel URL.

## 🌐 How It Works

### Architecture
```
User Request
    ↓
Vercel Edge Network
    ↓
    ├─→ /api/* → Backend Serverless Functions (Node.js)
    │              ↓
    │         Ghost API, Personas, Time Rift
    │
    └─→ /* → Frontend Static Files (React)
               ↓
          CRT Terminal UI
```

### API Routes
- `/api/ghost` → Ghost chat endpoint
- `/api/ghost/list` → Available ghosts
- `/api/ghost/command` → MCP command simulation
- `/health` → Health check

### Frontend Routes
- `/` → Main application
- All other routes → Served from `frontend/dist`

## 🔐 Security Features

✅ **Helmet** - Security headers  
✅ **CORS** - Cross-origin protection  
✅ **Rate Limiting** - DDoS protection  
✅ **Input Sanitization** - XSS prevention  
✅ **HTTPS** - Automatic SSL (Vercel)  

## 📊 Performance Optimizations

- **Edge Network**: Global CDN distribution
- **Serverless Functions**: Auto-scaling
- **Static Assets**: Cached at edge
- **Gzip Compression**: Automatic
- **HTTP/2**: Enabled by default

## 🧪 Testing Deployment

After deployment, test these endpoints:

```bash
# Health check
curl https://your-project.vercel.app/health

# Ghost list
curl https://your-project.vercel.app/api/ghost/list

# Ghost interaction
curl -X POST https://your-project.vercel.app/api/ghost \
  -H "Content-Type: application/json" \
  -d '{"ghost":"dos","message":"hello","timeRift":false}'
```

## 🐛 Troubleshooting

### Issue: API calls fail with CORS error
**Solution**: Update `CORS_ORIGIN` environment variable with your Vercel URL

### Issue: 404 on API routes
**Solution**: Ensure `vercel.json` routes are correct and redeploy

### Issue: Build fails
**Solution**: Check build logs, ensure all dependencies are in package.json

### Issue: Serverless function timeout
**Solution**: Optimize persona response generation (current: <500ms)

## 📈 Monitoring

### Vercel Dashboard
- View deployment logs
- Monitor function invocations
- Check error rates
- Analyze performance metrics

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking (optional)
- **LogRocket**: Session replay (optional)

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` → Automatic production deployment
- Every PR → Preview deployment with unique URL
- Rollback available in Vercel dashboard

## 💰 Vercel Pricing

**Hobby Plan (Free)**:
- 100 GB bandwidth/month
- Unlimited deployments
- Automatic HTTPS
- Perfect for hackathons!

**Pro Plan ($20/month)**:
- 1 TB bandwidth
- Advanced analytics
- Team collaboration

## 🎯 Post-Deployment Steps

1. ✅ Test all 4 ghost personas
2. ✅ Verify Time Rift mode works
3. ✅ Check CRT effects render properly
4. ✅ Test on mobile devices
5. ✅ Update README with live URL
6. ✅ Update Devpost submission with demo link
7. ✅ Share with judges!

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: https://github.com/urvashi-agrawal-dev/kiroween/issues

---

**Your RetroGhost project is production-ready! 👻**
