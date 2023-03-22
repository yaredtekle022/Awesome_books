/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */

let booklist = [];
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form');
const bookTitle = document.getElementById('book-title');
const author = document.getElementById('author');

class Book {
  updateStorage(data) {
    localStorage.setItem('bookLists', JSON.stringify(data));
  }

  // Remove title function

  removeBook(title) {
    const rm = new Book();
    for (let i = booklist.length - 1; i >= 0; i -= 1) {
      if (booklist[i].title === title) {
        booklist.splice(i, 1);
        rm.updateStorage(booklist);
        break;
      }
    }
  }

  // Function to display the book's list

  displayBooks() {
    document.getElementById('book-list-container').innerHTML = '';
    booklist.forEach((book) => {
      const bookItem = document.createElement('div');
      const booksTable = document.getElementById('book-list-container');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
      <div class="container">
          <p>${book.title}, by ${book.author}</p>
          <button class="remove" id=${book.title}>Remove</button>
      </div>
      <hr/>
      `;
      booksTable.appendChild(bookItem);

      const removeBtn = bookItem.querySelector('.remove');
      removeBtn.addEventListener('click', () => {
        const rm = new Book();
        rm.removeBook(book.title);
        rm.displayBooks();
      });
    });
  }

  loadFromStorage() {
    const ld = new Book();
    const storedBookList = localStorage.getItem('bookLists');
    if (storedBookList) {
      booklist = JSON.parse(storedBookList);
      ld.displayBooks();
    }
  }

  // Function to add new books
  addBooks(ttle, athr) {
    const bk = new Book();
    const book = { title: '', author: '' };
    book.title = ttle;
    book.author = athr;
    booklist.push(book);
    bk.updateStorage(booklist);
  }
}
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

// nav bar

const bookList = document.querySelector('.book-list');
const addList = document.querySelector('.add-book');
const contactList = document.querySelector('.contact-list');

const allSection = document.getElementById('book-list-container');
const inputSection = document.getElementById('form');
const contactSection = document.querySelector('.contact');

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
});

contactList.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
});
