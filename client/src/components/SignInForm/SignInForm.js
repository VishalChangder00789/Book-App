import React, { useState } from "react";
import "./SignInForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // error
  const [error, setError] = useState("");

  const handleSignInSubmit = async (
    e,
    firstName,
    lastName,
    email,
    phone,
    password
  ) => {
    e.preventDefault();
    const data = await axios
      .post("http://localhost:5000/api/v1/users/", {
        firstName,
        lastName,
        email,
        phone,
        password,
      })
      .catch((error) => {
        if (error) {
          setError(error.response.message);
        }
      });

    console.log(data);
    navigate("/");
  };

  return (
    <div className="SignInFormContainer">
      <form className="SignInFormContainer-container">
        <input
          className="Inputs"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
        />

        <input
          className="Inputs"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
        />

        <input
          className="Inputs"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email name"
        />

        <input
          className="Inputs"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone name"
        />

        <input
          className="Inputs"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button
          className="FormButton"
          onClick={(e) =>
            handleSignInSubmit(e, firstName, lastName, email, phone, password)
          }
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
