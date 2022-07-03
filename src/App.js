import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-wind";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const Container = styled.div`
    .px-32;
`;

export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/join-us" element={<JoinUs />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}
