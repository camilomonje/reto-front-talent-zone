import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartList } from "../CartList";

function CartForm({buyProducts, productsCart, deleteProductCart }) {

    const [buy, setBuy] = useState({
        clientName: "",
        documentType:"",
        documentNumber:"",
        products: productsCart
    })
    
    const onSubmit = (event) => {
        setBuy({
            ...buy,
            products: productsCart
        })
        event.preventDefault();        
        console.log(buy);
         buyProducts(buy);
    }

    const onChangeName = (event) => {
        setBuy({
            ...buy,
            clientName: event.target.value
        })
    }
    const onChangeDocumentType = (event) => {
        setBuy({
            ...buy,
            documentType: event.target.value
        })
    }
    const onChangeDocumentNumber = (event) => {
        setBuy({
            ...buy,
            documentNumber: event.target.value
        })
    }
    

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={onChangeName}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Tipo de documento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Tipo de Documento"
          onChange={onChangeDocumentType}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Numero de documento</Form.Label>
        <Form.Control
          type="number"
          placeholder="Numero de Documento"
          onChange={onChangeDocumentNumber}
          required
        />
      </Form.Group>
      <CartList
          productsCart={productsCart}
          deleteProductCart={deleteProductCart}
        />
      <div className="ButtonComprar">
      <Button variant="primary" type="submit">
        Realizar Compra
      </Button>
      </div>
    </Form>
  );
}

export { CartForm };
