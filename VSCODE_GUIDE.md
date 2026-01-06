# 💻 Visual Studio Code (VS Code) Guide

**Good news!** Using VS Code doesn't change anything about the GitHub Pages setup. Everything works exactly the same! 🎉

---

## ✅ Quick Answer

**Does VS Code change the GitHub Pages setup?**  
→ **NO!** GitHub Pages setup is the same regardless of which editor you use.

**Do you need to migrate anything?**  
→ **NO!** Your files are already in the repository. Just open the folder in VS Code.

---

## 🚀 Getting Started with VS Code

### Step 1: Open Your Project

**Option A: If you already have the files locally**
1. Open VS Code
2. File → Open Folder
3. Navigate to your NoxTitan folder
4. Click "Select Folder"

**Option B: Clone from GitHub (if starting fresh)**
1. Open VS Code
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type: `Git: Clone`
4. Enter: `https://github.com/cmc-creator/NoxTitan.git`
5. Choose a folder to clone into
6. Open the cloned folder

---

## 📂 Your Project in VS Code

Once opened, you'll see your files in the left sidebar:

```
NOXTITAN/
├── 📄 index.html              ← Your main landing page
├── 📁 demo/
│   └── 📄 index.html          ← Your demo presentation
├── 🎬 noxtitan-logo.mp4       ← Logo video
├── 🎵 demo-music.mp3          ← Background music
├── 📖 README.md               ← Project overview
├── 📖 ANSWERS.md              ← Quick answers (START HERE!)
├── 📖 GETTING_STARTED.md      ← Beginner guide
├── 📖 VISUAL_GUIDE.md         ← Visual step-by-step
└── 📖 Other guides...
```

---

## 🎨 Editing Your Site in VS Code

### Edit HTML Files

1. **Open a file:** Click on `index.html` in the sidebar
2. **Make changes:** Edit the HTML directly
3. **Save:** Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)

### Preview Changes Locally

**Option 1: Live Server Extension (Recommended)**
1. Install "Live Server" extension:
   - Click Extensions icon (or `Ctrl+Shift+X`)
   - Search: "Live Server"
   - Click "Install"
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Your site opens in browser with auto-reload!

**Option 2: Simple Browser Preview**
1. Right-click `index.html`
2. Select "Copy Path"
3. Paste into browser address bar

---

## 📤 Pushing Changes to GitHub (from VS Code)

VS Code has built-in Git support! No command line needed.

### First Time: Connect to GitHub

1. **Open Source Control:**
   - Click the Source Control icon on left (looks like a branch)
   - Or press `Ctrl+Shift+G`

2. **Sign in to GitHub:**
   - If prompted, click "Sign in to GitHub"
   - Follow the authentication steps

### Making Changes and Pushing

**Step 1: Make your edits**
- Edit `index.html` or other files
- Save your changes

**Step 2: Stage changes**
- Go to Source Control panel
- You'll see changed files listed
- Click the **+** icon next to files to stage them
- Or click **+** next to "Changes" to stage all

**Step 3: Commit**
- Type a commit message (e.g., "Updated landing page")
- Click the ✓ checkmark button (or `Ctrl+Enter`)

**Step 4: Push to GitHub**
- Click the **⋯** (three dots) menu
- Select "Push"
- Or use the sync button (⤴⤵ icon)

**Step 5: Wait for deployment**
- GitHub Actions automatically deploys
- Wait 1-2 minutes
- Visit your live site to see changes!

---

## 🎯 Typical Workflow in VS Code

```
1. Open project folder in VS Code
   ↓
2. Edit files (index.html, demo/index.html, etc.)
   ↓
3. Save changes (Ctrl+S)
   ↓
4. Preview locally (Live Server extension)
   ↓
5. Happy with changes? Go to Source Control
   ↓
6. Stage changes (+)
   ↓
7. Commit (✓) with message
   ↓
8. Push to GitHub (sync button)
   ↓
9. GitHub Pages auto-deploys in 2 minutes
   ↓
10. Check live site!
```

---

## 🛠️ Useful VS Code Extensions for Your Project

### Recommended Extensions

1. **Live Server**
   - Auto-reload browser when you save
   - Perfect for testing HTML/CSS changes
   - Search: "Live Server" by Ritwick Dey

2. **HTML CSS Support**
   - Better HTML/CSS autocomplete
   - Search: "HTML CSS Support"

3. **Prettier - Code formatter**
   - Auto-format your HTML
   - Search: "Prettier"

4. **GitLens** (Optional)
   - Enhanced Git integration
   - See commit history inline
   - Search: "GitLens"

### Installing Extensions

1. Click Extensions icon (left sidebar) or `Ctrl+Shift+X`
2. Search for extension name
3. Click "Install"
4. Reload VS Code if prompted

---

## 💡 VS Code Tips for Your Project

### Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open file quickly | `Ctrl+P` | `Cmd+P` |
| Find in file | `Ctrl+F` | `Cmd+F` |
| Find across all files | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Split editor | `Ctrl+\` | `Cmd+\` |
| Toggle terminal | `Ctrl+`` | `Cmd+`` |
| Command palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |

### Split View for Editing

1. Open `index.html`
2. Right-click the tab
3. Select "Split Right"
4. Open `demo/index.html` in the other pane
5. Edit both simultaneously!

### Integrated Terminal

- Press `Ctrl+`` to open terminal inside VS Code
- You can run git commands here if needed
- But the UI source control is easier!

---

## 📖 Still Use the Same Documentation

**Nothing changes about GitHub Pages setup!** You still:

1. **Enable Pages:** Settings → Pages → Deploy from branch: main → Save
2. **Documentation:** All guides work exactly the same
3. **URLs:** Same live URLs at cmc-creator.github.io/NoxTitan

**Your workflow:**
- Edit in VS Code ✏️
- Push to GitHub 📤
- GitHub Pages deploys automatically 🚀
- Site updates live ✅

---

## 🔄 "Migration" = Just Opening the Folder

There's **no migration needed**! Your files are already in the GitHub repository.

### If files are on your computer:
```
1. Open VS Code
2. File → Open Folder
3. Select your NoxTitan folder
4. Done! ✅
```

### If you need to download from GitHub:
```
1. VS Code → Command Palette (Ctrl+Shift+P)
2. Type: Git: Clone
3. Paste: https://github.com/cmc-creator/NoxTitan.git
4. Choose location
5. Done! ✅
```

**That's it!** No complex migration, no file moving, no setup changes.

---

## 🌐 GitHub Pages Setup (Same as Before!)

VS Code doesn't change this at all:

1. **Go to GitHub:** https://github.com/cmc-creator/NoxTitan/settings
2. **Click Pages** (left sidebar)
3. **Configure:**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. **Click Save**
5. **Wait 2 minutes**
6. **Visit:** https://cmc-creator.github.io/NoxTitan/

---

## 🎨 VS Code vs. Web Editor

| Feature | VS Code | GitHub Web Editor |
|---------|---------|-------------------|
| Edit files | ✅ Yes | ✅ Yes |
| Preview locally | ✅ Yes (Live Server) | ❌ No |
| Git integration | ✅ Built-in UI | ✅ Automatic |
| Extensions | ✅ Lots of them | ❌ Limited |
| Work offline | ✅ Yes | ❌ No |
| Auto-complete | ✅ Excellent | ⚠️ Basic |

**Both work perfectly!** Use whichever you prefer.

---

## 🆘 Common Questions

### "Do I need to set up anything special in VS Code?"
**No!** Just open the folder. Everything works out of the box.

### "Can I still use the GitHub website to edit?"
**Yes!** You can edit files on GitHub website OR in VS Code. Both work.

### "Will my GitHub Actions still work?"
**Yes!** GitHub Actions run on GitHub's servers, not your computer. VS Code doesn't affect them at all.

### "Do I need Node.js or any build tools?"
**No!** Your site is pure HTML/CSS/JS. No build process needed.

### "Can I test my site before pushing?"
**Yes!** Use the Live Server extension to preview locally first.

---

## 📊 Your Complete Workflow

### Development Cycle

```
VS Code                          GitHub                    Live Site
────────                         ───────                   ─────────
Edit files                         │                          │
   ↓                               │                          │
Preview locally                    │                          │
(Live Server)                      │                          │
   ↓                               │                          │
Happy with changes? ───→ Push ────→│                          │
                                   │                          │
                                   ├─→ Actions runs           │
                                   │   (auto-deploy)          │
                                   │                          │
                                   └──────────────────→ Updates in 2 min
```

---

## 🎯 Summary

**Does VS Code change anything?**
- ❌ No changes to GitHub Pages setup
- ❌ No changes to documentation
- ❌ No changes to URLs
- ❌ No changes to deployment
- ✅ Same process, just edit in VS Code!

**"Migration" process:**
1. Open folder in VS Code
2. That's it! ✅

**Continue using all the same guides:**
- ANSWERS.md - Still valid ✅
- GETTING_STARTED.md - Still valid ✅
- DEPLOYMENT_GUIDE.md - Still valid ✅
- All other docs - Still valid ✅

---

## 🚀 Next Steps

1. **Open your project in VS Code** (File → Open Folder)
2. **Install Live Server extension** (for local preview)
3. **Read ANSWERS.md** to enable GitHub Pages
4. **Start editing!** 🎨

---

**VS Code is just your editor. GitHub Pages hosting works exactly the same way!** 🎉

---

*Need help? Check [GETTING_STARTED.md](GETTING_STARTED.md) for the main setup guide.*
