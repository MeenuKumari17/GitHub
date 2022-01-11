import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
// import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import "firebase/auth";

//components

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import FireBaseConfig from "./firebase/FireBaseConfig";
//init firebase
const app = initializeApp(FireBaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
