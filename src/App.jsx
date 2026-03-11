import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Pages/Home.jsx";
import Navbar from "./components/Navbar";
import Contact from "../Pages/Contact";
import ScrollToHash from "./ScrollToHash";
import Loader from "../src/components/Loader.jsx";
import RegisterPopup from "./components/RegisterPopup.jsx";
import "./App.css";
import Login from "../Pages/Login.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />   {/* ✅ Added this line */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;