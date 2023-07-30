import React from "react";
import "./AllBook.css";
import Navbar from "../../components/Navbar/Navbar";
import DisplayBook from "../../components/DisplayBook/DisplayBook";

const AllBook = () => {
  return (
    <div className="App">
      <Navbar />
      <DisplayBook />
    </div>
  );
};

export default AllBook;
