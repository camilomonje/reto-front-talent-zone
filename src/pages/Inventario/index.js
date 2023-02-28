import React, { useState } from "react";

import { NavBar } from "../../components/Navbar";
import { InventarioHeader } from "../../components/InventarioHeader"
import { InventarioButtonNew, InventarioCounter } from "../../components/InventarioButtonNew";
import { InventarioList } from "../../components/InventarioList";
import { Modal } from "../../components/Modal";
import { AgregarForm } from "../../components/AgregarForm";
import { AgregarCartForm } from "../../components/AgregarCartForm";
import { EditarForm } from "../../components/EditarForm";
import { DeleteForm } from "../../components/DeleteForm";
import { useProducts } from "../../App/useProducts";

function InventarioPage() {
  const {
    products,
    totalProducts,
    addProduct,
    addProductCart,
    updateProduct,
    deleteProduct, 
    openModalAgregar,
    openModalAgregarCart,
    setOpenModalAgregar,
    setOpenModalAgregarCart,
    openModalEditar,
    setOpenModalEditar,
    openModalDelete,
    setOpenModalDelete
   } = useProducts();

   const [product, setProduct] = useState({})

  return (
    <React.Fragment>
        <InventarioHeader>
        </InventarioHeader>

        <InventarioList
          products={products}
          setOpenModalAgregar={setOpenModalAgregar}
          setOpenModalAgregarCart={setOpenModalAgregarCart}
          setOpenModalEditar={setOpenModalEditar}
          setOpenModalDelete={setOpenModalDelete}
          setProduct={setProduct}
        />

      {!!openModalAgregar && (
        <Modal>
          <AgregarForm
            addProduct={addProduct}
            setOpenModalAgregar={setOpenModalAgregar}
          />
        </Modal>
      )}

      {!!openModalAgregarCart && (
        <Modal>
          <AgregarCartForm
            addProductCart={addProductCart}
            setOpenModalAgregarCart={setOpenModalAgregarCart}
            product={product}
          />
        </Modal>
      )}

      {!!openModalEditar && (
        <Modal>
          <EditarForm
            updateProduct={updateProduct}
            setOpenModalEditar={setOpenModalEditar}
            product={product}
          />
        </Modal>
      )}

      {!!openModalDelete && (
        <Modal>
          <DeleteForm
            deleteProduct={deleteProduct}
            setOpenModalDelete={setOpenModalDelete}
            product={product}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export {InventarioPage};