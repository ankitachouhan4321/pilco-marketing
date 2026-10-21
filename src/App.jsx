import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PlasticPallets from "./pages/PlasticPallets";
import CableTrayFittings from "./pages/CableTrayFittings";


import Footer from "./component/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plastic-pallets" element={<PlasticPallets />} />
        <Route path="/cable-tray-fittings" element={<CableTrayFittings />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;
