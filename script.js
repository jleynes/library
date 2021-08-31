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

// function to add book to libary array
// need to debug 
function displayBooks() {
  for (i = 0; i <= myLibrary.length; i++) {
    let row = table.insertRow(i);
    let cell = row.insertCell(i);

    cell.innerHTML = JSON.stringify(myLibrary);
  }
}
