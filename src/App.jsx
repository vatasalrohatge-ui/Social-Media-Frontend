import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import SignIn from './pages/signIn'
import LogIn from './pages/logIn'
import Feed from './pages/feed'
import Create from './pages/create-post'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/logIn" replace />} />
        <Route path="/logIn" element= {<LogIn />}/>
        <Route path="/signIn" element= {<SignIn/>}/>
        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App