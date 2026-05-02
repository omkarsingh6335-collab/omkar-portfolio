/* ========================================
   Omkar Singh Portfolio - Main Script
   ======================================== */

(function() {
    'use strict';

    // ========== LOADER ==========
    const loader = document.getElementById('loader');
    const loaderFill = document.getElementById('loader-fill');

    gsap.to(loaderFill, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: () => {
            gsap.to(loader, {
                yPercent: -100,
                duration: 0.8,
                ease: 'power3.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    initAnimations();
                }
            });
        }
    });

    // ========== CURSOR GLOW ==========
    const glow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;

    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function updateGlow() {
            glow.style.left = mouseX + 'px';
            glow.style.top = mouseY + 'px';
            requestAnimationFrame(updateGlow);
        }
        updateGlow();
    } else {
        glow.style.display = 'none';
    }

    // ========== PARTICLES ==========
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.opacity = Math.random() * 0.5 + 0.1;
        p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
        particlesContainer.appendChild(p);

        gsap.to(p, {
            y: -100 - Math.random() * 200,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: 4 + Math.random() * 6,
            repeat: -1,
            delay: Math.random() * 5,
            ease: 'none'
        });
    }

    // ========== TYPED ROLE ==========
    const roles = [
        'Team Lead - Talent Acquisition',
        'Assistant Manager - TA',
        'IT & Non-IT Recruitment Specialist',
        'Stakeholder Management Expert'
    ];
    let roleIndex = 0;
    const typedEl = document.getElementById('typed-role');

    function typeRole() {
        const text = roles[roleIndex];
        let i = 0;
        typedEl.textContent = '';

        function typeChar() {
            if (i < text.length) {
                typedEl.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, 40);
            } else {
                setTimeout(eraseRole, 2500);
            }
        }

        function eraseRole() {
            let len = typedEl.textContent.length;
            function eraseChar() {
                if (len > 0) {
                    typedEl.textContent = typedEl.textContent.slice(0, -1);
                    len--;
                    setTimeout(eraseChar, 20);
                } else {
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(typeRole, 400);
                }
            }
            eraseChar();
        }

        typeChar();
    }

    // ========== COUNTER ANIMATION ==========
    function animateCounters() {
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.target);
            gsap.to(el, {
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                    el.textContent = Math.round(parseFloat(el.textContent)) + '+';
                }
            });
        });
    }

    // ========== NAVBAR ==========
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const st = window.scrollY;
        if (st > 100) {
            navbar.style.background = 'rgba(10,10,15,0.85)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = 'none';
        }

        if (st > lastScroll && st > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = st;
    });

    // ========== MOBILE MENU ==========
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('open');

        if (menuOpen) {
            bar1.style.transform = 'rotate(45deg) translate(4px, 4px)';
            bar2.style.opacity = '0';
            bar3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
            bar3.style.width = '1.5rem';
        } else {
            bar1.style.transform = '';
            bar2.style.opacity = '1';
            bar3.style.transform = '';
            bar3.style.width = '1rem';
        }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.remove('open');
            bar1.style.transform = '';
            bar2.style.opacity = '1';
            bar3.style.transform = '';
            bar3.style.width = '1rem';
        });
    });

    // ========== ACTIVE NAV ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (window.scrollY >= top) current = section.id;
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });

    // ========== INIT ANIMATIONS ==========
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Hero entrance
        const heroTl = gsap.timeline({ delay: 0.2 });
        heroTl
            .from('#hero-badge', { y: 20, opacity: 0, duration: 0.6 })
            .from('#hero-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
            .from('#hero-role', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
            .from('#hero-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
            .from('#hero-btns', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
            .from('#hero-stats', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
            .from('#hero-photo', { x: 60, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
            .from('#scroll-indicator', { opacity: 0, duration: 0.6 }, '-=0.3')
            .add(() => {
                typeRole();
                animateCounters();
            }, '-=0.5');

        // Scroll reveals
        document.querySelectorAll('.reveal').forEach(el => {
            gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Skill bars
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            ScrollTrigger.create({
                trigger: bar,
                start: 'top 90%',
                onEnter: () => {
                    bar.style.width = bar.dataset.width;
                }
            });
        });

        // Parallax floating shapes
        document.querySelectorAll('.float-shape').forEach(shape => {
            gsap.to(shape, {
                y: -50,
                scrollTrigger: {
                    trigger: shape.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
    }

    // ========== MAGNETIC BUTTONS ==========
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();
