import axios from "axios";
export const getBooks = async () => {
  const books = await axios.get("http://localhost:5000/api/v1/books/");
  return books.data.data.books;
};
