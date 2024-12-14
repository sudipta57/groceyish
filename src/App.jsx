import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FetureDetails from "./component/FetureDetails";
import Footer from "./component/Footer";
import LoadingWrapper from "./component/LoadingWrapper";
import Login from "./component/Login";
import TopBar from "./component/Navbar";
import PageNotFound from "./component/PageNotFound";
import ProductDetails from "./component/ProductDetails";
import Register from "./component/Register";
import ScrollToTop from "./component/ScrolltoTop";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductQuick from "./pages/ProductQuick";
import ShopFilter from "./pages/ShopFilter";
import UserDashboard from "./pages/UserDashboard";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <LoadingWrapper>
        <TopBar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/log" element={<Login />} />
          <Route path="/user_dash" element={<UserDashboard />} />
          <Route path="/product_quick" element={<ProductQuick />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-filter" element={<ShopFilter />} />
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/product-details/:categoryId"
            element={<ProductDetails />}
          />
          <Route
            path="/feture-details/:categoryId"
            element={<FetureDetails />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/mycart" element={<MyCart />} />
        </Routes>
        <Footer />
      </LoadingWrapper>
    </Router>
  );
};

export default App;
