/**
 * HOME PAGE — Renderer
 * ====================
 * Reads HOME_DATA (home-data.js) and injects HTML into the page.
 * No hardcoded content in index.html — all dynamic from data.
 *
 * Future PHP migration:
 *   const HOME_DATA = <?= json_encode($homeData) ?>;
 */

document.addEventListener("DOMContentLoaded", () => {

  // ── Skills Slider ───────────────────────────────────
  const skillsTrack = document.getElementById("skills-track");
  if (skillsTrack && HOME_DATA.skills) {
    // Render items twice for seamless CSS infinite scroll loop
    const items = HOME_DATA.skills
      .map(s => `
        <div class="skill-card">
          <i class="${s.icon}" style="color:${s.color}"></i>
          <h3>${s.label}</h3>
        </div>`)
      .join("");
    skillsTrack.innerHTML = items + items + items + items; // 4x for guaranteed seamless fill
  }

  // ── Tools Slider ───────────────────────────────────
  const toolsTrack = document.getElementById("tools-track");
  if (toolsTrack && HOME_DATA.tools) {
    const items = HOME_DATA.tools
      .map(t => `
        <div class="tool-card">
          <i class="${t.icon}" style="color:${t.color}"></i>
          <h3>${t.label}</h3>
        </div>`)
      .join("");
    toolsTrack.innerHTML = items + items + items + items; // 4x for guaranteed seamless fill
  }

  // ── About Me Snippet ───────────────────────────────
  const aboutText = document.getElementById("about-text");
  if (aboutText && HOME_DATA.about) {
    aboutText.textContent = HOME_DATA.about.text;
  }

  // ── Contact Info ───────────────────────────────────
  const contactEmail    = document.getElementById("contact-email");
  const contactPhone    = document.getElementById("contact-phone");
  const contactLocation = document.getElementById("contact-location");
  const contactSocials  = document.getElementById("contact-socials");

  if (contactEmail && HOME_DATA.contact) {
    contactEmail.href        = `mailto:${HOME_DATA.contact.email}`;
    contactEmail.textContent = HOME_DATA.contact.email;
  }
  if (contactPhone && HOME_DATA.contact) {
    const tel = HOME_DATA.contact.phone.replace(/\s/g, "");
    contactPhone.href        = `tel:${tel}`;
    contactPhone.textContent = HOME_DATA.contact.phone;
  }
  if (contactLocation && HOME_DATA.contact) {
    contactLocation.textContent = HOME_DATA.contact.location;
  }
  if (contactSocials && HOME_DATA.contact) {
    contactSocials.innerHTML = HOME_DATA.contact.socials
      .map(s => `
        <a target="_blank" href="${s.url}" title="${s.title}" rel="noopener">
          <i class="${s.icon}"></i>
        </a>`)
      .join("");
  }

});
