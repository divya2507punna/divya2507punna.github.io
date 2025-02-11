// Consolidated Scroll Handler
window.addEventListener("scroll", () => {
  // Scroll Progress
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.querySelector(".scroll-progress-bar").style.width = (winScroll / height) * 100 + "%";

  // Navbar Effects
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("shrink", window.scrollY > 50);
  
  // Back to Top Button
  document.getElementById("scrollTop").style.display = window.scrollY > 300 ? "block" : "none";
});

// Optimized Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: 0.2 });

// Update this line in JS
document.querySelectorAll(".animated-section, .timeline-item, .project, .certificate-img")
  .forEach(el => observer.observe(el));

// Enhanced Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let isValid = true;

  const fields = [
    { id: "name", condition: v => v.length >= 3, msg: "Name must be at least 3 characters" },
    { id: "email", condition: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v), msg: "Invalid email address" },
    { id: "message", condition: v => v.length >= 10, msg: "Message must be at least 10 characters" }
  ];

  fields.forEach(({id, condition, msg}) => {
    const field = document.getElementById(id);
    if (!condition(field.value.trim())) {
      showError(field, msg);
      isValid = false;
    }
  });

  if (isValid) {
    showSuccessMessage();
    this.reset();
  }
});

function showError(field, msg) {
  field.style.borderColor = "red";
  const error = document.createElement("div");
  error.className = "error-message";
  error.style.cssText = "color:red; font-size:0.8em; margin-top:5px;";
  error.textContent = msg;
  field.parentNode.insertBefore(error, field.nextSibling);
}

function showSuccessMessage() {
  const success = document.createElement("div");
  success.textContent = "Message Sent Successfully!";
  success.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--primary);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    animation: slideIn 0.3s ease-out;
  `;
  document.body.appendChild(success);
  setTimeout(() => {
    success.remove();
  }, 3000);
}