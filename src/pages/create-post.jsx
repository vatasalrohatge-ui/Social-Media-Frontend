import React from 'react'
import  './create-post.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate()
    const [message, setMessage] = React.useState("")
    const MAX_FILE_SIZE = 5242880 

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file && file.size > MAX_FILE_SIZE) {
            setMessage("File Exceeds Maximum Size Limit of 5MB")
        } else {
            setMessage("")
        }
    }

    const  handleCreatePost = async (e) => {
        e.preventDefault()
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const response = await axios.post("https://social-media-ded5.onrender.com/api/file/create-posts", formData, {  
                withCredentials: true,          
            })
            if (response.status === 201) {
                setMessage("Post Created Successfully")
            }
            setTimeout(() => {
                navigate("/feed")
            }, 1500)
            e.target.reset()
        } catch (error) {
            if (error.response?.status === 403) {
                setMessage("User Not Logged In")
            }
            if (error.response?.status === 400) {
                setMessage("File Exceeds Maximum Size Limit of 5MB")
            }
            console.error("Error creating post:", error)
        }
    }



  return (
    <div>
        <div id='create-post-navbar'>
            <h2 id='create-brand-name'>Shot Novel</h2>
            <h3 id="tagline">Create Your Shot On Shot Novel</h3>

        </div>

        <div className="input-container">
            <form onSubmit={handleCreatePost} id='create-post-form'>
                <input type="file" name="file" id="file" accept="image/*" required/>
                <input type="text" name="caption" id="caption" placeholder='Caption'required />
                <button type="submit" id='submit-post'>Create Post</button>
            </form>
            <p>{message}</p>
            {message === "User Not Logged In" && (
                <div>
                    <p>Please Log In to Create Post</p>
                    <Link to="/logIn">Click Here to Log In or Sign Up</Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default Create