// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress-bar").style.width = scrolled + "%";
  });
  
  // Back to Top Button
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("visible", window.scrollY > 300);
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Intersection Observer for Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  
  // Form Validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Please enter a valid email address");
      return;
    }
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });
  
  // Show Error Messages
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = "red";
    field.nextElementSibling?.remove();
    field.insertAdjacentHTML("afterend", `<div class="error-message" style="color:red;font-size:0.8em">${message}</div>`);
  }
  