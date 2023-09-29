function openModalWindow(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModalWindow(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// ds

function showDescription(description, title, image) {
  const descriptionBox = document.getElementById("description-box");
  const descriptionTitle = document.getElementById("description-title");
  const descriptionImage = document.getElementById("description-image");
  const descriptionText = document.getElementById("description-text");
  const overlay = document.getElementById("overlay");

  descriptionTitle.textContent = title;
  descriptionImage.src = image;
  descriptionText.innerHTML = description;

  descriptionBox.style.display = "block";
  overlay.style.display = "block";
}

function hideDescription() {
  const descriptionBox = document.getElementById("description-box");
  const overlay = document.getElementById("overlay");

  descriptionBox.style.display = "none";
  overlay.style.display = "none";
}


// ds