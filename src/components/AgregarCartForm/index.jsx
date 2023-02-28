import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

function AgregarCartForm({ addProductCart, setOpenModalAgregarCart, product }) {
  const [newProduct, setNewProduct] = useState({
    idProduct: product.id,
    name: product.name,
    quantity: product.min,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      newProduct.quantity > product.min &&
      newProduct.quantity < product.max &&
      newProduct.quantity < product.inInventory
    ) {
      addProductCart(newProduct);
      setOpenModalAgregarCart(false);
      console.log(newProduct);
    } else {
      alert("La cantidad no esta permitida");
    }
  };
  const onChangeQuantity = (event) => {
    setNewProduct({
      ...newProduct,
      quantity: event.target.value,
    });
  };
  const onCancel = () => {
    setOpenModalAgregarCart(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Escribe el nuevo Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder={newProduct.name}
          value={newProduct.name}
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="number"
          placeholder={newProduct.quantity}
          value={newProduct.quantity}
          onChange={onChangeQuantity}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={newProduct.quantity === "" || newProduct.quantity === "0"}
      >
        Guardar
      </Button>
      <Button variant="dark" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
}

export { AgregarCartForm };
