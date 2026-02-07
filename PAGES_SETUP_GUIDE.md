# GitHub Pages Setup Guide for NyxTitan Demo

## 🎯 Quick Start - Get Your Demo Live in 5 Minutes!

Your demo files are ready and the GitHub Actions workflow is configured. Follow these simple steps to make your demo live at `https://cmc-creator.github.io/NyxTitan/`

---

## Step 1: Merge This PR to Main Branch

This PR includes:
- ✅ GitHub Actions workflow (`.github/workflows/deploy-pages.yml`)
- ✅ Optimized deployment configuration
- ✅ Updated `.gitignore`

**Merge this PR to the `main` branch** to activate the deployment workflow.

---

## Step 2: Enable GitHub Pages in Repository Settings

1. **Go to your repository on GitHub:**
   - Visit: https://github.com/cmc-creator/NyxTitan

2. **Open Settings:**
   - Click the **Settings** tab (gear icon) in the top menu

3. **Navigate to Pages:**
   - In the left sidebar, scroll down and click **"Pages"**

4. **Configure the Source:**
   - Under **"Build and deployment"**
   - For **"Source"**, select: **GitHub Actions** (from dropdown)
   - Click **Save** if prompted

5. **Wait for Deployment:**
   - The workflow will trigger automatically
   - Look for a green checkmark on the main branch commit
   - Deployment typically takes 30-60 seconds

---

## Step 3: Verify Your Demo is Live

After the workflow completes, your demo will be available at:

```
https://cmc-creator.github.io/NyxTitan/
```

**Test it:**
- Open the URL in your browser
- You should see the NyxTitan Executive Demo
- The demo includes interactive slides with music

---

## 📁 What Gets Deployed

The workflow deploys these files to GitHub Pages (if they exist):
- ✅ `index.html` (main demo page - **required**)
- ✅ `demo-interactive.html`
- ✅ `demo-nyxtitan-final.html`
- ✅ `demo-self-contained.html`
- ✅ `demo-music.mp3`
- ✅ `landing/` directory contents (available at `/landing/`)
- ✅ `demo/` directory contents (available at `/demo/`)

**Not deployed** (workflow only copies specific files):
- ❌ Large logo files (nyxtitan-logo.mp4, nyxtitan-logo.png, logo-base64.txt)
- ❌ Node modules
- ❌ Source code (`src/` directory)
- ❌ Build artifacts (.next/, etc.)
- ❌ Database files (prisma/dev.db)

**Note:** The `demo/` directory has its own `index.html` accessible at `/demo/index.html`, while the root `index.html` serves as the main page at the root URL.

---

## 🔄 Automatic Updates

The workflow is configured to:
- ✅ Deploy automatically when you push to the `main` branch
- ✅ Support manual deployment via "Actions" tab → "Deploy to GitHub Pages" → "Run workflow"

---

## 🛠️ Troubleshooting

### Demo Page Shows 404 Error

**Solution:**
1. Check that GitHub Pages is enabled (Step 2 above)
2. Ensure source is set to "GitHub Actions" (not "Deploy from a branch")
3. Verify the workflow ran successfully in the "Actions" tab
4. Wait a few minutes and refresh

### Workflow Fails

**Solution:**
1. Go to the **Actions** tab on GitHub
2. Click on the failed workflow run
3. Review the error logs
4. Common issues:
   - Pages not enabled → Enable in Settings
   - Permissions issue → Check repository settings allow workflows

### Changes Not Showing Up

**Solution:**
1. Verify changes are pushed to the `main` branch
2. Check the workflow ran after your push (Actions tab)
3. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
4. Wait a minute for CDN to update

---

## 🎨 Customizing the Demo

To update the demo:

1. **Edit the HTML files** in the repository root:
   - `index.html` - Main demo page
   - `demo-*.html` - Alternative demo versions

2. **Commit and push to main:**
   ```bash
   git add index.html
   git commit -m "Update demo content"
   git push origin main
   ```

3. **Automatic deployment:**
   - Workflow runs automatically
   - Changes live in ~1 minute

---

## 📊 Monitoring Deployments

**View deployment status:**
1. Go to the **Actions** tab
2. Look for "Deploy to GitHub Pages" workflows
3. Green ✅ = successful deployment
4. Red ❌ = failed (click for details)

**View live URL:**
- Settings → Pages → Your site is live at [URL]
- Or just visit: https://cmc-creator.github.io/NyxTitan/

---

## 🚀 Share Your Demo

Once live, share your demo:

**Direct Link:**
```
https://cmc-creator.github.io/NyxTitan/
```

**Short Link Options:**
- Use bit.ly or tinyurl.com to create a shorter link
- Example: `bit.ly/nyxtitan-demo`

**Embed in Email:**
```html
Check out our live demo: <a href="https://cmc-creator.github.io/NyxTitan/">NyxTitan Demo</a>
```

---

## 📝 Notes

- **Cost:** GitHub Pages is FREE for public repositories
- **Size Limit:** Keep deployments under 1GB (current: ~10MB)
- **Bandwidth:** 100GB/month soft limit
- **Updates:** Deploy instantly with every push to main
- **Custom Domain:** Can configure custom domain in Settings → Pages

---

## ✅ Success Checklist

- [ ] PR merged to main branch
- [ ] GitHub Pages enabled in Settings
- [ ] Source set to "GitHub Actions"
- [ ] Workflow ran successfully (green checkmark in Actions)
- [ ] Demo URL loads: https://cmc-creator.github.io/NyxTitan/
- [ ] Music and interactivity working
- [ ] Link shared with team/clients

---

**Need Help?** Check the workflow logs in the Actions tab or review the error messages for specific guidance.
