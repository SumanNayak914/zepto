import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import DealStore from "./pages/DealStore";
import Cart from "./pages/Cart";
import BottomNav from "./components/BottomNav";

const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/category", "/deals", "/cart"];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dealstore" element={<DealStore />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      {location.pathname === "/" && <BottomNav />}
    </>
  );
};

export default App;
