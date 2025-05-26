import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './redux/Auth/Navigation'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Registration from './pages/Registration'
// import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navigation/>
      <main className='py-3'>
        <Outlet/>
        
      </main>

      {/* <Registration/>
      <Login/> */}


    </div>
  )
}

export default App