# CV & Career Optimization Project

## Project Overview

A career development toolkit that helps people improve their CV, LinkedIn profile, and job application materials through AI-assisted analysis and content generation. Designed for users of all technical levels.

## Goals

1. **Analyze Work History** - Extract achievements from provided materials, URLs, and documents
2. **Improve LinkedIn** - Optimize profile for target roles and industry visibility
3. **Create Tailored CVs** - Generate role-specific CV versions with quantified achievements
4. **Content Review** - Analyze articles, press coverage, and writing for professional insights
5. **Gap Analysis** - Identify skills/experience gaps for target positions
6. **Streamline Applications** - Produce customized CVs, cover letters, and prep materials per job

## Session Start Behaviour

**Every time a new session begins**, follow this checklist:

### First-Time Setup (no config.yaml exists)
1. Welcome the user and explain what this project does. Set time expectations: "This first session takes about 30-45 minutes and will get you a full set of tailored CVs. I'll guide you through it step by step."
2. Ask for their details conversationally (don't make them edit files):
   - Name, blog/website URL, GitHub username, LinkedIn URL
   - 2-4 target roles they're aiming for
   - Any articles, press coverage, or award URLs to review
3. Create `config.yaml` from their answers
4. Copy `AGENTS.md.example` to `AGENTS.md`
5. Create the directory structure (`sources/`, `outputs/`, `analysis/`)
6. **CV Upload — the most critical step**:
   - Explain clearly: "Your CV is the foundation everything builds on. Without it, I can only work from public sources."
   - Ask them to drop their CV into `sources/current-cv/`
   - **Supported formats:**
     - **PDF** — works directly, Claude can read it
     - **Word (.docx)** — run `node scripts/read-docx.js sources/current-cv/filename.docx` to convert to markdown. The script preserves formatting and creates both `.md` and `.txt` versions.
     - **Old Word (.doc)** — ask the user to re-save as .docx or export as PDF first
     - **Markdown or text** — works directly
   - If they don't have their CV handy, continue with other sources but **remind them at the end of the session** that the CV is still needed for best results
7. Offer to scan any folders they point to for relevant documents (PDFs, text files, etc.)
8. **For technical users:** Ask if they have any git repositories they'd like analyzed. Explain: "If you work in software or have coding projects, I can analyze your commit history to find achievements and contribution patterns. Just give me the path to any repos on your machine." Add any paths to the `repositories` section of config.yaml.
9. Proceed to Phase 1: Discovery

### Returning Session (config.yaml exists)
1. Read `config.yaml`, `AGENTS.md`, and check `analysis/` for existing data
2. Check `outputs/applications/` for any in-progress applications — read each `timeline.md` and the tracker in `APPLICATIONS.md`
3. **Greet the user with context and be proactive about active applications**, e.g.:
   - "Welcome back! I see you applied to [Company] on [date] — have you heard back? Want me to help with interview prep?"
   - "Your [Company] application is at the screening stage. Would you like me to research their interview process?"
   - "It's been a week since you applied to [Company]. Want to draft a follow-up?"
   - "Your CV versions are generated. Would you like to refine them or apply somewhere new?"
4. If there are active applications, **offer to help with next steps**: interview prep, follow-up emails, research on the company's interview process
5. Ask what they'd like to work on today

## Checkin Workflow

**Critical: Do not silently process large amounts of data.** The user needs to see what you've found and have a chance to correct it before you build on it.

### After Discovery (gathering data from sources)
Pause and present a summary:
- "Here's what I found from your materials. Please review and let me know if anything needs correcting:"
- List key achievements discovered (with metrics)
- List skills identified
- Flag any gaps or questions ("I couldn't find team size info — do you know how many people you managed at [Company]?")
- **Wait for user confirmation before proceeding**

### After Building Achievements Database
Show the user:
- Where the file lives (`analysis/achievements/achievements.md`)
- The top 5-10 achievements with metrics
- Ask: "Are these accurate? Anything missing or wrong?"

### After Generating CV Versions
For each CV:
- Show a brief summary of what was emphasized
- Note the page count
- Ask: "Want to review this before I generate the next one?"

### After Creating Application Packages
Present a report:
- Key changes made to tailor the CV
- Fit assessment (what matches well, what's a stretch)
- Ask: "Does this look right? Any adjustments?"

## Data Sources

### Primary Sources
- **Current CV**: The most important input — review and enhance existing content
- **LinkedIn Profile**: Audit and optimize for ATS and recruiters
- **Blog/Website Content**: Extract thought leadership and technical expertise
- **Git History**: Analyze commit messages and contributions (if applicable)

### Additional Sources (user-provided)
- **Articles & Press**: URLs to news coverage, interviews, published articles
- **Awards & Recognition**: URLs or documents showing achievements
- **Documents & PDFs**: Any files the user points to (project docs, reviews, certifications)
- **Code Contributions**: Open source, personal projects, professional work

### Scanning for Sources
When setting up, offer to scan folders the user specifies for relevant materials:
- Look for `.pdf`, `.docx`, `.doc`, `.txt`, `.md` files
- Summarize what you find and ask which files are relevant
- Copy or reference relevant files in the `sources/` directory

## Project Structure

```
├── CLAUDE.md              # This file - project instructions
├── config.example.yaml    # Template config (copy to config.yaml)
├── config.yaml            # Your config (gitignored)
├── AGENTS.md.example      # Template for agent context
├── AGENTS.md              # Your context (gitignored after setup)
├── APPLICATIONS.md        # Job application workflow
│
├── sources/               # INPUT: Place your materials here
│   ├── current-cv/        # Drop your existing CV (PDF, DOCX, MD)
│   ├── linkedin/          # LinkedIn export or screenshots
│   ├── articles/          # Press, awards, published articles
│   └── documents/         # Any other relevant docs
│
├── outputs/               # Generated materials
│   ├── cv-versions/       # Role-specific CVs
│   ├── linkedin-updates/  # Recommended profile changes
│   ├── cover-letters/     # Template cover letters
│   └── applications/      # Per-job application packages
│
├── analysis/              # Research and findings
│   ├── skills-inventory/  # Extracted skills and competencies
│   ├── achievements/      # Quantified accomplishments
│   └── gap-analysis/      # Skills gaps for target roles
│
└── scripts/               # Automation tools
    └── make-cv.js         # Markdown to PDF converter
```

## Workflow Phases

### Phase 1: Discovery (Context Gathering)
Analyze all available materials and build a picture of the user's experience.

**Steps:**
1. Read CV if provided (this is the foundation — prompt strongly if missing)
2. Crawl blog/website for content and expertise signals
3. Analyze GitHub for technical contributions (if applicable)
4. If `repositories` are listed in config.yaml, analyze git commit history for contribution patterns, project scope, and technical achievements (e.g. `git log --pretty=format:"%h|%s|%ad" --date=short`). This is optional and only relevant for technical users.
5. Fetch any articles/URLs provided in config
5. Review any documents in `sources/`
6. **Search for external validation** — look up companies the user worked at on Wikipedia, check for press coverage, awards, or notable facts that the user may have forgotten or undersold
7. **CHECKIN**: Present findings, ask for corrections and additions
8. Build `analysis/achievements/achievements.md`
9. Build `analysis/skills-inventory/skills.md`
10. **CHECKIN**: Show achievement database, confirm accuracy

### Phase 2: Discovery Interview
A conversational interview to surface achievements, metrics, and experiences that aren't captured in documents or online sources. Most people undersell themselves — this phase fixes that.

**See [INTERVIEW.md](INTERVIEW.md) for the full interview framework.**

**Steps:**
1. Review what's already in achievements.md and identify gaps (missing metrics, vague descriptions, thin sections)
2. Conduct a structured but conversational interview covering:
   - Career overview and proudest moments
   - Deep-dive into each significant role (impact, scale, team size, budget)
   - Metrics extraction for each achievement (before/after, percentages, dollar figures)
   - Hidden achievements (volunteering, speaking, mentoring, side projects)
   - Skills and tools not yet captured
   - Target role alignment and gaps
3. **Update achievements.md and skills.md in real time** as new facts emerge
4. **CHECKIN**: Summarize what was discovered, highlight the strongest new material, flag remaining gaps
5. Update AGENTS.md with verified facts

**Key principles:**
- Be conversational, not interrogative — this should feel like a helpful chat
- One topic at a time — follow the thread, don't overwhelm
- Celebrate discoveries — "That's a strong achievement, hiring managers love concrete numbers"
- Explain why you're asking — "Team size helps frame the scale of your leadership"
- Help with estimates — "Even a rough number works — was it closer to 10 or 100?"
- Summarize as you go so the user can correct misunderstandings

**The user can request an interview at any time** by saying things like:
- "Interview me about my experience"
- "Help me dig into my achievements"
- "Ask me questions about my career"
- "Let's do a discovery session"

### Phase 3: LinkedIn Optimization
Review and recommend profile improvements.

**Before starting this phase**, explain to the user:
- "I can see some of your LinkedIn profile publicly, but LinkedIn limits what's visible without being logged in. For the best recommendations, it helps to have your full profile data."
- "You can export it from LinkedIn: go to **Settings & Privacy > Data Privacy > Get a copy of your data**. Select Profile, Skills, Recommendations, and Positions. LinkedIn will email you a ZIP file (usually within 24 hours)."
- "If you have that export, drop it in `sources/linkedin/`. If not, we can still work with what's publicly visible and your CV — it's just that the recommendations will be more targeted with the full data."
- Don't block on this — proceed with what's available

**Output:** `outputs/linkedin-updates/recommendations.md`
**CHECKIN:** Present recommendations, ask which to prioritize

### Phase 4: CV Generation
Generate role-specific CV versions from the achievements database.

**Steps:**
1. For each target role, create a tailored CV emphasizing relevant experience
2. Optimize keywords for ATS systems
3. Format for 2-page PDF output
4. **CHECKIN per CV:** Show summary, note page count, ask for review

**Output:** `outputs/cv-versions/` with MD, HTML, and PDF versions

**After generating CVs, explain customization to the user:**
- "Your CVs are in `outputs/cv-versions/` as PDF, HTML, and Markdown files."
- "If you want to tweak the content, edit the `.md` file directly — it's just text with some formatting. Then I can regenerate the PDF for you."
- "If you want to change the look and feel (fonts, colors, spacing), see [CUSTOMIZING-CV.md](CUSTOMIZING-CV.md) for a full guide, or just ask me to make changes."

### Phase 5: Job Applications
When applying for a specific role, create a complete application package including a timeline tracker.

See [APPLICATIONS.md](APPLICATIONS.md) for the full workflow.
**CHECKIN:** Present report with fit assessment before finalizing.

**After the application package is created, proactively offer interview prep:**
- "Would you like me to help you prepare for an interview with [Company]?"
- "I can create a briefing sheet with their leadership team, recent news, and talking points tailored to this role."
- "Want to do a practice Q&A? I can ask you likely interview questions and help refine your answers."
- Update the application's `timeline.md` with the current status
- Update the tracker in `APPLICATIONS.md`

## Configuration

All user-specific settings are in `config.yaml`:
- Blog URL, LinkedIn URL, GitHub username
- Target roles with keywords
- Articles and URLs to analyze
- Paths to scan for documents

## CV Tailoring Strategy

### Phase 1: Discovery
- Build resume library from existing materials
- Conduct conversational interview to surface undocumented experience
- Identify volunteering, side projects, informal leadership

### Phase 2: Research
- Analyze target company cultures
- Map role requirements and success profiles
- Identify key terminology and competencies

### Phase 3: Optimization
- Match experiences to requirements with confidence scoring
- Reframe achievements using target role language
- Ensure ATS keyword optimization

### Phase 4: Output
- Generate Markdown, HTML, PDF versions
- Create interview prep reports
- Produce tailored cover letter templates

## Rules

- Maintain factual accuracy - reframe but never fabricate
- Quantify achievements wherever possible
- Use active voice and strong action verbs
- Optimize for both ATS systems and human readers
- Keep CVs to 2 pages maximum for most roles
- Tailor each version to specific job requirements
- **Always checkin with the user** before moving to the next phase

## CV Formatting Best Practices

### Bold Highlighting Strategy
Use **selective inline bold** to draw attention to key achievements:
- Company names that carry weight
- Impressive metrics ($100k+, 75%, 10M+ users)
- Awards and acquisitions
- Key differentiators (patents, team size, etc.)

Avoid over-bolding - if everything is bold, nothing stands out.

### Summary Bold Approach
In the Professional Summary, bold phrases that capture unique value:
- Years of experience and key outcomes
- Core competencies and differentiators
- Memorable facts that set you apart

### Page Layout
- Use `<!-- pagebreak -->` to force page breaks before major sections
- Place page breaks before role transitions
- Test PDF output to ensure clean 2-page fit

### Section Spacing
- Use `---` dividers between bottom sections (Technical Skills, Speaking, Education, Recognition)
- H2 margins: 18px top, 6px bottom
- H3 margins: 14px top, 4px bottom
- HR margins: 10px (reduced from default)

### Bullet Points
- Use `-` or `*` markers (both supported)
- Keep bullets concise - one line each when possible
- Group related bullets under H4 subheadings

### Recognition Quotes
- Include 2-3 quotes from diverse sources (CEO, direct report, client/peer)
- Use blockquote format: `> "Quote" — **Name, Title**`
- Place at end of CV for strong closing impression

## Commands

```bash
# Install dependencies
npm install

# Convert a Word CV to markdown (creates .md and .txt)
node scripts/read-docx.js sources/current-cv/my-cv.docx

# Generate HTML from markdown CV
node scripts/make-cv.js outputs/cv-versions/my-cv.md

# Generate HTML + PDF with page count validation
node scripts/make-cv.js outputs/cv-versions/my-cv.md --pdf
```

## CV Customization

See [CUSTOMIZING-CV.md](CUSTOMIZING-CV.md) for how to change fonts, colors, spacing, margins, and layout.

## Quick Start - Add Your Materials

1. **Copy `config.example.yaml` to `config.yaml`** and fill in your details (or let Claude do it conversationally)
2. **Current CV**: Save to `sources/current-cv/` (PDF, DOCX, or Markdown) — **this is the most important step**
3. **LinkedIn**: Export your profile data or take screenshots → `sources/linkedin/`
   - Go to LinkedIn > Settings > Data Privacy > Get a copy of your data
4. **Articles/Press**: Save links in config.yaml or drop files in `sources/articles/`

## Resources

- [Resume Tailoring Skill](https://github.com/varunr89/resume-tailoring-skill)
- [Resume Manager Skill](https://claude-plugins.dev/skills/@ailabs-393/ai-labs-claude-skills/resume-manager)
