# CV & Career Optimization Project

## Project Overview

A comprehensive career development toolkit to improve CV, LinkedIn profile, and job application materials through AI-assisted analysis and content generation.

## Goals

1. **Analyze Work History** - Extract achievements from git commits, Notion documents, and other sources
2. **Improve LinkedIn** - Optimize profile for target roles and industry visibility
3. **Create Tailored CVs** - Generate role-specific CV versions with quantified achievements
4. **Content Review** - Analyze blog posts and writing for professional insights
5. **Gap Analysis** - Identify skills/experience gaps for target positions

## Data Sources

### Primary Sources
- **Git History**: Analyze commit messages and contributions across repositories
- **Current CV**: Review and enhance existing resume content
- **LinkedIn Profile**: Audit and optimize for ATS and recruiters
- **Blog Content**: Extract thought leadership and technical expertise

### Secondary Sources
- **Notion Documents**: Project documentation, meeting notes, planning docs
- **Code Contributions**: Open source, personal projects, professional work
- **Certifications/Courses**: Professional development evidence

## Project Structure

```
/cv
├── CLAUDE.md              # This file - project instructions
├── config.example.yaml    # Template config (copy to config.yaml)
├── config.yaml            # Your config (gitignored)
├── .beads/                # Task tracking database
├── sources/               # INPUT: Place your materials here
│   ├── current-cv/        # Drop your existing CV (PDF, DOCX, MD)
│   └── linkedin/          # LinkedIn export or screenshots
├── outputs/               # Generated materials
│   ├── cv-versions/       # Role-specific CVs
│   ├── linkedin-updates/  # Recommended profile changes
│   └── cover-letters/     # Template cover letters
├── analysis/              # Research and findings
│   ├── skills-inventory/  # Extracted skills and competencies
│   ├── achievements/      # Quantified accomplishments
│   └── gap-analysis/      # Skills gaps for target roles
└── scripts/               # Automation tools
    ├── git-analyzer.sh    # Extract commit history insights
    └── notion-export.sh   # Notion content extraction
```

## Task Management

This project uses **Beads** (`bd`) for persistent task tracking across sessions.

### Key Commands
- `bd ready` - Show actionable tasks
- `bd list` - View all tasks
- `bd create "Task title"` - Add new task
- `bd close <id>` - Complete a task
- `bd dep add <child> <parent>` - Add task dependency

### Workflow
1. Check `bd ready` at session start to see unblocked work
2. Create tasks with dependencies for multi-step work
3. Close tasks as work completes
4. State persists across context compactions

## Configuration

All user-specific settings are in `config.yaml`:
- Blog URL, LinkedIn URL, GitHub username
- Target roles with keywords
- Git repositories to analyze

## CV Tailoring Strategy

Based on research from [resume-tailoring-skill](https://github.com/varunr89/resume-tailoring-skill):

### Phase 1: Discovery
- Build resume library from existing materials
- Conduct branching interview to surface undocumented experience
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
- Generate Markdown, DOCX, PDF versions
- Create interview prep reports
- Produce tailored cover letter templates

## Rules

- Maintain factual accuracy - reframe but never fabricate
- Quantify achievements wherever possible
- Use active voice and strong action verbs
- Optimize for both ATS systems and human readers
- Keep CVs to 2 pages maximum for most roles
- Tailor each version to specific job requirements

## CV Formatting Best Practices

### Bold Highlighting Strategy
Use **selective inline bold** to draw attention to key achievements:
- Company names that carry weight (Fortune 500 clients, notable executives)
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
- Group related bullets under H4 subheadings (e.g., "AI & Infrastructure", "Team & Leadership")

### Recognition Quotes
- Include 2-3 quotes from diverse sources (CEO, direct report, client/peer)
- Use blockquote format: `> "Quote" — **Name, Title**`
- Place at end of CV for strong closing impression

## Commands

```bash
# Install beads task manager
npm install -g @anthropic-ai/bd

# Initialize beads in project
bd init

# View ready tasks
bd ready

# Git analysis (run from target repo)
git log --pretty=format:"%h|%s|%ad" --date=short > git-history.csv

# Generate PDF from markdown CV
node scripts/make-cv.js outputs/cv-versions/my-cv.md --pdf
```

## Quick Start - Add Your Materials

To get started, add your source materials to the `sources/` folder:

1. **Copy `config.example.yaml` to `config.yaml`** and fill in your details
2. **Current CV**: Save to `sources/current-cv/` (PDF, DOCX, or Markdown)
3. **LinkedIn**: Export your profile data or take screenshots → `sources/linkedin/`
   - Go to LinkedIn > Settings > Data Privacy > Get a copy of your data

## Session Checklist

1. Run `bd ready` to see current priorities
2. Review any new source materials added
3. Check for pending analysis tasks
4. Update task status as work progresses
5. Document insights in analysis/ directory

## Resources

- [CLAUDE.md Best Practices](https://claude.com/blog/using-claude-md-files)
- [Beads Task Management](https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a)
- [Resume Tailoring Skill](https://github.com/varunr89/resume-tailoring-skill)
- [Resume Manager Skill](https://claude-plugins.dev/skills/@ailabs-393/ai-labs-claude-skills/resume-manager)
