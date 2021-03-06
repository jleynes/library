// Javascript
let myLibrary = [];


// DOM
const table = document.getElementById("bookTable");


// constructor for the book object
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.logBook = function() {
        console.log(name);
    }
}

// function that pushes book to library array
function addBookToLibrary(name, author, pages, read) {
    let b = new Book(name, author, pages, read);
    myLibrary.push(b);
}

// function to display books in table element 
// need to debug
function displayBooks() {
  for (i = 0; i <= myLibrary.length + 1; i++) {
    let row = table.insertRow(i);
    let cell = row.insertCell(i);

    row.innerHTML = myLibrary[i].name;
  }
}
