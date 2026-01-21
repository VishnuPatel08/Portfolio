// Portfolio JavaScript - Modern Interactive Features

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupProjectFilter();
        this.setupContactForm();
        this.setupSkillBars();
        this.setupBackToTop();
        this.setupTypewriter();
        
        // Initialize after DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        this.hideLoadingScreen();
        this.initializeTheme();
        this.startAnimations();
    }

    // Loading Screen
    setupLoadingScreen() {
        this.loadingScreen = document.getElementById('loading-screen');
    }

    hideLoadingScreen() {
        setTimeout(() => {
            if (this.loadingScreen) {
                this.loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    this.loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 1000);
    }

    // Navigation
    setupNavigation() {
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        
        // Smooth scrolling for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                    
                    // Update active link
                    this.updateActiveNavLink(link);
                }
            });
        });

        // Update active navigation on scroll
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
            this.updateActiveNavOnScroll();
        });
    }

    handleNavbarScroll() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                this.navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        } else {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                this.navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        }
    }

    updateActiveNavOnScroll() {
        const scrollTop = window.pageYOffset + 100;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    this.updateActiveNavLink(activeLink);
                }
            }
        });
    }

    updateActiveNavLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Theme Toggle
    setupThemeToggle() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = this.themeToggle.querySelector('i');
        
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.setTheme(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        // Update theme icon
        if (theme === 'dark') {
            this.themeIcon.className = 'fas fa-sun';
        } else {
            this.themeIcon.className = 'fas fa-moon';
        }
        
        // Update navbar background
        this.handleNavbarScroll();
    }

    // Mobile Menu
    setupMobileMenu() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        
        this.navToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.navToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMobileMenu() {
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    // Scroll Effects
    setupScrollEffects() {
        this.backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            this.handleBackToTop();
        });
        
        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    handleBackToTop() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 500) {
            this.backToTopBtn.classList.add('visible');
        } else {
            this.backToTopBtn.classList.remove('visible');
        }
    }

    // Animations
    setupAnimations() {
        // Intersection Observer for scroll animations
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger skill bars animation
                    if (entry.target.classList.contains('skills')) {
                        this.animateSkillBars();
                    }
                    
                    // Trigger counter animation
                    if (entry.target.classList.contains('about')) {
                        this.animateCounters();
                    }
                }
            });
        }, this.observerOptions);
    }

    startAnimations() {
        // Observe sections for scroll animations
        this.sections.forEach(section => {
            this.observer.observe(section);
        });
        
        // Add fade-in class to animated elements
        const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .stat-item');
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Trigger animations when elements come into view
        const elementsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            elementsObserver.observe(el);
        });
    }

    // Project Filter
    setupProjectFilter() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filterProjects(filter);
                this.updateActiveFilter(btn);
            });
        });
    }

    filterProjects(filter) {
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('filtered-out');
                card.style.display = 'block';
            } else {
                card.classList.add('filtered-out');
                setTimeout(() => {
                    if (card.classList.contains('filtered-out')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    }

    updateActiveFilter(activeBtn) {
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    // Contact Form
    /*setupContactForm() {
        this.contactForm = document.getElementById('contact-form');
        
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    handleFormSubmit() {
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        this.showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.contactForm.reset();
        
        // In a real application, you would send this data to your server
        console.log('Form data:', data);
    }*/

    //new code for web3

    setupContactForm() {
        this.contactForm = document.getElementById('contact-form');
    
        if (this.contactForm) {
            // Check if this is a Web3Forms form
            const isWeb3Form = this.contactForm.action && this.contactForm.action.includes('web3forms');
        
            if (isWeb3Form) {
                // For Web3Forms, handle the submission differently
                this.contactForm.addEventListener('submit', (e) => {
                    this.handleWeb3FormSubmit(e);
                });
            } else {
                // Original form handling for demo/testing
                this.contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleFormSubmit();
                });
            }
        }
    }

    handleWeb3FormSubmit(e) {
        // Don't prevent default - let Web3Forms handle it
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
    
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    
        // Add a hidden field to track submission
        const timestamp = Date.now();
        let hiddenField = this.contactForm.querySelector('input[name="timestamp"]');
        if (!hiddenField) {
            hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = 'timestamp';
            this.contactForm.appendChild(hiddenField);
        }
        hiddenField.value = timestamp;
    
        // Handle the response (this will work with Web3Forms redirect or AJAX)
        setTimeout(() => {
            // Reset button state after submission
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        
            // Show success message (you can customize this based on Web3Forms response)
            this.showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Reset form after successful submission
            setTimeout(() => {
                this.contactForm.reset();
            }, 1000);
        }, 2000);
    }

    showFormMessage(message, type) {
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        this.contactForm.appendChild(messageEl);
        
        setTimeout(() => {
            messageEl.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 5000);
    }

    // Skill Bars Animation
    setupSkillBars() {
        this.skillBars = document.querySelectorAll('.progress-bar');
    }

    animateSkillBars() {
        this.skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage + '%';
        });
    }

    // Counter Animation
    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }

    // Back to Top
    setupBackToTop() {
        // Already handled in setupScrollEffects
    }

    // Typewriter Effect
    setupTypewriter() {
        const roleElement = document.querySelector('.role');
        if (roleElement) {
            const roles = [
                'Full Stack Developer',
                'UI/UX Enthusiast',
                'Problem Solver',
                'Creative Thinker'
            ];
            
            let roleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            const typewriterEffect = () => {
                const currentRole = roles[roleIndex];
                
                if (isDeleting) {
                    roleElement.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    roleElement.textContent = currentRole.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let speed = isDeleting ? 50 : 100;
                
                if (!isDeleting && charIndex === currentRole.length) {
                    speed = 2000; // Pause at end
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    speed = 500; // Pause before starting new word
                }
                
                setTimeout(typewriterEffect, speed);
            };
            
            // Start typewriter effect after a delay
            setTimeout(typewriterEffect, 2000);
        }
    }

    // Utility Methods
    debounce(func, wait) {
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

    throttle(func, limit) {
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
}

// Additional Utility Functions

// Smooth scroll polyfill for older browsers
function smoothScrollTo(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animate);
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animate);
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Parallax effect for hero section
function setupParallax() {
    const heroSection = document.querySelector('.hero');
    const floatingShapes = document.querySelectorAll('.shape');
    
    if (heroSection && floatingShapes.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            floatingShapes.forEach((shape, index) => {
                const speed = parallaxSpeed * (index + 1) * 0.2;
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Enhanced form validation
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
        input.addEventListener('input', () => clearValidationError(input));
    });
    
    function validateInput(input) {
        const value = input.value.trim();
        const type = input.type;
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Show/hide error
        if (!isValid) {
            showInputError(input, errorMessage);
        } else {
            clearValidationError(input);
        }
        
        return isValid;
    }
    
    function showInputError(input, message) {
        clearValidationError(input);
        
        const errorElement = document.createElement('span');
        errorElement.className = 'input-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
        `;
        
        input.parentNode.appendChild(errorElement);
        input.style.borderColor = '#ef4444';
    }
    
    function clearValidationError(input) {
        const errorElement = input.parentNode.querySelector('.input-error');
        if (errorElement) {
            errorElement.remove();
        }
        input.style.borderColor = '';
    }
}

// Performance optimization
function optimizePerformance() {
    // Preload critical images
    const criticalImages = [
        'images/avatar.jpg',
        'images/about-image.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Defer non-critical JavaScript
    const deferredScripts = document.querySelectorAll('script[data-defer]');
    deferredScripts.forEach(script => {
        script.addEventListener('load', () => {
            script.removeAttribute('data-defer');
        });
    });
}

// Initialize everything
function initializePortfolio() {
    // Initialize main app
    const app = new PortfolioApp();
    
    // Setup additional features
    setupLazyLoading();
    setupParallax();
    setupFormValidation();
    optimizePerformance();
    
    // Service Worker registration (if available)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', initializePortfolio);

// Export for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, initializePortfolio };
}