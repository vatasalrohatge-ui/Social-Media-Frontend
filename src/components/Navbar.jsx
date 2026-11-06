import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id='navbar'>
        <h2 id='brand-name'>Shot Novel</h2>
        <h4>
            <Link to="/create-post" id='create-post'>Create A Post</Link>
        </h4>
    </div>
  )
}

export default Navbar