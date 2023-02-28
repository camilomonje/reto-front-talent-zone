import React from "react";
import axios from "axios";

const functions = {
  getProducts: async () => {
    const response = await axios.get("http://localhost:8080/products");
    return response.data;
  },

  saveProduct: async (product) => {
    const response = await axios.post(
      "http://localhost:8080/products",
      product
    );
    return response.data;
  },

  deleteProduct: async (product) => {
    await axios.delete(
      `http://localhost:8080/products/delete/${product.id}`
    );
  },

  updateProduct: async (product) => {
    await axios.put(
        `http://localhost:8080/products/update/${product.id}`,product
    )
  },

  buyProducts: async (buy) => {
    await axios.post(
      "http://localhost:8080/shopping/", buy
    )
  }
};

export default functions;
