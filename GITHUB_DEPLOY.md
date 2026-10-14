# Deploy Gaurav Website to GitHub Pages

## Option A — GitHub website (no Git needed)
1. Sign in to https://github.com/new
2. Set repository name `gaurav-portfolio`, choose **Public**, and create the repository without adding a README.
3. Upload the **contents inside** this project folder to the repository root using **Add file → Upload files**. IMPORTANT: GitHub's browser upload may not upload the hidden `.github` folder reliably. Check that `.github/workflows/deploy.yml` exists in your GitHub repository. If missing, create that file using Add file → Create new file with path `.github/workflows/deploy.yml` and paste it from this project.
4. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
5. Go to **Actions → Deploy to GitHub Pages** and run workflow if it has not started automatically.
6. When deployment is successful, visit `https://YOUR-USERNAME.github.io/gaurav-portfolio/`.

## Option B — Git CLI (recommended)
Extract this ZIP, enter its inner `gaurav-github-pages` folder, and in PowerShell run:

```powershell
git init
git add .
git commit -m "Launch Gaurav landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gaurav-portfolio.git
git push -u origin main
```

Create an empty `gaurav-portfolio` repository on GitHub first. Log in when prompted. After pushing, configure Settings → Pages → Source → GitHub Actions. Your live site will be at `https://YOUR-USERNAME.github.io/gaurav-portfolio/`.

## Technical notes
- This uses Next.js static export and a GitHub Actions workflow. Dynamic Next.js API routes/server functions do not run on GitHub Pages.
- Booking currently opens your local email app addressed to `info@betapixel.in`; it does not reserve a slot.
- The workflow infers the repository subpath and sets the image source paths accordingly.
- If deploying to a custom domain, confirm path settings before changing DNS.
- If the GitHub Actions build fails, inspect Actions → latest run → Build static website and provide its error output.
- GitHub Pages is a static hosting service; direct backend appointment bookings require an external provider.
