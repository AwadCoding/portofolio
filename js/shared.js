/* =============================================
   SHARED.JS — Common Functionality
   Used across all pages
   ============================================= */

// ── Mobile Menu Toggle (Animated Hamburger) ──
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a nav link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// ── AOS Initialization ──
// نأخر البدء عشان ما يتعارضش مع حركة انتقال الصفحة (page-entering = 500ms)
if (typeof AOS !== "undefined") {
  setTimeout(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, 520); // بعد ما تخلص animation الـ page-entering
}

// ── Back to Top Button ──
const backToTopBtn = document.getElementById("backToTopBtn");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ── Dynamic Copyright Year ──
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ══════════════════════════════════════════════
// Page Transitions — works in ALL browsers
// CSS @view-transition in base.css adds Chrome 126+ polish on top
// ══════════════════════════════════════════════
(function () {

  // ① Fade IN when page loads
  document.body.classList.add("page-entering");
  setTimeout(() => document.body.classList.remove("page-entering"), 600);

  // ② Fade OUT before navigating to another page
  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Skip: anchor, mailto, tel, external/blank
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.target === "_blank"
      ) return;

      e.preventDefault();
      document.body.classList.add("page-leaving");

      // Navigate after exit animation finishes
      setTimeout(() => { window.location.href = href; }, 380);
    });
  });

})();
