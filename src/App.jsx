import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const App = (props) => {
  console.log("version 2.0.0");
  const firebaseConfig = {
    apiKey: "AIzaSyDodnlkIJFGtLYUlIabrW-mwVIVqlSQUNQ",
    authDomain: "mindwave-87cd4.firebaseapp.com",
    projectId: "mindwave-87cd4",
    storageBucket: "mindwave-87cd4.firebasestorage.app",
    messagingSenderId: "1074560503906",
    appId: "1:1074560503906:web:87a67d1f6815591491013b",
    measurementId: "G-5RFQKXJEEM",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
