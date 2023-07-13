let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// FORM
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '') {
    setErrorFor(nameInput, 'Name cannot be empty');
  } else {
    setSuccessFor(nameInput);
  }

  if (email === '') {
    setErrorFor(emailInput, 'Email cannot be empty');
  } else if (!emailRegex.test(email)) {
    setErrorFor(emailInput, 'Email is not valid');
  } else {
    setSuccessFor(emailInput);
  }

  if (message === '') {
    setErrorFor(messageInput, 'Message cannot be empty');
  } else {
    setSuccessFor(messageInput);
  }
}

function setErrorFor(input, message) {
  const formField = input.parentElement;
  const errorText = formField.querySelector('.error-message');

  formField.classList.add('error');
  errorText.innerText = message;
}

function setSuccessFor(input) {
  const formField = input.parentElement;

  formField.classList.remove('error');
}
