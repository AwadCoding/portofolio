// =============================================
// HOME PAGE — Specific Script
// Requires: shared.js (loaded first in HTML)
// =============================================

// ── Infinite Skills/Tools Slider ──
function makeInfiniteSlider(trackSelector) {
  const track = document.querySelector(trackSelector);
  if (!track) return;
  // Duplicate items for seamless loop
  track.innerHTML += track.innerHTML;
  // Pause on hover
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}

makeInfiniteSlider(".skills-track");
makeInfiniteSlider(".tools-track");

// ── Render Last 3 Projects from projects-data.js ──
(function renderHomeProjects() {
  const grid = document.getElementById("home-projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  // Take the last 3 projects
  const latest = PROJECTS.slice(-3).reverse();

  latest.forEach((project, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", String((i + 1) * 100));

    // Image path: on home page, images are in "image/" folder (no ../)
    const imgPath = "image/" + project.image;

    card.innerHTML = `
      <div class="project-image">
        <img src="${imgPath}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-text">
        <h3>${project.title}</h3>
        <p>${project.shortDesc}</p>
        <a target="_blank" class="btn_link" href="${project.liveUrl}"><i class="fas fa-globe"></i> Live Demo</a>
        |
        <a target="_blank" class="btn_link" href="${project.githubUrl}"><i class="fab fa-github"></i> GitHub</a>
      </div>
    `;

    grid.appendChild(card);
  });
})();

// ── EmailJS Setup ──
emailjs.init("9A9ZsdvLth-gcR6zl");

const webhookURL =
  "https://mahmoudawad111234r.app.n8n.cloud/webhook/eb91151d-7cf1-4b63-8e3c-e32288df6c75";

// ── Contact Form Handler ──
function sendMail(event) {
  event.preventDefault();

  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  const params = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    message: document.getElementById("message").value,
    title: document.getElementById("title").value,
  };

  // Send via EmailJS
  const emailPromise = emailjs
    .send("service_dmfonjn", "template_kpy83s4", params)
    .then(() => console.log("✅ EmailJS: Message sent!"))
    .catch((error) => console.error("❌ EmailJS Error:", error));

  // Send to n8n webhook
  const webhookPromise = fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
    .then((response) => console.log("✅ Sent to n8n:", response.status))
    .catch((error) => console.error("❌ n8n Error:", error));

  // Wait for both to complete before showing result
  Promise.allSettled([emailPromise, webhookPromise]).then((results) => {
    const allFailed = results.every((r) => r.status === "rejected");
    if (allFailed) {
      alert("❌ Failed to send message. Please try again or email directly.");
    } else {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
}