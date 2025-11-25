// Mobile Menu Functionality - Shared across all pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const body = document.body;
    const headerCloseX = document.querySelector('.header-close-x');

    // Open mobile menu
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.add('active');
            body.classList.add('menu-open');
            body.style.overflow = 'hidden';
        });
    }

    // Close mobile menu
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
        });
    }

    if (headerCloseX && mobileMenu) {
        headerCloseX.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
        });
    }

    // Mobile Dropdown Toggle
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = toggle.closest('.mobile-dropdown');
            
            // Close other dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(function(otherDropdown) {
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
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = '';
            }
        });
    }

    // Prevent body scroll when mobile menu is open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
        }
    });
});
