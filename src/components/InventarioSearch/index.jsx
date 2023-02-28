import React from "react";

function InventarioSearch({ setOpenModalAgregar }) {
  const onAddNewProduct = () => {
    setOpenModalAgregar(true);
  };

  return (
    <div>
      <input placeholder="Busque un producto" />
      <button onClick={onAddNewProduct}>Nuevo Producto</button>
    </div>
  );
}

export { InventarioSearch };
