/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
import addBooks from './modules/addBooks.js';
import Book from './modules/book.js';
import displayBooks from './modules/displayBooks.js';
import loadFromStorage from './modules/loadFromStorage.js';
import removeBook from './modules/removeBook.js';
import {booklist, submitBtn, form, bookTitle, author, bookList, addList, contactList, allSection, inputSection, contactSection} from './modules/var.js'
// Event listener to add books

submitBtn.addEventListener('click', (e) => {
  const book = new Book();
  e.preventDefault();
  if (bookTitle.value !== '' && author.value !== '') {
    book.addBooks(bookTitle.value, author.value);
    form.reset();
    book.displayBooks();
  } else {
    alert('fill the required fields before submiting!');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const load = new Book();
  load.loadFromStorage();
});

bookList.addEventListener('click', (e) => {
  e.preventDefault();

  allSection.style.display = 'block';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'block';
  contactSection.style.display = 'none';
  document.querySelector('.adding-books').style.display = 'block';
});

contactList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'block';
});
