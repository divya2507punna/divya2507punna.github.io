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
  
  // Form Validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    alert("Thank you for your message!");
    this.reset();
  });
  
  // Section Fade-in Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  