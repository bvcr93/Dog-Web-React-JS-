import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserProvider } from "./components/UserContext";
import LoginForm from "./pages/LoginForm";
import SharedLayout from "./components/SharedLayout";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<SharedLayout />} path="/">
              <Route index element={<Landing />} />
              <Route element={<About />} path="/about" />

              <Route element={<Details />} path="/details/:id/*" />

              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>
          <Route
            path="/login"
            element={
              <LoginForm
                setShowNav={setShowNav}
                setShowFooter={setShowFooter}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
