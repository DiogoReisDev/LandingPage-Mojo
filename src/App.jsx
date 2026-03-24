import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationModal from "@/components/RegistrationModal";
import { useModal } from "@/context/ModalContext";

import Home from "@/pages/Home";
import Kit from "@/pages/kit/KitIndex";
import KitProduct from "@/pages/kit/KitProduct";

export default function App() {
  const { isModalOpen, closeModal } = useModal();

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

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </BrowserRouter>
  );
}