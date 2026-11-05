
// ==========================================
// Abdul Rehman - Portfolio JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

    // Current Year in Footer
    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".reveal, .service-card, .project-card, .skill-card"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

    // Contact Form Validation
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = contactForm.querySelector('[name="name"]');
            const email = contactForm.querySelector('[name="email"]');
            const message = contactForm.querySelector('[name="message"]');

            if (
                !name || !email || !message ||
                !name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {
                event.preventDefault();
                alert("Please complete all required fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});
