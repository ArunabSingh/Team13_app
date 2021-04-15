const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// click listener for the menu button in the navbar.
// show the menu if it is hidden when clicked and vice versa
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})