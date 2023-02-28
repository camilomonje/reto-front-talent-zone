import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./InventarioList.css";

import BootstrapTable from "react-bootstrap-table-next";

function InventarioList({
  products,
  setOpenModalAgregar,
  setOpenModalAgregarCart,
  setOpenModalEditar,
  setOpenModalDelete,
  setProduct,
}) {
  const onAdd = (product) => {
    setOpenModalAgregarCart(true);
    setProduct(product);
    console.log("onAdd");
  };
  const onUpdate = (product) => {
    setOpenModalEditar(true);
    setProduct(product);
  };
  const onDelete = (product) => {
    setOpenModalDelete(true);
    setProduct(product);
  };
  const onAddNewProduct = () => {
    setOpenModalAgregar(true);
  };

  const dataTable = products.map((product) => {
    return {
      ...product,
      agregar: (
        <Button variant="success" onClick={() => onAdd(product)}>
          AGREGAR
        </Button>
      ),
      editar: (
        <Button variant="primary" onClick={() => onUpdate(product)}>
          EDITAR
        </Button>
      ),
      eliminar: (
        <Button variant="danger" onClick={() => onDelete(product)}>
          ELIMINAR
        </Button>
      ),
    };
  });

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "inInventory",
      text: "InInventory",
      sort: true,
    },
    {
      dataField: "agregar",
      text: "Agregar",
      sort: true,
    },
    {
      dataField: "editar",
      text: "Editar",
      sort: true,
    },
    {
      dataField: "eliminar",
      text: "Eliminar",
      sort: true,
    },
  ];

  return (
    <div className="Tabla">
      <div className="ButtonNew">
        <Button onClick={onAddNewProduct}>Nuevo Producto</Button>
      </div>
      <BootstrapTable
        keyField="id"
        data={dataTable}
        columns={columns}
        striped
        hover
        condensed
      />
    </div>
  );
}

export { InventarioList };
