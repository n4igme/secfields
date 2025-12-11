// Simple Markdown parser for the modular framework
// Supports basic Markdown elements: headers, paragraphs, lists, code blocks, etc.

function parseMarkdownToHTML(markdown) {
  if (!markdown) return '';

  // Split content into lines for better processing
  let lines = markdown.split('\n');
  let html = '';
  let inCodeBlock = false;
  let codeBlockContent = '';
  let currentListType = null; // null, 'ul', or 'ol'
  let codeLanguage = ''; // Track the language for syntax highlighting

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let processed = false;

    // Check for code block fence
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        if (codeLanguage && codeLanguage !== '') {
          // Remove [copy] if present and extract language
          let langClass = codeLanguage.replace(/\[copy\]/, '').trim();
          html += `<pre><code class="language-${langClass}">${escapeHtml(codeBlockContent)}</code></pre>`;
        } else {
          html += `<pre><code>${escapeHtml(codeBlockContent)}</code></pre>`;
        }
        codeBlockContent = '';
        inCodeBlock = false;
        codeLanguage = '';
      } else {
        // Start of code block - check for language specification
        let langSpec = line.substring(3).trim(); // Get content after ```
        codeLanguage = langSpec;
        inCodeBlock = true;
        codeBlockContent = '';
      }
      processed = true;
    }
    // Inside code block, just collect the content
    else if (inCodeBlock) {
      codeBlockContent += line + '\n';
      processed = true;
    }
    // Process headers
    else if (line.trim().startsWith('# ')) {
      closeCurrentList();
      html += `<h1>${escapeHtml(line.trim().substring(2))}</h1>`;
      processed = true;
    }
    else if (line.trim().startsWith('## ')) {
      closeCurrentList();
      html += `<h2>${escapeHtml(line.trim().substring(3))}</h2>`;
      processed = true;
    }
    else if (line.trim().startsWith('### ')) {
      closeCurrentList();
      html += `<h3>${escapeHtml(line.trim().substring(4))}</h3>`;
      processed = true;
    }
    else if (line.trim().startsWith('#### ')) {
      closeCurrentList();
      html += `<h4>${escapeHtml(line.trim().substring(5))}</h4>`;
      processed = true;
    }
    else if (line.trim().startsWith('##### ')) {
      closeCurrentList();
      html += `<h5>${escapeHtml(line.trim().substring(6))}</h5>`;
      processed = true;
    }
    // Process unordered list items
    else if (/^\s*[\*\-\+]\s/.test(line)) {
      const content = line.replace(/^\s*[\*\-\+]\s/, '').trim();
      if (currentListType !== 'ul') {
        closeCurrentList();
        html += '<ul>';
        currentListType = 'ul';
      }
      html += `<li>${processInlineMarkdown(escapeHtml(content))}</li>`;
      processed = true;
    }
    // Process ordered list items
    else if (/^\s*\d+\.\s/.test(line)) {
      const content = line.replace(/^\s*\d+\.\s/, '').trim();
      if (currentListType !== 'ol') {
        closeCurrentList();
        html += '<ol>';
        currentListType = 'ol';
      }
      html += `<li>${processInlineMarkdown(escapeHtml(content))}</li>`;
      processed = true;
    }
    // Empty line - end any open list
    else if (line.trim() === '') {
      closeCurrentList();
    }
    // Regular paragraph
    else if (line.trim() !== '') {
      closeCurrentList();
      html += `<p>${processInlineMarkdown(escapeHtml(line.trim()))}</p>`;
      processed = true;
    }
  }

  // Close any remaining open list
  closeCurrentList();

  // Remove trailing newlines
  html = html.replace(/\n+$/, '');

  return html;

  // Helper function to close current list if open
  function closeCurrentList() {
    if (currentListType) {
      html += `</${currentListType}>`;
      currentListType = null;
    }
  }

  // Process inline markdown elements (bold, italic, links, code)
  function processInlineMarkdown(text) {
    // Convert bold: **text**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert italic: *text* or _text_
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    text = text.replace(/_([^_]+)_/g, '<em>$1</em>');
    // Convert links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // Convert inline code: `code`
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    return text;
  }

  // Escape HTML characters to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}