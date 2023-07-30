const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
  },

  pages: {
    type: Number,
  },
  genre: {
    type: String,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
  },
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
