// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Parallax Effect on Scroll
  window.addEventListener("scroll", () => {
    const heroSection = document.getElementById("hero");
    heroSection.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });
  