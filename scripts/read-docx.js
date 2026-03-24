#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Usage: node scripts/read-docx.js <file.docx> [output.md]');
  console.error('');
  console.error('Extracts text from a Word document (.docx) and saves it as markdown.');
  console.error('If no output path is given, saves next to the input file as .md');
  process.exit(1);
}

if (!fs.existsSync(inputFile)) {
  console.error(`Error: ${inputFile} not found`);
  process.exit(1);
}

const ext = path.extname(inputFile).toLowerCase();
if (ext !== '.docx') {
  console.error(`Error: Expected a .docx file, got ${ext}`);
  console.error('If your CV is in .doc (old Word format), please re-save it as .docx or export as PDF.');
  process.exit(1);
}

const outputFile = process.argv[3] || inputFile.replace(/\.docx$/i, '.md');

(async () => {
  try {
    // Extract as HTML first for better structure preservation
    const htmlResult = await mammoth.convertToHtml({ path: inputFile });

    if (htmlResult.messages.length > 0) {
      console.warn('Warnings:');
      htmlResult.messages.forEach(msg => console.warn(`  - ${msg.message}`));
    }

    // Simple HTML to markdown conversion
    let markdown = htmlResult.value
      // Headers
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
      .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
      // Bold and italic
      .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<em>(.*?)<\/em>/gi, '*$1*')
      // List items
      .replace(/<li>(.*?)<\/li>/gi, '- $1\n')
      .replace(/<\/?[uo]l[^>]*>/gi, '\n')
      // Links
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      // Line breaks and paragraphs
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<p>(.*?)<\/p>/gi, '$1\n\n')
      // Strip remaining HTML tags
      .replace(/<[^>]+>/g, '')
      // Decode HTML entities
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      // Clean up whitespace
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    fs.writeFileSync(outputFile, markdown + '\n');
    console.log(`Converted ${inputFile} → ${outputFile}`);

    // Also extract raw text as a fallback
    const textResult = await mammoth.extractRawText({ path: inputFile });
    const textFile = inputFile.replace(/\.docx$/i, '.txt');
    fs.writeFileSync(textFile, textResult.value);
    console.log(`Raw text saved to ${textFile}`);

  } catch (err) {
    console.error(`Error reading ${inputFile}:`, err.message);
    process.exit(1);
  }
})();
