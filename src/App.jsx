import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./components/Home";
import Register from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<BookDetails />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
