import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import ListFavorited from "./pages/ListFavorited";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "./components/SearchBar";


function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">


      <ToastContainer />
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
    
    //  <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />


        <Route path="/admin/product" element={<ProductPage />} />
        <Route path="/admin/order" element={<OrderPage />} />
        <Route path="/list-favorited" element={<ListFavorited />} />

      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
