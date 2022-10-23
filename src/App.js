import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Headers from "./components/header";
import Homepage from "./pages/Homepage";
import Detail from "./pages/detail";
import Carimobil from "./pages/Carimobil";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Headers />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cari-mobil" element={<Carimobil />} />
        <Route path="/cari-mobil/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
