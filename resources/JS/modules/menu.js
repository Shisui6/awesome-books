// Get all relevant elements from the DOM
const menu = document.getElementById('menu-id');

// Function to hide and show mobile menu
const toggleMenu = () => {
  menu.classList.toggle('hide');
};

export default toggleMenu;