import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      //   console.log(data);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
