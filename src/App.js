import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext, UserProvider } from "./components/UserContext";

const App = () => {

  

  const [showNav, setShowNav] = useState(true)

  return (
    <UserProvider>
      <BrowserRouter>
       
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/details" element={<Details/>} /> */}
            <Route path="/details/:id/*" element={<ProtectedRoute />} />

          </Routes>
          <Footer />
     
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
