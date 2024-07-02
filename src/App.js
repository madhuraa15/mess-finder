import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Menu></Menu>
      <Products></Products>
      <Review></Review>
      <Contact></Contact>
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
};

export default App;