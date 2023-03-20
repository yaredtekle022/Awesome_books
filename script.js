let booklists = [];
class Book{
    constructor(title, author){
        this.title =  title;
        this.author = author;
    }
    addBook() {
booklists.push({
    id: booklists.length + 1,
    title: this.title,
    author: this.author,
});
    }
  saveToStorage() {
    localStorage.setItem('bookLists', JSON.stringify(booklists));
  } 
}