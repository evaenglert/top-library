
FORMOPEN = false;

let myLibrary = [];
index = 0;
harryPotter = new Book('J.K.Rowling', 'Harry Potter', 545, true);
grokkingAlgorithms = new Book('Aditya Bhargava', 'Grokking Algorithms', 354, false);
myLibrary.push(harryPotter);
myLibrary.push(grokkingAlgorithms);

console.log(myLibrary);

libraryDisplay = document.querySelector('.books');
newBookButton = document.querySelector('.new-book');

function BookCard(book) {
  //TODO: make this nice looking

  newElement = document.createElement('div');
  newElement.setAttribute('class', 'card');
  newElement.setAttribute('data', book.data);
  this.author = document.createElement('p');
  this.author.textContent = book.author;
  this.title = document.createElement('p');
  this.title.textContent = book.title;
  this.pages = document.createElement('p');
  this.pages.textContent = book.totalPages + " pages";
  this.haveRead = document.createElement('p');
  if (book.hasRead) {
    this.haveRead.textContent = "Have read this book";
  }
  else { this.haveRead.textContent = "Haven't read this book"; }

  this.removeButton = document.createElement('button');
  this.removeButton.textContent = 'Remove book';
  this.removeButton.addEventListener("click", (e) => { e.target.parentElement.remove() });


  this.switchElement = document.createElement('label');
  this.switchElement.setAttribute('class', 'switch');
  checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  if (book.hasRead) { checkBox.checked = true}

  slider = document.createElement('span');
  slider.setAttribute('class', 'slider round');

  checkBox.addEventListener('click', (e) => {
    book.hasRead = !book.hasRead;
    if (book.hasRead) {
      this.haveRead.textContent = "Have read this book";
    }
    else { this.haveRead.textContent = "Haven't read this book"; }
  });

  this.switchElement.appendChild(checkBox);
  this.switchElement.appendChild(slider);


  newElement.appendChild(this.author);
  newElement.appendChild(this.title);
  newElement.appendChild(this.pages);
  newElement.appendChild(this.haveRead);
  newElement.appendChild(this.removeButton);
  newElement.appendChild(this.switchElement);

  libraryDisplay.appendChild(newElement);
}

function updateLibaryDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    book = myLibrary[i];
    new BookCard(book);
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

function Book(author, title, totalPages, hasRead) {

  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.hasRead = hasRead;
  this.data = index;

  index = index + 1;
}

function addBookToLibrary() {
  // get the right info out of the form
  author = document.querySelector('#author').value;
  title = document.querySelector('#book-title').value;
  totalPages = document.querySelector('#pages').value;
  hasRead = document.querySelector('#has-read').value;

  newBook = new Book(author, title, totalPages, hasRead);
  myLibrary.push(newBook);

  new BookCard(newBook);
  closeForm();
  console.log(myLibrary);
}
