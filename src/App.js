import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext, UserProvider } from "./components/UserContext";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <UserProvider>
      <BrowserRouter>
        {showNav && <Nav />}

        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<About />} path="/about" />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<Details />} path="/details/:id/*" />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<Landing />} path="/" />
          </Route>

          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              <Login setShowNav={setShowNav} setShowFooter={setShowFooter} />
            }
          />

          <Route path="/details/:id/*" element={<Details />} />
        </Routes>
        {showFooter && <Footer />}
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
