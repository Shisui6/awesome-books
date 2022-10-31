// Imports
import { DateTime } from './modules/luxon.js';
import { library, Book } from './modules/book.js';
import {
  setFormBack, changeContentFromNew, addRemoveListener, appendBook, createBook,
} from './modules/form.js';
import { setListBack, changeContentFromList, displayEmpty } from './modules/list.js';
import toggleMenu from './modules/menu.js';
import { changeContentFromContact } from './modules/contact.js';

// Get all relevant elements from the DOM
const form = document.getElementById('form-id');
const listBtn = document.getElementById('list-btn');
const newBtn = document.getElementById('new-btn');
const contactBtn = document.getElementById('contact-btn');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close');
const menuAdd = document.getElementById('menu-add');
const menuContact = document.getElementById('menu-contact');
const menuList = document.getElementById('menu-list');
const time = document.getElementById('time');

// Add event listeners to menu buttons to open and close menu
menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Add event listener to new button to show form
newBtn.addEventListener('click', changeContentFromNew);
menuAdd.addEventListener('click', () => {
  toggleMenu();
  changeContentFromNew();
});

// Add event listener to contact button to show contact-info
contactBtn.addEventListener('click', changeContentFromContact);
menuContact.addEventListener('click', () => {
  toggleMenu();
  changeContentFromContact();
});

// Add event listener to list button to show library
listBtn.addEventListener('click', changeContentFromList);
menuList.addEventListener('click', () => {
  toggleMenu();
  changeContentFromList();
});

// Check if local storage exists on page load and use data to add books to DOM
if (localStorage.getItem('library')) {
  const libraryData = JSON.parse(localStorage.getItem('library'));
  libraryData.forEach((book) => {
    const newBook = new Book(book.id, book.title, book.author);
    library.push(newBook);
    appendBook(newBook);
    addRemoveListener(newBook);
  });
  displayEmpty();
  if (library.length >= 4) {
    setListBack();
  } else {
    setFormBack();
  }
}

// Add submit event listener to form to add book to local storage and DOM
form.addEventListener('submit', (e) => {
  e.preventDefault();
  createBook();
});

// Declare object to contain form data
const formData = {
  title: '',
  author: '',
};

// Configure form to update local storage on input change
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

titleInput.addEventListener('input', () => {
  formData.title = titleInput.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

authorInput.addEventListener('input', () => {
  formData.author = authorInput.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

// Check if local storage exists on page load and use data prefill form
if (localStorage.getItem('formData')) {
  const formValue = localStorage.getItem('formData');
  const formValueObj = JSON.parse(formValue);
  titleInput.value = formValueObj.title;
  authorInput.value = formValueObj.author;
}

time.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);