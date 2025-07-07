const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (username && password) {
    if (!isValid(username)) {
      users.push({ username: username, password: password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  return res.send(JSON.stringify(books, null, 4))
});

// Task 10: Get book list using Promise and async-await with Axios
public_users.get('/books', async function (req, res) {
  try {
    const getBooks = () => {
      return new Promise((resolve, reject) => {
        resolve(books);
      });
    };
    const bookList = await getBooks();
    return res.status(200).send(JSON.stringify(bookList, null, 4));
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving books' });
  }
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const { isbn } = req.params;
  const book = Object.values(books).find(b => b.isbn === isbn);
  return book
    ? res.status(200).json(book)
    : res.status(404).json({ message: "Book not found" });
});

// Task 11: Get book details based on ISBN using Promise
public_users.get('/book/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const getBookByISBN = new Promise((resolve, reject) => {
    const book = Object.values(books).find(b => b.isbn === isbn);
    if (book) {
      resolve(book);
    } else {
      reject("Book not found");
    }
  });

  getBookByISBN
    .then(book => res.status(200).send(JSON.stringify(book, null, 4)))
    .catch(err => res.status(404).json({ message: err }));
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const { author } = req.params;
  const filtered = Object.values(books).filter(book => book.author === author);
  return filtered ? res.status(200).json(filtered) : res.status(404).json({ message: "Book not found" });
});

// Task 12: Get book details based on Author using async-await
public_users.get('/book/author/:author', async (req, res) => {
  try {
    const author = req.params.author;
    const getBooksByAuthor = () => {
      return new Promise((resolve, reject) => {
        const filtered = Object.values(books).filter(book => book.author === author);
        resolve(filtered);
      });
    };

    const result = await getBooksByAuthor();
    return res.status(200).send(JSON.stringify(result, null, 4));
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving books by author' });
  }
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
   const { title } = req.params;
  const filtered = Object.values(books).filter(book => book.title === title);
  return res.status(200).json(filtered);
});


// Task 13: Get book details based on Title using async-await
public_users.get('/book/title/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const getBooksByTitle = () => {
      return new Promise((resolve, reject) => {
        const filtered = Object.values(books).filter(book => book.title === title);
        resolve(filtered);
      });
    };

    const result = await getBooksByTitle();
    return res.status(200).send(JSON.stringify(result, null, 4));
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving books by title' });
  }
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  let isbn = req.params.isbn;
  let filtered_books = [];
  for (let key in books) {
    if (books[key].isbn === isbn) {
      filtered_books.push(books[key].reviews);
    }
  }
  return res.send(JSON.stringify(filtered_books, null, 4));
});

module.exports.general = public_users;
