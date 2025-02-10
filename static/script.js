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
