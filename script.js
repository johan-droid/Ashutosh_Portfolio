// Performance optimization: Debounce utility
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Throttle utility for scroll events
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Project Data
const projects = [
    {
        title: "Plant Disease Detection",
        description: "A machine learning model to detect diseases in plants from images, built with Python and computer vision libraries. Features a simple web interface for uploading images.",
        tech: ["Python", "TensorFlow", "Computer Vision", "Flask"],
        liveLink: "#",
        githubLink: "https://github.com/johan-droid/plant-disease-detection.git"
    },
    {
        title: "Property Management Web Application",
        description: "Full-stack MERN application for comprehensive property management with user authentication, property listings, advanced search filters, and admin dashboard.",
        tech: ["React", "Node.js", "Express", "PostgreSQL"],
        liveLink: "#",
        githubLink: "https://github.com/johan-droid/property-management-webapp-.git"
    },
    {
        title: "Resume Builder Web Application",
        description: "Interactive resume creation and management tool built with MERN stack. Features real-time preview, multiple templates, PDF export, and cloud storage integration.",
        tech: ["MERN Stack", "MongoDB", "PDF Generation", "Vercel"],
        liveLink: "#",
        githubLink: "https://github.com/johan-droid/Resumedia-a-resume-webapp.git"
    },
    {
        title: "Tester Complete Project",
        description: "A comprehensive testing suite for web applications, including unit, integration, and end-to-end tests. Ensures code quality and application stability.",
        tech: ["JavaScript", "Jest", "Cypress", "CI/CD"],
        liveLink: "#",
        githubLink: "https://github.com/johan-droid/tester-complete-project.git"
    },
    {
        title: "Detective Conan News Bot",
        description: "A production-grade Telegram bot that automatically scrapes and distributes anime news with 24/7 uptime. Features automated news collection and robust error handling.",
        tech: ["Python", "Telegram API", "Web Scraping", "24/7 Deployment"],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Web Scraping Automation Suite",
        description: "Collection of sophisticated automation tools for data collection and processing using Python. Includes news aggregation bots and automated monitoring systems.",
        tech: ["Python", "Selenium", "BeautifulSoup", "Automation"],
        liveLink: "#",
        githubLink: "#"
    }
];

// SVG Icons
const icons = {
    folder: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>` 
};

// State management
let isLoading = true;
let scrollPosition = 0;

// DOM Elements Cache
const DOM = {
    preloader: null,
    menuToggle: null,
    navMenu: null,
    navLinks: null,
    sections: null,
    projectsGrid: null,
    hero: null,
    nav: null
};

// Cache DOM elements
function cacheDOMElements() {
    DOM.preloader = document.getElementById('preloader');
    DOM.menuToggle = document.getElementById('menuToggle');
    DOM.navMenu = document.getElementById('navMenu');
    DOM.navLinks = document.querySelectorAll('.nav-link');
    DOM.sections = document.querySelectorAll('section');
    DOM.projectsGrid = document.querySelector('.projects-grid');
    DOM.hero = document.querySelector('.hero-content');
    DOM.nav = document.getElementById('mainNav');
}

// Preloader & Entrance Animation
function initPreloader() {
    // Disable scrolling during load
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        if (DOM.preloader) {
            DOM.preloader.classList.add('fade-out');
            document.body.style.overflow = '';

            // Trigger Hero Animations after preloader fades
            setTimeout(() => {
                const heroElements = document.querySelectorAll('.hero-intro, .hero-title, .hero-subtitle, .hero-buttons');
                heroElements.forEach((el, index) => {
                    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1 + 0.2}s forwards`;
                    el.style.opacity = '1';
                });
                isLoading = false;
            }, 300);
        }
    }, 1800); // Reduced from 2000ms to 1800ms
}

// Create Project Cards
function createProjectCards() {
    if (!DOM.projectsGrid) return;

    const fragment = document.createDocumentFragment();

    projects.forEach(project => {
        const primaryLink = (project.githubLink && project.githubLink !== '#') ? project.githubLink :
            (project.liveLink && project.liveLink !== '#') ? project.liveLink : null;

        const projectCard = document.createElement(primaryLink ? 'a' : 'div');
        projectCard.classList.add('project-card');

        if (primaryLink) {
            projectCard.href = primaryLink;
            projectCard.target = "_blank";
            projectCard.rel = "noopener noreferrer";
        }

        const techTags = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

        let linksHtml = '';
        if (project.githubLink && project.githubLink !== '#') {
            linksHtml += `<div class="project-link" aria-label="GitHub Repo">${icons.github}</div>`;
        }
        if (project.liveLink && project.liveLink !== '#') {
            linksHtml += `<div class="project-link" aria-label="Live Demo">${icons.external}</div>`;
        }

        projectCard.innerHTML = `
            <div class="project-header">
                <div class="folder-icon">${icons.folder}</div>
                <div class="project-links">
                    ${linksHtml}
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-description"><p>${project.description}</p></div>
            <div class="project-tech">
                ${techTags}
            </div>
        `;
        
        fragment.appendChild(projectCard);
    });

    DOM.projectsGrid.appendChild(fragment);
}

// Advanced Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Skill bar animation
                if (entry.target.classList.contains('skill-progress')) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = progress + '%';
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with better performance
    const revealElements = document.querySelectorAll('.section-header, .about-content, .timeline-item, .project-card, .contact-content, .skill-category');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    if (!DOM.menuToggle || !DOM.navMenu) return;

    DOM.menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = DOM.navMenu.classList.toggle('active');
        DOM.menuToggle.classList.toggle('active');
        DOM.menuToggle.setAttribute('aria-expanded', isActive);
        
        // Prevent body scroll when menu is open on mobile
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (DOM.navMenu.classList.contains('active') && 
            !DOM.navMenu.contains(e.target) && 
            !DOM.menuToggle.contains(e.target)) {
            DOM.navMenu.classList.remove('active');
            DOM.menuToggle.classList.remove('active');
            DOM.menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = DOM.nav ? DOM.nav.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (DOM.navMenu && DOM.navMenu.classList.contains('active')) {
                    DOM.navMenu.classList.remove('active');
                    if (DOM.menuToggle) {
                        DOM.menuToggle.classList.remove('active');
                        DOM.menuToggle.setAttribute('aria-expanded', 'false');
                    }
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// Active Navigation Link on Scroll (Optimized)
const updateActiveNavLink = throttle(() => {
    if (!DOM.sections || !DOM.navLinks) return;

    let current = '';
    DOM.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}, 100);

// Parallax Effect (Optimized with RAF)
let ticking = false;
function updateParallax() {
    if (!DOM.hero) return;
    
    const scrolled = window.pageYOffset;
    DOM.hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    DOM.hero.style.opacity = Math.max(0, 1 - (scrolled / 600));
    
    ticking = false;
}

const handleParallax = () => {
    if (!ticking && !isLoading) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
};

// Scroll Progress Indicator
function createScrollIndicator() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #06b6d4, #8b5cf6);
        z-index: 9999;
        transition: width 0.1s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    const updateProgress = throttle(() => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }, 50);

    window.addEventListener('scroll', updateProgress, { passive: true });
}

// Main Scroll Handler (Optimized)
const handleScroll = throttle(() => {
    updateActiveNavLink();
    handleParallax();
}, 16); // ~60fps

// Initialize all functionality
function init() {
    cacheDOMElements();
    initPreloader();
    createProjectCards();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    createScrollIndicator();
    
    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    console.log('Portfolio website loaded successfully! 🚀');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
});
