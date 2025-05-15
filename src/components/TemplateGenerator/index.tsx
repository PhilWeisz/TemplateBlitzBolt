import React from 'react';
import { useConfig } from '../../context/ConfigContext';

const TemplateGenerator: React.FC = () => {
  const { config, exportConfig } = useConfig();
  
  const generateTemplate = () => {
    // Generate a complete website template based on the current configuration
    const htmlTemplate = generateHTMLTemplate();
    const cssTemplate = generateCSSTemplate();
    const jsTemplate = generateJSTemplate();
    
    // Create download links for HTML, CSS, and JS files
    downloadTemplate('index.html', htmlTemplate);
    downloadTemplate('styles.css', cssTemplate);
    downloadTemplate('script.js', jsTemplate);
  };
  
  const downloadTemplate = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  const generateHTMLTemplate = () => {
    const { layout, language } = config;
    const skipToContentLink = language.skipToContentLink 
      ? '<a href="#content" class="skip-to-content">Skip to content</a>' 
      : '';
    
    const htmlContent = getLayoutHTMLTemplate(layout.archetype);
    
    return `<!DOCTYPE html>
<html lang="${language.baseLanguage}" dir="${language.direction}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Template</title>
  <link rel="stylesheet" href="styles.css">
  ${layout.archetype === 'sidebar-header-content' || layout.archetype === 'card-grid' 
    ? '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">' 
    : ''}
</head>
<body>
  ${skipToContentLink}
  ${htmlContent}
  <script src="script.js"></script>
</body>
</html>`;
  };
  
  const generateCSSTemplate = () => {
    const { config } = useConfig();
    const css = getComputedStyle(document.querySelector('.preview') as Element);
    
    return `:root {
  --primary-color: ${config.colors.primary};
  --secondary-color: ${config.colors.secondary};
  --background-color: ${config.colors.background};
  --text-field-bg: ${config.colors.textFieldBackground};
  --border-color: ${config.colors.border};
  --text-color: ${config.colors.text};
  
  --base-font-size: ${config.typography.baseFontSize}px;
  --heading-ratio: ${config.typography.headingRatio};
  --line-height: ${config.typography.lineHeight};
  --paragraph-spacing: ${config.typography.paragraphSpacing}em;
  --letter-spacing: ${config.typography.letterSpacing}px;
  
  --font-weight-normal: ${config.typography.fontWeights.normal};
  --font-weight-medium: ${config.typography.fontWeights.medium};
  --font-weight-bold: ${config.typography.fontWeights.bold};
  
  --border-radius-none: ${config.componentStyle.borderRadius.none}px;
  --border-radius-small: ${config.componentStyle.borderRadius.small}px;
  --border-radius-medium: ${config.componentStyle.borderRadius.medium}px;
  --border-radius-large: ${config.componentStyle.borderRadius.large}px;
  --border-radius-full: ${config.componentStyle.borderRadius.full}px;
  
  --transition-duration: ${config.animation.transitionDuration}ms;
  --transition-timing: ${config.animation.timingFunction};
  
  --grid-columns: ${config.layout.gridColumns};
  --outer-spacing: ${config.layout.spacing.outer}${config.layout.spacing.unit};
  --inner-spacing: ${config.layout.spacing.inner}${config.layout.spacing.unit};
  --border-width: ${config.layout.border.width}px;
  --border-spacing: ${config.layout.border.spacing}px;
  
  --container-padding: ${config.responsiveness.containerPadding}px;
  --gutter-size: ${config.responsiveness.gutterSize}px;
}

/* Base styles */
* {
  box-sizing: border-box;
  transition: ${config.animation.enabled ? 'all var(--transition-duration) var(--transition-timing)' : 'none'};
}

html {
  font-family: ${config.typography.fontFamily};
  font-size: var(--base-font-size);
  line-height: var(--line-height);
  color: var(--text-color);
  background-color: var(--background-color);
}

body {
  margin: 0;
  padding: 0;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: calc(var(--paragraph-spacing) * 0.5);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  letter-spacing: var(--letter-spacing);
}

h1 { font-size: calc(var(--base-font-size) * var(--heading-ratio) * var(--heading-ratio) * var(--heading-ratio) * var(--heading-ratio)); }
h2 { font-size: calc(var(--base-font-size) * var(--heading-ratio) * var(--heading-ratio) * var(--heading-ratio)); }
h3 { font-size: calc(var(--base-font-size) * var(--heading-ratio) * var(--heading-ratio)); }
h4 { font-size: calc(var(--base-font-size) * var(--heading-ratio)); }
h5 { font-size: var(--base-font-size); }
h6 { font-size: calc(var(--base-font-size) * 0.85); }

p {
  margin-top: 0;
  margin-bottom: var(--paragraph-spacing);
}

/* Layout */
.container {
  width: 100%;
  padding-right: var(--container-padding);
  padding-left: var(--container-padding);
  margin-right: auto;
  margin-left: auto;
}

/* Responsive Breakpoints */
@media (min-width: ${config.responsiveness.breakpoints.mobile}px) {
  .container {
    max-width: ${config.responsiveness.containerWidths.mobile}px;
  }
}

@media (min-width: ${config.responsiveness.breakpoints.tablet}px) {
  .container {
    max-width: ${config.responsiveness.containerWidths.tablet}px;
  }
}

@media (min-width: ${config.responsiveness.breakpoints.desktop}px) {
  .container {
    max-width: ${config.responsiveness.containerWidths.desktop}px;
  }
}

@media (min-width: ${config.responsiveness.breakpoints.wideDesktop}px) {
  .container {
    max-width: ${config.responsiveness.containerWidths.wideDesktop}px;
  }
}

/* Components */
.btn {
  display: inline-block;
  font-weight: var(--font-weight-medium);
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: var(--border-radius-small);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary {
  color: #fff;
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
}

.btn-outline-primary {
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  background-color: transparent;
}

.btn-outline-secondary {
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  background-color: transparent;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--text-field-bg);
  background-clip: padding-box;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius-small);
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

.header {
  ${config.layout.headerPlacement === 'top'
    ? `grid-column: ${config.layout.headerGridArea.columnStart} / ${config.layout.headerGridArea.columnEnd};`
    : `grid-row: ${config.layout.headerGridArea.rowStart} / ${config.layout.headerGridArea.rowEnd};`
  }
  background-color: var(--primary-color);
  color: white;
  padding: var(--inner-spacing);
  ${config.layout.headerAlignment === 'center' && 'text-align: center;'}
  ${config.layout.headerAlignment === 'right' && 'text-align: right;'}
}

.layout-container {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--gutter-size);
}

.main-content {
  grid-column: span ${Math.floor(config.layout.gridColumns / 2)};
  padding: var(--inner-spacing);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius-medium);
}

.sidebar {
  grid-column: span ${Math.floor(config.layout.gridColumns / 4)};
  padding: var(--inner-spacing);
  background-color: var(--text-field-bg);
  border-radius: var(--border-radius-medium);
}

.footer {
  grid-column: 1 / -1;
  padding: var(--inner-spacing);
  background-color: var(--text-field-bg);
  border-top: var(--border-width) solid var(--border-color);
  margin-top: var(--outer-spacing);
}

/* RTL Support */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  ${config.language.reduceMotion
    ? `* { transition: none !important; }`
    : ''
  }
}

/* Focus Outline */
${!config.language.showFocusOutline
  ? `:focus { outline: none; }`
  : ''
}

/* Skip to Content */
.skip-to-content {
  position: absolute;
  left: -9999px;
  z-index: ${config.componentStyle.zIndex.navbar};
  padding: 1em;
  background-color: var(--background-color);
  color: var(--text-color);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}

.skip-to-content:focus {
  left: 50%;
  transform: translateX(-50%);
}
`;
  };
  
  const generateJSTemplate = () => {
    return `// Website Template JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Store the configuration used to generate this template
  const config = ${JSON.stringify(config, null, 2)};
  
  // Initialize any required functionality
  console.log('Website template initialized with configuration:', config);
  
  // Example: Add event listeners to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      console.log('Button clicked:', e.target.textContent);
    });
  });
});`;
  };
  
  const getLayoutHTMLTemplate = (layoutType: string) => {
    switch(layoutType) {
      case 'hero-banner':
        return `<!-- Header -->
<header class="header">
  <div class="container">
    <h1>Website Title</h1>
    <nav>
      <a href="#" class="me-3">Home</a>
      <a href="#" class="me-3">About</a>
      <a href="#" class="me-3">Services</a>
      <a href="#" class="me-3">Contact</a>
    </nav>
  </div>
</header>

<!-- Hero Banner -->
<section style="padding: 4rem 0; background-color: var(--secondary-color); color: white; margin-bottom: var(--outer-spacing)">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Welcome to Your Website</h2>
        <p>This is a hero banner section with a call to action.</p>
        <button class="btn btn-outline-light">Learn More</button>
      </div>
    </div>
  </div>
</section>

<!-- Main Content -->
<main id="content">
  <div class="container layout-container">
    <div class="main-content">
      <h2>Main Content Area</h2>
      <p>This is the main content area of your website. Here you can provide detailed information about your products or services.</p>
      <p>The layout and styling of this content is controlled by the configuration settings you've chosen.</p>
      <button class="btn btn-primary">Primary Action</button>
      <button class="btn btn-secondary ms-2">Secondary Action</button>
    </div>
    
    <div class="sidebar">
      <h3>Sidebar</h3>
      <p>This is a sidebar that can contain supplementary information, navigation, or calls to action.</p>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
      <button class="btn btn-outline-primary">Search</button>
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <p>&copy; 2025 Your Website. All rights reserved.</p>
  </div>
</footer>`;
        
      case 'card-grid':
        return `<!-- Header -->
<header class="header">
  <div class="container">
    <h1>Card Grid Layout</h1>
    <nav>
      <a href="#" class="me-3">Home</a>
      <a href="#" class="me-3">Products</a>
      <a href="#" class="me-3">Gallery</a>
      <a href="#" class="me-3">Contact</a>
    </nav>
  </div>
</header>

<!-- Main Content with Card Grid -->
<main id="content">
  <div class="container my-4">
    <h2 class="mb-4">Our Products</h2>
    <div class="row g-4">
      <!-- Card 1 -->
      <div class="col-md-4">
        <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color); height: 100%">
          <div style="height: 160px; background-color: var(--text-field-bg); border-radius: var(--border-radius-small); margin-bottom: var(--inner-spacing)"></div>
          <h3>Card Title 1</h3>
          <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
          <button class="btn btn-primary">View Details</button>
        </div>
      </div>
      
      <!-- Card 2 -->
      <div class="col-md-4">
        <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color); height: 100%">
          <div style="height: 160px; background-color: var(--text-field-bg); border-radius: var(--border-radius-small); margin-bottom: var(--inner-spacing)"></div>
          <h3>Card Title 2</h3>
          <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
          <button class="btn btn-primary">View Details</button>
        </div>
      </div>
      
      <!-- Card 3 -->
      <div class="col-md-4">
        <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color); height: 100%">
          <div style="height: 160px; background-color: var(--text-field-bg); border-radius: var(--border-radius-small); margin-bottom: var(--inner-spacing)"></div>
          <h3>Card Title 3</h3>
          <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
          <button class="btn btn-primary">View Details</button>
        </div>
      </div>
      
      <!-- Card 4 -->
      <div class="col-md-4">
        <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color); height: 100%">
          <div style="height: 160px; background-color: var(--text-field-bg); border-radius: var(--border-radius-small); margin-bottom: var(--inner-spacing)"></div>
          <h3>Card Title 4</h3>
          <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
          <button class="btn btn-primary">View Details</button>
        </div>
      </div>
      
      <!-- Card 5 -->
      <div class="col-md-4">
        <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color); height: 100%">
          <div style="height: 160px; background-color: var(--text-field-bg); border-radius: var(--border-radius-small); margin-bottom: var(--inner-spacing)"></div>
          <h3>Card Title 5</h3>
          <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
          <button class="btn btn-primary">View Details</button>
        </div>
      </div>
      
      <!-- Card 6 -->
      <div class="col-md-4">
        <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color); height: 100%">
          <div style="height: 160px; background-color: var(--text-field-bg); border-radius: var(--border-radius-small); margin-bottom: var(--inner-spacing)"></div>
          <h3>Card Title 6</h3>
          <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
          <button class="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <p>&copy; 2025 Card Grid Layout. All rights reserved.</p>
  </div>
</footer>`;
        
      case 'sidebar-header-content':
        return `<div style="display: grid; grid-template-columns: 250px 1fr; min-height: 100vh">
  <!-- Sidebar -->
  <aside style="background-color: var(--primary-color); color: white; padding: var(--inner-spacing); grid-row: 1 / -1">
    <h2>Sidebar Layout</h2>
    <nav style="margin-top: var(--outer-spacing)">
      <ul style="list-style-type: none; padding: 0">
        <li style="margin-bottom: 1rem"><a href="#" style="color: white">Dashboard</a></li>
        <li style="margin-bottom: 1rem"><a href="#" style="color: white">Analytics</a></li>
        <li style="margin-bottom: 1rem"><a href="#" style="color: white">Reports</a></li>
        <li style="margin-bottom: 1rem"><a href="#" style="color: white">Settings</a></li>
        <li style="margin-bottom: 1rem"><a href="#" style="color: white">Profile</a></li>
      </ul>
    </nav>
  </aside>
  
  <div>
    <!-- Header -->
    <header style="padding: var(--inner-spacing); border-bottom: var(--border-width) solid var(--border-color); background-color: var(--background-color)">
      <div class="d-flex justify-content-between align-items-center">
        <h1>Dashboard</h1>
        <div>
          <button class="btn btn-outline-primary me-2">Notifications</button>
          <button class="btn btn-primary">Profile</button>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main id="content" style="padding: var(--inner-spacing)">
      <div class="mb-4">
        <h2>Welcome to Your Dashboard</h2>
        <p>This is a sidebar layout with a fixed sidebar and scrollable main content.</p>
      </div>
      
      <div class="row g-4">
        <div class="col-md-6">
          <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color)">
            <h3>Analytics</h3>
            <p>View your performance metrics and data insights.</p>
            <button class="btn btn-primary">View Details</button>
          </div>
        </div>
        <div class="col-md-6">
          <div style="padding: var(--inner-spacing); border-radius: var(--border-radius-medium); border: var(--border-width) solid var(--border-color)">
            <h3>Reports</h3>
            <p>Access your generated reports and summaries.</p>
            <button class="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>`;
        
      default: // single-column
        return `<!-- Header -->
<header class="header">
  <div class="container">
    <h1>Single Column Layout</h1>
    <nav>
      <a href="#" class="me-3">Home</a>
      <a href="#" class="me-3">About</a>
      <a href="#" class="me-3">Services</a>
      <a href="#" class="me-3">Contact</a>
    </nav>
  </div>
</header>

<!-- Main Content -->
<main id="content">
  <div class="container my-4">
    <h2>About Us</h2>
    <p>This is a single-column layout that puts all content in a single centered column.</p>
    <p>This layout is simple and works well for content-focused websites like blogs.</p>
    
    <div class="my-4">
      <h3>Our Services</h3>
      <ul>
        <li>Service 1 - Description of the service</li>
        <li>Service 2 - Description of the service</li>
        <li>Service 3 - Description of the service</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3>Contact Information</h3>
      <p>Email: example@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Main Street, Anytown, USA</p>
    </div>
    
    <div class="my-4">
      <h3>Get in Touch</h3>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea class="form-control" rows="5"></textarea>
      </div>
      <button class="btn btn-primary">Send Message</button>
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <p>&copy; 2025 Single Column Layout. All rights reserved.</p>
  </div>
</footer>`;
    }
  };
  
  return (
    <div className="template-generator p-3">
      <h3 className="mb-3">Generate Website Template</h3>
      <p>
        Create a complete website template based on your current configuration.
        This will generate HTML, CSS, and JavaScript files that you can download
        and use as a starting point for your website.
      </p>
      <button className="btn btn-primary" onClick={generateTemplate}>
        Generate Template Files
      </button>
    </div>
  );
};

export default TemplateGenerator;