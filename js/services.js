// =============================================
// SERVICES PAGE — Project Estimator Logic
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // Select all estimation groups
  const optTypeCards = document.querySelectorAll("#opt-type .radio-card");
  const optDesignCards = document.querySelectorAll("#opt-design .radio-card");
  const optTimelineCards = document.querySelectorAll("#opt-timeline .radio-card");
  
  const finalPriceEl = document.getElementById("final-price");

  // Keep track of current selections
  let currentSelection = {
    type: 100,      // Default: Landing Page ($100)
    design: 0,      // Default: Design Ready (+$0)
    timeline: 1     // Default: Flexible (x1)
  };

  // Helper function to handle active class switching
  function handleCardSelection(cards, category) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Remove active class from all in this group
        cards.forEach(c => c.classList.remove("active"));
        // Add active class to clicked card
        card.classList.add("active");
        
        // Update selection value
        currentSelection[category] = parseFloat(card.getAttribute("data-value"));
        
        // Recalculate price
        calculatePrice();
      });
    });
  }

  // Bind click events
  handleCardSelection(optTypeCards, "type");
  handleCardSelection(optDesignCards, "design");
  handleCardSelection(optTimelineCards, "timeline");

  // Calculate and animate price
  function calculatePrice() {
    const basePrice = currentSelection.type + currentSelection.design;
    const finalPrice = Math.round(basePrice * currentSelection.timeline);
    
    animateValue(finalPriceEl, parseInt(finalPriceEl.innerText), finalPrice, 500);
  }

  // Number counter animation function
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Math.floor to ensure integer output during animation
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // ── FAQ Accordion Logic ──
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all currently open FAQ items
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      // If the clicked one wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

});
