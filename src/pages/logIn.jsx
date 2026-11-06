import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './logIn.css';
const LogIn = () => {
    const [Message, setMessage] = useState("")
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
    try {
      const response = await axios.post('https://social-media-ded5.onrender.com/api/log-in', {
        username: e.target.username.value,
        password: e.target.password.value,
      },
      {
          withCredentials: true,
      }
      )
      console.log('Login successful:', response.data)
      if (response.status === 200) {
        setMessage("Login successful.");
        setTimeout(() =>{
          navigate("/feed");
        }, 2000)
      }
    } catch (error) {
      if (error.response?.status === 403) {
        setMessage("User not found or invalid password.");
      } 
   }
  }

  return (
    <div className="log-in-container">
      <div className="log-header">
      <h1 id="log-in-title">Login</h1>
      <Link to="/signIn" id="sign-up-link">Sign Up</Link>
      </div>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" required id="username"/>
        <br />
        <br />
        <br />
        <input type="text" name="password" placeholder="Password" required id="password"/>   
        <br />
        <br />
        <br />
        <br />
        <button id="log-in-btn" type="submit">Log In</button>
      </form>
        <br />
        <br />
        <p>{Message}</p>
    </div>
  )
}

export default LogIn