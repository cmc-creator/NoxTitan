# GitHub Pages Setup for NyxTitan™ Demo

## ✅ Automated Deployment (Current Setup)

**Good news!** The GitHub Pages deployment is now fully automated via GitHub Actions.

### How it works:
1. Push changes to the `main` branch
2. GitHub Actions automatically deploys the demo
3. No build process needed - static HTML files are deployed directly
4. Demo is live at: **https://cmc-creator.github.io/NyxTitan/**

### Demo Files Included:
- `index.html` - Main demo presentation (with music)
- `demo-interactive.html` - Interactive version
- `demo-nyxtitan-final.html` - Final version
- `demo-self-contained.html` - Offline-compatible version
- `nyxtitan-logo.png` - Logo asset
- `demo-music.mp3` - Background music

### Manual Deployment Trigger:
You can also manually trigger deployment:
1. Go to the **Actions** tab on GitHub
2. Select "Deploy Demo to Pages"
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

---

## Alternative: Manual Setup (If Starting Fresh)

### Option 1: Upload via GitHub.com (Easiest!)

1. **Go to GitHub.com** and create a new repository:
   - Name it: `nyxtitan-demo`
   - Make it **Public**
   - ✅ Check "Add a README file"
   - Click "Create repository"

2. **Upload your demo file:**
   - Click "Add file" → "Upload files"
   - Drag `index.html` into the upload area
   - Also upload `nyxtitan-logo.png` and `demo-music.mp3`
   - Commit the files

3. **Enable GitHub Pages:**
   - Go to repository **Settings** (gear icon)
   - Scroll to "Pages" in left sidebar
   - Under "Source": Select **main** branch
   - Click **Save**
   - Wait 2-3 minutes for deployment

4. **Your live URL will be:**
   ```
   https://YOUR-USERNAME.github.io/nyxtitan-demo/
   ```

---

## Option 2: Install Git First (More Control)

### Install Git:
```powershell
# Download from: https://git-scm.com/download/win
# Or use Windows Package Manager:
winget install --id Git.Git -e --source winget
```

### Initialize and Push:
```powershell
cd C:\Users\ConnieCooper\scheduler

# Initialize git
git init
git add demo-interactive.html
git commit -m "Add NyxTitan demo"

# Create GitHub repo (do this on github.com first)
# Then connect and push:
git remote add origin https://github.com/YOUR-USERNAME/nyxtitan-demo.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages (same as Option 1, step 3)

---

## 📝 Share Your Demo

Once deployed, share this URL:
```
https://cmc-creator.github.io/NyxTitan/
```

**Perfect for:**
- ✅ Email: "Check out our demo: [link]"
- ✅ Text: Short link via bit.ly
- ✅ Social media posts
- ✅ LinkedIn/Twitter
- ✅ Client presentations
- ✅ Sales calls
- ✅ Investor meetings

---

## 📦 Available Demo Files

All demos are accessible from the main URL, or directly:

1. **index.html** - Main executive presentation with music and animation
2. **demo-interactive.html** - Interactive version with music (requires internet)
3. **demo-nyxtitan-final.html** - Final polished version
4. **demo-self-contained.html** - 100% offline version (no music, embedded fonts)

**For email/sharing**: Use `demo-self-contained.html` (works everywhere, even offline!)
