import React from "react";
import { Button, Form } from "react-bootstrap";

function DeleteForm({deleteProduct, setOpenModalDelete, product}) {    
    
    const onSubmit= (event) => {
        event.preventDefault();        
        deleteProduct(product);
        setOpenModalDelete(false);
    }
    
    const onCancel = () => {
        setOpenModalDelete(false);
    }


    return(
        <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Deseas eliminar el producto?</Form.Label>
      </Form.Group>
      <Button variant="danger" type="submit">
        Eliminar
      </Button>
      <Button variant="dark" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
    )
}

export {DeleteForm};