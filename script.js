document.addEventListener('DOMContentLoaded', () => {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonialCards.forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateX(100%)';
          card.style.position = 'absolute';
      });

      testimonialCards[index].style.opacity = '1';
      testimonialCards[index].style.transform = 'translateX(0)';
      testimonialCards[index].style.position = 'relative';

      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
  }

  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonialCards.length;
      showTestimonial(currentIndex);
  }

  let autoScroll = setInterval(nextTestimonial, 5000);

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          clearInterval(autoScroll);
          showTestimonial(index);
          currentIndex = index;
          autoScroll = setInterval(nextTestimonial, 5000);
      });
  });

  showTestimonial(currentIndex);
});


// Add the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Enlarge cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea');
interactiveElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)'; // Enlarge the cursor
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)'; // Restore cursor size
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function createOrbitAnimation() {
      const orbitContainer = document.querySelector(".orbit-animation");
      const orbitPath = document.createElement("div");
      const planet = document.createElement("div");

      orbitPath.classList.add("orbit-path");
      planet.classList.add("planet");
      orbitContainer.appendChild(orbitPath);
      orbitContainer.appendChild(planet);

      // Random position for orbit placement
      const randomX = Math.random() * window.innerWidth * 0.4 + 200;
      const randomY = Math.random() * window.innerHeight * 0.4 + 100;
      const randomAngle = Math.random() * 360;

      // Position orbit path and planet
      gsap.set(orbitPath, { left: randomX, top: randomY, rotate: randomAngle });
      gsap.set(planet, { left: randomX + 600, top: randomY }); // Adjusted for new orbit size

      // Animate orbit appearance
      gsap.to(orbitPath, {
          opacity: 0.3, /* More visible */
          duration: 2,
          ease: "power2.out",
      });

      // Animate planet movement along the orbit path
      gsap.to(planet, {
          opacity: 1,
          duration: 8, // Slow movement
          motionPath: {
              path: [
                  { x: randomX + 600, y: randomY - 200 },
                  { x: randomX + 900, y: randomY + 150 },
                  { x: randomX + 1200, y: randomY - 100 },
                  { x: randomX + 600, y: randomY + 250 },
                  { x: randomX, y: randomY }
              ],
              align: orbitPath,
              autoRotate: true
          },
          ease: "power1.inOut",
          onComplete: () => {
              // Fade out planet and orbit
              gsap.to([planet, orbitPath], {
                  opacity: 0,
                  duration: 3,
                  ease: "power2.out",
                  onComplete: () => {
                      orbitContainer.removeChild(orbitPath);
                      orbitContainer.removeChild(planet);
                      setTimeout(createOrbitAnimation, 5000); // Restart animation after delay
                  }
              });
          }
      });
  }

  createOrbitAnimation();
});

const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// OPEN the mobile menu
hamburgerIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

// CLOSE the mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
