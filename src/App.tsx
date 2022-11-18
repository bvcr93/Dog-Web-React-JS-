
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
