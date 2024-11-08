import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  console.log("version 2.0.0");

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
