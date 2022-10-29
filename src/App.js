import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./components/Auth";

const App = () => {
  const [auth, isAuth] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Details />
              </ProtectedRoute>
            }
          />
{/* {!user && ( <Route
            path="/auth"
            element={<Auth authenticate={() => setUser(true)} />}
          />)}
          */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
