import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Kit from "@/pages/kit/KitIndex";
import KitProduct from "@/pages/kit/KitProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kit" element={<Kit />} />
        <Route
          path="/kit/:slug"
          element={<KitProduct key={window.location.pathname} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
