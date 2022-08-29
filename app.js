
FORMOPEN = false;

let myLibrary = [];
harryPotter = new Book('J.K.Rowling', 'Harry Potter', 545, true, myLibrary);
grokkingAlgorithms = new Book('Aditya Bhargava', 'Grokking Algorithms', 354, false, myLibrary);
myLibrary.push(harryPotter);
myLibrary.push(grokkingAlgorithms);

console.log(myLibrary);

libraryDisplay = document.querySelector('.books');
newBookButton = document.querySelector('.new-book');

function createBookCard(book) {
  //TODO: make this nice looking


  newElement = document.createElement('div');
  newElement.setAttribute('class', 'card');
  author = document.createElement('p');
  author.textContent = book.author;
  title = document.createElement('p');
  title.textContent = book.title;
  pages = document.createElement('p');
  pages.textContent = book.totalPages + " pages";
  haveRead = document.createElement('p');
  if (book.hasRead) {
    haveRead.textContent = "Have read this book";
  }
  else { haveRead.textContent = "Haven't read this book";}

  removeButton = document.createElement('button');
  removeButton.textContent = 'Remove book';

  newElement.appendChild(author);
  newElement.appendChild(title);
  newElement.appendChild(pages);
  newElement.appendChild(haveRead);
  newElement.appendChild(removeButton);

  libraryDisplay.appendChild(newElement);
}

function updateLibaryDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    book = myLibrary[i];
    createBookCard(book);
  }
}

function newForm() {
  if (FORMOPEN == false) {
    FORMOPEN = true;
    // create new form here
    form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'example.com/path');

    //author
    authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author');
    authorLabel.textContent = 'Author:';

    authorInput = document.createElement('input');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('type', 'text');


    //title
    titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'book-title');
    titleLabel.textContent = 'Title:';

    titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'book-title');
    titleInput.setAttribute('type', 'text');

    //pages
    pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.textContent = 'Pages:';

    pagesInput = document.createElement('input');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('type', 'int');

    //was read
    readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'has-read');
    readLabel.textContent = 'Have you read this book?';

    readInput = document.createElement('input');
    readInput.setAttribute('id', 'has-read');
    readInput.setAttribute('type', 'checkbox');

    //submit button
    submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Add book';

    //close button
    closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.textContent = 'Close form';


    libraryDisplay.appendChild(form);

    form.appendChild(authorLabel);
    form.appendChild(authorInput);

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);

    form.appendChild(readLabel);
    form.appendChild(readInput);

    form.appendChild(submitButton);
    submitButton.addEventListener("click", addBookToLibrary);

    form.appendChild(closeButton);
    closeButton.addEventListener("click", closeForm);
  }
}

function closeForm() {
  form = document.querySelector('form');
  form.remove();
  FORMOPEN = false;
}

updateLibaryDisplay();
newBookButton.addEventListener("click", newForm);

function Book(author, title, totalPages, hasRead, myLibrary) {

  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.hasRead = hasRead;
  this.data = myLibrary.length;
}

function addBookToLibrary() {
  // get the right info out of the form
  author = document.querySelector('#author').value;
  title = document.querySelector('#book-title').value;
  totalPages = document.querySelector('#pages').value;
  hasRead = document.querySelector('#has-read').value;

  newBook = new Book(author, title, totalPages, hasRead, myLibrary);
  myLibrary.push(newBook);
  // newBook.data = myLibrary.length;
  createBookCard(newBook);
  closeForm();
  console.log(myLibrary);
}
