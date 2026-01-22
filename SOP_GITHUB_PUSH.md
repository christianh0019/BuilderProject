# SOP: GitHub Push Protocol (Zero-Fail)

**Objective**: Push code to GitHub reliably, bypassing interactive authentication prompts by embedding the Personal Access Token (PAT).

## Prerequisites
- **GitHub Token**: `<YOUR_TOKEN>` (Found in `.env`)
- **Username**: `christianh0019`
- **Repo Name**: e.g., `builderproject-agency` or `template-website`

## 1. Verify Current Remote
Check where the generic `origin` is pointing.
```bash
git remote -v
```

## 2. Configure Authentication (The "Golden Key")
This step embeds the token into the remote URL, ensuring you never get asked for a password.

**Syntax:**
```bash
git remote set-url origin https://<TOKEN>@github.com/<USERNAME>/<REPO>.git
```

**Example for 'builderproject-agency':**
```bash
git remote set-url origin https://<YOUR_TOKEN>@github.com/christianh0019/builderproject-agency.git
```

**Example for 'template-website':**
```bash
git remote set-url origin https://<YOUR_TOKEN>@github.com/christianh0019/template-website.git
```

## 3. The Push Workflow
Perform these steps in order.

### A. Stage Changes
Add all changes to the staging area.
```bash
git add .
```

### B. Commit Changes
Create a checkpoint with a descriptive message.
```bash
git commit -m "feat: description of changes"
```

### C. Push to Remote
Send the commits to GitHub.
```bash
git push
```
*Note: If `git push` complains about upstream, use:*
```bash
git push -u origin main
```

## 4. Troubleshooting
**Error: "By not providing a path..." (`cd` error)**
- Ensure you are in the correct directory.
- Use: `ls -F` to see available folders.

**Error: "fetch first" or "non-fast-forward"**
- Someone else pushed changes. Pull them first:
```bash
git pull --rebase
```
- Then push again.

**Error: "Authentication failed"**
- Your token might be expired or the URL is malformed.
- Re-run Step 2 carefully.
