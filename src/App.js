import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Shop from "./pages/Shop";


const App = () => {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
};

export default App;
