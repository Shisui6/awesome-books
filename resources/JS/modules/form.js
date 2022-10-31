// Imports
import load from './load.js';
import { library, Book } from './book.js';
import { displayEmpty, setListBack } from './list.js';

// Get all relevant elements from the DOM
const booksSection = document.getElementById('library');
const listBtn = document.getElementById('list-btn');
const newBtn = document.getElementById('new-btn');
const contactBtn = document.getElementById('contact-btn');
const listSection = document.getElementById('list-id');
const addSection = document.getElementById('add-id');
const contactSection = document.getElementById('contact-id');
const main = document.getElementById('content');
const footer = document.getElementById('footer');

// Function to generate random id's when called
const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

// Function to set background styling for form and contact section
export const setFormBack = () => {
  main.style.height = 'calc(100vh - 50px)';
  footer.style.position = 'absolute';
  footer.style.bottom = '0';
};

// Function to change change page content when new button is clicked
export const changeContentFromNew = () => {
  load();
  setFormBack();

  if (listSection.classList.contains('show')) {
    listSection.classList.replace('show', 'hide');
    listBtn.classList.remove('active');
    addSection.classList.replace('hide', 'show');
    main.classList.replace('list-back', 'add-back');
    newBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    addSection.classList.replace('hide', 'show');
    main.classList.replace('contact-back', 'add-back');
    newBtn.classList.add('active');
  }
};

// Function to add click event to remove button remove book from DOM
export const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    if (library.length === 2) {
      setFormBack();
    }
    localStorage.setItem('library', JSON.stringify(library));
    if (!library.length) {
      displayEmpty();
    }
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};

// Function to append book to DOM
export const appendBook = (book) => {
  const bookElement = document.createElement('div');
  bookElement.id = `book-${book.id}`;
  bookElement.className = 'book';
  bookElement.innerHTML = `
    <p>${book.title} by ${book.author}</p>
    <button id="remove-${book.id}" class="remove"><i class="fa-solid fa-trash-can"></i></button>
  `;

  booksSection.appendChild(bookElement);
  if (library.length === 1) {
    displayEmpty();
  }
};

// Add submit event listener to form to add book to local storage and DOM
export const createBook = () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const book = new Book(uid(), bookTitle.value, bookAuthor.value);
  book.addBook();
  localStorage.setItem('library', JSON.stringify(library));
  appendBook(book);
  addRemoveListener(book);
  localStorage.removeItem('formData');
  bookAuthor.value = '';
  bookTitle.value = '';

  load();
  addSection.classList.replace('show', 'hide');
  newBtn.classList.remove('active');
  listSection.classList.replace('hide', 'show');
  main.classList.replace('add-back', 'list-back');
  listBtn.classList.add('active');
  if (library.length >= 4) {
    setListBack();
  }
};