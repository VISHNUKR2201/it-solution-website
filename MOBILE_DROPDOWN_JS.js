// Mobile Dropdown JavaScript - Add this after closeMenu.addEventListener

// Mobile Dropdown Toggle
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.closest('.mobile-dropdown');
        
        // Close other dropdowns
        document.querySelectorAll('.mobile-dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    });
});

// Close mobile menu when clicking on a link (except dropdown toggle)
const mobileLinks = document.querySelectorAll('.mobile-links a:not(.mobile-dropdown-toggle)');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});