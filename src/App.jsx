import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToHash from "./ScrollToHash";
import Loader from "../src/components/Loader.jsx";
import Navbar from "./components/Navbar";
import "./App.css";

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
    <>
      <Navbar />
      <ScrollToHash />
      <Outlet />
    </>
  );
}

export default App;