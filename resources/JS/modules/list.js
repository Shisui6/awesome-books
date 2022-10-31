// Imports
import load from './load.js';
import { library } from './book.js';

// Get all relevant elements from the DOM
const empty = document.getElementById('empty-id');
const newBtn = document.getElementById('new-btn');
const contactBtn = document.getElementById('contact-btn');
const listSection = document.getElementById('list-id');
const addSection = document.getElementById('add-id');
const contactSection = document.getElementById('contact-id');
const main = document.getElementById('content');
const footer = document.getElementById('footer');

// Function to set background styling for list section
export const setListBack = () => {
  main.style.height = '100%';
  footer.style.position = 'static';
  footer.style.bottom = '';
};

// Function to change change page content when list button is clicked
export const changeContentFromList = () => {
  load();

  if (library.length >= 4) {
    setListBack();
  }

  if (addSection.classList.contains('show')) {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.classList.replace('add-back', 'list-back');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.classList.replace('contact-back', 'list-back');
  }
};

// Function to show / hide empty library message
export function displayEmpty() {
  empty.classList.toggle('hide');
}
