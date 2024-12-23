import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-inter";
import "typeface-roboto";

import Layout from "./components/layouts/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
