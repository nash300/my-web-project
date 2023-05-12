import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ---- Routing from the main page to the sub pages ---- */}
          <Route path="/" element={<Home />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
