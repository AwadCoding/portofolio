// =============================================
// PROJECTS PAGE — Render + Modal Logic
// Requires: shared.js + projects-data.js
// =============================================

// ── Render All Projects + Modals ──
(function renderProjectsPage() {
  const section = document.getElementById("projects-full");
  if (!section || typeof PROJECTS === "undefined") return;

  // Clear existing hardcoded content (keep the h2 title)
  const title = section.querySelector(".section-title");
  section.innerHTML = "";
  if (title) section.appendChild(title);

  // Render each project card
  PROJECTS.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-full-card";
    card.setAttribute("data-aos", "fade-up");

    const imgPath = "../image/" + project.image;
    const tagsHTML = project.tags
      .slice(0, 3)
      .map((t) => `<li>${t}</li>`)
      .join("");

    card.innerHTML = `
      <div class="project-full-image">
        <img src="${imgPath}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-full-content">
        <h3>${project.title}</h3>
        <p>🔹 ${project.shortDesc}</p>
        <ul class="project-tags">${tagsHTML}</ul>
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank"><i class="fas fa-globe"></i> Live Demo</a>
          <a href="${project.githubUrl}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
          <button class="btn-details" onclick="openModal('modal-${project.id}')">
            <i class="fas fa-info-circle"></i> View Details
          </button>
        </div>
      </div>
    `;
    section.appendChild(card);
  });

  // Render modals
  const modalsContainer = document.createElement("div");
  modalsContainer.id = "project-modals";

  PROJECTS.forEach((project) => {
    const imgPath = "../image/" + project.image;
    const allTagsHTML = project.tags.map((t) => `<li>${t}</li>`).join("");
    const featuresHTML = project.modal.features
      .map((f) => `<li>${f}</li>`)
      .join("");

    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.id = `modal-${project.id}`;

    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal('modal-${project.id}')"><i class="fas fa-times"></i></button>
        <div class="modal-header">
          <img src="${imgPath}" alt="${project.title}">
        </div>
        <div class="modal-body">
          <h3>${project.title}</h3>
          <div class="modal-section">
            <h4><i class="fas fa-file-alt"></i> Overview</h4>
            <p>${project.modal.overview}</p>
          </div>
          <div class="modal-section">
            <h4><i class="fas fa-star"></i> Key Features</h4>
            <ul>${featuresHTML}</ul>
          </div>
          <div class="modal-section">
            <h4><i class="fas fa-user-cog"></i> My Role</h4>
            <p>${project.modal.role}</p>
          </div>
          <ul class="project-tags">${allTagsHTML}</ul>
          <div class="modal-links">
            <a href="${project.liveUrl}" target="_blank" class="btn"><i class="fas fa-globe"></i> Live Demo</a>
            <a href="${project.githubUrl}" target="_blank" class="btn"><i class="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    `;

    modalsContainer.appendChild(modal);
  });

  document.querySelector("main").appendChild(modalsContainer);

  // Bind backdrop click to close
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
})();

// ── Open Modal ──
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ── Close Modal ──
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ── Close on Escape key ──
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.body.style.overflow = "";
  }
});