
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import Category from './pages/Category';
import DealStore from './pages/DealStore';
import Cart from './pages/Cart';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <>
       <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category/>} />
      <Route path="/dealstore" element={<DealStore/>} />
      <Route path="/cart" element={<Cart/>} />
      
    </Routes>
  <Footer/>
  <BottomNav/>
  </BrowserRouter>
    </>
  )
}

export default App;