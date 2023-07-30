import React from "react";
import "./Navbar.css";
import bookLogo from "./../../asset/book.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <Link to="/" className="LinkTag">
        <div className="logo">
          <img className="logo-img" src={bookLogo} />
          BOOK APP
        </div>
      </Link>
      <div className="right-content">
        <Link to="/createBook" className="LinkTag-Right">
          <div className="create">CREATE BOOK</div>
        </Link>
        <Link to="/about" className="LinkTag-Right">
          <div className="about">ABOUT</div>
        </Link>
        <Link to="/signUp" className="LinkTag-Right">
          <div className="signIn">SIGN UP</div>
        </Link>
        <Link to="/signIn" className="LinkTag-Right">
          <div className="signIn">SIGN IN</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
