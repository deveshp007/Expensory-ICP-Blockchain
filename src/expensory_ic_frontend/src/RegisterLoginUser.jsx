import React, { useState } from "react";
import { expensory_ic_backend } from "../../declarations/expensory_ic_backend";
import { useNavigate } from "react-router-dom";
import './RegisterLoginUser.css'; 
import logo from '../assets/logo.png';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const RegisterLoginUser = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = () => {
    setIsLoggingIn(!isLoggingIn);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoggingIn) {
      const loginRes = await expensory_ic_backend.verifyuser(
        username,
        password
      );
      if (loginRes == "Success") {
        toast.success("Login Successful");
        navigate("/app");
      } else {
        toast.error("Login Failed - Invalid Credentials");
      }
    } else {
      if (password === confirmPassword) {
        const signUpRes = await expensory_ic_backend.registerUser(
          username,
          password
        );
        if (signUpRes == true) {
          toast.success("Signup Successful");
          handleClick();
        } else {
          toast.error("Username already exists");
        }
      } else {
        toast.error("Confirm Password does not match Password");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="logo-column">
        <img src={logo} alt="Your Logo" />
        <h1>Expensory</h1>
        <h3 className="web-txt-auth">
          A simple, web-based application for tracking expenses, built on the
          ICP blockchain.
        </h3>
      </div>
      <div className="form-column">
        {isLoggingIn ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLoggingIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <button type="submit" onClick={handleSubmit}>
            {isLoggingIn ? "Login" : "Sign Up"}
          </button>
        </form>
        {isLoggingIn ? (
          <p onClick={handleClick}>Don't have an account?</p>
        ) : (
          <p onClick={handleClick}>Already have an account?</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterLoginUser;
