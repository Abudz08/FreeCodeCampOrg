document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

const hamburger = document.querySelector(".nav__hamburger") 
const navMenu = document.querySelector(".header__nav") 

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".header__nav").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const btnToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
    btnToTop.style.display = "none";
  } else {
    btnToTop.style.display = "block";
  }
});
