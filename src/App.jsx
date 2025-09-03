import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import DealStore from "./pages/DealStore";
import Cart from "./pages/Cart";
import BottomNav from "./components/BottomNav";
import Cafe from "./pages/Navcategories/Cafe";
import Toy from "./pages/Navcategories/Toy";
import Fresh from "./pages/Navcategories/Fresh";
import Electronics from "./pages/Navcategories/Electronics";
import Mobiles from "./pages/Navcategories/Mobiles";
import Beauty from "./pages/Navcategories/Beauty";
import Fashion from "./pages/Navcategories/Fashion";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Homecategory from "./pages/Navcategories/Homecategory";



const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/category", "/deals", "/cart","/login"];
  const hideFooterRoutes = ["/deals", "/cart", "/profile","/login"];
  const bottomnavRoutes = ["/", "/deals", "/cart", "/profile","/toy","/fresh","/electronics","/mobiles","/beauty","/fashion","/cafe"];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dealstore" element={<DealStore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/home" element={<Homecategory />} />
        <Route path="/toy" element={<Toy />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productpage" element={<Products />} />
     
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      {/* <Footer /> */}
      {bottomnavRoutes.includes(location.pathname) && <BottomNav />}
      </>
        );
}
   

    export default App;

  