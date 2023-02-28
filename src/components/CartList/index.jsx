import { Badge, Button, ListGroup } from "react-bootstrap";

function CartList({deleteProductCart, productsCart}) {

    const deleteItem = (product) => {
        deleteProductCart(product);
      };

    return(
        <ListGroup as="ol" numbered>
        {productsCart.map((product) => {
          return (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{product.name}</div>
              </div>
              <Badge bg="primary" pill>
                {product.quantity}
              </Badge>
              <div className="ButtonEliminar">
                <Button variant="danger" onClick={() => deleteItem(product)}>
                  X
                </Button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    )
}

export {CartList}