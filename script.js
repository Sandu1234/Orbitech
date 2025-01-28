document.addEventListener('DOMContentLoaded', () => {
  const blogCards = document.querySelectorAll('.blog-card');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  let currentIndex = 0;

  // Function to show the current card
  function showCard(index) {
    // Reset all cards
    blogCards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(100%)'; // Position cards off-screen to the right
      card.style.position = 'absolute'; // Stack all cards
    });

    // Show the active card
    blogCards[index].style.opacity = '1';
    blogCards[index].style.transform = 'translateX(0)'; // Move the active card into view
    blogCards[index].style.position = 'relative'; // Keep the active card in its position

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // Function to move to the next card
  function nextCard() {
    currentIndex = (currentIndex + 1) % blogCards.length; // Increment index and loop back to 0 if it exceeds the array length
    showCard(currentIndex);
  }

  // Auto-scroll every 5 seconds
  let autoScroll = setInterval(nextCard, 5000);

  // Add click event to dots for manual navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(autoScroll); // Stop auto-scroll when the user interacts
      showCard(index); // Show the clicked card
      currentIndex = index; // Update the current index
      autoScroll = setInterval(nextCard, 5000); // Restart auto-scroll
    });
  });

  // Initialize the first card
  showCard(currentIndex);
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
