# Customizing Your CV Look & Feel

This guide explains how to change the visual appearance of your generated CVs. The system uses **RenderCV** to produce publication-quality PDFs from YAML source files via Typst typesetting.

## How CV Generation Works

```
Your CV (YAML) → rendercv render → PDF, HTML, PNG, Markdown, Typst
```

All content and styling live in a single `.yaml` file. The `design:` section controls the visual appearance — no CSS or code editing required.

## Quick Customizations

### Themes

Change the entire look by switching the theme in your YAML file:

```yaml
design:
  theme: engineeringresumes   # or: classic, harvard, engineeringclassic, sb2nov, moderncv
```

| Theme | Style |
|-------|-------|
| `classic` | Clean, professional, blue accents |
| `harvard` | Traditional academic, serif font, black & white |
| `engineeringresumes` | Compact, technical, full-width lines |
| `engineeringclassic` | Modern engineering, Raleway font |
| `sb2nov` | LaTeX-style, Computer Modern font |
| `moderncv` | European-style, photo support, left-aligned |

### Fonts

Override the font family for any element:

```yaml
design:
  typography:
    font_family:
      body: Source Sans 3        # Main text
      name: Source Sans 3        # Your name
      section_titles: Source Sans 3
```

**Popular professional CV font options:**
- `Source Sans 3` — Clean, modern (default)
- `XCharter` — Classic, traditional serif
- `Raleway` — Friendly, contemporary
- `New Computer Modern` — LaTeX-style academic
- `Fontin` — European, elegant

### Font Size

```yaml
design:
  typography:
    font_size:
      body: 10pt       # Main text (default: 10pt, try 9pt for more compact)
      name: 30pt        # Your name
      section_titles: 1.4em
```

### Margins

```yaml
design:
  page:
    size: us-letter     # or: a4
    top_margin: 0.7in   # Try 0.5in for tighter
    bottom_margin: 0.7in
    left_margin: 0.7in
    right_margin: 0.7in
```

### Colors

```yaml
design:
  colors:
    body: rgb(0, 0, 0)           # Main text
    name: rgb(0, 79, 144)        # Name color
    section_titles: rgb(0, 79, 144)
    links: rgb(0, 79, 144)
    connections: rgb(0, 79, 144)  # Contact info
```

For a fully black and white CV:
```yaml
design:
  colors:
    name: rgb(0, 0, 0)
    section_titles: rgb(0, 0, 0)
    links: rgb(0, 0, 0)
    connections: rgb(0, 0, 0)
```

### Section Title Style

```yaml
design:
  section_titles:
    type: with_partial_line        # or: with_full_line, centered_with_centered_partial_line, moderncv
    line_thickness: 0.5pt
```

### Bold and Small Caps

```yaml
design:
  typography:
    bold:
      name: true
      section_titles: true
    small_caps:
      name: false
      section_titles: false
```

## Automatic Bold Keywords

Instead of manually bolding text, you can auto-bold specific words across the entire CV:

```yaml
settings:
  bold_keywords:
    - Go
    - TypeScript
    - Kubernetes
    - AWS
```

You can still use `**manual bold**` in any text field for one-off emphasis.

## Content Tips

### Text Formatting in YAML

All text fields support inline Markdown:
- `**bold**` and `*italic*`
- `[link text](url)`
- No block-level Markdown (no headers, lists, or code blocks in text fields)

### YAML Quoting Rule

**Always quote strings containing colons (`:`)**  — this is the most common YAML error:

```yaml
# WRONG:
- Relevant coursework: Distributed Systems    # Breaks YAML!

# WRONG:
highlights:
  - Relevant coursework: Distributed Systems    # Breaks YAML!

# RIGHT:
highlights:
  - "Relevant coursework: Distributed Systems"
```

### Nested Bullets (Sub-bullets)

```yaml
highlights:
  - Main bullet point
    - Sub-bullet 1
    - Sub-bullet 2
```

## Advanced Customization

### Separate Design Files

Reuse the same design across multiple CV versions:

```bash
rendercv render cv-backend.yaml --design shared-design.yaml
```

Where `shared-design.yaml` contains only the `design:` section.

### Entry Layout Templates

Customize how entries are rendered:

```yaml
design:
  templates:
    experience_entry:
      main_column: |-
        **COMPANY**, POSITION
        SUMMARY
        HIGHLIGHTS
      date_and_location_column: |-
        LOCATION
        DATE
```

### Custom Typst Templates

For full design control beyond what YAML offers:

```bash
rendercv create-theme "my-theme"
```

This scaffolds editable Typst templates you can modify directly.

## Testing Changes

```bash
# Render and check the PDF
rendercv render outputs/cv-versions/my-cv.yaml

# Watch mode — auto-renders on every save
rendercv render outputs/cv-versions/my-cv.yaml --watch

# Quick PNG preview (faster, skip PDF/HTML/MD)
rendercv render outputs/cv-versions/my-cv.yaml --dont-generate-pdf --dont-generate-html --dont-generate-markdown
```

Page count is visible from the PNG output — each page generates a separate `_1.png`, `_2.png`, etc.

## Common Issues

**CV is more than 2 pages:**
- Reduce body font size (try `9pt`)
- Tighten margins (try `0.5in`)
- Reduce `design.typography.line_spacing` (try `0.5em`)
- Trim highlights — fewer, stronger bullets
- Ask Claude to help trim content

**YAML parsing error:**
- Check for unquoted strings containing colons (`:`)
- Check for invalid phone number format (must be E.164: `+15551234567`)

**Fonts look different than expected:**
- RenderCV bundles fonts via Typst — not all system fonts are available
- Stick to the theme defaults or fonts listed in theme documentation

## Getting Help

Ask Claude to customize your CV styling. Use the `/rendercv` skill for full schema reference. Examples:
- "Switch my CV to the harvard theme"
- "Make the headings black instead of blue"
- "Use a more compact layout to fit on 2 pages"
- "Show me what the moderncv theme looks like"

---

## Legacy Fallback: make-cv.js

If RenderCV is not installed or you prefer working with Markdown source files, the original pipeline is still available:

```
Your CV (Markdown) → make-cv.js → Styled HTML → PDF (via Playwright)
```

### Usage

```bash
# Generate HTML from markdown CV
node scripts/make-cv.js outputs/cv-versions/my-cv.md

# Generate HTML + PDF with page count validation
node scripts/make-cv.js outputs/cv-versions/my-cv.md --pdf
```

### Customization

The `make-cv.js` script embeds all CSS styling. Edit the file directly to change:
- **Fonts:** Montserrat (headings) + Open Sans (body) via Google Fonts
- **Font size:** 9pt body text (change in CSS)
- **Margins:** 15mm all around (change in Playwright PDF options)
- **Colors:** `#333` body, `#0066cc` links (change in CSS)

### Markdown Formatting Features

- `<!-- pagebreak -->` — force page break
- `<!-- float-right-header -->...<!-- /float-right-header -->` — right-aligned contact info
- `<!-- float-right -->...<!-- /float-right -->` — right-aligned dates/location
- `**bold**` — selective emphasis on metrics and key facts
- `> "Quote" — **Name, Title**` — blockquote testimonials
- `---` — section dividers
