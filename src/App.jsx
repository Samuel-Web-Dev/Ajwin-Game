import React from 'react'
import './App.css'
import Intro from './pages/Intro/Intro'
import Login from './component/sign-in/login'
import Register from './component/register/register'
import Error from './component/error/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
     <Router>
       <Routes>
        <Route path='/' element={<Intro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
       </Routes>
     </Router>
  )
}

export default App