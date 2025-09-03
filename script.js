// Performance optimization: Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    } else {
        // Fallback in case Lucide isn't loaded yet
        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) {
                lucide.createIcons();
            }
        });
    }
    
    initializeTheme();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeActiveNavigation();
    initializeLazyLoading();
    initializeContactForm();
    initializePerformanceOptimizations();
    initializeCvDownload();
}

// Theme management with localStorage and system preference detection
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');

    // Apply initial theme
    applyTheme(currentTheme);
    updateThemeToggleIcon(currentTheme);

    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        updateThemeToggleIcon(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });

    // Listen for system theme changes
    prefersDark.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateThemeToggleIcon(newTheme);
        }
    });
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

function updateThemeToggleIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun" aria-label="Switch to light mode"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon" aria-label="Switch to dark mode"></i>';
    }
}

// Smooth scrolling with performance optimization
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                // Use requestAnimationFrame for smooth scrolling
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Scroll animations with Intersection Observer for performance
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.skill-card, .project-card, .contact-item, .certification-card, .section-title').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Active navigation highlighting with scroll spy and smooth scrolling
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Throttled scroll event for performance
    let ticking = false;
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL without adding to history
                history.pushState(null, '', targetId);
            }
        });
    });
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        let currentSectionId = '';
        
        // Find the current active section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = sectionId;
            }
        });
        
        // Update active nav link
        if (currentSectionId) {
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href').substring(1);
                if (linkHref === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
        
        ticking = false;
    }
    
    // Initial update
    updateActiveNav();
    
    // Throttled scroll event
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateActiveNav);
            ticking = true;
        }
    });
}

// Lazy loading for images and performance optimization
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });

        // Observe lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Contact form validation and handling
function initializeContactForm() {
    // Add contact form if it doesn't exist
    const contactSection = document.getElementById('contact');
    if (contactSection && !document.querySelector('.contact-form')) {
        addContactForm(contactSection);
    }
}

function addContactForm(contactSection) {
    const formHTML = `
        <div class="row mt-5">
            <div class="col-lg-8 mx-auto">
                <form class="contact-form" id="contactForm" novalidate>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name" class="form-label">Name *</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                                <div class="invalid-feedback">Please provide your name.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email" class="form-label">Email *</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                                <div class="invalid-feedback">Please provide a valid email.</div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label for="message" class="form-label">Message *</label>
                                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                                <div class="invalid-feedback">Please provide a message.</div>
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-paper-plane me-2"></i>Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    contactSection.querySelector('.container').insertAdjacentHTML('beforeend', formHTML);
    
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        field.classList.add('is-invalid');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('is-invalid');
            return false;
        }
    }
    
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
}

function clearValidation(e) {
    const field = e.target;
    field.classList.remove('is-invalid', 'is-valid');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate all required fields
    form.querySelectorAll('[required]').forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        return;
    }
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        form.querySelectorAll('.form-control').forEach(field => {
            field.classList.remove('is-valid');
        });
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize images
    optimizeImages();
    
    // Add loading states
    addLoadingStates();
}

function preloadCriticalResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
    
    // Preload critical CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'preload';
    cssLink.href = 'style.css';
    cssLink.as = 'style';
    document.head.appendChild(cssLink);
}

function optimizeImages() {
    // Add loading="lazy" to non-critical images
    document.querySelectorAll('img:not(.hero-image)').forEach(img => {
        img.loading = 'lazy';
    });
}

function addLoadingStates() {
    // Add loading state to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.type === 'submit') return;
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    });
}

// CV Download functionality
function initializeCvDownload() {
    const downloadCvBtn = document.getElementById('downloadCv');
    
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading state
            const originalText = downloadCvBtn.innerHTML;
            downloadCvBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Preparing...';
            downloadCvBtn.disabled = true;
            
            // Simulate network delay (replace with actual CV URL)
            setTimeout(() => {
                try {
                    // Replace this with the actual path to your CV file
                    const cvUrl = 'path/to/your/cv.pdf';
                    
                    // Create a temporary anchor element
                    const link = document.createElement('a');
                    link.href = cvUrl;
                    link.download = 'Mostafa_Zahran_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // Track the download event
                    trackEvent('cv_download', {
                        event_category: 'engagement',
                        event_label: 'CV Downloaded'
                    });
                } catch (error) {
                    console.error('Error downloading CV:', error);
                    showNotification('Failed to download CV. Please try again later.', 'error');
                } finally {
                    // Reset button state
                    downloadCvBtn.innerHTML = originalText;
                    downloadCvBtn.disabled = false;
                }
            }, 800);
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics and performance monitoring
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track theme changes
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        trackEvent('theme_change', { theme: currentTheme || 'light' });
    });
    
    // Track navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('href').substring(1);
            trackEvent('navigation_click', { section: section });
        });
    });
    
    // Track project clicks
    document.querySelectorAll('.project-card a').forEach(link => {
        link.addEventListener('click', function() {
            const project = this.closest('.project-card').querySelector('h5').textContent;
            const action = this.textContent.includes('Demo') ? 'view_demo' : 'view_code';
            trackEvent('project_interaction', { project: project, action: action });
        });
    });
});

// Error handling and logging
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', { 
        message: e.message, 
        filename: e.filename, 
        lineno: e.lineno 
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    // Measure page load performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        trackEvent('page_load_performance', { load_time: loadTime });
        
        if (loadTime > 3000) {
            console.warn('Page load time is slow:', loadTime + 'ms');
        }
    }
});
