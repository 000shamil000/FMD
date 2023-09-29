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
const toggleButtons = document.querySelectorAll('.toggle-btn');
const contentElements = document.querySelectorAll('.content');
const photoContainer = document.querySelector('#photo-container');
const photoInput = document.querySelector('#photo-input');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const contentElement = document.getElementById(target);

    if (contentElement.style.display === 'none') {
      contentElement.style.display = 'block';
    } else {
      contentElement.style.display = 'none';
    }
  });
});

photoInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const image = document.createElement('img');
    image.src = e.target.result;
    photoContainer.appendChild(image);
  };

  reader.readAsDataURL(file);
});