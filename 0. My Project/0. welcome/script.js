const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

let message = document.getElementById('message');
let choice = document.getElementById('choice');
let home = document.getElementById('home');
let login = document.getElementById('login');

yesBtn.addEventListener('click', function() {
  message.textContent = "Thank you for you interest.";
  choice.textContent = "";
  home.innerHTML = "<br>Go to Home Page<br>";
  login.textContent = "Go to Login Page";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener('click', function() {
  message.textContent = "Thank you! Have a great day!"
  choice.textContent = "";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});



