import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function EditarForm({ updateProduct, setOpenModalEditar, product }) {
  const [newProduct, setNewProduct] = useState(product);

  const onSubmit = (event) => {
    event.preventDefault();
    updateProduct(newProduct);
    setOpenModalEditar(false);
    console.log(newProduct);
  };

  const onChangeName = (event) => {
    setNewProduct({
      ...newProduct,
      name: event.target.value,
    });
  };
  const onChangeQuantity = (event) => {
    setNewProduct({
      ...newProduct,
      inInventory: event.target.value,
    });
  };
  const onChangeMin = (event) => {
    setNewProduct({
      ...newProduct,
      min: event.target.value,
    });
  };
  const onChangeMax = (event) => {
    setNewProduct({
      ...newProduct,
      max: event.target.value,
    });
  };
  const onCancel = () => {
    setOpenModalEditar(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Escribe el nuevo Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder={newProduct.name}
          value={newProduct.name}
          onChange={onChangeName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="number"
          placeholder={newProduct.inInventory}
          value={newProduct.inInventory}
          onChange={onChangeQuantity}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Minimo</Form.Label>
        <Form.Control
          type="number"
          placeholder={newProduct.min}
          value={newProduct.min}
          onChange={onChangeMin}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Maximo</Form.Label>
        <Form.Control
          type="number"
          placeholder={newProduct.max}
          value={newProduct.max}
          onChange={onChangeMax}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <Button variant="dark" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
}

export { EditarForm };
