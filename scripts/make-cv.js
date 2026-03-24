#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
const pdfFlag = args.includes('--pdf');
const filteredArgs = args.filter(a => a !== '--pdf');

const mdFile = filteredArgs[0] || 'CV.md';
const outputFile = filteredArgs[1] || mdFile.replace(/\.md$/, '.html');

if (!fs.existsSync(mdFile)) {
  console.error(`Error: ${mdFile} not found`);
  process.exit(1);
}

const markdown = fs.readFileSync(mdFile, 'utf-8');

// Simple markdown to HTML conversion that preserves markdown symbols
function convertMarkdown(md) {
  let html = md
    // Page breaks (BEFORE escaping HTML)
    .replace(/<!--\s*pagebreak\s*-->/gi, '|||PAGEBREAK|||')

    // Float right header (special case for H1) - use <!-- float-right-header -->
    // Allow optional blank lines between heading and comment
    .replace(/^(#\s+.*)\n\s*\n?<!--\s*float-right-header\s*-->\n([\s\S]*?)\n<!--\s*\/float-right-header\s*-->/gim, '|||FLOAT_RIGHT_HEADER|||$2|||END_FLOAT_RIGHT_HEADER|||\n$1')

    // Float right (BEFORE escaping HTML) - use <!-- float-right -->content<!-- /float-right -->
    // Move it to before the previous line (to float next to headings)
    // Handle optional blank lines between heading and float-right
    .replace(/^(.*)\n\s*\n?<!--\s*float-right\s*-->\n([\s\S]*?)\n<!--\s*\/float-right\s*-->/gim, '|||FLOAT_RIGHT|||$2|||END_FLOAT_RIGHT|||\n$1')

    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    
    // Headers (preserve the # symbols, make them bold)
    .replace(/^#### (.*)$/gm, '<h4><span class="md-symbol">####</span> $1</h4>')
    .replace(/^### (.*)$/gm, '<h3><span class="md-symbol">###</span> $1</h3>')
    .replace(/^## (.*)$/gm, '<h2><span class="md-symbol">##</span> $1</h2>')
    .replace(/^# (.*)$/gm, '<h1><span class="md-symbol">#</span> $1</h1>')
    
    // Horizontal rules
    .replace(/^---$/gm, '<hr>')

    // Blockquotes (process after escaping >)
    .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')

    // Lists (identify first) - supports both * and - markers
    .replace(/^[\*\-] (.+)$/gm, '|||LIST_ITEM|||$1|||END_LIST_ITEM|||')

    // Bold+Italic (*** ***) - handle before bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')

    // Bold (remove ** symbols)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

    // Italic (remove * symbols) - only match within single line, not crossing newlines
    // Handle both mid-line and start/end of line cases
    .replace(/(^|[^*\n])\*([^*\n]+?)\*($|[^*\n])/gm, '$1<em>$2</em>$3')

    // Convert list markers back to HTML
    .replace(/\|\|\|LIST_ITEM\|\|\|(.*?)\|\|\|END_LIST_ITEM\|\|\|/g, '<li>$1</li>')

    // Wrap consecutive li in ul
    .replace(/(<li>.*?<\/li>\n?)+/gs, match => '<ul>' + match + '</ul>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

    // Paragraphs (before converting markers back)
    .split('\n').map(line => {
      // Don't wrap lines that contain markers
      if (!line.startsWith('<') && line.trim() !== '' && !line.includes('|||')) {
        return `<p>${line}</p>`;
      }
      return line;
    }).join('\n')

    // Convert page breaks back to HTML
    .replace(/\|\|\|PAGEBREAK\|\|\|/g, '<div class="pagebreak"></div>')

    // Convert float-right-header markers back to HTML (special for H1)
    .replace(/\|\|\|FLOAT_RIGHT_HEADER\|\|\|(.*?)\|\|\|END_FLOAT_RIGHT_HEADER\|\|\|/gs, (_match, content) => {
      const cleaned = content.replace(/<\/?p>/g, '').trim().replace(/\n/g, '<br>');
      return `<span class="float-right-header">${cleaned}</span>`;
    })

    // Convert float-right markers back to HTML (use span to avoid creating block)
    // Also strip any <p> tags and preserve newlines as <br>
    .replace(/\|\|\|FLOAT_RIGHT\|\|\|(.*?)\|\|\|END_FLOAT_RIGHT\|\|\|/gs, (_match, content) => {
      // Remove <p> tags from inside float-right since span is inline
      // Replace newlines with <br> for line breaks within the float
      const cleaned = content.replace(/<\/?p>/g, '').trim().replace(/\n/g, '<br>');
      return `<span class="float-right">${cleaned}</span>`;
    });

  return html;
}

// HTML template with markdown aesthetic
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${mdFile}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <style>
        @media print {
            body { margin: 0; }
            .pagebreak { page-break-after: always; }
        }
        
        body {
            font-family: 'Montserrat', 'Open Sans', Arial, sans-serif;
            line-height: 1.4;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px 20px;
            background: white;
            font-size: 9pt;
        }
        
        /* Markdown symbols in gray and bold */
        .md-symbol {
            color: #999;
            font-weight: 600;
            font-style: normal;
        }

        h1 {
            font-size: 18pt;
            margin: 0px 0 6px 0;
            page-break-after: avoid;
            font-weight: 600;
            line-height: 1.2;
        }

        h2 {
            font-size: 12pt;
            margin: 18px 0 6px 0;
            border-bottom: 1.5px solid #e0e0e0;
            padding-bottom: 2px;
            page-break-after: avoid;
            font-weight: 600;
            border: 0;
        }

        h3 {
            font-size: 10pt;
            margin: 14px 0 4px 0;
            page-break-after: avoid;
            font-weight: 600;
        }

        h4 {
            font-size: 9pt;
            margin: 8px 0 2px 0;
            page-break-after: avoid;
            font-weight: 600;
        }

        /* Keep headings with following content */
        h3 + p, h3 + ul, h4 + p, h4 + ul {
            page-break-before: avoid;
        }
        
        hr {
            border: none;
            text-align: center;
            margin: 10px 0;
        }

        hr::after {
            content: "---";
            color: #999;
            letter-spacing: 3px;
            font-size: 8pt;
        }
        
        ul {
            list-style: none;
            padding-left: 0;
            margin: 2px 0 6px 0;
        }

        li {
            margin: 2px 0;
            padding-left: 16px;
            text-indent: -12px;
        }

        li::before {
            content: "•";
            margin-right: 6px;
            font-weight: bold;
        }
        
        strong {
            font-weight: bold;
        }
        
        em {
            font-style: italic;
        }
        
        a {
            color: #0066cc;
            text-decoration: underline;
        }

        a:hover {
            color: #0052a3;
        }
        
        p {
            margin: 6px 0;
        }

        blockquote {
            margin: 8px 0;
            padding: 8px 12px;
            border-left: 4px solid #999;
            background: #f5f5f5;
            font-style: italic;
            color: #444;
            font-size: 9pt;
        }

        .pagebreak {
            page-break-after: always;
            break-after: page;
            height: 0;
            display: block;
        }

        .float-right {
            float: right;
            text-align: right;
            font-size: 8pt;
            line-height: 1.3;
            margin-left: 20px;
            margin-top: 3px;
            margin-bottom: 8px;
            max-width: 300px;
            display: inline-block;
        }

        /* Special float for H1 header - aligns to baseline */
        .float-right-header {
            float: right;
            text-align: right;
            font-size: 8pt;
            line-height: 1.2;
            margin-left: 20px;
            margin-top: 0;
            padding-top: 12px;
            max-width: 500px;
            display: inline-block;
        }

        /* Print styles */
        @media print {
            body {
                font-size: 9pt;
                padding: 0;
                line-height: 1.3;
            }

            a {
                color: #000;
            }

            h1, h2, h3 {
                page-break-after: avoid;
            }

            ul {
                page-break-inside: avoid;
            }

            h1 {
                margin: 10px 0 5px 0;
            }

            h2 {
                margin: 2px 0 3px 0;
            }

            h3 {
                margin: 6px 0 3px 0;
            }

            h4 {
                margin: 8px 0 3px 0;
            }
        }
    </style>
</head>
<body>
${convertMarkdown(markdown)}
</body>
</html>`;

// Write HTML file
fs.writeFileSync(outputFile, htmlTemplate);
console.log(`✅ Generated ${outputFile}`);

// Generate PDF if --pdf flag is present
if (pdfFlag) {
  const pdfFile = outputFile.replace(/\.html$/, '.pdf');

  (async () => {
    try {
      const { chromium } = require('playwright');
      const browser = await chromium.launch();
      const page = await browser.newPage();

      // Load HTML file
      await page.goto(`file://${path.resolve(outputFile)}`, { waitUntil: 'networkidle' });

      // Generate PDF
      await page.pdf({
        path: pdfFile,
        format: 'A4',
        margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
        printBackground: true
      });

      await browser.close();

      // Count pages
      const { PDFDocument } = require('pdf-lib');
      const pdfBytes = fs.readFileSync(pdfFile);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pageCount = pdfDoc.getPageCount();
      const status = pageCount <= 2 ? '✓' : '⚠️  OVER 2 PAGES';
      console.log(`📄 Generated ${pdfFile} (${pageCount} pages) ${status}`);
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        console.error('❌ Playwright not installed. Run: npm install playwright');
      } else {
        console.error('❌ PDF generation failed:', err.message);
      }
      process.exit(1);
    }
  })();
} else {
  console.log(`📄 Add --pdf flag to generate PDF`);
}