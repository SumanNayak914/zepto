import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import React from 'react'

const App = () => {
  return (
    <>
       <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App;


