document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
    gsap.from(".hero-content h1", {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
    });

    gsap.from(".rotated-text", {
        opacity: 0,
        x: 50,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
    });

    gsap.from(".social-icons a", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
    });

    // Scroll Animations for Sections
    gsap.utils.toArray(".info-section, .features-section, .faq-section, .testimonials-section, .pricing-section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // =======================
    // 🔥 FAQ Section Animation (Highlight Active FAQ Item)
    // =======================
    if (document.querySelector(".faq-list")) {
        const faqItems = document.querySelectorAll(".faq-list li");

        // Activate the first FAQ item by default
        const defaultItem = faqItems[0];
        activateFaqItem(defaultItem);

        // Add click event listeners to FAQ items
        faqItems.forEach((item) => {
            item.addEventListener("click", function () {
                faqItems.forEach((faq) => deactivateFaqItem(faq));
                activateFaqItem(this);
            });
        });

        function activateFaqItem(item) {
            item.classList.add("active");
            gsap.to(item.querySelector(".faq-text"), { color: "#ffffff", duration: 0.3 });
            gsap.to(item.querySelector(".faq-top-line"), { width: "100%", duration: 0.5 });
            gsap.to(item.querySelector(".faq-bottom-line"), { width: "100%", duration: 0.5, delay: 0.1 });
        }

        function deactivateFaqItem(item) {
            item.classList.remove("active");
            gsap.to(item.querySelector(".faq-text"), { color: "#888", duration: 0.3 });
            gsap.to(item.querySelector(".faq-top-line"), { width: "0%", duration: 0.3 });
            gsap.to(item.querySelector(".faq-bottom-line"), { width: "0%", duration: 0.3 });
        }
    }

    // =======================
    // 🔥 Project Card Hover Animation
    // =======================
    if (document.querySelectorAll(".project-card")) {
        document.querySelectorAll(".project-card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { scale: 1.1, duration: 0.3 });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { scale: 1, duration: 0.3 });
            });
        });
    }

    // =======================
    // 📊 Stats Section Animation
    // =======================
    if (document.querySelector(".stats-section")) {
        document.querySelectorAll(".stat-item h1").forEach(stat => {
            gsap.from(stat, {
                innerText: 0,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: stat,
                    start: "top 85%",
                }
            });
        });
    }

    // =======================
    // 🔥 Vision & Mission Animation (Zoom Effect)
    // =======================
    if (document.querySelector(".vision-mission-section")) {
        gsap.from(".vision-mission-section", {
            opacity: 0,
            scale: 0.7,
            y: 100,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".vision-mission-section",
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });
    }

    // =======================
    // 🔥 Marquee Animation
    // =======================
    if (document.querySelector(".marquee")) {
        gsap.to(".marquee", {
            xPercent: -50,
            repeat: -1,
            duration: 10,
            ease: "linear"
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".orbitech-text .main-text", {
        y: 50,  // Moves up from 50px below
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".orbitech-text .subtext", {
        y: 80, // Moves up from 80px below
        opacity: 0,
        duration: 1.5,
        delay: 0.3,  // Starts slightly after the main text
        ease: "power3.out"
    });
});

