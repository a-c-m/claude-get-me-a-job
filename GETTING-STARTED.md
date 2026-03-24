# Getting Started — Complete Setup Guide

This guide walks you through everything you need to install before using the toolkit. No technical experience required — just follow each step.

## What You'll Need

There are three things to install before you can start. The whole process takes about **10-15 minutes**.

| Software | What It Does | Time to Install |
|----------|-------------|-----------------|
| **Claude Code** | The AI assistant that does the work | 2 min |
| **Node.js** | Runs the CV-to-PDF converter | 3 min |
| **Git** | Downloads the toolkit code | 3 min |

---

## Step 1: Install Claude Code

Claude Code is the AI assistant that powers this toolkit. You'll chat with it and it will guide you through everything.

### Mac

1. Go to [claude.ai/code](https://claude.ai/code)
2. Download the Mac app
3. Open the downloaded file and drag it to your Applications folder
4. Open Claude Code from your Applications

### Windows

1. Go to [claude.ai/code](https://claude.ai/code)
2. Download the Windows installer
3. Run the installer and follow the prompts
4. Open Claude Code from your Start menu

### First Time Setup

When you first open Claude Code, you'll need to sign in with your Anthropic account. If you don't have one, you can create one at [claude.ai](https://claude.ai).

**Important:** Claude Code requires a **Claude Pro or Team plan** ($20/month). The free tier doesn't have enough capacity for this toolkit — it needs to read your CV, crawl websites, generate multiple documents, and have extended conversations. Check [claude.ai/pricing](https://claude.ai/pricing) for current options.

---

## Step 2: Install Node.js

Node.js is needed to convert your CVs from text into polished PDFs. You only need to install it once.

### Mac

**Option A — Download from website (easiest):**
1. Go to [nodejs.org](https://nodejs.org)
2. Click the big green button that says **"LTS"** (Long Term Support)
3. Open the downloaded file
4. Follow the installer — click "Continue" through each step
5. When it's done, you're all set

**Option B — Using Homebrew (if you already have it):**
```bash
brew install node
```

### Windows

1. Go to [nodejs.org](https://nodejs.org)
2. Click the big green button that says **"LTS"** (Long Term Support)
3. Run the downloaded installer
4. Click "Next" through each step (the defaults are fine)
5. Restart your computer when it's done

### Check It Worked

After installing, open a terminal (Mac: Terminal app, Windows: Command Prompt) and type:
```bash
node --version
```
You should see something like `v20.x.x` or `v22.x.x`. The exact number doesn't matter — if you see a version number, it's working.

---

## Step 3: Install Git

Git is a tool for downloading code. The toolkit uses it to get the project files onto your computer.

### Mac

Git may already be installed. To check, open Terminal and type:
```bash
git --version
```

If you see a version number, you're done. If not:

1. You'll be prompted to install the Xcode Command Line Tools — click **"Install"**
2. Wait for it to finish (this can take a few minutes)
3. That's it — git is now installed

### Windows

1. Go to [git-scm.com](https://git-scm.com)
2. Click **"Download for Windows"**
3. Run the installer
4. **Important:** On the "Adjusting your PATH" step, select **"Git from the command line and also from 3rd-party software"** (this should be the default)
5. Click "Next" for all other steps (the defaults are fine)
6. Click "Install"

### Check It Worked

Open a terminal and type:
```bash
git --version
```
You should see something like `git version 2.x.x`.

---

## Step 4: Create Your Project Folder

You need a folder on your computer where the toolkit will live.

### Mac

1. Open **Finder**
2. Go to your **Documents** folder (or Desktop — wherever you like)
3. Right-click and choose **"New Folder"**
4. Name it `claude-get-me-a-job`

### Windows

1. Open **File Explorer**
2. Go to your **Documents** folder (or Desktop)
3. Right-click and choose **"New" > "Folder"**
4. Name it `claude-get-me-a-job`

---

## Step 5: Open the Folder in Claude Code

1. Open the **Claude Code** app
2. Open your new folder:
   - **Drag** the folder onto the Claude Code window, **or**
   - Use **File > Open Folder** and navigate to it
3. You should see the folder name in the app header

---

## Step 6: Paste the Setup Prompt

Copy and paste this into the Claude Code text input and press Enter:

```
I'd like to set up the "Claude Get Me A Job" career toolkit.

Please clone https://github.com/a-c-m/claude-get-me-a-job.git into my
current directory (or pull it if it already exists), run npm install,
then read the CLAUDE.md file and walk me through the setup process
step by step.

I'll need help with:
- Configuring my details (name, LinkedIn, target roles, etc.)
- Adding my CV (I may have it as a Word document or PDF)
- Gathering context from my online presence
- Building my achievement database

Please guide me conversationally — I don't want to edit config files manually.
```

Claude will take it from here. It will:
- Download the toolkit code
- Install the necessary software
- Ask you questions about yourself
- Walk you through adding your CV
- Start building your career materials

---

## Step 7: Have Your CV Ready

Before you start, find your current CV on your computer. Supported formats:
- **PDF** — most common, works directly
- **Word document (.docx)** — Claude will convert it automatically
- **Text or Markdown file** — works directly

If your CV is in an old Word format (.doc), open it in Word and re-save as .docx or export as PDF first.

**Don't have a CV at all?** That's OK — Claude can still work from your LinkedIn and other sources, but having a CV makes the output much better.

---

## Troubleshooting

### "command not found: node"
Node.js isn't installed or isn't in your system path. Try restarting your terminal, or reinstall from [nodejs.org](https://nodejs.org).

### "command not found: git"
Git isn't installed. Follow the install steps above for your operating system.

### Claude asks for permission to run commands
This is normal and expected. The toolkit needs to run commands to install software and generate PDFs. Click "Allow" when prompted. The pre-configured permissions handle most operations automatically.

### "npm install" fails
Make sure Node.js is installed (check with `node --version`). If it is, try closing and reopening the Claude Code app, then ask Claude to run `npm install` again.

### The PDF doesn't generate
The first time you generate a PDF, the system downloads a browser engine (Playwright). This can take a minute. If it fails, ask Claude to run `npx playwright install chromium` and try again.

### Claude seems stuck or is going in circles
This can happen occasionally. It's completely safe to close the Claude Code app and reopen it. Your data is saved in files on your computer, not in the conversation. When you start a new session in the same folder, Claude will read your config and achievements and pick up where it left off. You won't lose any work.

### I messed something up
Don't worry — your personal data (CV, achievements, etc.) is separate from the toolkit code. You can always start fresh by deleting the folder and running the setup prompt again. Your source files in `sources/` will need to be re-added.

---

## What's Next?

Once setup is complete, Claude will guide you through:
1. **Discovery** — analyzing your materials (~10 min)
2. **Interview** — asking you about your achievements (~5-15 min)
3. **LinkedIn** — optimization recommendations (~2 min)
4. **CV Generation** — role-specific versions (~5 min)

Total first session: **30-45 minutes** for a complete set of tailored CVs.

After that, you can come back anytime to:
- Apply to specific jobs (paste a job URL)
- Refine your CVs
- Get interview prep
- Update your achievements

Just open Claude Code in the same folder and start chatting.
