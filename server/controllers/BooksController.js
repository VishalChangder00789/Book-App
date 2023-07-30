// Import the model
const BookModel = require("../models/bookModel");

exports.getBooks = async (req, res, next) => {
  const books = await BookModel.find();
  res.status(201).json({
    data: {
      books,
    },
  });
};

exports.createBook = async (req, res, next) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json({
      status: "Success",
      messasge: "Book Created",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getBook = async (req, res, next) => {
  const book = await BookModel.findById(req.params.id);

  res.status(201).json({
    status: "Success",
    data: {
      book,
    },
  });
};

exports.updateBook = async (req, res, next) => {
  const updatedBook = await BookModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      updatedBook,
    },
  });
};

exports.deleteBook = async (req, res, next) => {
  await BookModel.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "sucess",
    message: "Deleted Successfully",
  });
};
