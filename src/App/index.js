import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/Navbar";

import { CarritoPage } from "../pages/Carrito";
import { InventarioPage } from "../pages/Inventario";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<InventarioPage />} />
          <Route path="/cart" element={<CarritoPage />} />
        </Routes>
    </BrowserRouter> 

  );
}

export default App;