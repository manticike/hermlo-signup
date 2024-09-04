const input = document.querySelector("#phone");

window.intlTelInput(input, {
  initialCountry: "auto",
  geoInLookup: function(callback) {
    fetch('https://ipinfo.io?token=d4823601c9260b')
      .then(response => response.json())
      .then(data => callback(data.country))
      .catch(() => callback("gh"));
  },
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
})