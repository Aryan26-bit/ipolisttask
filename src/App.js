import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listpage from "./Pages/ListPage/Listpage";
import "./App.css";
import Detailpage from "./Pages/DetailPage/Detailpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Detailpage />} />
        <Route path="/ipo-list" element={<Listpage />} />
      </Routes>
    </Router>
  );
}

export default App;
