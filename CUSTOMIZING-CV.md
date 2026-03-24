# Customizing Your CV Look & Feel

This guide explains how to change the visual appearance of your generated CVs. The system converts your CV from Markdown to HTML to PDF, and you can customize each stage.

## How CV Generation Works

```
Your CV (Markdown) → make-cv.js → Styled HTML → PDF (via Playwright)
```

The script `scripts/make-cv.js` handles the conversion. All styling is controlled by CSS inside that file.

## Quick Customizations

### Fonts

The default uses **Montserrat** for headings and **Open Sans** for body text, loaded from Google Fonts. To change fonts, edit the `<link>` tags and `font-family` in `scripts/make-cv.js`:

```css
/* Find this section in make-cv.js */
body {
    font-family: 'Montserrat', 'Open Sans', Arial, sans-serif;
}
```

**Popular professional CV font combinations:**
- `'Garamond', 'Georgia', serif` — Classic, traditional
- `'Calibri', 'Helvetica Neue', sans-serif` — Clean, modern (Microsoft standard)
- `'Lato', 'Open Sans', sans-serif` — Friendly, contemporary
- `'Roboto', 'Arial', sans-serif` — Tech-forward, Google-style

If using Google Fonts, update the `<link>` tag to load your chosen font.

### Font Size

The default body text is `9pt`, which fits a lot on 2 pages. Adjust in the CSS:

```css
body {
    font-size: 9pt;    /* Try 10pt for larger text, 8.5pt for more compact */
    line-height: 1.4;  /* Increase to 1.5 or 1.6 for more breathing room */
}
```

### Margins

PDF margins are set in the Playwright PDF generation call:

```js
await page.pdf({
    margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
});
```

- **Standard:** 15mm all around (default)
- **Tight:** 10mm — fits more content
- **Generous:** 20mm — more white space, easier to read

### Colors

The default is black text on white with minimal color. Key color values:

```css
body { color: #333; }              /* Main text — dark gray */
.md-symbol { color: #999; }        /* Markdown symbols — light gray */
a { color: #0066cc; }              /* Links — blue */
blockquote { border-left: 4px solid #999; background: #f5f5f5; }
```

To make it fully black and white for print:
```css
body { color: #000; }
a { color: #000; }
```

### Heading Sizes

```css
h1 { font-size: 18pt; }   /* Your name */
h2 { font-size: 12pt; }   /* Section titles (Experience, Education, etc.) */
h3 { font-size: 10pt; }   /* Company/role names */
h4 { font-size: 9pt; }    /* Sub-sections */
```

## Markdown Formatting Features

### Page Breaks

Force a page break at a specific point in your CV:

```markdown
<!-- pagebreak -->
```

Place this before a major section (e.g., before "Education" or a new role) to control where pages split.

### Float Right (Contact Info)

Place contact details or dates on the right side of a heading:

```markdown
# Alex McFadyen
<!-- float-right-header -->
London, UK | alex@example.com
linkedin.com/in/alexmcfadyen
<!-- /float-right-header -->
```

Or for section-level floats:

```markdown
### Senior Engineer
<!-- float-right -->
Jan 2020 — Present
<!-- /float-right -->
```

### Bold for Emphasis

Use bold strategically to draw the reader's eye:

```markdown
- Led migration to **microservices architecture**, reducing deployment time by **75%**
- Managed team of **12 engineers** across **3 time zones**
```

**What to bold:**
- Key metrics and numbers
- Company names that carry weight
- Awards and recognition
- Scale indicators (team size, users, revenue)

**Don't over-bold** — if everything is bold, nothing stands out.

### Blockquotes for Testimonials

```markdown
> "Alex transformed our engineering culture and delivery speed." — **Jane Smith, CEO**
```

### Horizontal Rules for Section Dividers

```markdown
---
```

These render as styled dividers (the text `---` in light gray), good for separating bottom sections like Skills, Education, and Recognition.

## Advanced Customization

### Editing the HTML Template

The full HTML template is in `scripts/make-cv.js` starting around line 105. You can:

1. Add custom CSS classes
2. Change the HTML structure
3. Add a header/footer to every page
4. Include a photo or logo

### Adding a Header/Footer to PDF

In the Playwright PDF options in `make-cv.js`, add:

```js
await page.pdf({
    // ... existing options
    headerTemplate: '<div style="font-size:8px; text-align:center; width:100%;">Your Name</div>',
    footerTemplate: '<div style="font-size:8px; text-align:center; width:100%;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    displayHeaderFooter: true,
});
```

### Two-Column Layout

For a more modern look, you could restructure the CSS to use a sidebar. This requires more significant changes — ask Claude to help implement a two-column layout if you'd like this style.

## Testing Changes

After making CSS changes:

```bash
# Generate HTML to preview in browser
node scripts/make-cv.js outputs/cv-versions/my-cv.md

# Open the HTML in your browser to check the look
open outputs/cv-versions/my-cv.html

# When happy, generate PDF
node scripts/make-cv.js outputs/cv-versions/my-cv.md --pdf
```

The HTML preview in your browser is the fastest way to iterate on styling. The PDF will look very similar but may have slight differences in spacing.

## Common Issues

**CV is more than 2 pages:**
- Reduce font size (try `8.5pt`)
- Tighten line-height (try `1.3`)
- Reduce margins (try `10mm`)
- Use `<!-- pagebreak -->` to control where splits happen
- Ask Claude to help trim content

**Fonts don't load in PDF:**
- Google Fonts need internet access during PDF generation
- For offline use, download the font files and reference them locally

**Page breaks in wrong places:**
- Add `<!-- pagebreak -->` before major sections
- The CSS includes `page-break-after: avoid` on headings to prevent orphaned titles

## Getting Help

Ask Claude to help customize your CV styling. For example:
- "Make my CV use a more traditional serif font"
- "Add a sidebar with my contact info and skills"
- "Make the headings blue"
- "Reduce the spacing to fit everything on 2 pages"
