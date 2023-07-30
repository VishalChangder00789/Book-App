import React, { useEffect, useState } from "react";
import "./DisplayBook.css";
import { getBooks } from "../../api/getAllBooks";
import LeftComponent from "../LeftComponent/LeftComponent";
import RightComponent from "../RightComponent/RightComponent";

const DisplayBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((item) => {
      setBooks(item);
    });
  }, []);

  return (
    <div className="DisplayBookContainer">
      {/* <LeftComponent /> */}
      <RightComponent books={books} />
    </div>
  );
};

export default DisplayBook;
