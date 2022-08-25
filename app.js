
harryPotter = new Book('J.K.Rowling', 'Harry Potter', 545, true);
grokkingAlgorithms = new Book('Aditya Bhargava', 'Grokking Algorithms', 354, false);

let myLibrary = [harryPotter, grokkingAlgorithms];
console.log(myLibrary);

libraryDisplay = document.querySelector('.main-content');
newBookButton = document.querySelector('.new-book');

function createBookCard(book) {
  newElement = document.createElement('p');
  newElement.textContent = book.author + " " + book.title;
  libraryDisplay.appendChild(newElement);
}
function updateLibaryDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    book = myLibrary[i];
    createBookCard(book);
  }
}

function newForm() {
// create new form here
}


updateLibaryDisplay();
newBookButton.addEventListener("click", newForm);



function Book(author, title, totalPages, hasRead) {
  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.hasRead = hasRead;
}

function addBookToLibrary(author, title, totalPages, hasRead) {
  // get the right info out of the form

  newBook = new Book(author, title, totalPages, hasRead);
  myLibrary.push(newBook);
  createBookCard(newBook);
}
