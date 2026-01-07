# GitHub Pages Setup for TeamPulse Demo

## Quick Setup (No Git Installed)

### Option 1: Upload via GitHub.com (Easiest!)

1. **Go to GitHub.com** and create a new repository:
   - Name it: `teampulse-demo`
   - Make it **Public**
   - ✅ Check "Add a README file"
   - Click "Create repository"

2. **Upload your demo file:**
   - Click "Add file" → "Upload files"
   - Drag `demo-interactive.html` into the upload area
   - Rename it to `index.html` (important!)
   - Commit the file

3. **Enable GitHub Pages:**
   - Go to repository **Settings** (gear icon)
   - Scroll to "Pages" in left sidebar
   - Under "Source": Select **main** branch
   - Click **Save**
   - Wait 2-3 minutes for deployment

4. **Your live URL will be:**
   ```
   https://YOUR-USERNAME.github.io/teampulse-demo/
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
git commit -m "Add TeamPulse demo"

# Create GitHub repo (do this on github.com first)
# Then connect and push:
git remote add origin https://github.com/YOUR-USERNAME/teampulse-demo.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages (same as Option 1, step 3)

---

## Share Your Demo

Once deployed, share this URL:
```
https://YOUR-USERNAME.github.io/teampulse-demo/
```

**Perfect for:**
- ✅ Email: "Check out our demo: [link]"
- ✅ Text: Short link via bit.ly
- ✅ Social media posts
- ✅ LinkedIn/Twitter
- ✅ Client presentations
- ✅ Sales calls

---

## Files Available

1. **demo-interactive.html** - Full version with music (requires internet)
2. **demo-self-contained.html** - 100% offline version (no music, embedded fonts)

**For GitHub Pages**: Rename either file to `index.html` before uploading

**For email/sharing**: Use `demo-self-contained.html` (works everywhere, even offline!)
