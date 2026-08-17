# Getting Started — Complete Setup Guide

This guide gets you from zero to a working career toolkit. The key idea: **get Claude Code running, then let Claude handle everything else.**

You install one thing. Claude installs the rest.

## What You'll Need

- A computer (Mac or Windows)
- A **Claude Pro or Team plan** ($20/month) — the free tier doesn't have enough capacity. See [claude.ai/pricing](https://claude.ai/pricing)
- Your current CV (PDF or Word document) — have this ready on your computer

> **Note:** Claude will automatically check for and help you install any required tools (Node.js, Git, RenderCV) during setup. You don't need to install anything manually except Claude Code itself.

---

## Step 1: Install Claude Code (the only thing you install yourself)

### Mac
1. Go to [claude.ai/code](https://claude.ai/code)
2. Download the Mac app
3. Open the downloaded file and drag it to your Applications folder
4. Open Claude Code from your Applications
5. Sign in with your Anthropic account (create one at [claude.ai](https://claude.ai) if needed)

### Windows
1. Go to [claude.ai/code](https://claude.ai/code)
2. Download the Windows installer
3. Run the installer and follow the prompts
4. Open Claude Code from your Start menu
5. Sign in with your Anthropic account (create one at [claude.ai](https://claude.ai) if needed)

---

## Step 2: Create a Folder

Claude needs a place to work:

1. Create a new folder on your computer — call it `claude-get-me-a-job`
   - **Mac:** Open Finder, go to Documents, right-click > New Folder
   - **Windows:** Open File Explorer, go to Documents, right-click > New > Folder
2. In Claude Code, open that folder:
   - **Drag** the folder onto the Claude Code window, **or**
   - Use **File > Open Folder** and navigate to it
3. You should see the folder name in the app header

---

## Step 3: Paste This Prompt

Copy and paste this into Claude Code and press Enter:

```
I'd like to set up the "Claude Get Me A Job" career toolkit.

First, check if I have git and node installed. If I don't, please
help me install them — use nvm for node if possible so I don't need
admin access.

Once those are ready, clone https://github.com/a-c-m/claude-get-me-a-job.git
into my current directory, run npm install, then read the CLAUDE.md file
and walk me through the setup process step by step.

I'll need help with:
- Configuring my details (name, LinkedIn, target roles, etc.)
- Adding my CV (I may have it as a Word document or PDF)
- Gathering context from my online presence
- Building my achievement database

Please guide me conversationally — I don't want to edit config files manually.
```

---

## Step 4: Follow Along

That's it. From here, **Claude does everything**:

1. **Checks your system** — if Git, Node.js, or RenderCV aren't installed, Claude walks you through installing them step by step
2. **Downloads the toolkit** — clones the code and installs dependencies
3. **Asks you questions** — your name, LinkedIn, what roles you're targeting
4. **Asks for your CV** — you just drop the file into the folder it tells you
5. **Gathers data** — crawls your LinkedIn, blog, and any URLs you share
6. **Shows you what it found** — and asks you to confirm before continuing
7. **Interviews you** — asks about your achievements to fill gaps
8. **Generates your CVs** — publication-quality PDFs tailored for each role using RenderCV

### Tips

- **Claude may ask permission** to run commands — this is normal. Click "Allow". These are safe operations like installing software and generating PDFs.
- **If Claude gets stuck or goes in circles** — just close the app and reopen it. Your data is saved in files, not the conversation. Claude will pick up where it left off.
- **Have your CV ready** as a PDF or Word document (.docx). If it's in old Word format (.doc), open it in Word and save as .docx or export as PDF first.

---

## What Happens in Your First Session

Your first session takes about **30-45 minutes**:

| Phase | What Happens | Your Time |
|-------|-------------|-----------|
| Setup | Claude installs tools, asks you a few questions | 5-10 min |
| Discovery | Claude gathers data from your online presence | 2 min (you wait) |
| Interview | Claude asks about your achievements | 5-15 min |
| LinkedIn | Review optimization recommendations | 2 min |
| CV Generation | Review role-specific CVs | 5 min |

After that, applying to a specific job takes about **10 minutes** — paste the job URL and Claude produces a tailored CV, cover letters, and interview prep.

---

## Coming Back Later

When you return to the project, just open Claude Code in the same folder. Claude will:
- Remember your profile and achievements
- Check on any active job applications
- Ask how things are going
- Suggest what to work on next

You can say things like:
- "I want to apply to [Company] — here's the job description"
- "Help me prepare for my interview with [Company]"
- "Update my CV with [new achievement]"
- "Interview me to find more achievements"

---

## Troubleshooting

### Claude can't install Git, Node, or RenderCV
If Claude has trouble installing these automatically, you can install them manually:
- **Node.js:** Go to [nodejs.org](https://nodejs.org), click the green LTS button, run the installer
- **Git (Mac):** Open Terminal and type `git --version` — you'll get a popup to install developer tools. Click Install.
- **Git (Windows):** Go to [git-scm.com](https://git-scm.com), download and run the installer
- **RenderCV:** Prefer `uv tool install "rendercv[full]"` or `pipx install "rendercv[full]"` in your terminal. As a last resort, use `pip install "rendercv[full]"` inside a virtual environment. Requires Python 3.10+.

Then tell Claude "I've installed them, please continue."

### "npm install" fails
Close and reopen Claude Code, then ask Claude to try again. If it keeps failing, check that Node.js is installed (`node --version` in a terminal).

### PDF doesn't generate (RenderCV)
Run `rendercv render your-cv.yaml` manually and check the error output. Common issues: unquoted colons in YAML strings, invalid phone number format, or missing Python/Typst. Ask Claude for help.

### PDF doesn't generate (legacy make-cv.js)
The first PDF takes longer because it downloads a browser engine. If it fails, ask Claude to run `npx playwright install chromium` and try again.

### I want to start over
Delete the folder and create a new one. Run the setup prompt again. Your source files (CV, etc.) will need to be re-added.
