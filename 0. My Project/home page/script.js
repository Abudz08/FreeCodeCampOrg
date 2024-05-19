const image = document.getElementById("header-menu")
const showMenu = 'show-menu.png'
const closeMenu = 'close-menu.png'

let boolean = true
const toggleMenu = document.getElementById('toggle-menu')

toggleMenu.addEventListener('click', function() {
    if (boolean == true) {
      image.src = closeMenu;
      boolean = false
    } else {
      image.src = showMenu;
      boolean = true
    }
  })
