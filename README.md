# Claude Get Me A Job

An AI-assisted career toolkit that helps you build better CVs, optimize your LinkedIn profile, and create tailored job applications. Works for any role — technical or non-technical.

## Time Investment

Your first session takes about **30-45 minutes** and gets you a full set of tailored CVs. Here's what to expect:

| Phase | What Happens | Your Time | Waiting Time |
|-------|-------------|-----------|-------------|
| Setup | Answer a few questions, add your CV | 5 min | — |
| Discovery | Claude gathers data from your sources | 2 min | 5 min |
| Interview | Claude asks you about your achievements | 5-15 min | — |
| LinkedIn | Review optimization recommendations | 2 min | 1 min |
| CV Generation | Review role-specific CVs | 5 min | 2 min |

After that, applying to a specific job takes about **10 minutes** each — you paste the job description and Claude produces a tailored CV, cover letters, and interview prep.

## What This Does

1. **Gathers Your Context** - Analyzes your CV, LinkedIn, blog, articles, and any documents you provide
2. **Builds an Achievement Database** - Extracts and organizes your accomplishments with metrics
3. **Optimizes LinkedIn** - Provides specific recommendations for profile improvements
4. **Generates Role-Specific CVs** - Creates tailored versions for different target roles
5. **Streamlines Applications** - Produces customized CVs, cover letters, and prep materials per job

## How It Works

