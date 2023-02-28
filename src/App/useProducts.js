import React, { useEffect, useState } from "react";
import functions from "../services/service";
import { useLocalStorage } from "./useLocalStorage";

function useProducts() {
  const {
    item: productsCart,
    saveItem: saveProductsCart,
    loading,
    error,
  } = useLocalStorage("INVENTARIO_V1", []);

  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({});

  const [openModalAgregarCart, setOpenModalAgregarCart] = React.useState(false);
  const [openModalEditar, setOpenModalEditar] = React.useState(false);
  const [openModalAgregar, setOpenModalAgregar] = React.useState(false);
  const [openModalDelete, setOpenModalDelete] = React.useState(false);

  useEffect(() => {
    functions.getProducts().then((response) => setProducts(response));
  }, [product]);

  const totalProducts = products.length;


  const addProduct = (product) => {
    
    functions.saveProduct(product);
    setProduct(product);
  };

  const deleteProduct = (product) => {

    functions.deleteProduct(product);
    setProduct(product);
  };

  const updateProduct = (product) => {
    functions.updateProduct(product);
    setProduct(product);
  };

  const addProductCart = (product) => {
    const newProducts = [...productsCart];
    newProducts.push(product)
    saveProductsCart(newProducts);

  }

  const deleteProductCart = (productCart) => {
    const productIndex = productsCart.findIndex((product) => product.idProduct === productCart.idProduct);
    const newProducts = [...productsCart];
    newProducts.splice(productIndex, 1);
    saveProductsCart(newProducts);
  }

  const buyProducts = (buy) => {
    functions.buyProducts(buy);
  }

  return {
    productsCart,
    deleteProductCart,
    products,
    totalProducts,
    addProduct,
    deleteProduct,
    addProductCart,
    updateProduct,
    openModalAgregar,
    setOpenModalAgregar,
    openModalAgregarCart,
    setOpenModalAgregarCart,
    openModalEditar,
    setOpenModalEditar,
    openModalDelete,
    setOpenModalDelete,
    buyProducts,
  };
}

export { useProducts };
