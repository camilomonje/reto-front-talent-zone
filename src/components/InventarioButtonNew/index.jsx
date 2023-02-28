import React from "react";
import { Button } from "react-bootstrap";
import "./InventarioButtonNew.css"

function InventarioButtonNew({ totalProducts, setOpenModalAgregar }) {
  const onAddNewProduct = () => {
    setOpenModalAgregar(true);
  };

  return (
    <div className="ButtonNew">
      <Button onClick={onAddNewProduct}>Nuevo Producto</Button>
    </div>
  );
}

export { InventarioButtonNew };
