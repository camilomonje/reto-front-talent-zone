import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AgregarForm({ addProduct, setOpenModalAgregar }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    inInventory: 0,
    min: 0,
    max: 0,
    enabled: true,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if(newProduct.max <= newProduct.min){
        alert("La cantidad minima no puede ser mayor a la maxima!")
    } else if (newProduct.min > newProduct.inInventory) {
        alert("La cantidad no puede ser manor que la cantidad minima!")
    } else {
        addProduct(newProduct);
        setOpenModalAgregar(false);
        console.log(newProduct);
    }

    
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
    setOpenModalAgregar(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Escribe el nuevo Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nuevo Producto"
          onChange={onChangeName}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="number"
          placeholder="Cantidad"
          onChange={onChangeQuantity}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Minimo</Form.Label>
        <Form.Control
          type="number"
          placeholder="Minimo"
          onChange={onChangeMin}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Maximo</Form.Label>
        <Form.Control
          type="number"
          placeholder="Maximo"
          onChange={onChangeMax}
          required
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

export { AgregarForm };
