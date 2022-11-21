import React, { Fragment } from 'react'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import NotFound from './pages/NotFound';
import "react-toastify";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App
