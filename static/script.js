// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-progress-bar").style.width = scrolled + "%";
});

// Shrink and Hide Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");  // Shrink navbar
  } else {
    navbar.classList.remove("shrink"); // Reset navbar
  }
});

// Hide Navbar After Scrolling Down
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("shrink"); // Hide navbar
  } else {
    navbar.classList.remove("shrink"); // Show navbar at the top
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
  let scrollPosition = window.scrollY + window.innerHeight * 0.3; // Adjust threshold

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
  document.querySelectorAll(".error-message").forEach((error) => error.remove());

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  if (name.value.trim().length < 3) {
    showError(name, "Name must be at least 3 characters");
    isValid = false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
    isValid = false;
  }

  if (isValid) {
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  }
});

// Show Error Messages
function showError(inputField, message) {
  inputField.style.borderColor = "red";
  inputField.nextElementSibling?.remove();
  inputField.insertAdjacentHTML("afterend", `<div class="error-message" style="color:red;font-size:0.8em">${message}</div>`);

  // Remove error when the user starts typing
  inputField.addEventListener("input", () => {
    inputField.style.borderColor = "";
    inputField.nextElementSibling?.remove();
  });
}
