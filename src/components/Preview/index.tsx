import React from 'react';
import { useConfig } from '../../context/ConfigContext';

const generateCSS = (config: any) => {
  const { colors, typography, responsiveness, componentStyle, animation, layout } = config;
  
  return `
    :root {
      --primary-color: ${colors.primary};
      --secondary-color: ${colors.secondary};
      --background-color: ${colors.background};
      --text-field-bg: ${colors.textFieldBackground};
      --border-color: ${colors.border};
      --text-color: ${colors.text};
      
      --base-font-size: ${typography.baseFontSize}px;
      --heading-ratio: ${typography.headingRatio};
      --line-height: ${typography.lineHeight};
      --paragraph-spacing: ${typography.paragraphSpacing}em;
      --letter-spacing: ${typography.letterSpacing}px;
      
      --font-weight-normal: ${typography.fontWeights.normal};
      --font-weight-medium: ${typography.fontWeights.medium};
      --font-weight-bold: ${typography.fontWeights.bold};
      
      --border-radius-none: ${componentStyle.borderRadius.none}px;
      --border-radius-small: ${componentStyle.borderRadius.small}px;
      --border-radius-medium: ${componentStyle.borderRadius.medium}px;
      --border-radius-large: ${componentStyle.borderRadius.large}px;
      --border-radius-full: ${componentStyle.borderRadius.full}px;
      
      --transition-duration: ${animation.transitionDuration}ms;
      --transition-timing: ${animation.timingFunction};
      
      --grid-columns: ${layout.gridColumns};
      --outer-spacing: ${layout.spacing.outer}${layout.spacing.unit};
      --inner-spacing: ${layout.spacing.inner}${layout.spacing.unit};
      --border-width: ${layout.border.width}px;
      --border-spacing: ${layout.border.spacing}px;
      
      --container-padding: ${responsiveness.containerPadding}px;
      --gutter-size: ${responsiveness.gutterSize}px;
    }
    
    * {
      box-sizing: border-box;
      transition: ${animation.enabled ? `all var(--transition-duration) var(--transition-timing)` : 'none'};
    }
    
    html {
      ${typography.fontFamily && `font-family: ${typography.fontFamily};`}
      font-size: var(--base-font-size);
      line-height: var(--line-height);
      ${colors.text && `color: var(--text-color);`}
      ${colors.background && `background-color: var(--background-color);`}
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    
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
    
    .container {
      width: 100%;
      padding-right: var(--container-padding);
      padding-left: var(--container-padding);
      margin-right: auto;
      margin-left: auto;
    }
    
    @media (min-width: ${responsiveness.breakpoints.mobile}px) {
      .container {
        max-width: ${responsiveness.containerWidths.mobile}px;
      }
    }
    
    @media (min-width: ${responsiveness.breakpoints.tablet}px) {
      .container {
        max-width: ${responsiveness.containerWidths.tablet}px;
      }
    }
    
    @media (min-width: ${responsiveness.breakpoints.desktop}px) {
      .container {
        max-width: ${responsiveness.containerWidths.desktop}px;
      }
    }
    
    @media (min-width: ${responsiveness.breakpoints.wideDesktop}px) {
      .container {
        max-width: ${responsiveness.containerWidths.wideDesktop}px;
      }
    }
    
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
    
    .container {
      padding: var(--container-padding);
    }
    
    /* Layout-specific styles */
    .layout-container {
      display: grid;
      grid-template-columns: repeat(var(--grid-columns), 1fr);
      gap: var(--gutter-size);
    }
    
    .header {
      ${layout.headerPlacement === 'top'
        ? `grid-column: ${layout.headerGridArea.columnStart} / ${layout.headerGridArea.columnEnd};`
        : `grid-row: ${layout.headerGridArea.rowStart} / ${layout.headerGridArea.rowEnd};`
      }
      background-color: var(--primary-color);
      color: white;
      padding: var(--inner-spacing);
      ${layout.headerAlignment === 'center' && 'text-align: center;'}
      ${layout.headerAlignment === 'right' && 'text-align: right;'}
    }
    
    .main-content {
      grid-column: span ${Math.floor(layout.gridColumns / 2)};
      padding: var(--inner-spacing);
      border: var(--border-width) solid var(--border-color);
      border-radius: var(--border-radius-medium);
    }
    
    .sidebar {
      grid-column: span ${Math.floor(layout.gridColumns / 4)};
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
      z-index: ${componentStyle.zIndex.navbar};
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

const getLayoutTemplate = (layoutType: string) => {
  switch(layoutType) {
    case 'hero-banner':
      return (
        <>
          {/* Skip to content link */}
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          
          {/* Header */}
          <header className="header">
            <div className="container">
              <h1>Website Title</h1>
              <nav>
                <a href="#" className="me-3">Home</a>
                <a href="#" className="me-3">About</a>
                <a href="#" className="me-3">Services</a>
                <a href="#" className="me-3">Contact</a>
              </nav>
            </div>
          </header>
          
          {/* Hero Banner */}
          <section style={{ 
            padding: '4rem 0', 
            backgroundColor: 'var(--secondary-color)', 
            color: 'white',
            marginBottom: 'var(--outer-spacing)'
          }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Welcome to Your Website</h2>
                  <p>This is a hero banner section with a call to action.</p>
                  <button className="btn btn-outline-light">Learn More</button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <main id="main-content">
            <div className="container layout-container">
              <div className="main-content">
                <h2>Main Content Area</h2>
                <p>This is the main content area of your website. Here you can provide detailed information about your products or services.</p>
                <p>The layout and styling of this content is controlled by the configuration settings you've chosen.</p>
                <button className="btn btn-primary">Primary Action</button>
                <button className="btn btn-secondary ms-2">Secondary Action</button>
              </div>
              
              <div className="sidebar">
                <h3>Sidebar</h3>
                <p>This is a sidebar that can contain supplementary information, navigation, or calls to action.</p>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button className="btn btn-outline-primary">Search</button>
              </div>
            </div>
          </main>
          
          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p>&copy; 2025 Your Website. All rights reserved.</p>
            </div>
          </footer>
        </>
      );
      
    case 'card-grid':
      return (
        <>
          {/* Skip to content link */}
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          
          {/* Header */}
          <header className="header">
            <div className="container">
              <h1>Card Grid Layout</h1>
              <nav>
                <a href="#" className="me-3">Home</a>
                <a href="#" className="me-3">Products</a>
                <a href="#" className="me-3">Gallery</a>
                <a href="#" className="me-3">Contact</a>
              </nav>
            </div>
          </header>
          
          {/* Main Content with Card Grid */}
          <main id="main-content">
            <div className="container my-4">
              <h2 className="mb-4">Our Products</h2>
              <div className="row g-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="col-md-4">
                    <div style={{ 
                      padding: 'var(--inner-spacing)',
                      borderRadius: 'var(--border-radius-medium)',
                      border: 'var(--border-width) solid var(--border-color)',
                      height: '100%'
                    }}>
                      <div style={{ 
                        height: '160px',
                        backgroundColor: 'var(--text-field-bg)',
                        borderRadius: 'var(--border-radius-small)',
                        marginBottom: 'var(--inner-spacing)'
                      }} />
                      <h3>Card Title {i}</h3>
                      <p>This is a card in a grid layout. Each card can contain an image, title, description, and actions.</p>
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
          
          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p>&copy; 2025 Card Grid Layout. All rights reserved.</p>
            </div>
          </footer>
        </>
      );
      
    case 'sidebar-header-content':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', minHeight: '100vh' }}>
          {/* Skip to content link */}
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          
          {/* Sidebar */}
          <aside style={{ 
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: 'var(--inner-spacing)',
            gridRow: '1 / -1'
          }}>
            <h2>Sidebar Layout</h2>
            <nav style={{ marginTop: 'var(--outer-spacing)' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}><a href="#" style={{ color: 'white' }}>Dashboard</a></li>
                <li style={{ marginBottom: '1rem' }}><a href="#" style={{ color: 'white' }}>Analytics</a></li>
                <li style={{ marginBottom: '1rem' }}><a href="#" style={{ color: 'white' }}>Reports</a></li>
                <li style={{ marginBottom: '1rem' }}><a href="#" style={{ color: 'white' }}>Settings</a></li>
                <li style={{ marginBottom: '1rem' }}><a href="#" style={{ color: 'white' }}>Profile</a></li>
              </ul>
            </nav>
          </aside>
          
          <div>
            {/* Header */}
            <header style={{ 
              padding: 'var(--inner-spacing)',
              borderBottom: 'var(--border-width) solid var(--border-color)',
              backgroundColor: 'var(--background-color)'
            }}>
              <div className="d-flex justify-content-between align-items-center">
                <h1>Dashboard</h1>
                <div>
                  <button className="btn btn-outline-primary me-2">Notifications</button>
                  <button className="btn btn-primary">Profile</button>
                </div>
              </div>
            </header>
            
            {/* Main Content */}
            <main id="main-content" style={{ padding: 'var(--inner-spacing)' }}>
              <div className="mb-4">
                <h2>Welcome to Your Dashboard</h2>
                <p>This is a sidebar layout with a fixed sidebar and scrollable main content.</p>
              </div>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div style={{ 
                    padding: 'var(--inner-spacing)',
                    borderRadius: 'var(--border-radius-medium)',
                    border: 'var(--border-width) solid var(--border-color)',
                  }}>
                    <h3>Analytics</h3>
                    <p>View your performance metrics and data insights.</p>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ 
                    padding: 'var(--inner-spacing)',
                    borderRadius: 'var(--border-radius-medium)',
                    border: 'var(--border-width) solid var(--border-color)',
                  }}>
                    <h3>Reports</h3>
                    <p>Access your generated reports and summaries.</p>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      );
      
    default: // single-column
      return (
        <>
          {/* Skip to content link */}
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          
          {/* Header */}
          <header className="header">
            <div className="container">
              <h1>Single Column Layout</h1>
              <nav>
                <a href="#" className="me-3">Home</a>
                <a href="#" className="me-3">About</a>
                <a href="#" className="me-3">Services</a>
                <a href="#" className="me-3">Contact</a>
              </nav>
            </div>
          </header>
          
          {/* Main Content */}
          <main id="main-content">
            <div className="container my-4">
              <h2>About Us</h2>
              <p>This is a single-column layout that puts all content in a single centered column.</p>
              <p>This layout is simple and works well for content-focused websites like blogs.</p>
              
              <div className="my-4">
                <h3>Our Services</h3>
                <ul>
                  <li>Service 1 - Description of the service</li>
                  <li>Service 2 - Description of the service</li>
                  <li>Service 3 - Description of the service</li>
                </ul>
              </div>
              
              <div className="my-4">
                <h3>Contact Information</h3>
                <p>Email: example@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
              </div>
              
              <div className="my-4">
                <h3>Get in Touch</h3>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={5}></textarea>
                </div>
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </main>
          
          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p>&copy; 2025 Single Column Layout. All rights reserved.</p>
            </div>
          </footer>
        </>
      );
  }
};

interface PreviewProps {
  deviceWidth?: 'mobile' | 'tablet' | 'desktop';
}

const Preview: React.FC<PreviewProps> = ({ deviceWidth = 'desktop' }) => {
  const { config } = useConfig();
  const css = generateCSS(config);
  
  let previewWidth = '100%';
  if (deviceWidth === 'mobile') {
    previewWidth = `${config.responsiveness.breakpoints.mobile}px`;
  } else if (deviceWidth === 'tablet') {
    previewWidth = `${config.responsiveness.breakpoints.tablet}px`;
  }
  
  return (
    <div className="preview-container">
      <style>
        {css}
      </style>
      
      <div 
        className="preview"
        style={{ 
          width: previewWidth,
          maxWidth: '100%',
          margin: '0 auto',
          border: '1px solid #dee2e6',
          borderRadius: '0.25rem',
          overflow: 'hidden',
          height: '100%',
          direction: config.language.direction
        }}
      >
        {getLayoutTemplate(config.layout.archetype)}
      </div>
    </div>
  );
};

export default Preview;