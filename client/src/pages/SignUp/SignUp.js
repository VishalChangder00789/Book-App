import React from "react";
import "./SignUp.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInForm from "../../components/SignInForm/SignInForm";

const SignIn = () => {
  return (
    <div className="App">
      <Navbar />
      <SignInForm />
    </div>
  );
};

export default SignIn;
