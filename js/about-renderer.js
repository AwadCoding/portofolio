/**
 * ABOUT PAGE — Renderer
 * =====================
 * Reads ABOUT_DATA (about-data.js) and injects HTML into the page.
 * No hardcoded content in about.html — all dynamic from data.
 *
 * Future PHP migration:
 *   Replace ABOUT_DATA with a decoded PHP JSON response:
 *   const ABOUT_DATA = <?= json_encode($aboutData) ?>;
 */

document.addEventListener("DOMContentLoaded", () => {

  // ── Skills ─────────────────────────────────────────
  const skillsList = document.getElementById("skills-list");
  if (skillsList && ABOUT_DATA.skills) {
    skillsList.innerHTML = ABOUT_DATA.skills
      .map(skill => `
        <li>
          <i class="${skill.icon}" style="color:${skill.color}"></i>
          <span>${skill.label}</span>
        </li>`)
      .join("");
  }

  // ── Tools ──────────────────────────────────────────
  const toolsList = document.getElementById("tools-list");
  if (toolsList && ABOUT_DATA.tools) {
    toolsList.innerHTML = ABOUT_DATA.tools
      .map(tool => `<li><i class="${tool.icon}"></i>${tool.label}</li>`)
      .join("");
  }

  // ── Experience Timeline ────────────────────────────
  const experienceTimeline = document.getElementById("experience-timeline");
  if (experienceTimeline && ABOUT_DATA.experience) {
    experienceTimeline.innerHTML = ABOUT_DATA.experience
      .map(item => {
        const linkHTML = item.link
          ? `<a href="${item.link.url}" target="_blank" rel="noopener">${item.link.text}</a>`
          : "";
        return `
          <div class="experience-card" data-aos="${item.aosDir}">
            <h3><i class="${item.icon}"></i>${item.title}</h3>
            <p>${item.description}</p>
            ${linkHTML}
          </div>`;
      })
      .join("");
  }

  // ── Personal Skills ────────────────────────────────
  const personalSkillsList = document.getElementById("personal-skills-list");
  if (personalSkillsList && ABOUT_DATA.personalSkills) {
    personalSkillsList.innerHTML = ABOUT_DATA.personalSkills
      .map(skill => `<li>${skill}</li>`)
      .join("");
  }

});
