const menuToggle_open = document.querySelector(".menu-toggle_open");
const menuToggle_close = document.querySelector(".menu-toggle_close");
const navLinks = document.querySelector(".nav-links");

menuToggle_open.addEventListener("click", () => {
  navLinks.classList.add("active");
    menuToggle_open.classList.add("active");
    menuToggle_close.classList.add("active");
});

menuToggle_close.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuToggle_open.classList.remove("active");
  menuToggle_close.classList.remove("active");
});
 AOS.init({
        duration: 1000,
        once: true,
      });


       // إظهار الزر عند التمرير لأسفل
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // عند الضغط يرجع لأعلى
  document.getElementById("backToTopBtn").onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };