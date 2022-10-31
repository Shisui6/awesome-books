// Imports
import load from './load.js';

// Get all relevant elements from the DOM
const listBtn = document.getElementById('list-btn');
const newBtn = document.getElementById('new-btn');
const contactBtn = document.getElementById('contact-btn');
const listSection = document.getElementById('list-id');
const addSection = document.getElementById('add-id');
const contactSection = document.getElementById('contact-id');
const main = document.getElementById('content');
const footer = document.getElementById('footer');

// Function to set background styling for form and contact section
export const setFormBack = () => {
  main.style.height = 'calc(100vh - 50px)';
  footer.style.position = 'absolute';
  footer.style.bottom = '0';
};

// Function to change change page content when contact button is clicked
export const changeContentFromContact = () => {
  load();
  setFormBack();

  if (listSection.classList.contains('show')) {
    listSection.classList.replace('show', 'hide');
    listBtn.classList.remove('active');
    contactSection.classList.replace('hide', 'show');
    main.classList.replace('list-back', 'contact-back');
    contactBtn.classList.add('active');
  } else {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    contactSection.classList.replace('hide', 'show');
    main.classList.replace('add-back', 'contact-back');
    contactBtn.classList.add('active');
  }
};