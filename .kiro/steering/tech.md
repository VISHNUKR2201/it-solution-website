# Technology Stack & Build System

## Frontend Technologies
- **HTML5**: Semantic markup with modern standards
- **CSS3**: Custom CSS with CSS Variables (CSS Custom Properties)
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactivity
- **Font Awesome 6.4.0**: Icon library via CDN
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## Architecture Patterns
- **Static Website**: No build process, direct HTML/CSS/JS files
- **Component-based CSS**: Modular CSS with reusable classes
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile-first Responsive**: Breakpoints at 576px, 768px, 992px

## CSS Methodology
- **CSS Variables**: Consistent color scheme and spacing using `:root` variables
- **BEM-like Naming**: Block-element-modifier approach for CSS classes
- **Utility Classes**: Reusable classes for common patterns (.btn, .container, .section)
- **Animation**: CSS transitions and keyframe animations for smooth interactions

## File Organization
- **Inline Styles**: Most pages use `<style>` tags in `<head>` for page-specific styles
- **Shared Styles**: `css/style.css` for common styles across pages
- **Shared JavaScript**: `css/js/mobile-menu.js` for mobile navigation functionality
- **Page-specific JS**: Individual JavaScript files for specific page functionality

## Common Commands
Since this is a static website, no build commands are required:

```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000

# No compilation or build process needed
# Files can be opened directly in browser
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers