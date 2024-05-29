let email = []

const emailEl = document.getElementById('email')
const resetBtn = document.getElementById('reset-btn')
const emailStorage = JSON.parse(localStorage.getItem("email"))

if (emailStorage) {
  email = emailStorage
  render(email)
}

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
       listItems += leads[i]     
  }
  return listItems
}

const emailMsg = document.getElementById('reset-msg')

resetBtn.addEventListener("click", function() {
    emailMsg.textContent = ""
  
    if (emailEl.value === "") {
      emailMsg.textContent = "Please enter your email address."
    } else {
      for (let i=0; i < email.length ; i++) {
        if (email[i] === emailEl.value) {
          alert ("New Password sent to your email.")
        } else {
          alert ("Invalid email.")
        }
      }
    }
  }
)