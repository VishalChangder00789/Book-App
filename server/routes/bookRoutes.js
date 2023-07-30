const express = require("express");
const router = express.Router();
const booksController = require("../controllers/BooksController");

router
  .route("/")
  .get(booksController.getBooks)
  .post(booksController.createBook);

router
  .route("/:id")
  .get(booksController.getBook)
  .patch(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = router;
