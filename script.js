// Theme Toggle with Icon Change
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  
  // Change icon based on the active theme
  if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

// Navigation Toggle for Mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Contact Form Submission: Open WhatsApp with prefilled message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Retrieve form values
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);
  
  // Construct the WhatsApp message text
  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  
  // Replace 'YOUR_NUMBER' with your WhatsApp number in international format (no '+' or dashes)
  const whatsappUrl = `https://api.whatsapp.com/send?phone=254795778490&text=${text}`;
  
  // Open WhatsApp in a new tab/window
  window.open(whatsappUrl, '_blank');
  
  // Optionally, display an inline message or clear the form
  document.getElementById('formMessage').textContent = 'Opening WhatsApp...';
  setTimeout(() => {
    document.getElementById('formMessage').textContent = '';
  }, 5000);
  
  // Reset the form
  this.reset();
});
