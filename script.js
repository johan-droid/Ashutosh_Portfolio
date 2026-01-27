// Preloader & Entrance Animation logic
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');

    // Disable scrolling during load
    document.body.style.overflow = 'hidden';

    // Sequence for landing
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'visible';

            // Trigger Hero Animations after loader clears
            setTimeout(() => {
                const heroElements = document.querySelectorAll('.hero-intro, .hero-title, .hero-tag, .hero-subtitle, .hero-buttons, .hero-scroll');
                heroElements.forEach((el, index) => {
                    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1 + 0.2}s forwards`;
                    el.style.opacity = '1'; // Ensure it stays visible
                });
            }, 300);
        }
    }, 2000); // 2 seconds loader

    createProjectCards();
    initScrollAnimations();
});

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

                // If it's a skill bar, trigger the width animation
                if (entry.target.classList.contains('skill-progress')) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = progress + '%';
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe Elements
    const revealElements = document.querySelectorAll('.section-header, .about-content, .timeline-item, .project-card, .contact-content, .skill-category');
    revealElements.forEach(el => {
        el.classList.add('reveal'); // Add base class via JS to ensure graceful degradation
        observer.observe(el);
    });
}


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
        description: "Full-stack MERN application for comprehensive property management with user authentication, property listings, advanced search filters, and admin dashboard. Deployed on Render with PostgreSQL database.",
        tech: ["React", "Node.js", "Express", "PostgreSQL"],
        liveLink: "#",
        githubLink: "https://github.com/johan-droid/property-management-webapp-.git"
    },
    {
        title: "Resume Builder Web Application",
        description: "Interactive resume creation and management tool built with MERN stack. Features real-time preview, multiple templates, PDF export, and cloud storage integration for seamless resume building experience.",
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
        description: "A production-grade Telegram bot that automatically scrapes and distributes anime news with 24/7 uptime. Features automated news collection, user notifications, and robust error handling for continuous operation.",
        tech: ["Python", "Telegram API", "Web Scraping", "24/7 Deployment"],
        liveLink: "#",
        githubLink: "#" // User did not provide a link for this one
    },
    {
        title: "Web Scraping Automation Suite",
        description: "Collection of sophisticated automation tools for data collection and processing using Python. Includes news aggregation bots, data mining tools, and automated monitoring systems with Selenium and BeautifulSoup.",
        tech: ["Python", "Selenium", "BeautifulSoup", "Automation"],
        liveLink: "#",
        githubLink: "#" // User did not provide a link for this one
    }
];

function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    // SVG Icons
    const folderIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;

    const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;

    const externalIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

    projects.forEach((project, index) => {
        // Determine the primary link (GitHub or Live)
        const primaryLink = (project.githubLink && project.githubLink !== '#') ? project.githubLink :
            (project.liveLink && project.liveLink !== '#') ? project.liveLink : null;

        const projectCard = document.createElement(primaryLink ? 'a' : 'div');
        projectCard.classList.add('project-card');

        // If it's a link, add href and target attributes
        if (primaryLink) {
            projectCard.href = primaryLink;
            projectCard.target = "_blank";
            projectCard.rel = "noopener noreferrer";
        }

        const techTags = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

        let linksHtml = '';
        // We still keep specific icon links for visual clarity, even though the whole card is clickable
        if (project.githubLink && project.githubLink !== '#') {
            linksHtml += `<div class="project-link" aria-label="GitHub Repo">${githubIcon}</div>`;
        }
        if (project.liveLink && project.liveLink !== '#') {
            linksHtml += `<div class="project-link" aria-label="Live Demo">${externalIcon}</div>`;
        }

        projectCard.innerHTML = `
            <div class="project-header">
                <div class="folder-icon">${folderIcon}</div>
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
        projectsGrid.appendChild(projectCard);
    });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const nav = document.querySelector('.nav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}


// Add dynamic background effect based on mouse position
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});

// Skill bar animation trigger
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        bar.style.width = '0%';
        skillObserver.observe(bar);
    });
};

// Initialize skill bar animations
animateSkillBars();

// Add a subtle glitch effect to the logo on hover
const logo = document.querySelector('.nav-logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'glitch 0.3s ease';
    });

    logo.addEventListener('animationend', () => {
        logo.style.animation = '';
    });
}

// Add glitch animation keyframes dynamically


// Add scroll progress indicator
const createScrollIndicator = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00ff88, #00d4ff);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollIndicator();

// Add loading animation
// Loading animation handled by preloader logic at the top

console.log('Portfolio website loaded successfully! 🚀');
