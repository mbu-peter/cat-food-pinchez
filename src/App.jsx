import "./App.css";

import React from "react";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CatFoodMenu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<CatFoodMenu />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <h1 className="text-red-300">Error 404: Page not Found</h1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