This project uses [Claude Code](https://claude.ai/code) as an AI assistant that reads your career materials and helps you produce polished, tailored outputs. You have a conversation with Claude, and it does the heavy lifting — you review and refine.

**You don't need to be technical.** Claude will guide you through setup conversationally.

> **First time using Claude Code?** See the [Getting Started guide](GETTING-STARTED.md) for step-by-step instructions on installing everything you need (Claude Code, Node.js, Git). It takes about 10-15 minutes.

## Quick Start — One Prompt To Get Going

*If you already have Claude Code, Node.js, and Git installed, skip straight to Step 3.*

### Step 1: Open the Claude Code App

If you haven't already, download [Claude Code](https://claude.ai/code) and open it. You'll see a text input where you can type or paste messages.

### Step 2: Create a Folder

Claude needs a place to work. Before pasting the prompt:

1. Create a new folder on your computer for this project (e.g. `claude-get-me-a-job` on your Desktop or in Documents)
2. In the Claude Code app, open that folder — you can drag it onto the app window, or use **File > Open Folder**
3. You should see the folder name in the app header

### Step 3: Paste This Prompt

Copy and paste this into the Claude Code text input:

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

### Step 4: Follow Along

That's it. Claude handles the rest — cloning the code, installing dependencies, and walking you through each step conversationally. It will ask you questions and you just answer them.

**Tip:** Claude may ask for permission to run commands (like installing software). This is normal — just click "Allow" when prompted. These are safe operations that set up the project on your computer.

### What Happens Next

Claude will:
1. **Ask you a few questions** — your name, LinkedIn URL, what roles you're targeting, etc.
2. **Ask for your CV** — this is the most important input. You can provide:
   - A **PDF** (most common — just drop it in the folder Claude tells you)
   - A **Word document (.docx)** — Claude will automatically convert it to readable text
   - A **text or markdown file** — works directly
3. **Gather context** from your LinkedIn, blog, GitHub, or any URLs you share
4. **Show you what it found** and ask you to review before continuing
5. **Build your achievement database** and check in again
6. **Generate tailored CVs** for your target roles

You're always in control — Claude checks in at every stage and won't proceed until you're happy.

### If You Prefer Manual Setup

<details>
<summary>Click to expand manual setup steps</summary>

```bash
# Clone and enter the project
git clone https://github.com/a-c-m/claude-get-me-a-job.git
cd claude-get-me-a-job

# Install dependencies
npm install

# Copy the config template
cp config.example.yaml config.yaml

# Add your CV to the sources folder
mkdir -p sources/current-cv
# Copy your CV file into sources/current-cv/

# Start Claude Code and say "help me set up"
```

</details>

## Example Target Roles

This works for any role. Some examples:

| Technical | Non-Technical |
|-----------|--------------|
| Engineering Manager | Project Coordinator |
| Full Stack Developer | Client Services Lead |
| CTO / VP Engineering | Operations Manager |
| Data Analyst | Marketing Manager |
| DevOps Engineer | Account Manager |

## Workflow Phases

### Phase 1: Discovery
Claude analyzes your materials and builds a picture of your experience. It then **checks in** to show you what it found and asks you to correct anything.

### Phase 2: Discovery Interview
Claude **interviews you conversationally** to surface achievements, metrics, and experiences that aren't captured in your CV or online presence. Most people undersell themselves — this fixes that.

Claude will ask about:
- Your proudest moments at each role
- Team sizes, budgets, and scale
- Before/after metrics for things you improved
- Hidden achievements (mentoring, speaking, side projects, awards)
- Skills that don't show up on paper

It's designed to feel like a helpful chat, not an interrogation. You can trigger this anytime by saying "interview me" or "help me dig into my achievements."

### Phase 3: LinkedIn Optimization
Specific recommendations for improving your profile visibility for your target roles.

### Phase 4: CV Generation
Role-specific CV versions, each tailored to emphasize relevant experience. Claude shows you each one and asks for feedback before moving on.

### Phase 5: Job Applications
When you find a job to apply for, give Claude the job description and it creates:
- Tailored CV (Markdown, HTML, PDF)
- Cover letters (short + long versions)
- Company research
- Interview prep notes

See [APPLICATIONS.md](APPLICATIONS.md) for the full workflow.

## What You Can Provide

The more you give Claude, the better the output:

| Source | How to Add | Priority |
|--------|-----------|----------|
| **Your current CV** | Drop into `sources/current-cv/` (PDF, Word, or text) | Essential |
| **LinkedIn URL** | Tell Claude during setup | High |
| **Blog/website** | Tell Claude during setup | Medium |
| **Articles & press** | Share URLs during setup | Medium |
| **Documents & PDFs** | Point Claude to a folder to scan | Medium |
| **GitHub** | Tell Claude your username | Optional |
| **Code repositories** | Point Claude to repos on your machine (technical users only) | Optional |
| **LinkedIn data export** | Settings > Data Privacy > Get a copy of your data | Nice to have |

## Project Structure

```
├── CLAUDE.md              # AI instructions (don't edit unless customizing)
├── config.yaml            # Your settings (created during setup, gitignored)
├── AGENTS.md              # Your context (built by Claude, gitignored)
│
├── sources/               # Your input materials (gitignored)
│   ├── current-cv/        # Your existing CV ← START HERE
│   ├── linkedin/          # LinkedIn exports
│   ├── articles/          # Press, awards, articles
│   └── documents/         # Any other relevant docs
│
├── analysis/              # What Claude discovers (gitignored)
│   ├── achievements/      # Your achievement database
│   └── skills-inventory/  # Your skills mapping
│
├── outputs/               # What Claude generates (gitignored)
│   ├── cv-versions/       # Role-specific CVs
│   ├── linkedin-updates/  # Profile recommendations
│   └── applications/      # Per-job application packages
│
└── scripts/
    ├── make-cv.js         # Converts Markdown CVs to PDF
    └── read-docx.js       # Converts Word documents to readable text
```

## PDF Generation

Convert your markdown CVs to styled PDFs:

```bash
# HTML only
node scripts/make-cv.js outputs/cv-versions/my-cv.md

# HTML + PDF with page count check
node scripts/make-cv.js outputs/cv-versions/my-cv.md --pdf
```

## Customizing Your CV

Want to change fonts, colors, or layout? See [CUSTOMIZING-CV.md](CUSTOMIZING-CV.md) for a full guide.

## Privacy

Your personal data stays private. The `.gitignore` excludes:
- `config.yaml` (your URLs and settings)
- `sources/` (your CV and documents)
- `analysis/` (extracted achievements)
- `outputs/` (generated materials)
- `AGENTS.md` (your personal context)

Only the templates and scripts are in the repository.

## Returning Sessions

When you come back to this project, Claude remembers where you left off. It will:
- Check your existing data and application progress
- Ask how things are going
- Suggest next steps based on what's already done

Just open Claude Code in this folder and start chatting.

## Contributing

Contributions welcome:
- Improvements to `make-cv.js` for better PDF output
- Additional workflow documentation
- Bug fixes and enhancements

## License

MIT
