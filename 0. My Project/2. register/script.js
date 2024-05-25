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

let email = []
let fullname = []
let username = []
let password = []

const emailEl = document.getElementById('email')
const fullnameEl = document.getElementById('fullname')
const usernameEl = document.getElementById('username')
const passwordEl = document.getElementById('password')
const registerBtn = document.getElementById('register-btn')

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
       listItems += leads[i]     
  }
  return listItems
}

const emailMsg = document.getElementById('msg-email')
const fullnameMsg = document.getElementById('msg-fullname')
const usernameMsg = document.getElementById('msg-username')
const passwordMsg = document.getElementById('msg-password')
const successMsg = document.getElementById('msg-success')

registerBtn.addEventListener(
  "click",
  function() {
    emailMsg.textContent = ""
    fullnameMsg.textContent = ""
    usernameMsg.textContent = ""
    passwordMsg.textContent = ""

    if (emailEl.value === "") {
      emailMsg.textContent = "Please enter your email address."
    }

    else if (fullnameEl.value === "") {
      fullnameMsg.textContent = "Please enter your fullname"
    }

    else if (usernameEl.value === "") {
      usernameMsg.textContent = "Please enter your username"
    }
    
    else if (passwordEl.value === "") {
      passwordMsg.textContent = "Please enter your password"
    }

    else {
      email.push(emailEl.value)
      emailEl.value = ""
      localStorage.setItem("email", JSON.stringify(email))
      render(email)

      fullname.push(fullnameEl.value)
      fullnameEl.value = ""
      localStorage.setItem("fullname", JSON.stringify(fullname))
      render(fullname)

      username.push(usernameEl.value)
      usernameEl.value = ""
      localStorage.setItem("username", JSON.stringify(username))
      render(username)

      password.push(passwordEl.value)
      passwordEl.value = ""
      localStorage.setItem("password", JSON.stringify(password))
      render(password)

      successMsg.textContent = "Registration Successful"
    }
      
  }
)