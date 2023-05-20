import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import RenderPage from "./pages/RenderStudent.js";
import HeaderBar from "./components/HeaderBar.js";

function App() {
  <Routes>
    {/* ---- Defining routes ---- */}
    <Route path="/" element={<Home />} />
    <Route path="./RenderPage" element={<RenderPage />} />
  </Routes>;

  return (
    <>
      <BrowserRouter>
        <HeaderBar title={"Home"} />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
