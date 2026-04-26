/**
 * SERVICES PAGE — Renderer + Interactivity
 * =========================================
 * 1. Reads SERVICES_DATA (services-data.js) and renders HTML
 * 2. Initializes estimator price calculation
 * 3. Initializes FAQ accordion
 *
 * Future PHP migration:
 *   const SERVICES_DATA = <?= json_encode($servicesData) ?>;
 */

document.addEventListener("DOMContentLoaded", () => {

  // ════════════════════════════════════════════════════
  // SECTION 1 — RENDER FROM DATA
  // ════════════════════════════════════════════════════

  // ── Offerings Grid ──────────────────────────────────
  const offeringsGrid = document.getElementById("offerings-grid");
  if (offeringsGrid && SERVICES_DATA.offerings) {
    offeringsGrid.innerHTML = SERVICES_DATA.offerings
      .map(item => `
        <div class="offering-card" data-aos="zoom-in" data-aos-delay="${item.aosDelay}">
          <i class="${item.icon}"></i>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>`)
      .join("");
  }

  // ── Process Timeline ────────────────────────────────
  const processTimeline = document.getElementById("process-timeline");
  if (processTimeline && SERVICES_DATA.process) {
    processTimeline.innerHTML = SERVICES_DATA.process
      .map(step => `
        <div class="process-step" data-aos="${step.aosDir}" data-aos-delay="${step.aosDelay}">
          <div class="step-number">${step.number}</div>
          <div class="step-content">
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        </div>`)
      .join("");
  }

  // ── Testimonials ────────────────────────────────────
  const testimonialsContainer = document.getElementById("testimonials-container");
  if (testimonialsContainer && SERVICES_DATA.testimonials) {
    testimonialsContainer.innerHTML = SERVICES_DATA.testimonials
      .map(t => `
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="testimonial-info">
              <h4>${t.name}</h4>
              <p>${t.role}</p>
              <span class="testimonial-date">${t.relation}</span>
            </div>
            ${t.link
              ? `<a href="${t.link}" target="_blank" rel="noopener" class="testimonial-icon-link" title="View on LinkedIn"><i class="${t.icon} testimonial-icon"></i></a>`
              : `<i class="${t.icon} testimonial-icon"></i>`
            }
          </div>
          <div class="testimonial-body">
            <p>"${t.quote}"</p>
          </div>
          ${t.link ? `<a href="${t.link}" target="_blank" rel="noopener" class="testimonial-source">View original post on LinkedIn <i class="fas fa-external-link-alt"></i></a>` : ""}
        </div>`)
      .join("");
  }

  // ── FAQ ─────────────────────────────────────────────
  const faqContainer = document.getElementById("faq-container");
  if (faqContainer && SERVICES_DATA.faq) {
    faqContainer.innerHTML = SERVICES_DATA.faq
      .map(item => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            ${item.question}
            <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="faq-answer">
            <p>${item.answer}</p>
          </div>
        </div>`)
      .join("");
  }

  // ── Estimator Groups ────────────────────────────────
  const estimatorOptions = document.getElementById("estimator-options");
  if (estimatorOptions && SERVICES_DATA.estimator) {
    estimatorOptions.innerHTML = SERVICES_DATA.estimator.groups
      .map(group => `
        <div class="estimator-group">
          <h3>${group.question}</h3>
          <div class="radio-cards" id="${group.id}">
            ${group.options.map(opt => `
              <div class="radio-card${opt.active ? " active" : ""}" data-value="${opt.value}">
                <i class="${opt.icon}"></i>
                <span>${opt.label}</span>
              </div>`).join("")}
          </div>
        </div>`)
      .join("");
  }


  // ════════════════════════════════════════════════════
  // SECTION 2 — ESTIMATOR INTERACTIVITY
  // ════════════════════════════════════════════════════

  const finalPriceEl = document.getElementById("final-price");

  // Default selections (match the 'active: true' in data)
  let currentSelection = {
    type:     100,
    design:   0,
    backend:  0,
    timeline: 1,
  };

  // Bind card group clicks and track the selected value
  function bindCardGroup(groupId, category) {
    const cards = document.querySelectorAll(`#${groupId} .radio-card`);
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        currentSelection[category] = parseFloat(card.getAttribute("data-value"));
        calculatePrice();
      });
    });
  }

  // Map each estimator group ID to its selection key
  const groupMap = {
    "opt-type":     "type",
    "opt-design":   "design",
    "opt-backend":  "backend",
    "opt-timeline": "timeline",
  };

  // Bind all groups (after they've been rendered above)
  Object.entries(groupMap).forEach(([id, key]) => bindCardGroup(id, key));

  // Price formula: (base) × timeline multiplier
  function calculatePrice() {
    const base  = currentSelection.type + currentSelection.design + currentSelection.backend;
    const final = Math.round(base * currentSelection.timeline);
    animateValue(finalPriceEl, parseInt(finalPriceEl.innerText) || 0, final, 500);
  }

  // Smooth ease-out counter animation
  function animateValue(el, start, end, duration) {
    let startTs = null;
    const tick = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 2); // ease-out quad
      el.innerHTML   = Math.floor(eased * (end - start) + start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }


  // ════════════════════════════════════════════════════
  // SECTION 3 — FAQ ACCORDION
  // ════════════════════════════════════════════════════

  // Re-query after render
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer   = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

});
