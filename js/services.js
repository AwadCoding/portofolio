// =============================================
// SERVICES PAGE — Project Estimator Logic
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // Select all estimation groups
  const optTypeCards     = document.querySelectorAll("#opt-type .radio-card");
  const optDesignCards   = document.querySelectorAll("#opt-design .radio-card");
  const optBackendCards  = document.querySelectorAll("#opt-backend .radio-card");
  const optTimelineCards = document.querySelectorAll("#opt-timeline .radio-card");
  
  const finalPriceEl = document.getElementById("final-price");

  // Keep track of current selections
  let currentSelection = {
    type:     100,  // Default: Landing Page ($100)
    design:   0,    // Default: Design Ready (+$0)
    backend:  0,    // Default: No backend (+$0)
    timeline: 1     // Default: Flexible (x1)
  };

  // Helper: handle active class switching within a group
  function handleCardSelection(cards, category) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        currentSelection[category] = parseFloat(card.getAttribute("data-value"));
        calculatePrice();
      });
    });
  }

  // Bind click events for all groups
  handleCardSelection(optTypeCards,     "type");
  handleCardSelection(optDesignCards,   "design");
  handleCardSelection(optBackendCards,  "backend");
  handleCardSelection(optTimelineCards, "timeline");

  // Calculate and animate price
  function calculatePrice() {
    const basePrice  = currentSelection.type + currentSelection.design + currentSelection.backend;
    const finalPrice = Math.round(basePrice * currentSelection.timeline);
    animateValue(finalPriceEl, parseInt(finalPriceEl.innerText) || 0, finalPrice, 500);
  }

  // Smooth number counter animation
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out quad for a natural deceleration feel
      const eased = 1 - Math.pow(1 - progress, 2);
      obj.innerHTML = Math.floor(eased * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  // ── FAQ Accordion Logic ──
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all open items first
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

});

