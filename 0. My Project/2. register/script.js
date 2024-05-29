const passwordInput = document.getElementById('password');
const toggleIcon = document.getElementById('toggle-password');

const image = document.getElementById('hide');
const showImage = 'fa-eye.png';
const hideImage = 'fa-eye-slash.png';

toggleIcon.addEventListener('click', function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    image.src = showImage;
  } else {
    passwordInput.type = "password";
    image.src = hideImage;
  }
});

