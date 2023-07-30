import "./BookComponent.css";
import React from "react";

const BookComponent = ({ book }) => {
  return (
    <div id={book.id} className="BooksContainer">
      <div className="BooksContainer-ImageContainer">
        {!book.image ? (
          ""
        ) : (
          <img
            src={book.image}
            className="BooksContainer-ImageContainer-Image"
          />
        )}
      </div>
      <div className="BooksContainer-Details">
        <div className="BooksContainer-Name">BOOK NAME : {book.name}</div>
        <div className="BookContainer-Pages">
          NUMBER OF PAGES : {book.pages}
        </div>
        <div className="BooksContainer-Genre">GENRE : {book.genre}</div>
        <div className="BooksContainer-Author">AUTHOR : {book.author}</div>
      </div>
    </div>
  );
};

export default BookComponent;
