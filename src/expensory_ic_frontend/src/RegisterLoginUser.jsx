import React, { useState } from "react";
import { expensory_ic_backend } from "../../declarations/expensory_ic_backend";
import { useNavigate } from "react-router-dom";

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
            const loginRes = await expensory_ic_backend.verifyuser(username, password);
        if(loginRes == "Success"){
            console.log("Login Successful");
            navigate('/app');
        } else {
            console.log("Login Failed");
        }
    } else {
        if (password === confirmPassword) {
            const signUpRes = await expensory_ic_backend.registerUser(username, password);
            if(signUpRes == true){
                console.log("Signup Successful");
                handleClick();
            } else {
                console.log("Username already exists");
            }
        } else {
            console.log("Confirm Password does not match Password");
        }
    }
};


  return (
    <>
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
        <button
          type="submit"
          onClick={handleSubmit}
        >
          {isLoggingIn ? "Login" : "Sign Up"}
        </button>
      </form>
      {isLoggingIn ? (
        <p onClick={handleClick}>Don't have an account?</p>
      ) : (
        <p onClick={handleClick}>Already have an account?</p>
      )}
    </>
  );
};

export default RegisterLoginUser;
