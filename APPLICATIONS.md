# Job Application Workflow

This document describes the process for creating tailored job applications.

## Quick Start

Provide a JD (URL or paste) and I'll create:
1. Parsed job description as markdown
2. Company research (funding, leadership, news, culture)
3. Tailored CV based on the best base version
4. Cover letters (short + long versions)
5. Application notes with interview prep
6. **Report** summarizing changes, fit assessment, and review areas

## Folder Structure

```
outputs/applications/
└── {company-slug}-{role-slug}/
    ├── report.md               # Summary: changes made, fit assessment, review areas
    ├── job-description.md      # Parsed JD with keywords
    ├── company-research.md     # Background research
    ├── [Your Name].md          # Tailored CV (markdown)
    ├── [Your Name].html        # Tailored CV (HTML)
    ├── [Your Name].pdf         # Tailored CV (PDF, ≤2 pages)
    ├── cover-letter-short.md   # 1 paragraph version
    ├── cover-letter-long.md    # 3-4 paragraph version
    └── application-notes.md    # Form answers, interview prep
```

## Workflow Steps

### 1. Capture JD
- Fetch from URL or accept paste
- Parse into structured markdown
- Extract key requirements and keywords for ATS

### 2. Company Research
Web search for:
- Funding history and investors
- Founders and leadership team
- Recent news and announcements
- Tech stack and engineering culture
- Competitors and market position

### 3. Select Base CV
Match JD requirements to existing CV versions:

| Target Role Keywords | Recommended Base |
|---------------------|------------------|
| CTO, technical founder, 0→1, early stage | `startup-cto.md` |
| VP Engineering, Director, scaling teams | `vp-engineering.md` |
| Fractional, advisory, consulting, interim | `fractional-cto.md` |

### 4. Tailor CV
- Inject keywords from JD
- Reorder achievements for relevance
- Emphasize matching tech stack
- Add domain-specific experience
- Ensure ≤2 pages

### 5. Generate Outputs
```bash
cd outputs/applications/{company}/
node ../../scripts/make-cv.js "[Your Name].md" "[Your Name].html" --pdf
```

### 6. Cover Letters
**Short (1 paragraph):** Hook + key alignment + call to action

**Long (3-4 paragraphs):**
- Why this company specifically
- Key experience alignment
- Culture/values fit
- Closing

**Writing rules:**
- NO em-dashes (—). Use periods, commas, or parentheses instead. Em-dashes are a dead giveaway for AI-generated copy.
- Avoid starting sentences with "I"
- Vary sentence length
- Use active voice

### 7. Application Notes
- STAR answers for likely questions
- Questions to ask them
- Common form field answers
- Salary/notice period info
- Post-interview tracking

### 8. Report
Generate `report.md` summarizing:
- Role summary (company, title, location, key details)
- Key research findings and red flags
- CV tailoring: base used, changes made, keywords injected
- Fit assessment: alignment table and concern counters
- Cover letter notes
- Files generated checklist
- Recommended review areas and next steps

## CV Tailoring Checklist

- [ ] Keywords from JD injected naturally
- [ ] Tech stack aligned (bold matching technologies)
- [ ] Most relevant achievements first
- [ ] Matching team/budget scale emphasized
- [ ] Industry experience highlighted if applicable
- [ ] Red flags from JD addressed
- [ ] ≤2 pages in PDF
- [ ] File named "[Your Name].pdf"

## Research Sources

- Company website (About, Careers, Blog)
- LinkedIn (company page, leadership profiles)
- Crunchbase/Tracxn (funding, investors)
- Companies House (UK companies)
- News search (recent announcements)
- Glassdoor (culture, interview process)
- Tech blogs/podcasts (engineering culture)

## Applications Created

Track your applications here:

| Company | Role | Date | Status | Folder |
|---------|------|------|--------|--------|
| | | | | |
