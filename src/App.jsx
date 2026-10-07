import React from 'react';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from '/src/pages/Contact';

import Footer from './component/footer';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer/>
    </>
  );
};

export default App;


// https://www.pilcomarketing.com/

// https://preview.themeforest.net/item/dustrium-industrial-manufacturing-elementor-pro-template-kit/full_screen_preview/43193361