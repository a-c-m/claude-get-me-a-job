# Job Application Workflow

This document describes the process for creating tailored job applications.

## Quick Start

Provide a job description (URL or paste) and Claude will create:
1. Parsed job description as markdown
2. Company research (funding, leadership, news, culture)
3. Tailored CV based on the best base version
4. Cover letters (short + long versions)
5. Application notes with interview prep
6. **Report** summarizing changes, fit assessment, and review areas
7. **Timeline** for tracking the application progress

Claude will **check in** before finalizing to make sure everything looks right.

## Folder Structure

```
outputs/applications/
└── {company-slug}-{role-slug}/
    ├── report.md               # Summary: changes made, fit assessment, review areas
    ├── job-description.md      # Parsed JD with keywords
    ├── company-research.md     # Background research
    ├── timeline.md             # Application progress tracker
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
- Tech stack and engineering culture (if applicable)
- Competitors and market position
- **Wikipedia, press, Companies House** for verified facts
- **Cross-reference JD claims against research** — flag any discrepancies (e.g. JD says "AWS" but company uses GCP)

### 3. Select Base CV
Match JD requirements to existing CV versions. If no version is a good match, create a new tailored version from the achievements database.

### 4. Tailor CV
- Inject keywords from JD
- Reorder achievements for relevance
- Emphasize matching experience and skills
- Add domain-specific experience
- **Address gaps** — if a requirement isn't in the user's background, acknowledge transferable experience in the cover letter
- Ensure ≤2 pages

### 5. Generate Outputs
```bash
cd outputs/applications/{company}/
node ../../scripts/make-cv.js "[Your Name].md" --pdf
```

### 6. Cover Letters
**Short (1 paragraph):** Hook + key alignment + call to action

**Long (3-4 paragraphs):**
- Why this company specifically (use company research findings)
- Key experience alignment
- Address any gaps with transferable experience
- Closing

**Writing rules:**
- NO em-dashes (—). Use periods, commas, or parentheses instead.
- Avoid starting sentences with "I" — check every sentence
- Vary sentence length
- Use active voice
- Reference specific company details from research (shows genuine interest)

### 7. Application Notes
- STAR answers for likely questions (incorporate company-specific details)
- Questions to ask them
- Common form field answers
- Salary/notice period info

### 8. Timeline
Create `timeline.md` to track the application journey:

```markdown
# Application Timeline — [Company] [Role]

| Date | Event | Notes | Next Step |
|------|-------|-------|-----------|
| YYYY-MM-DD | Application submitted | Via [method] | Wait for response |
| | | | |

## Status: [Applied / Screening / Interview / Offer / Rejected / Withdrawn]

## Upcoming
- [ ] Next action item

## Notes
- Key things to remember for this application
```

Update this file at every stage. Claude will check it on session start and ask about progress.

### 9. Interview Prep
After the application package is created, **offer to help the user prepare for interviews**:

- "Would you like me to help you prepare for an interview with [Company]?"
- Research common interview formats for the company (Glassdoor)
- Prepare role-specific STAR answers using company research
- Create a one-page briefing sheet with:
  - Company background and recent news
  - Leadership team names and backgrounds
  - Key talking points that align your experience with their needs
  - Questions that show you've done your homework
  - Red flags or concerns to probe carefully
- Offer to do a practice Q&A session

### 10. Report & Checkin
Generate `report.md` summarizing:
- Role summary (company, title, location, key details)
- Key research findings and red flags
- **JD vs reality check** — any discrepancies between JD claims and research findings
- CV tailoring: base used, changes made, keywords injected
- Fit assessment: alignment table and concern counters
- Cover letter notes
- Files generated checklist
- Recommended review areas and next steps

**Present the report to the user and ask for feedback before finalizing.**

## CV Tailoring Checklist

- [ ] Keywords from JD injected naturally
- [ ] Most relevant achievements first
- [ ] Matching experience and skills emphasized
- [ ] Industry experience highlighted if applicable
- [ ] Red flags from JD addressed
- [ ] Gaps acknowledged with transferable experience (in cover letter)
- [ ] Company research referenced in cover letter
- [ ] Cover letter avoids starting sentences with "I"
- [ ] No em-dashes in cover letters
- [ ] ≤2 pages in PDF
- [ ] File named "[Your Name].pdf"

## Research Sources

- Company website (About, Careers, Blog)
- **Wikipedia** (for verified facts, awards, history)
- LinkedIn (company page, leadership profiles)
- Crunchbase/Tracxn (funding, investors)
- Companies House (UK companies)
- News search (recent announcements)
- Glassdoor (culture, interview process, salary data)
- Industry blogs/podcasts
- **Tech stack detectors** (StackShare, BuiltWith)

## Applications Tracker

Track all applications here. Claude checks this on session start and asks about active ones.

| Company | Role | Date Applied | Status | Next Step | Folder |
|---------|------|-------------|--------|-----------|--------|
| | | | | | |

**Status values:** Preparing / Applied / Screening / Phone Interview / Technical Interview / Final Interview / Offer / Negotiating / Accepted / Rejected / Withdrawn
