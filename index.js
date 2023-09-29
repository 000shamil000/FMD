window.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slider");
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    var interval;
  
    function showSlide(index) {
      slides[currentSlide].style.opacity = 0;
      slides[currentSlide].style.zIndex = 0;
      slides[index].style.opacity = 1;
      slides[index].style.zIndex = 1;
      currentSlide = index;
    }
  
    function nextSlide() {
      var nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }
  
    function previousSlide() {
      var prevIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }
  
    function startInterval() {
      interval = setInterval(nextSlide, 3000);
    }
  
    function resetInterval() {
      clearInterval(interval);
      startInterval();
    }
  
    showSlide(0); // Show the first slide immediately
    startInterval();
  
    var prevBtn = document.querySelector(".prev-btn");
    var nextBtn = document.querySelector(".next-btn");
  
    prevBtn.addEventListener("click", function() {
      previousSlide();
      resetInterval();
    });
  
    nextBtn.addEventListener("click", function() {
      nextSlide();
      resetInterval();
    });
  });