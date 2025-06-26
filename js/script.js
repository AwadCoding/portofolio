// تفعيل EmailJS
        emailjs.init("9A9ZsdvLth-gcR6zl");

// زر المينيو
const toggleBtn = document.querySelector('header .container .menu-toggle');
const header = document.querySelector('header');

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('active');
});

// فورم الإرسال
function sendMail(event) {
  event.preventDefault(); // ده أهم سطر

  const params = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    message: document.getElementById("message").value,
    title: document.getElementById("title").value
  };

  emailjs.send("service_dmfonjn", "template_kpy83s4", params)
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, (error) => {
      console.error("❌ FAILED...", error);
      alert("Error sending message.");
    });
}


