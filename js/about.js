
document.addEventListener("DOMContentLoaded", () => {
  const textBoxes = document.querySelectorAll('.below-fold .text-box, .below-fold2 .text-box');

 
  const observerOptions = {
    root: null, 
    rootMargin: "0px 0px -10% 0px", 
    threshold: 0.2 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
      }
    });
  }, observerOptions);

  textBoxes.forEach(box => observer.observe(box));
});
