const phoneInput = document.querySelectorAll(".phone");
const hamburgerMenu = document.querySelector('#hamburger');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');

document.querySelector('#current-year').textContent = new Date().getFullYear();


phoneInput.forEach(input => {
  window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      fetch('https://ipinfo.io?token=d4823601c9260b')
        .then(response => response.json())
        .then(data => callback(data.country))
        .catch(() => callback("gh"));
    },
     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  })
});


hamburgerMenu.addEventListener('click', function() {
  document.querySelector('#navMenu').classList.toggle('active');
  closeBtn.style.display = 'block'; // Shows the close button
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  closeBtn.style.display = none; // Hide close button
  hamburgerMenu.style.display = 'block'; //
});