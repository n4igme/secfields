# SecFields Modular Framework

This repository contains a modular framework for building cybersecurity educational content. The system allows you to easily add, remove, or modify content sections without changing the core interface.

## How the Modular System Works

The framework consists of:

1. **Main Template** (`modular-index.html`): The main HTML file that provides the layout, styling, and navigation framework
2. **Content Modules** (`modules/*.html`): Individual HTML files containing specific content sections
3. **Configuration** (`modules` variable in JavaScript): Defines which modules are available and their properties

## Adding New Content Modules

### Step 1: Create a New Module File

Create a new HTML file in the `modules/` directory. Follow this structure:

```html
<section id="your-topic-id" class="chapter">
  <h3>Your Topic Title</h3>
  <p>Content goes here...</p>
  <!-- Add more content as needed -->
</section>
```

Example: `modules/newtopic.html`:

```html
<section id="newtopic" class="chapter">
  <h3>New Topic</h3>
  <p><strong>What</strong>: Explanation of your topic...</p>
  <p><strong>Why it matters</strong>: Why this is important...</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
  <p>More detailed information...</p>
</section>
```

### Step 2: Register the Module

Add your new module to the `modules` configuration in `modular-index.html`:

```javascript
const modules = {
  // ... existing modules
  'newtopic': {           // ID must match the section id in your HTML file
    title: 'New Topic',   // Display name in navigation
    url: 'modules/newtopic.html'  // Path to your module file
  }
};
```

### Step 3: Content Guidelines

For optimal display, follow these guidelines:

- Use the `<section>` tag with `class="chapter"`
- Use `<h3>` for main headings within the section
- Use `<p>` for paragraphs
- Use `<ul>` or `<ol>` for lists
- Use `<pre><code>` for code examples
- Keep the CSS classes consistent with the existing design (e.g., `.btn` for buttons)

## File Structure

```
secfields/
├── modular-index.html    # Main application
├── modules/              # Content modules
│   ├── intro.html        # Introduction section
│   ├── grc.html          # GRC section
│   ├── redteam.html      # Red Team section
│   ├── blueteam.html     # Blue Team section
│   ├── cryptography.html # Cryptography section
│   ├── practical.html    # Practical examples
│   ├── references.html   # References
│   └── your-module.html  # Your new modules
└── README.md             # This file
```

## Features

- **Dynamic Loading**: Content loads dynamically without page refreshes
- **URL Hash Routing**: Navigation state preserved in URL (#intro, #grc, etc.)
- **Syntax Highlighting**: Code examples are automatically highlighted
- **Print-Friendly**: Content renders well when printed to PDF
- **Responsive**: Works on mobile and desktop devices
- **Modular**: Easy to add/remove sections without affecting others

## Copying Code Examples

Each module can include a copy button by adding:

```html
<button class="btn small" onclick="copySection('#section-id')">Copy examples</button>
```

## Updating the Original Single Page Version

If you want to update the original `index.html` with your new modules, simply copy the content from your module files and create corresponding sections in the original file.

## Troubleshooting

- Check browser console for error messages if content doesn't load
- Ensure module file paths are correct in the configuration
- Make sure section IDs match between the module configuration and HTML content
- Verify that module files exist at the specified paths