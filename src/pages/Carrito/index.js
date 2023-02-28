import React from "react";
import { useProducts } from "../../App/useProducts";
import { CartForm } from "../../components/CartForm";
import "./Carrito.css";

function CarritoPage() {
  const { productsCart, deleteProductCart, buyProducts } = useProducts();

  return (
    <div className="ListCart">
      <h2>Shopping Cart</h2>
      <CartForm
        buyProducts={buyProducts}
        productsCart={productsCart}
        deleteProductCart={deleteProductCart}
      ></CartForm>
    </div>
  );
}

export { CarritoPage };
