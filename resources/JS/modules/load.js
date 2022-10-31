// Get all relevant elements from the DOM
const main = document.getElementById('content');
const loader = document.getElementById('load');

// Function to show loading screen
const load = () => {
  main.classList.add('hide');
  loader.classList.remove('hide');
  setTimeout(() => {
    loader.classList.add('hide');
    main.classList.remove('hide');
  }, 1000);
};

export default load;