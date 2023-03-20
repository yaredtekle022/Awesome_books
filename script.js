var booklist = [];
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");
// not sure this is needed
class Book{
    constructor(title, author){
        this.title =  title;
        this.author = author;
    }

//     addBook() {
//     booklists.push({
//     id: booklists.length + 1,
//     title: this.title,
//     author: this.author,
// });
//     }
  saveToStorage() {
    localStorage.setItem('bookLists', JSON.stringify(booklists));
  } 
};

//************************************* */

function displayBooks() {
  document.getElementById("book-list-container").innerHTML = "";
  booklist.forEach((book) => {
    const bookItem = document.createElement('div');
    const booksTable = document.getElementById("book-list-container");
    bookItem.classList.add("book-item")
    bookItem.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="remove" id=${book.title}>Remove</button>
      <hr/>`;
      booksTable.appendChild(bookItem);
  });
}

function addBooks (ttle, athr) {
  const book = {title:"", author: ""};
  book.title = ttle;
  book.author = athr;
  booklist.push(book)
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(bookTitle.value !=="" && author.value !== ""){
    addBooks(bookTitle.value, author.value);
  form.reset();
  displayBooks();
  }else {
    alert("fill the required fields before submiting")
  }
  
  // let cntr = 0;
  // const createdBook = new Book(bookTitle.value, author.value);
  // console.log(createdBook)
  // booklist.push(createdBook)
});

