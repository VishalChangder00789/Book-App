import React from "react";
import "./LogInForm.css";
import axios from "axios";
import { useState } from "react";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log("Something");
  };

  return (
    <div className="LogInFormContainer">
      <form className="SignInFormContainer-container">
        <input
          className="Inputs"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email "
        />

        <input
          className="Inputs"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter paswword"
        />

        <button
          className="FormButton"
          onClick={(e) => handleLogIn(e, email, password)}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
