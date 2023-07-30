import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import LogInForm from "../../components/LogInForm/LogInForm";

const SignIn = () => {
  return (
    <div className="App">
      <Navbar />
      <LogInForm />
    </div>
  );
};

export default SignIn;
