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

let username = []
let password = []

const usernameStorage = JSON.parse(localStorage.getItem("username"))
const passwordStorage = JSON.parse(localStorage.getItem("password"))

if (usernameStorage) {
  username = usernameStorage
  render(username)

  password = passwordStorage
  render(password)
}

const usernameEl = document.getElementById('username')
const passwordEl = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')
const message = document.getElementById('msg')

loginBtn.addEventListener('click', function() {
  if (password.length === 0) {
    message.textContent = "Incorrect username or password"
  }
  for (let i=0; i < password.length ; i++) {
    if (username[i] === usernameEl.value && password[i] === passwordEl.value) {
      alert('login successful')
      message.textContent = ""
    } else {
      usernameEl.value = ""
      passwordEl.value = ""
      message.textContent = "Incorrect username or password"
    }
  }


})

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
       listItems += leads[i]     
  }
  return listItems
}
