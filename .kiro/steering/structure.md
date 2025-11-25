# Project Structure & Organization

## File Naming Conventions
- **Main Pages**: `page-name.html` (e.g., `about.html`, `services.html`)
- **Version 2 Pages**: `page-name-v2.html` (updated/alternative versions)
- **Special Pages**: `404home.html`, `404homepage2.html` (error pages)
- **Entry Points**: `index.html` (main homepage), `homepage2.html` (alternative homepage)

## Directory Structure

```
/
├── .kiro/                    # Kiro IDE configuration
├── .vscode/                  # VS Code settings
├── css/                      # Stylesheets and assets
│   ├── style.css            # Shared base styles
│   ├── homepage2.css        # Homepage2-specific styles
│   ├── mobile-menu.css      # Mobile navigation styles
│   └── js/                  # JavaScript files
│       ├── script.js        # Main functionality
│       ├── homepage2.js     # Homepage2-specific JS
│       ├── mobile-menu.js   # Mobile menu functionality
│       └── pages/           # Page-specific components
├── images/                   # Image assets
│   ├── *.webp              # Optimized images (WebP format)
│   └── logo-removebg-preview.webp
├── Picflow Images Nov 24/   # Recent image assets
└── *.html                   # HTML pages
```

## Page Categories

### Core Pages
- `index.html` - Main homepage
- `homepage2.html` - Alternative homepage design
- `about.html` / `about-v2.html` - Company information
- `services.html` / `services-v2.html` - Service offerings
- `projects.html` / `projects-v2.html` - Portfolio showcase
- `contact.html` / `contact-v2.html` - Contact information

### Business Pages
- `career.html` / `career-v2.html` - Job opportunities
- `hr-employers.html` / `hr-employers-v2.html` - HR services
- `dashboard.html` / `dashboard-v2.html` - User dashboard
- `login.html` / `login-v2.html` - Authentication

### Error Pages
- `404home.html` / `404homepage2.html` - 404 error pages

## Asset Organization
- **Images**: WebP format for optimization, descriptive filenames
- **CSS**: Modular approach with shared and page-specific styles
- **JavaScript**: Shared functionality in separate files, page-specific code inline or in dedicated files

## Navigation Structure
- Fixed header with dropdown menus
- Mobile-responsive hamburger menu
- Consistent navigation across all pages
- Breadcrumb-style organization for sub-pages

## Development Patterns
- **Consistent Header/Footer**: Shared across all pages
- **CSS Variables**: Centralized theming with `:root` variables
- **Responsive Breakpoints**: 576px, 768px, 992px
- **Progressive Enhancement**: Core functionality without JavaScript
- **Semantic HTML**: Proper use of HTML5 semantic elements