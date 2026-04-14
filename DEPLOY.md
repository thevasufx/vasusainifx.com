# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages using a GitHub Actions workflow.

## Setup Instructions

### 1. **Configure GitHub Pages Settings**

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
4. Save the settings

### 2. **Automatic Deployment**

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- **Trigger on:** Every push to the `main` branch
- **Build:** Runs `npm run build` to generate optimized production files
- **Deploy:** Uploads the `frontend/dist/` folder to GitHub Pages
- **Result:** Your site will be live at `https://USERNAME.github.io/REPO_NAME/`

### 3. **First Time Setup**

1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. GitHub Actions will automatically run the workflow
3. Check the **Actions** tab in your repository to monitor deployment progress
4. Once complete, your site will be available at the GitHub Pages URL

### 4. **Manual Deployment (If Needed)**

To trigger a manual deployment without pushing code:
1. Go to **Actions** tab in your repository
2. Select the **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"** button

### 5. **Troubleshooting**

**Issue: Assets return 404 errors**
- ✅ Solution: Already handled! The `vite.config.ts` is configured with `base: '/vasusainifx.com/'`
- Verify the GitHub Actions workflow ran successfully (check the Actions tab)

**Issue: Stale cache preventing updates**
- Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Wait 5-10 minutes for GitHub's CDN to update

**Issue: Workflow not running**
- Verify GitHub Pages is set to use "GitHub Actions" as the source
- Check that `.github/workflows/deploy.yml` is in the `main` branch

### 6. **Update Your Site**

Simply push code changes to `main`:
```bash
git add .
git commit -m "Update content"
git push origin main
```

The workflow will automatically:
1. Build your updated code
2. Deploy to GitHub Pages
3. Your changes will be live in ~2-3 minutes

---

**Your deployment URL:** `https://thevasufx.github.io/vasusainifx.com/`

**Questions?** Check the Actions tab to view deployment logs and error messages.
