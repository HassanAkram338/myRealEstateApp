import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/Auth/Register";

// import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Footer from "./components/Footer";
import AuthContextProvider from "context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="max-w-[1440px] mx-auto bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/forgotPassword" element={<ForgotPassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
