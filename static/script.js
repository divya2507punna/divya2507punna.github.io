// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-progress-bar").style.width = scrolled + "%";
});

// Shrink Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// Back to Top Button
const topBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Intersection Observer for Section Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animated-section").forEach((section) => {
  observer.observe(section);
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Navbar Active Link Highlighting
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + 100;
  document.querySelectorAll(".navbar a").forEach((link) => {
    let section = document.querySelector(link.getAttribute("href"));
    if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      document.querySelectorAll(".navbar a").forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Form Validation with Success Message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  let isValid = true;

  if (name.length < 3) {
    showError("name", "Name must be at least 3 characters");
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  if (message.length < 10) {
    showError("message", "Message must be at least 10 characters");
    isValid = false;
  }

  if (isValid) {
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
    document.querySelectorAll(".error-message").forEach((error) => error.remove());
  }
});

// Show Error Messages
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = "red";
  field.nextElementSibling?.remove();
  field.insertAdjacentHTML(
    "afterend",
    `<div class="error-message" style="color:red;font-size:0.8em">${message}</div>`
  );
}
