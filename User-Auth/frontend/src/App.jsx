import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './redux/Auth/Navigation'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from './pages/Registration';
import Login from './pages/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  return (
   

    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Registration/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App