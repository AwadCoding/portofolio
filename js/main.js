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


    function makeInfiniteSlider(trackSelector) {
        const track = document.querySelector(trackSelector);
        if (!track) return;
        // انسخ كل العناصر مرة ثانية
        track.innerHTML += track.innerHTML;
        // عند المرور بالماوس: وقف الحركة
        track.addEventListener("mouseenter", () => {
          track.style.animationPlayState = "paused";
        });
        track.addEventListener("mouseleave", () => {
          track.style.animationPlayState = "running";
        });
      }

      makeInfiniteSlider(".skills-track");
      makeInfiniteSlider(".tools-track");

      // تفعيل EmailJS
      emailjs.init("9A9ZsdvLth-gcR6zl");

      // فورم الإرسال
      function sendMail(event) {
        event.preventDefault(); // ده أهم سطر

        const params = {
          user_name: document.getElementById("user_name").value,
          user_email: document.getElementById("user_email").value,
          message: document.getElementById("message").value,
          title: document.getElementById("title").value,
        };

        emailjs.send("service_dmfonjn", "template_kpy83s4", params).then(
          () => {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
          },
          (error) => {
            console.error("❌ FAILED...", error);
            alert("Error sending message.");
          }
        );
      }
    

      
 AOS.init({
    duration: 1200,
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