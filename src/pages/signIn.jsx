import React, { useState } from 'react'
import axios from 'axios'
import './signIn.css';
import { Link, useNavigate } from 'react-router-dom';
const SignIn = () => {
  const navigate = useNavigate();
    const [Message, setMessage] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
      const response = await axios.post('https://social-media-ded5.onrender.com/api/register', {
        username: e.target.username.value,
        password: e.target.password.value,
      },
      {
          withCredentials: true,
      }
      )
      console.log('Sign in successful:', response.data)
      if (response.status === 201) {
        setMessage("User Created Successfully.");
        setTimeout(() =>{
          navigate("/feed");
        }, 2000)
      }
    } catch (error) {
      if (error.response?.status === 403) {
        setMessage("User Already Exists.");
      } 
   }
  }

  return (
    <div className="sign-in-container">
      <div className="header">
      <h1 id="sign-in-title">Sign In</h1>
      <Link to="/logIn" id="login">Log In</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required id="username"/>
        <br />
        <br />
        <br />
        <input type="text" name="password" placeholder="Password" required id="password"/>   
        <br />
        <br />
        <br />
        <br />
           <button id="sign-in-btn" type="submit" >Sign In</button>
      </form>
        <br />
        <br />
        <p>{Message}</p>
    </div>
  )
}

export default SignIn