import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initGoogleAnalytics } from "./analytics";
const App = (props) => {
  console.log("version 2.0.0");
  useEffect(() => {
    initGoogleAnalytics();
  }, []);
  useEffect(() => {
    // Carga el script de Google Analytics
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-VWGF93RQYC";
    script.async = true;
    document.head.appendChild(script);

    // Configura el seguimiento
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-VWGF93RQYC");

    return () => {
      document.head.removeChild(script); // Limpia el script si el componente se desmonta
    };
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
