# Claude Get Me A Job

An AI-assisted career toolkit for optimizing your CV, LinkedIn profile, and job applications. Uses Claude Code to analyze your work history and generate tailored, ATS-optimized materials.

## What This Does

1. **Gathers Context** - Analyzes your git commits, existing CV, LinkedIn, and blog posts
2. **Builds Achievement Database** - Extracts quantified accomplishments with metrics
3. **Optimizes LinkedIn** - Provides specific recommendations for profile improvements
4. **Generates Role-Specific CVs** - Creates tailored versions for different target roles
5. **Streamlines Applications** - Produces customized CVs, cover letters, and prep materials per job

## Quick Start

### 1. Install Dependencies

```bash
# Clone and enter the project
git clone https://github.com/a-c-m/claude-get-me-a-job.git
cd claude-get-me-a-job

# Install Node dependencies (for PDF generation)
npm install

# Install Beads task manager (optional but recommended)
npm install -g @anthropic-ai/bd
bd init
```

### 2. Configure Your Settings

```bash
# Copy the example config
cp config.example.yaml config.yaml

# Edit with your details
# - blog_url: Your blog/website URL
# - github_username: Your GitHub username
# - linkedin_url: Your LinkedIn profile URL
# - target_roles: 2-3 roles you're targeting
# - repositories: Paths to repos you want analyzed
```

### 3. Add Your Materials

Create the required directories and add your source materials:

```bash
mkdir -p sources/current-cv sources/linkedin sources/blog-cache
mkdir -p outputs/cv-versions outputs/linkedin-updates outputs/applications
mkdir -p analysis/achievements analysis/skills-inventory
```

Add your files:
- `sources/current-cv/` - Your existing CV (PDF, DOCX, or Markdown)
- `sources/linkedin/` - LinkedIn data export or profile screenshots

### 4. Set Up Agent Context

```bash
# Copy the agent context template
cp AGENTS.md.example AGENTS.md

# The AI will help you fill this in as you work
```

## Workflow Phases

### Phase 1: Discovery (Context Gathering)

Start a Claude Code session and ask it to analyze your materials:

```
Analyze my current CV and LinkedIn profile. Extract all achievements
and build an initial skills inventory.
```

The agent will:
- Read your CV and extract accomplishments
- Analyze your LinkedIn for additional context
- Crawl your blog for thought leadership evidence
- Analyze git commits for technical contributions
- Create `analysis/achievements/achievements.md`
- Create `analysis/skills-inventory/skills.md`

### Phase 2: LinkedIn Optimization

```
Review my LinkedIn profile and provide specific recommendations
for improving visibility for [target roles].
```

Output: `outputs/linkedin-updates/recommendations.md`

### Phase 3: CV Generation

```
Generate role-specific CV versions for my target roles based on
the achievements database.
```

This creates tailored CVs in `outputs/cv-versions/`:
- Each version emphasizes relevant experience
- Keywords optimized for ATS systems
- Formatted for 2-page PDF output

### Phase 4: Job Applications

When you find a job to apply for:

```
I want to apply to [Company] for [Role]. Here's the JD: [paste or URL]
```

The agent creates a complete application package in `outputs/applications/`:
- Parsed job description with keywords
- Company research
- Tailored CV (MD, HTML, PDF)
- Cover letters (short + long)
- Interview prep notes

See [APPLICATIONS.md](APPLICATIONS.md) for the full workflow.

## Project Structure

```
/cv
├── CLAUDE.md              # AI instructions and rules
├── AGENTS.md              # Your context (gitignored after setup)
├── AGENTS.md.example      # Template for agent context
├── APPLICATIONS.md        # Job application workflow
├── config.yaml            # Your config (gitignored)
├── config.example.yaml    # Config template
│
├── sources/               # Your input materials (gitignored)
│   ├── current-cv/        # Existing CV files
│   ├── linkedin/          # LinkedIn exports
│   └── blog-cache/        # Cached blog posts
│
├── analysis/              # Research outputs (gitignored)
│   ├── achievements/      # Achievement database
│   └── skills-inventory/  # Skills mapping
│
├── outputs/               # Generated materials (gitignored)
│   ├── cv-versions/       # Role-specific CVs
│   ├── linkedin-updates/  # Profile recommendations
│   └── applications/      # Job application packages
│
└── scripts/
    └── make-cv.js         # Markdown to PDF converter
```

## PDF Generation

Convert your markdown CVs to PDF:

```bash
# Generate HTML only
node scripts/make-cv.js outputs/cv-versions/my-cv.md

# Generate HTML + PDF with page count validation
node scripts/make-cv.js outputs/cv-versions/my-cv.md --pdf
```

The script:
- Converts markdown to styled HTML
- Generates print-ready PDF via Playwright
- Validates 2-page limit
- Supports `<!-- pagebreak -->` for manual breaks

## Task Management with Beads

This project uses [Beads](https://github.com/anthropics/beads) for persistent task tracking:

```bash
bd ready              # Show tasks ready to work on
bd list               # View all tasks
bd create "Task"      # Add a new task
bd close <id>         # Complete a task
bd dep add <a> <b>    # Add dependency (a depends on b)
```

Tasks persist across Claude Code sessions, so work continues where you left off.

## Key Files Explained

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Instructions for the AI - formatting rules, workflow phases, best practices |
| `AGENTS.md` | Your personal context - achievements, profile summary, verified facts |
| `APPLICATIONS.md` | Job application workflow and checklist |
| `config.yaml` | Your URLs, paths, and target role definitions |
| `achievements.md` | Master database of your quantified accomplishments |
| `skills.md` | Comprehensive skills inventory with evidence |

## CV Formatting Best Practices

The system follows these guidelines (configured in CLAUDE.md):

- **Bold highlighting** for key metrics, company names, and awards
- **2-page maximum** for most roles
- **Active voice** and quantified achievements
- **ATS optimization** with relevant keywords
- **Clean page breaks** between major sections

## Privacy

The `.gitignore` excludes all personal data:
- `config.yaml` (your URLs and paths)
- `sources/` (your CV and LinkedIn data)
- `analysis/` (extracted achievements)
- `outputs/` (generated materials)
- `.beads/` (task database)

Only the templates and scripts are committed to the repo.

## Contributing

This is a personal productivity tool, but contributions are welcome:
- Improvements to `make-cv.js` for better PDF output
- Additional workflow documentation
- Bug fixes and enhancements

## License

MIT
