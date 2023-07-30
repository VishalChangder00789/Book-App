import "./RightComponent.css";
import React from "react";
import BookComponent from "../BookComponent/BookComponent";

const RightComponent = ({ books }) => {
  return (
    <div className="RightComponent-Container">
      {books.map((book) => {
        return <BookComponent id={book.id} book={book} />;
      })}
    </div>
  );
};

export default RightComponent;
