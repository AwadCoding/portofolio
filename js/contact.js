// =============================================
// CONTACT PAGE — Specific Script
// Requires: shared.js (loaded first in HTML)
// =============================================

// ── EmailJS Setup ──
emailjs.init("9A9ZsdvLth-gcR6zl");

const webhookURL =
  "https://mahmoudawad111234r.app.n8n.cloud/webhook/eb91151d-7cf1-4b63-8e3c-e32288df6c75";

// ── Contact Form Handler ──
function sendMail(event) {
  event.preventDefault();

  const submitBtn = document.querySelector(
    '#contact-form button[type="submit"]'
  );
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

  // Wait for both before showing result
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
