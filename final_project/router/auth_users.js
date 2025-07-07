const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];
// let users = require("./auth_users.js").users;

const isValid = (username)=>{ //returns boolean
  let userswithsamename = users?.filter((user)=>{
    return user.username === username
  });if(userswithsamename.length > 0){
    return true;
  } else {
    return false;
  }
  return false;

}

const authenticatedUser = (username,password)=>{ //returns boolean
  console.log(users, 22)
  let userswithsamename = users?.filter((user)=>{
    return user.username === username
  });
  console.log(userswithsamename)
  if(userswithsamename && userswithsamename.length > 0){
    return userswithsamename[0].password == password;
  }
  return false;


}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (authenticatedUser(username, password)) {
    // Create access token
    const accessToken = jwt.sign(
      { username },        // Store only minimal safe info in token
      'access',            // Secret key
      { expiresIn: '1h' }  // Valid for 1 hour
    );

    // Optionally store in session
    req.session.authorization = {
      accessToken,
      username
    };

    // Return token in response
    return res.status(200).json({
      message: "User successfully logged in",
      accessToken,
      username
    });
  } else {
    return res.status(401).json({ message: "Invalid login. Check username and password." });
  }
});


// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const { comment, rating } = req.body;
  const {username} = req.user;
  if (!username) {
    return res.status(403).json({ message: "User not logged in" });
  }

  if (!comment || !rating) {
    return res.status(400).json({ message: "Comment and rating are required" });
  }

  const book = Object.values(books).find(b => b.isbn === isbn);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

 
  const isUpdate = !!book.reviews[username];

  book.reviews[username] = {
    username,
    rating,
    comment
  };

  return res.status(200).json({
    message: isUpdate ? "Review updated successfully" : "Review added successfully",
    review: book.reviews[username]
  });
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const {username} = req.user;
  if (!username) {
    return res.status(403).json({ message: "User not logged in" });
  }

  const book = Object.values(books).find(b => b.isbn === isbn);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  console.log(book)

  if (!book.reviews[username]) {
    return res.status(404).json({ message: "Review not found" });
  }

  delete book.reviews[username];

  return res.status(200).json({ message: "Review deleted successfully" });
})

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
